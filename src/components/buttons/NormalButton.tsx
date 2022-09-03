export interface IButton {
  text?: string;
  className?: string;
  onClick?: () => void;
}

const NormalButton: React.FC<IButton> = (props) => {
  return (
    <div>
      <button
        onClick={props.onClick}
        className={`${props.className} bg-[#eee] hover:bg-gray-300 px-4 py-1 rounded-md border-1 border-gray-400`}
      >
        {props.text}
      </button>
    </div>
  );
};

export default NormalButton;
