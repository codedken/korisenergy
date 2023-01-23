import Image from "next/image";
import React from "react";

const Project = ({ project: { title, description, imageUrl } }) => {
  return (
    <div className="p-4 border border-gray-100 shadow-md">
      <Image
        src={imageUrl}
        width={200}
        height={200}
        alt="project image"
        className="w-full h-48"
      />
      <h3 className="text-xl text-gray-600 my-3 font-bold">{title}</h3>
      <p className="text-base text-gray-600 font-light">{description}</p>
    </div>
  );
};

export default Project;
