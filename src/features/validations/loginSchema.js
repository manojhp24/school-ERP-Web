import { z } from "zod";

const loginSchemea = z.object({
  email: z.string().email("Please enter valid email"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

export default loginSchemea;
