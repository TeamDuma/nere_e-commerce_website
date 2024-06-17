'use client';

import { CreateSupplierValues, createSupplierSchema } from '@/lib/validation';
import { zodResolver } from '@hookform/resolvers/zod';
import { Controller, useForm } from 'react-hook-form';
import Input from '@/components/common/form/Input';
import Button from '@/components/common/Button';

export const SupplierForm = () => {
  const form = useForm<CreateSupplierValues>({
    resolver: zodResolver(createSupplierSchema),
  });

  const {
    handleSubmit,
    control,
    formState: { isSubmitting, errors },
  } = form;

  async function onSubmit(values: CreateSupplierValues) {
    console.log(values);
  }

  return (
    <form className='space-y-6' noValidate onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name='fullName'
        control={control}
        render={({ field }: any) => (
          <Input
            error={errors.fullName?.message}
            label='Full Name'
            placeholder='Kojo'
            {...field}
          />
        )}
      />
      <Controller
        name='phoneNumber'
        control={control}
        render={({ field }: any) => (
          <Input
            error={errors.phoneNumber?.message}
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
        name='businessName'
        control={control}
        render={({ field }: any) => (
          <Input
            error={errors.businessName?.message}
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
        name='product'
        control={control}
        render={({ field }: any) => (
          <Input
            error={errors.product?.message}
            label='Products you sell'
            placeholder='enter product'
            {...field}
          />
        )}
      />
      <Button
        loading={isSubmitting}
        disabled={isSubmitting}
        className='rounder-full !mt-8 w-full'
      >
        Submit
      </Button>
    </form>
  );
};
