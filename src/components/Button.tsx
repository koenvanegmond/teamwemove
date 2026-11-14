import Link from "next/link";
import clsx from "clsx";
import type { ReactNode } from "react";

type Variant = "primary" | "secondary" | "light" | "whatsapp";

const styles: Record<Variant, string> = {
  primary: "bg-brand text-white hover:bg-brand-dark shadow-sm hover:shadow-md",
  secondary:
    "bg-white text-ink border border-ink/10 hover:border-brand hover:text-brand",
  light: "bg-white text-brand hover:bg-brand-soft",
  whatsapp: "bg-[#25D366] text-white hover:bg-[#1EBE5A] shadow-sm hover:shadow-md",
};

export const ButtonLink = ({
  href,
  children,
  variant = "primary",
  external = false,
  className,
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  external?: boolean;
  className?: string;
}) => {
  const cls = clsx(
    "inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 font-semibold tracking-tight transition duration-200 hover:-translate-y-0.5 active:translate-y-0",
    styles[variant],
    className
  );
  if (external || href.startsWith("tel:") || href.startsWith("mailto:")) {
    return (
      <a
        href={href}
        className={cls}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
};
