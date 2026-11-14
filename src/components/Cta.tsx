// Schuine hoofdknop met drie bewegende pijlen (gebaseerd op Uiverse.io, mobinkakei).
const Chev = ({ x, className }: { x: number; className: string }) => (
  <path className={className} d={`M${x} 4L${x + 4} 0L${x + 26} 21.5L${x + 4} 43L${x} 39L${x + 17.5} 21.5Z`} />
);

export const CtaInner = ({ label }: { label: string }) => (
  <>
    <span className="cta-label">{label}</span>
    <span className="second">
      <svg width="66" height="43" viewBox="0 0 66 43" aria-hidden="true" className="h-[0.9em] w-auto overflow-visible">
        <Chev x={40} className="one" />
        <Chev x={20} className="two" />
        <Chev x={0} className="three" />
      </svg>
    </span>
  </>
);
