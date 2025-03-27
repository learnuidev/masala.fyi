import { cn } from "@/lib/utils";

export const PageBodyContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <section
      className={cn(
        "bg-gray-100 dark:bg-[rgb(16,17,18)] rounded-xl mt-2 p-4",
        className
      )}
    >
      {children}
    </section>
  );
};
