export const LogoMark = ({ className = "h-8 w-8" }: { className?: string }) => (
  <svg
    viewBox="0 0 48 48"
    fill="none"
    stroke="currentColor"
    strokeWidth="3.2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <path d="M4 17h7M2 25h9M4 33h7" />
    <path d="M27 8l15 5v20l-15 6-15-6V13l15-5z" />
    <path d="M12 13l15 5 15-5M27 18v21" />
  </svg>
);

export const Logo = ({ light = false }: { light?: boolean }) => (
  <span
    className={`inline-flex items-center gap-2 font-bold tracking-tight ${
      light ? "text-white" : "text-brand"
    }`}
  >
    <LogoMark />
    <span className="text-xl leading-none">WE MOVE</span>
  </span>
);
