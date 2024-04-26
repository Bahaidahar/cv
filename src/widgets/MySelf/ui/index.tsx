import Image from "next/image";
import me from "../../../../public/myself.jpeg";

const MySelf = () => {
  return (
    <div className="flex justify-center items-center h-screen gap-[56px]">
      <Image
        src={me}
        alt="me"
        className=" w-[500px] h-[500px] rounded-full shadow-2xl "
        layout="fixed"
      />
      <div className=" flex flex-col items-start">
        <h3 className=" text-6xl font-bold ">Yelik Bakhtyiar</h3>
        <p className=" text-6xl ">Frontend Developer</p>
      </div>
    </div>
  );
};

export default MySelf;
