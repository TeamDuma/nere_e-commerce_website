'use client';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  addToCart,
  decreaseQuantity,
  increaseQuantity,
  selectShopping,
} from '@/lib/redux';
import { useLazyGetGroupQuery } from '@/lib/redux/services/group';
import FeaturedProducts from '@/components/FeaturedProducts';

import ViewMore from '@/components/common/ViewMore';
import { Product } from '@/types/product';
import { GroupType } from '@/types/group';
import UserIcon from '@/components/common/User';
import ProgressBar from '@/components/common/ProgressBar';
import PurchaseGuide from '@/components/common/PurchaseGuide';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Link from 'next/link';
import { FaMapPin, FaStar } from 'react-icons/fa';
import { MdGroups } from 'react-icons/md';
import { MdOutlineAccessAlarms } from 'react-icons/md';
import LoadingSpinner from '../../components/LoadingSpinner';
import PostHogClient from '@/app/posthog';
import Banner from '@/components/Slider';
import CountdownTimer from '@/components/CountdownTimer';
import GroupSlider from '@/components/GroupSlider';
import Location from '@/components/common/Location';
import OngoingDetailsComponent from '../../components/OngoingDetailsComponents';

interface OngoingDetailsProps {
  ongoingUid: string;
}

const OngoingDetails: React.FC<OngoingDetailsProps> = ({ ongoingUid }) => {
  const dispatch = useDispatch();
  const { cartItems } = useSelector(selectShopping);
  const [selectedVariant, setSelectedVariant] = useState('');

  const [getGroup, { data, isLoading, isError }] = useLazyGetGroupQuery();
  const group = data?.data?.group;
  const product = group?.product;
  const totalQuantity = group?.total_quantity || 0;

  const { userInfo } = useSelector(selectShopping);

  const posthogClient = PostHogClient();

  useEffect(() => {
    getGroup(ongoingUid);
  }, [ongoingUid]);

  if (isLoading) {
    return (
      <div>
        {' '}
        <LoadingSpinner />
      </div>
    );
  }

  if (isError) {
    return <div>Error</div>;
  }
  const calculateSavingsPercentage = (oldPrice: number, newPrice: number) => {
    const savingsPercentage = ((oldPrice - newPrice) / oldPrice) * 100;
    return Math.round(savingsPercentage);
  };

  const variantsArray = product?.variants
    ? product.variants.split(',').map((variant) => variant.trim())
    : [];

  const handleVariantChange = (variantName: string) => {
    setSelectedVariant(variantName);
  };

  const handleAddToCart = () => {
    const itemToAdd = {
      ...product!,
      cartQuantity: 1,
      productID: product?.id!,
      isGroupJoiner: true,
      groupID: group?.id!,
      locationID: undefined,
      locationName: group?.location?.name!,
      type: GroupType.PUBLIC,
      totalQuantity: group?.total_quantity!,
      groupCode: group?.join_code,
    };

    dispatch(addToCart({ item: itemToAdd }));

    toast.success('Group item added to cart!', {
      autoClose: 2000,
    });

    posthogClient.capture({
      distinctId: userInfo?.data?.customer.email,
      event: `group_product_added_to_cart`,
      properties: {
        productID: product?.id,
        productName: product?.name,
        groupID: group?.id,
        groupCode: group?.join_code,
      },
    });
  };

  const cartProduct = cartItems.find((item) => {
    return item.groupID
      ? item.id === product?.id && item.groupID === group?.id
      : item.id === product?.id;
  });

  const cartQuantity = cartProduct?.cartQuantity ?? 0;
  const remaining = cartQuantity + (group?.total_quantity ?? 0);

  return (
    <div className='my-8'>
      <div className='container mx-auto px-2'>
     
    <OngoingDetailsComponent ongoingUid={ongoingUid}/>
        <PurchaseGuide />
        <div className='hidden sm:block'>
          <GroupSlider />
          <div className='mt-12 flex items-center justify-center text-3xl font-bold		'>
            <h1>You might like</h1>
          </div>{' '}
          <FeaturedProducts />
          <ViewMore />
        </div>
      </div>
    </div>
  );
};
export default OngoingDetails;
