
import { useSearchParams } from "next/navigation";

export function useIutMode(): boolean {
  const searchParams = useSearchParams();
  const mode = searchParams.get('mode');

  return mode === "iut";
}