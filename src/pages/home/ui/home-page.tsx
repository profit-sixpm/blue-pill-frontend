import { Button } from "@/shared/ui/button";
import { useBearStore } from "@/shared/store";
import { HomeUser } from "./home-user";

export const HomePage = () => {
  const bears = useBearStore((s) => s.bears);
  const increasePopulation = useBearStore((s) => s.increasePopulation);
  const removeAllBears = useBearStore((s) => s.removeAllBears);

  return (
    <div className="flex flex-col gap-4 p-4">
      <HomeUser />
      <p className="text-lg font-medium">Bears: {bears}</p>
      <div className="flex gap-2">
        <Button onClick={increasePopulation} variant="default">
          increase
        </Button>
        <Button onClick={removeAllBears} variant="destructive">
          removeAllBears
        </Button>
      </div>
    </div>
  );
};
