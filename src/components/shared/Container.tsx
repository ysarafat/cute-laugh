import { cn } from "@/utils/cn";
import { ReactNode } from "react";

const Container = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("max-w-7xl mx-auto px-4", className)}>{children}</div>
  );
};

export default Container;
