import { LOGO_ICON, LOGO_WORDMARK } from "@/lib/logo-paths";

// Doosje met snelheidsstrepen. Kleur via currentColor.
export const LogoMark = ({ className = "h-7 w-auto" }: { className?: string }) => (
  <svg viewBox="594 125 410 270" fill="currentColor" fillRule="evenodd" className={className} aria-hidden="true">
    <path d={LOGO_ICON} />
  </svg>
);

// Het woord "WE MOVE" uit het originele logo.
export const LogoWord = ({ className = "h-[17px] w-auto" }: { className?: string }) => (
  <svg viewBox="124 424 376 74" fill="currentColor" fillRule="evenodd" className={className} aria-hidden="true">
    <path d={LOGO_WORDMARK} />
  </svg>
);

// Het WE MOVE-logo: doosje + "WE MOVE". Kleur via currentColor,
// of per onderdeel met iconClass / wordClass. size bepaalt de grootte.
export const Logo = ({
  className = "",
  iconClass = "",
  wordClass = "",
  size = "md",
}: {
  className?: string;
  iconClass?: string;
  wordClass?: string;
  size?: "md" | "lg" | "xl";
}) => {
  const s = {
    md: ["h-7", "h-[17px]", "gap-2.5"],
    lg: ["h-10", "h-[24px]", "gap-3.5"],
    xl: ["h-14", "h-[34px]", "gap-5"],
  }[size];
  return (
    <span className={`inline-flex items-center ${s[2]} ${className}`}>
      <LogoMark className={`${s[0]} w-auto ${iconClass}`} />
      <LogoWord className={`${s[1]} w-auto ${wordClass}`} />
      <span className="sr-only">WE MOVE</span>
    </span>
  );
};
