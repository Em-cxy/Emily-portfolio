"use client";

import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [cursorColor, setCursorColor] = useState("rgba(255, 0, 0, 1)"); // Default dot color

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

      // Get the element under the cursor
      const elementUnderCursor = document.elementFromPoint(
        e.clientX,
        e.clientY
      );

      // Ensure elementUnderCursor is not null
      if (elementUnderCursor) {
        // Get the computed style of that element
        const computedStyle = getComputedStyle(elementUnderCursor);
        const backgroundColor = computedStyle.backgroundColor;

        // Check if the background color is light (white or similar)
        const isLightBackground =
          backgroundColor === "rgb(255, 255, 255)" ||
          backgroundColor === "rgba(255, 255, 255, 0)" ||
          backgroundColor === "rgb(240, 240, 240)"; // Add more light colors as needed

        // Change the cursor color based on the background
        setCursorColor(
          isLightBackground ? "rgba(0, 0, 0, 1)" : "rgba(255, 0, 0, 1)"
        ); // Black if light background, red if dark
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
