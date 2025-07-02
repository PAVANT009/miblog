// c:/Users/tejap/OneDrive/Desktop/nextjspractise/miblog/lib/session.js
import { getServerSession } from "next-auth/next"
import { authOptions } from "@/lib/auth"

/**
 * Wrapper for `getServerSession` to abstract away the `authOptions` import from components.
 * This prevents server-only dependencies from being bundled with client-side code.
 */
export const getAppSession = () => getServerSession(authOptions);