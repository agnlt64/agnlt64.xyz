import { createEnv } from "@t3-oss/env-nextjs";
import * as z from "zod";

export const env = createEnv({
    client: {
        NEXT_PUBLIC_IUT_MODE: z.coerce.boolean(),
    },
    runtimeEnv: {
        NEXT_PUBLIC_IUT_MODE: process.env.IUT_MODE,
    }
});