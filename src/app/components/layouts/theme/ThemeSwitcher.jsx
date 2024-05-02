"use client";

import { useEffect } from "react";
import { useConfig } from "@/hooks/use-config";
import { themes } from "@/registry/themes";

export function ThemeSwitcher() {
  const [config] = useConfig();

  useEffect(() => {
    let primaryColor;

    themes.forEach((theme) => {
      if (document.body.classList.contains(`theme-${theme.name}`)) {
        document.body.classList.remove(`theme-${theme.name}`);
      }

      if (theme.name === config.theme) {
        primaryColor = theme.cssVars["light"].primary;
      }
    });

    document.body.classList.add(`theme-${config.theme}`);
    document.body.style.setProperty("--radius", `${config.radius}rem`);
    document.documentElement.style.setProperty(
      "scrollbar-color",
      `hsl(${primaryColor}) transparent`
    );
  }, [config]);

  return null;
}
