import CustomButton from "../common/Button";
import projects from "../json/projectData";
import "../assets/css/SecondSection.css";
// import { useState } from "react";

type projectType = {
  p_name: string;
  p_description: string;
  git_link: string;
  web_link: string;
  img_url: string;
};
const SecondSection = () => {
  // const [open , SetOpen ] = useState<boolean>(false);
  // const [index , SetIndex ] = useState<number>(0);
  // const openImage = (index:number) => {
  //   SetIndex(index)
  //   SetOpen(true);
  // };
  // const closeImage = () => {
  //   SetOpen(false);
  // };
  return (
    <>
      <div className="flex flex-col space-y-10 w-[100%] sm:w-[92%] md:w-[87%] mx-auto">
        <div className="">
          <h2 className="text-4xl text-left w-[90%] mx-auto">Projects</h2>
        </div>
       
          <div className="flex flex-wrap gap-x-4 gap-y-6 " >

          {projects?.map((item: projectType, key: number) => {
            return (
              <div
                className="rounded-lg flex flex-col border shadow-sm
            shadow-cyan-500/100 border-l-cyan-500 border-t-cyan-500 border-b-violet-400 border-r-violet-400 pb-9 w-[90%] sm:w-[48%] md:w-[45%] pt-5 md:pt-0 space-y-10 sm:space-y-8 md:space-y-10 transition ease-in-out delay-200 
            max-h-[495
              px] md:max-h-[480px] lg:max-h-[460px] xl:max-h-[440px] only:cursor-pointer mx-auto box-border"
                key={key}
              >
                <img
                  src={item.img_url}
                  className="w-[90%] max-h-44 mx-auto md:mt-3 object-cover"
                  // onClick={()=>openImage(key)}
                />

                <div className="px-4 space-y-3 text-left ">
                  <p className="text-2xl font-bold md:text-xl ">
                    {item.p_name}
                  </p>
                  <p className="text-sm text-gray-400  ">
                    {item.p_description}
                  </p>
                </div>
                <div className="flex flex-row  justify-between px-4">
                  <CustomButton
                    name="live Preview"
                    css="w-[140px] sm:w-[45%] lg:w-[45%]"
                  />
                  <button className="transition ease-in-out delay-100 hover:scale-105 border w-[140px] h-14 rounded-full sm:w-[45%] lg:w-[45%]">
                    GitHub
                  </button>
                </div>
              </div>
              
            );
          })}
          </div>
      
      </div>
      {/* <div onClick={closeImage} className={`${open ? "scale-110" :"scale-0" } 
      fixed top-[5%] z-50 w-full h-full transition ease-in-out delay-150 duration-300`}>
        <div
          className="fixed z-0 top-0 bottom-0 h-full w-full cursor-pointer"
          style={{ background: "rgba(10, 9, 9, 0.4)" }}
        ></div>
        <img
          src={projects[index].img_url}
          className="w-[80%] h-[30%] sm:w-[85%]  sm:h-[45%] md:w-[45%] md:h-[45%] mt-72 md:mt-40 mx-auto z-10"
        />
      </div> */}
    </>
  );
};

export default SecondSection;
