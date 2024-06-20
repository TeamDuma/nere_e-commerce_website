import { z } from 'zod';
import { isValidPhoneNumber, parsePhoneNumber } from 'libphonenumber-js';

export const validatePhone = (schema: z.ZodString) => {
  return schema
    .refine(
      isValidPhoneNumber,
      'Please specify a valid phone number (include the international prefix).'
    )
    .transform((value) => parsePhoneNumber(value).number.toString());
};

const requiredString = (name: string, min?: number) =>
  z.string().min(min || 3, { message: `${name} is required` });

export const createSupplierSchema = z.object({
  name: requiredString('Full name'),
  phone: validatePhone(z.string()),
  email: z
    .string()
    .min(1, { message: 'Email is required.' })
    .email('This is not a valid email.'),
  business_name: requiredString('Business name'),
  location: requiredString('Location'),
  products: requiredString('Products'),
});

export const createAgentSchema = z.object({
  name: requiredString('Full name'),
  phone: validatePhone(z.string()),
  email: z
    .string()
    .min(1, { message: 'Email is required.' })
    .email('This is not a valid email.'),
  business_name: requiredString('Business name'),
  location: requiredString('Location'),
});

export const createPartnerSchema = z.object({
  name: requiredString('Full name'),
  phone: validatePhone(z.string()),
  email: z
    .string()
    .min(1, { message: 'Email is required.' })
    .email('This is not a valid email.'),
  message: requiredString('Message'),
});

export type CreateSupplierValues = z.infer<typeof createSupplierSchema>;
export type CreateAgentValues = z.infer<typeof createAgentSchema>;
export type CreatePartnerValues = z.infer<typeof createPartnerSchema>;
