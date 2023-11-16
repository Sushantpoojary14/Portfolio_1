const CustomButton = ({
  name,
  css,
  click,
}: {
  name: string;
  css?: string;
  click?: () => void;
}) => {
  return (
    <button
      className={`transition ease-in-out delay-100  hover:scale-105 bg-gradient-to-r from-violet-500 to-cyan-500 w-44 h-14  rounded-full shadow-lg shadow-cyan-500/50 ${css} duration-300`}
      onClick={click}
    >
      {name}
    </button>
  );
};

export default CustomButton;
