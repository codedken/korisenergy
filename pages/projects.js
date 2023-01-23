import React from "react";
import Project from "../components/Project";

const projects = () => {
  const allProjects = [
    {
      id: "1",
      title: "Installation of 34KVA system",
      description: "This is an installation of a full-fitted 34KVA capatity system in a 3-bedroom apartment. This will serve for most of the appliances in the apartment. This include: 4 1hp air conditioner, 2 industrial refrigerator.",
      imageUrl: "/korisimages/battery.png",
    },
    {
      id: "2",
      title: "Installation of 34KVA system",
      description: "This is an installation of a full-fitted 34KVA capatity system in a 3-bedroom apartment. This will serve for most of the appliances in the apartment. This include: 4 1hp air conditioner, 2 industrial refrigerator.",
      imageUrl: "/korisimages/battery.png",
    },
    {
      id: "3",
      title: "Installation of 34KVA system",
      description: "This is an installation of a full-fitted 34KVA capatity system in a 3-bedroom apartment. This will serve for most of the appliances in the apartment. This include: 4 1hp air conditioner, 2 industrial refrigerator.",
      imageUrl: "/korisimages/battery.png",
    },
    {
      id: "4",
      title: "Installation of 34KVA system",
      description: "This is an installation of a full-fitted 34KVA capatity system in a 3-bedroom apartment. This will serve for most of the appliances in the apartment. This include: 4 1hp air conditioner, 2 industrial refrigerator.",
      imageUrl: "/korisimages/battery.png",
    },
    {
      id: "5",
      title: "Installation of 34KVA system",
      description: "This is an installation of a full-fitted 34KVA capatity system in a 3-bedroom apartment. This will serve for most of the appliances in the apartment. This include: 4 1hp air conditioner, 2 industrial refrigerator.",
      imageUrl: "/korisimages/battery.png",
    },
    {
      id: "6",
      title: "Installation of 34KVA system",
      description: "This is an installation of a full-fitted 34KVA capatity system in a 3-bedroom apartment. This will serve for most of the appliances in the apartment. This include: 4 1hp air conditioner, 2 industrial refrigerator.",
      imageUrl: "/korisimages/battery.png",
    },
  ];
  return (
    <div className="bg-black pb-4 w-full">
      <div className="pt-32 lg:px-36">
        <div className="w-full relative bg-gray-50 px-6 py-8">
          <h2 className="text-3xl text-gray-800 text-center font-bold py-4">
            Our Projects
          </h2>
          <div className="md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-3 grid">
            {allProjects.map((project) => (
              <Project key={project.id} project ={project}/>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default projects;
