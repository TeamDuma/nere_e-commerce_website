'use client';

import { CreatePartnerValues, createPartnerSchema } from '@/lib/validation';
import { zodResolver } from '@hookform/resolvers/zod';
import { Controller, useForm } from 'react-hook-form';
import Input from '@/components/common/form/Input';
import Button from '@/components/common/Button';
import TextArea from '@/components/common/form/TextArea';
import { useCreateContactMutation } from '@/lib/redux/services/customers';
import { ContactType } from '@/types/customer';
import { toast } from 'react-toastify';

const defaultValues = {
  name: '',
  phone: '',
  email: '',
  message: '',
};

export const PartnerForm = () => {
  const [createContact, { isLoading }] = useCreateContactMutation();
  const form = useForm<CreatePartnerValues>({
    defaultValues,
    resolver: zodResolver(createPartnerSchema),
  });

  const {
    handleSubmit,
    control,
    reset,
    formState: { isSubmitting, errors },
  } = form;

  async function onSubmit(values: CreatePartnerValues) {
    try {
    await createContact({ ...values, type: ContactType.PARTNER }).unwrap();
      reset(defaultValues);
      toast.success('Form submitted successfully', {
        autoClose: 500,
      });
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
        name='message'
        control={control}
        render={({ field }: any) => (
          <TextArea
            error={errors.message?.message}
            label='Message'
            placeholder='enter message'
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
