import * as z from "zod";

export const waitlist = z.object({
  email: z.string().email({
    message: "Invalid email address",
  }),
});
