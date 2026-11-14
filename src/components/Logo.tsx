import { LOGO_ICON, LOGO_WORDMARK } from "@/lib/logo-paths";

// Doosje met snelheidsstrepen. Kleur via currentColor.
export const LogoMark = ({ className = "h-7 w-auto" }: { className?: string }) => (
  <svg viewBox="594 125 410 270" fill="currentColor" fillRule="evenodd" className={className} aria-hidden="true">
    <path d={LOGO_ICON} />
  </svg>
);

// Alleen het woord "WE MOVE" uit het logo (rest van de regel valt buiten beeld).
export const LogoWord = ({ className = "h-[15px] w-auto" }: { className?: string }) => (
  <svg viewBox="124 424 376 74" fill="currentColor" fillRule="evenodd" className={className} aria-hidden="true">
    <path d={LOGO_WORDMARK} />
  </svg>
);

// Compacte versie voor de bovenbalk: doosje + WE MOVE naast elkaar.
export const Logo = ({ className = "" }: { className?: string }) => (
  <span className={`inline-flex items-center gap-2.5 ${className}`}>
    <LogoMark className="h-7 w-auto" />
    <LogoWord className="h-[17px] w-auto" />
    <span className="sr-only">WE MOVE</span>
  </span>
);

// Volledig logo zoals aangeleverd: doosje boven, "WE MOVE | Weizenbach & Egmond" eronder.
export const LogoFull = ({
  className = "h-16 w-auto",
  iconColor = "currentColor",
  textColor = "currentColor",
}: {
  className?: string;
  iconColor?: string;
  textColor?: string;
}) => (
  <svg viewBox="110 115 1380 395" fillRule="evenodd" className={className} role="img" aria-label="WE MOVE | Weizenbach & Egmond">
    <path d={LOGO_ICON} fill={iconColor} />
    <path d={LOGO_WORDMARK} fill={textColor} />
  </svg>
);
