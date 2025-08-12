import { z } from "zod";

export const formSchema = z.object({
  phone: z
    .string()
    .startsWith("09", "Phone should start with 09")
    .length(11, "Phone should have 11 digits"),
});

export type FormFields = z.infer<typeof formSchema>;
