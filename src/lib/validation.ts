import { z } from 'zod';

const requiredString = (name: string, min?: number) =>
  z.string().min(min || 3, { message: `${name} is required` });

export const createSupplierSchema = z.object({
  fullName: requiredString('Full name'),
  phoneNumber: requiredString('Phone number', 10),
  email: z
    .string()
    .min(1, { message: 'Email is required.' })
    .email('This is not a valid email.'),
  businessName: requiredString('Business name'),
  location: requiredString('Location'),
  product: requiredString('Product'),
});

export const createAgentSchema = z.object({
  fullName: requiredString('Full name'),
  phoneNumber: requiredString('Phone number', 10),
  email: z
    .string()
    .min(1, { message: 'Email is required.' })
    .email('This is not a valid email.'),
  businessName: requiredString('Business name'),
  location: requiredString('Location'),
});

export const createPartnerSchema = z.object({
  fullName: requiredString('Full name'),
  phoneNumber: requiredString('Phone number', 10),
  email: z
    .string()
    .min(1, { message: 'Email is required.' })
    .email('This is not a valid email.'),
  message: requiredString('Message'),
});

export type CreateSupplierValues = z.infer<typeof createSupplierSchema>;
export type CreateAgentValues = z.infer<typeof createAgentSchema>;
export type CreatePartnerValues = z.infer<typeof createPartnerSchema>;
