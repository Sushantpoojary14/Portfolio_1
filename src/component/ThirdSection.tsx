import skills from "../json/skillData";
import "../assets/css/Loading.css"
import { useInView } from "react-intersection-observer";
type skillType = {
  s_name: string;
  bar: string;
  level: string;
};

const ThirdSection = () => {
  const { ref, inView } = useInView({
     // Only trigger once when the element enters the viewport
  });
  // console.log(inView);
  
  return (
    <div className="flex flex-col space-y-10 w-[88%] md:w-[80%] mx-auto" ref={ref}>
      <div className="">
        <h2 className="text-4xl text-left">Technologies</h2>
      </div>
      <div className="w-full space-y-7">
        {skills?.map((item: skillType,key:number) => {
          return (
            <div className="flex flex-col space-y-4" key={key}>
              <div className="flex flex-row  justify-between">
                <p className="text-start">{item.s_name}</p>
                <p className=" text-end">{item.level}</p>
              </div>
              <div className="md:w-[90%] rounded-xl bg-blue-950 ">
                <div
                   className={`rounded-xl h-5 bg-gradient-to-r from-violet-500 to-cyan-500 transition ease-in-out delay-300 duration-1000 transform  origin-left ${inView ? 'scale-x-full' : 'scale-x-0'}`}
                  style={{ width:  item.bar   }}
                ></div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ThirdSection;
