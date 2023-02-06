import Image from "next/image";

const Project = ({ project: { title, description, image } }) => {
  return (
    <div className="p-4 border border-gray-100 shadow-md">
      <div className="h-48 w-full relative">
        <Image
          src="https://res.cloudinary.com/dsfdj3laa/image/upload/v1675407565/korisenergy/Untitled-2.png"
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
