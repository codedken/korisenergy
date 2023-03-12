import Image from "next/image";

const HomeSlideImages = () => {
  const imageNames = ["panel0", "convertedimage1", "convertedimage3", "panel6", "panel0"];

  return (
    <div className="w-full h-screen overflow-x-clip absolute top-0 left-0">
      <div className="w-[500%] h-full flex slider">
        {imageNames.map((name, i) => (
          <Image
            src={`/korisimages/${name}.png`}
            key={i}
            width={800}
            height={800}
            alt="Solar Panel"
            className="h-full w-[20%]"
          />
        ))}
      </div>
    </div>
  );
};

export default HomeSlideImages;
