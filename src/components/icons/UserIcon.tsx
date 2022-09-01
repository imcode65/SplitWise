export interface IIcon {
  width?: number;
  height?: number;
  className?: string;
}

const UserIcon: React.FC<IIcon> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.width}
      height={props.height}
      className={props.className}
      viewBox="0 0 48 48"
      fill="gray"
    >
      <path d="M42 45c0 1.659-1.341 3-3 3H9a3 3 0 0 1-3-3c0-6 5.799-11.598 11.727-13.812C14.304 29.073 12 25.317 12 21v-3c0-6.627 5.373-12 12-12s12 5.373 12 12v3c0 4.317-2.304 8.073-5.724 10.188C36.201 33.402 42 39 42 45z" />
    </svg>
  );
};

export default UserIcon;
