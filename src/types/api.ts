import { z } from "zod";

const dobSchema = z.object({
  date: z.date(),
  age: z.number(),
});

const idSchema = z.object({
  name: z.string(),
  value: z.string(),
});

const coordinatesSchema = z.object({
  latitude: z.string(),
  longitude: z.string(),
});

const streetSchema = z.object({
  number: z.number(),
  name: z.string(),
});

const timezoneSchema = z.object({
  offset: z.string(),
  description: z.string(),
});

const loginSchema = z.object({
  uuid: z.string(),
  username: z.string(),
  password: z.string(),
  salt: z.string(),
  md5: z.string(),
  sha1: z.string(),
  sha256: z.string(),
});

const nameSchema = z.object({
  title: z.string(),
  first: z.string(),
  last: z.string(),
});

const pictureSchema = z.object({
  large: z.string(),
  medium: z.string(),
  thumbnail: z.string(),
});

const locationSchema = z.object({
  street: streetSchema,
  city: z.string(),
  state: z.string(),
  country: z.string(),
  postcode: z.number(),
  coordinates: coordinatesSchema,
  timezone: timezoneSchema,
});

export const userSchema = z.object({
  gender: z.string(),
  name: nameSchema,
  location: locationSchema,
  email: z.string(),
  login: loginSchema,
  dob: dobSchema,
  registered: dobSchema,
  phone: z.string(),
  cell: z.string(),
  id: idSchema,
  picture: pictureSchema,
  nat: z.string(),
});

export type IUser = z.infer<typeof userSchema>;
