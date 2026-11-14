import { TruckLoader } from "@/components/TruckLoader";

export default function Loading() {
  return (
    <div className="flex h-[100svh] items-center justify-center bg-white">
      <TruckLoader />
    </div>
  );
}
