import { LOGO_ICON, LOGO_WORDMARK } from "@/lib/logo-paths";

// Doosje met snelheidsstrepen (los, voor illustraties). Kleur via currentColor.
export const LogoMark = ({ className = "h-7 w-auto" }: { className?: string }) => (
  <svg viewBox="594 125 410 270" fill="currentColor" fillRule="evenodd" className={className} aria-hidden="true">
    <path d={LOGO_ICON} />
  </svg>
);

// Het officiële WE MOVE-logo: doosje boven, "WE MOVE | Weizenbach & Egmond" eronder.
// Kleur via currentColor, of per onderdeel met iconClass / wordClass.
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
  const h = { md: "h-9 md:h-11", lg: "h-14", xl: "h-20 md:h-24" }[size];
  return (
    <svg viewBox="110 115 1380 395" fillRule="evenodd" className={`${h} w-auto ${className}`} role="img" aria-label="WE MOVE | Weizenbach & Egmond">
      <path d={LOGO_ICON} fill="currentColor" className={iconClass} />
      <path d={LOGO_WORDMARK} fill="currentColor" className={wordClass} />
    </svg>
  );
};
