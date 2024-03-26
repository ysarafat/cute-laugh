"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaProductHunt } from "react-icons/fa";

const routes = [
  {
    label: "All Products",
    icon: FaProductHunt,
    href: "/dashboard/all-products",
    color: "text-sky-500",
  },
];
const Sidebar = () => {
  const pathname = usePathname();
  return (
    <div className="space-y-4 flex flex-col h-full bg-[#111827] text-white">
      <div className="px-3 py-2 flex-1">
        <Link
          href="/dashboard"
          className="flex items-center justify-center pl-3 mb-14 text-center"
        >
          <h1 className={cn("text-2xl font-bold  text-center")}>Cute Laugh</h1>
        </Link>
        <div className="space-y-1">
          {routes.map((route) => (
            <Link
              href={route.href}
              key={route.href}
              className={cn(
                "text-sm group flex p-3 w-full justify-center font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition",
                (pathname === "/dashboard" && route.href === "/dashboard") ||
                  pathname === route.href
                  ? "text-white bg-white/10"
                  : "text-zinc-400"
              )}
            >
              <div className="flex items-center flex-1">
                <route.icon className={cn("h-5 w-5 mr-3", route.color)} />
                {route.label}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
