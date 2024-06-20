'use client';

import { CreateSupplierValues, createSupplierSchema } from '@/lib/validation';
import { zodResolver } from '@hookform/resolvers/zod';
import { Controller, useForm } from 'react-hook-form';
import Input from '@/components/common/form/Input';
import Button from '@/components/common/Button';
import { useCreateContactMutation } from '@/lib/redux/services/customers';
import { ContactType } from '@/types/customer';

const defaultValues = {
  name: '',
  phone: '',
  email: '',
  business_name: '',
  location: '',
  products: '',
};

export const SupplierForm = () => {
  const [createContact, { isLoading }] = useCreateContactMutation();

  const form = useForm<CreateSupplierValues>({
    defaultValues,
    resolver: zodResolver(createSupplierSchema),
  });

  const {
    handleSubmit,
    control,
    reset,
    formState: { isSubmitting, errors },
  } = form;

  async function onSubmit(values: CreateSupplierValues) {
    try {
      await createContact({ ...values, type: ContactType.SUPPLIER });
      reset(defaultValues);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <form className='space-y-6' noValidate onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name='name'
        control={control}
        render={({ field }: any) => (
          <Input
            error={errors.name?.message}
            label='Full Name'
            placeholder='Kojo'
            {...field}
          />
        )}
      />
      <Controller
        name='phone'
        control={control}
        render={({ field }: any) => (
          <Input
            error={errors.phone?.message}
            label='Phone Number'
            placeholder='enter number'
            {...field}
          />
        )}
      />
      <Controller
        name='email'
        control={control}
        render={({ field }: any) => (
          <Input
            error={errors.email?.message}
            label='Email address'
            placeholder='enter email'
            {...field}
          />
        )}
      />
      <Controller
        name='business_name'
        control={control}
        render={({ field }: any) => (
          <Input
            error={errors.business_name?.message}
            label='Business name'
            placeholder='enter name'
            {...field}
          />
        )}
      />
      <Controller
        name='location'
        control={control}
        render={({ field }: any) => (
          <Input
            error={errors.location?.message}
            label='Location'
            placeholder='enter location'
            {...field}
          />
        )}
      />
      <Controller
        name='products'
        control={control}
        render={({ field }: any) => (
          <Input
            error={errors.products?.message}
            label='Products you sell'
            placeholder='enter products'
            {...field}
          />
        )}
      />
      <Button
        loading={isLoading || isSubmitting}
        disabled={isLoading || isSubmitting}
        className='rounder-full !mt-8 w-full'
      >
        Submit
      </Button>
    </form>
  );
};
