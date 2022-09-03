export interface IIcon {
  width?: number;
  height?: number;
  className?: string;
}

const AlignIcon: React.FC<IIcon> = (props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="14" viewBox="0 0 20 14">
      <g
        fill="none"
        fillRule="evenodd"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        transform="translate(1 1)"
        width={props.width}
        height={props.height}
        className={props.className}
        viewBox="0 0 24 24"
      >
        <path d="M18 4H0M18 0H0M18 8H0M18 12H0" />
      </g>
    </svg>
  );
};

export default AlignIcon;
