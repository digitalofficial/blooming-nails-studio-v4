export default function Logo({ className = "", size = 48 }: { className?: string; size?: number }) {
  const aspect = 140 / 180;
  const w = size * aspect;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 140 180"
      width={w}
      height={size}
      className={className}
      aria-label="Blooming Nails Studio logo"
      role="img"
    >
      {/* Nail polish brush stem */}
      <rect x="66" y="85" width="8" height="60" rx="3" fill="#C084FC" />
      <rect x="62" y="138" width="16" height="22" rx="4" fill="#C084FC" opacity="0.8" />
      <rect x="59" y="132" width="22" height="10" rx="3" fill="#C084FC" />

      {/* Flower petals — hot pink */}
      <ellipse cx="70" cy="42" rx="18" ry="26" fill="#EC4899" opacity="0.9" />
      <ellipse
        cx="70"
        cy="42"
        rx="18"
        ry="26"
        fill="#EC4899"
        opacity="0.85"
        transform="rotate(72, 70, 62)"
      />
      <ellipse
        cx="70"
        cy="42"
        rx="18"
        ry="26"
        fill="#EC4899"
        opacity="0.8"
        transform="rotate(144, 70, 62)"
      />
      <ellipse
        cx="70"
        cy="42"
        rx="18"
        ry="26"
        fill="#EC4899"
        opacity="0.85"
        transform="rotate(216, 70, 62)"
      />
      <ellipse
        cx="70"
        cy="42"
        rx="18"
        ry="26"
        fill="#EC4899"
        opacity="0.9"
        transform="rotate(288, 70, 62)"
      />

      {/* Lilac center */}
      <circle cx="70" cy="62" r="14" fill="#C084FC" />
      <circle cx="70" cy="62" r="8" fill="#DDB4FE" opacity="0.6" />

      {/* Small leaf accents */}
      <ellipse cx="52" cy="100" rx="8" ry="4" fill="#34D399" opacity="0.5" transform="rotate(-30, 52, 100)" />
      <ellipse cx="88" cy="98" rx="8" ry="4" fill="#34D399" opacity="0.5" transform="rotate(30, 88, 98)" />
    </svg>
  );
}
