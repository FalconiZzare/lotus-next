"use client";

import { cn } from "@/lib/utils";
import { useConfig } from "@/hooks/use-config";

export function ThemeWrapper({ children, className }) {
  const [config] = useConfig();

  return (
    <div
      className={cn(`theme-${config.theme}`, "w-full", className)}
      style={{
        "--radius": `${config.radius}rem`
      }}
    >
      {children}
    </div>
  );
}
