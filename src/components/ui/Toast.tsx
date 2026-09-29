"use client";

import { createContext, useCallback, useContext, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2, XCircle, X } from "lucide-react";

type ToastVariant = "success" | "error";

interface ToastItem {
  id: number;
  title: string;
  description?: string;
  variant: ToastVariant;
}

interface ToastContextValue {
  showToast: (toast: Omit<ToastItem, "id">) => void;
}

const ToastContext = createContext<ToastContextValue | null>(null);

let idCounter = 0;

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<ToastItem[]>([]);

  const dismiss = useCallback((id: number) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const showToast = useCallback(
    (toast: Omit<ToastItem, "id">) => {
      const id = ++idCounter;
      setToasts((prev) => [...prev, { ...toast, id }]);
      window.setTimeout(() => dismiss(id), 5000);
    },
    [dismiss]
  );

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}

      <div
        aria-live="polite"
        className="pointer-events-none fixed inset-x-0 top-4 z-[100] flex flex-col items-center gap-2 px-4 sm:inset-x-auto sm:right-4 sm:items-end"
      >
        <AnimatePresence>
          {toasts.map((toast) => (
            <motion.div
              key={toast.id}
              layout
              initial={{ opacity: 0, y: -16, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.96 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="pointer-events-auto flex w-full max-w-sm items-start gap-3 border bg-[var(--color-page)] p-4 shadow-lg"
              style={{
                borderColor: toast.variant === "success" ? "var(--color-accent)" : "#B3403A",
              }}
            >
              {toast.variant === "success" ? (
                <CheckCircle2 size={20} className="mt-0.5 shrink-0 text-[var(--color-accent)]" />
              ) : (
                <XCircle size={20} className="mt-0.5 shrink-0 text-[#B3403A]" />
              )}
              <div className="flex-1">
                <p className="text-sm font-semibold text-[var(--color-ink)]">{toast.title}</p>
                {toast.description && (
                  <p className="mt-0.5 text-sm text-[var(--color-muted)]">{toast.description}</p>
                )}
              </div>
              <button
                aria-label="Dismiss"
                onClick={() => dismiss(toast.id)}
                className="shrink-0 text-[var(--color-muted)] transition-colors hover:text-[var(--color-ink)]"
              >
                <X size={16} />
              </button>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </ToastContext.Provider>
  );
}

export function useToast() {
  const ctx = useContext(ToastContext);
  if (!ctx) throw new Error("useToast must be used within a ToastProvider");
  return ctx;
}
