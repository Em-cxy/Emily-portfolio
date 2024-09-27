"use client";

import { useEffect, useState } from "react";

export default function CustomCursor() {
  const cursorColor = "rgba(255, 0, 0, 1)"; // Fixed dot color (red)

  useEffect(() => {
    const customCursor = document.querySelector(
      ".custom-cursor"
    ) as HTMLElement;
    const customCursorDot = document.querySelector(
      ".custom-cursor-dot"
    ) as HTMLElement;

    const handleMouseMove = (e: MouseEvent) => {
      // Move the dot first
      if (customCursorDot) {
        customCursorDot.style.transform = `translate(${e.pageX - 6}px, ${
          e.pageY - 6
        }px)`;
      }

      // Move the outer circle afterwards
      if (customCursor) {
        customCursor.style.transform = `translate(${e.pageX - 25}px, ${
          e.pageY - 25
        }px)`;
      }
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <div className="custom-cursor" style={{ borderColor: cursorColor }}></div>
      <div
        className="custom-cursor-dot"
        style={{ backgroundColor: cursorColor }}
      ></div>
    </>
  );
}
