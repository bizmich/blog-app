import type { z } from "zod";
import type { authSchema } from "./schema";

 export type ILoginForm = z.infer<typeof authSchema>;
