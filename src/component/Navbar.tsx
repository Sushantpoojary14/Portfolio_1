import Icon from "../common/Icon";

const Navbar = () => {
  // const [open, setOpen] = useState<boolean>(false);

  // const handleClose = () => {
  //   setOpen(false);
  // };
  // console.log(open);

  return (
    <div className="flex flex-col space-y-14 sticky" id="navbar">
      <section
        className="flex flex-row space-x-8 
      w-full justify-around "
      >
        <div>
          <h2 className="text-2xl">Portfolio</h2>
        </div>
        <ul className="hidden md:flex flex-row space-x-12 text-xl text-center">
          <li><a href="#section2">Projects</a></li>
          <li><a href="#section3">Technologies</a></li>
          <li><a href="#section4">About Me</a></li>
        </ul>
        <div>

       <Icon/>
        </div>
        {/* <div className="flex md:hidden flex-row space-x-4">
          <FontAwesomeIcon
            icon="bars"
            style={{
              width: "30px",
              height: "30px",
              color: "white",
            }}
            onClick={() => setOpen(true)}
          />
        </div> */}
      </section>
      <ul className="flex flex-row w-full justify-around m-auto text-xl  space-x-4 md:hidden">
        <li>Projects</li>
        <li>Technologies</li>
        <li>About Me</li>
      </ul>
      {/* <div
        className={`${
          open ? "left-0 " : "left-full"
        } flex flex-row w-full absolute z-10 ease-in-out duration-700 h-full top-0 bottom-0  md:hidden`}
      >
        <div className="block bg-white w-2/4 opacity-60 h-full" onClick={handleClose}>
          ""
        </div>
        <div className="w-2/4 h-full bg-red-500 opacity-90 ">
          <p className="w-10 m-4 ml-auto " onClick={handleClose}> X</p>
          <ul className="flex flex-col space-y-4 w-full h-full pt-5 ">
            <li>Projects</li>
            <li>Technologies</li>
            <li>About Me</li>
          </ul>
        </div>
      </div> */}
    </div>
  );
};

export default Navbar;
