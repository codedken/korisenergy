import Image from "next/image";

const Project = ({ project: { title, description, image } }) => {
  return (
    <div className="p-4 border border-gray-100 shadow-md">
      <div className="h-48 w-full relative block">
        <Image
          src={image[0]}
          fill={true}
          style={{ objectFit: "cover" }}
          alt="project image"
        />
      </div>

      <h3 className="text-xl text-gray-600 my-3 font-bold relative">{title}</h3>
      <p className="text-base text-gray-600 font-light relative">
        {description}
      </p>
    </div>
  );
};

export default Project;
