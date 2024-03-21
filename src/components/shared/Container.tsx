import { cn } from "@/utils/cn";
import { ReactNode } from "react";

const Container = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return <div className={cn("max-w-7xl mx-auto", className)}>{children}</div>;
};

export default Container;
