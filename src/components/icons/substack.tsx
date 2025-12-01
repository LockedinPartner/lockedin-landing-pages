export function Substack(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <g fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="4" width="18" height="3.5" rx="0.75" />
        <rect x="3" y="9" width="18" height="3.5" rx="0.75" />
        <path d="M12 13.5v6.75l-6-3.5v-3.25zm0 0v6.75l6-3.5v-3.25z" />
      </g>
    </svg>
  );
}