import profile_pic from "../assets/images/profile_pic.jpg";
import CustomButton from "../common/Button";
import resume from "../assets/pdf/resume.pdf";
const FirstSection = () => {
  return (
    <div className="flex flex-col space-y-20 md:flex-row md:space-y-0 mb-20 md:mb-0 mt-20 justify-between w-[84%]  h-full mx-auto ">
      <div className=" flex flex-col  text-left space-y-4 md:w-3/6 ">
        <h2 className="font-extrabold text-transparent text-4xl bg-clip-text bg-gradient-to-r from-violet-500 to-cyan-500">
          Hello, I'm Sushant Poojary,
        </h2>
        <h2 className="text-4xl">Full Stack Developer</h2>
        <p className="text-lg">
        {` Hi there! I'm Sushant, a passionate Full Stack developer with one year of hands-on experience. I thrive in both frontend and backend technologies, turning ideas into user-friendly and efficient solutions. My journey in web development has been fueled by curiosity and a commitment to delivering impactful digital experiences. Let's build something incredible together! `}
        </p>
        {/* <button className=" bg-gradient-to-r from-violet-500 to-cyan-500 w-44 h-14  rounded-full shadow-lg shadow-cyan-500/50">
          Download CV
        </button> */}
        <a
          href={resume}
          download="Sushant-Poojari"
          target="_blank"
          rel="noopener noreferrer"
        >
          <CustomButton name="Download CV" />
        </a>
      </div>
      <div className="w-[70%] md:w-3/6 grid grid-cols-3 grid-rows-4 h-56 ">
        <div
          className="rounded-full z-10  border-2 border-cyan-500
            w-[350px] h-[350px] p-1 shadow-md m-auto
            shadow-violet-500/100 absolute"
        ></div>
        <div
          className="rounded-full z-30 bg-gradient-to-r from-violet-500 to-cyan-500 
            w-44 h-44 shadow-md shadow-cyan-500/100 col-start-3 sm:col-start-2 row-start-1 "
        >
          <img
            src={profile_pic}
            alt="not found"
            className="rounded-full w-[174px] h-[174px] m-auto"
          />
        </div>
        {/* <div
          className="rounded-full z-20 bg-gradient-to-r from-violet-500 to-cyan-500 
            w-24 h-24 p-1 shadow-md shadow-cyan-500/100 row-start-2 col-start-1   sm:col-start-5 sm:row-start-3"
        ></div> */}
      </div>
    </div>
  );
};

export default FirstSection;
