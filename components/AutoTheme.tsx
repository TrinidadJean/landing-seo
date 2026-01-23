"use client";

import { useEffect } from "react";

export default function AutoTheme() {
  useEffect(() => {
    const hour = new Date().getHours();
    const isNight = hour >= 18 || hour < 6;

    if (isNight) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  return null;
}
