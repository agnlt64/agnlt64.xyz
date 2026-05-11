import { env } from '@/lib/env';

export function useIutMode(): boolean {
  const enabled = env.NEXT_PUBLIC_IUT_MODE;
  return enabled;
}