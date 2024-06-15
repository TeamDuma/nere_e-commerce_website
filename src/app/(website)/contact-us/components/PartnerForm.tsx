'use client';

import { CreatePartnerValues, createPartnerSchema } from '@/lib/validation';
import { zodResolver } from '@hookform/resolvers/zod';
import { Controller, useForm } from 'react-hook-form';
import Input from '@/components/common/form/Input';
import Button from '@/components/common/Button';
import TextArea from '@/components/common/form/TextArea';

export const PartnerForm = () => {
  const form = useForm<CreatePartnerValues>({
    resolver: zodResolver(createPartnerSchema),
  });

  const {
    handleSubmit,
    control,
    formState: { isSubmitting, errors },
  } = form;

  async function onSubmit(values: CreatePartnerValues) {
    console.log(values);
  }

  return (
    <form className='space-y-6' noValidate onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name='fullName'
        control={control}
        render={({ field }: any) => (
          <Input
            size='md'
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
            size='md'
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
            size='md'
            error={errors.email?.message}
            label='Email address'
            placeholder='enter email'
            {...field}
          />
        )}
      />
      <Controller
        name='message'
        control={control}
        render={({ field }: any) => (
          <TextArea
            size='md'
            error={errors.message?.message}
            label='Message'
            placeholder='enter message'
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
