import workExpData from "../json/workExpData"
type workExpType ={
  year:string,
  description:string
}
const FourthSection = () => {
  return (
    <div className="flex flex-col space-y-10 w-[88%] md:w-[80%] mx-auto">
      <div className="">
        <h2 className="text-4xl text-left">About Me</h2>
      </div>
      <div className="">
        <p className="text-left text-gray-400 ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum iure
          minima quae autem debitis, nulla impedit voluptates mollitia
          distinctio saepe modi nisi id, deserunt, repellendus atque. Ipsa,
          veritatis eveniet dolores sapiente repellendus delectus veniam? Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Beatae assumenda
          est quae omnis optio asperiores placeat tenetur eos? Sit ratione sint
          ipsum deleniti possimus consectetur. Voluptatum cum commodi vero
          iusto?
        </p>
      </div>
      <div className="w-full">
        {workExpData?.map((item: workExpType,key:number) => {
          return (
            <div className="grid grid-cols-3 ">
              <p className="font-bold">{item.year}</p>
              <div className=" h-full m-auto">
                <div className="rounded-full w-4 h-4 bg-gradient-to-r from-violet-500 to-cyan-500 shadow-md shadow-cyan-500/100"></div>
                <div className={`rounded-full w-[3px] h-full bg-white m-auto ${key == workExpData.length-1 && "hidden" }`}></div>
              </div>
              <p className="text-right pb-5">
                {item.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FourthSection;
