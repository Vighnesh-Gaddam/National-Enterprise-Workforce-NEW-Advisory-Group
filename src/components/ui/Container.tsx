import React from "react";

export function Container({
  children,
  className = "",
  narrow = false,
}: {
  children: React.ReactNode;
  className?: string;
  narrow?: boolean;
}) {
  return (
    <div
      className={`mx-auto px-6 sm:px-8 ${narrow ? "max-w-3xl" : "max-w-6xl"} ${className}`}
    >
      {children}
    </div>
  );
}
