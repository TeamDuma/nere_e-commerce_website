import ProductGridLoader from '@/components/common/ProductGridLoader';
import { selectShopping } from '@/lib/redux';
import { useGetUsersVouchersQuery } from '@/lib/redux/services/vouchers';
import { UserVoucher } from '@/types/vouchers';
import { Copy } from 'lucide-react';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';

const VoucherContent = () => {
  const { userInfo } = useSelector(selectShopping);
  const userID = userInfo?.data?.customer?.id;
  const { data, isFetching, isLoading, isError, error } =
    useGetUsersVouchersQuery(userID);

  return (
    <div>
      {isFetching && <div>Fetching...</div>}
      {isLoading && (
        <div>
          {' '}
          <ProductGridLoader />
        </div>
      )}
      {isError && <div>{JSON.stringify(error)}</div>}
      {data && data.data.userVouchers.length === 0 && (
        <div className='flex w-full flex-col items-center justify-center font-bold'>
          No vouchers available!
        </div>
      )}
      {data && data.data.userVouchers.length > 0 && (
        <div className='flex w-full flex-col gap-5'>
          <h1 className='m-2 text-base font-bold text-[#1A464C]'>Vouchers</h1>
          <div className=' grid justify-normal gap-5 sm:grid-cols-2 md:grid-cols-3'>
            {data.data.userVouchers.map((userVoucher: UserVoucher) => (
              <div
                key={userVoucher.id}
                style={{ opacity: userVoucher.is_used ? 0.5 : 1 }}
                className='relative rounded-md px-6 py-8 shadow-md'
              >
                <div
                  className={`border ${
                    userVoucher.is_used ? 'border-gray-400' : 'border-[#298592]'
                  } absolute right-2 top-2 rounded-md border-2 px-2 py-1 text-xs`}
                >
                  {userVoucher.is_used ? 'Inactive' : 'Active'}
                </div>
                <div className='flex flex-row space-x-7'>
                  <div className='text-3xl font-bold'>
                    {userVoucher.voucher.code}
                  </div>
                  <button
                    onClick={() => {
                      navigator.clipboard.writeText(userVoucher.voucher.code);
                      toast.success(`Code copied to clipboard!`, {
                        autoClose: 500,
                      });
                    }}
                  >
                    <Copy />
                  </button>
                </div>
                <div className='mt-4 flex flex-col'>
                  <label htmlFor='amount'>Discount Value</label>
                  <div id='amount' className='mb-3 font-semibold'>
                    {userVoucher.voucher.discount_type === 'percentage'
                      ? `${userVoucher.voucher.discount_value}%`
                      : `GH¢ ${userVoucher.voucher.discount_value}`}
                  </div>
                  <label htmlFor='expiration'>Expires on</label>
                  <div id='expiration' className='font-semibold'>
                    {new Date(
                      userVoucher.voucher.expiration_date
                    ).toDateString()}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default VoucherContent;
