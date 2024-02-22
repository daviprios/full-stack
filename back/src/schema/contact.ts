import * as z from "zod"

export const ContactModel = z.object({
  id: z.string(),
  name: z.string(),
  phoneNumber: z.string(),
  alternativePhoneNumber: z.string().nullish(),
  email: z.string().nullish(),
  addressCountry: z.string(),
  addressState: z.string(),
  addressNeighborhood: z.string(),
  addressZipCode: z.string(),
  addressStreetName: z.string(),
  addressStreetNumber: z.string(),
  addressComplement: z.string().nullish(),
  createdAt: z.date(),
  updatedAt: z.date(),
})
