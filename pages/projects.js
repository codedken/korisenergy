import React from "react";
import Project from "../components/Project";
import { client } from "../lib/client";

const projects = ({ allprojects }) => {
  return (
    <div className="bg-black pb-4 w-full">
      <div className="pt-32 lg:px-36">
        <div className="w-full relative bg-gray-50 px-6 py-8">
          <h2 className="text-3xl text-gray-800 text-center font-bold py-4">
            Our Projects
          </h2>
          <div className="md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-3 grid">
            {allprojects.length === 0 ? (
              <h3 className="text-xl text-gray-700">No projects yet</h3>
            ) : (
              allprojects.map((project) => (
                <Project key={project._id} project={project} />
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps = async () => {
  const query = `*[_type == "project"]`;
  const allprojects = await client.fetch(query);

  return {
    props: { allprojects },
  };
};

export default projects;
