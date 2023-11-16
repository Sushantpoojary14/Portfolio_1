import Icon from "../common/Icon";

const Footer = () => {
  return (
    <div
      className="grid grid-cols-2 md:grid-cols-3 justify-between grid-rows-2 gap-2 footer"
      id="footer"
    >
      <p className="font-medium text-transparent text-md bg-clip-text bg-gradient-to-r from-violet-500 to-cyan-500">
        Feel Free to Contact
      </p>
      <p className="font-medium text-md">spoojari@gmail.com</p>
      <p></p>
      <div className="flex flex-row space-x-4 col-start-1 md:col-start-3 md:row-start-1 px-2">
        <Icon />
      </div>
    </div>
  );
};

export default Footer;
