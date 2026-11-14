import Link from "next/link";
import clsx from "clsx";

// Terugknop (gebaseerd op Uiverse.io, AKAspidey01).
export const BackButton = ({ href = "/", label = "Terug", tone = "brand" }: { href?: string; label?: string; tone?: "brand" | "sun" }) => (
  <Link
    href={href}
    className="group relative inline-flex h-14 w-48 items-center justify-center rounded-2xl bg-white text-center text-xl font-semibold text-ink shadow-[0_8px_24px_rgba(0,0,0,0.12)]"
  >
    <span
      className={clsx(
        "absolute left-1 top-[4px] z-10 flex h-12 w-1/4 items-center justify-center rounded-xl duration-500 group-hover:w-[184px]",
        tone === "brand" ? "bg-brand" : "bg-sun"
      )}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" height="25px" width="25px" aria-hidden="true">
        <path d="M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z" fill="#FFFFFF" />
        <path d="m237.248 512 265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312L237.248 512z" fill="#FFFFFF" />
      </svg>
    </span>
    <span className="translate-x-2">{label}</span>
  </Link>
);
