"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Loading() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center gap-5">
      <motion.div
        animate={{ scale: [1, 1.08, 1], opacity: [0.85, 1, 0.85] }}
        transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
      >
        <Image
          src="/android-chrome-192x192.png"
          alt="Loading"
          width={40}
          height={40}
          className="h-10 w-10 rounded-[6px]"
          priority
        />
      </motion.div>

      <div className="h-[2px] w-32 overflow-hidden bg-[var(--color-border)]">
        <motion.div
          className="h-full w-1/3 bg-[var(--color-brass)]"
          animate={{ x: ["-100%", "220%"] }}
          transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
    </div>
  );
}
