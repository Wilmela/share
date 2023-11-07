import { Skeleton } from "@/components/ui/skeleton";

const AppSkeleton = () => {
  return (
    <div className="w-full flex flex-col items-start md:w-[300px] h-[200px] max-h-[200px] border bg-gray-100 shadow-md p-4 rounded-md md:my-2">
      <Skeleton className="mb-2 p-2 w-full bg-gray-300" />

      <Skeleton className="w-full mt-4 p-4 bg-gray-300" />

      <Skeleton className=" p-2 mt-6 w-full bg-gray-300" />
    </div>
  );
};

export default AppSkeleton;
