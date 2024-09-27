import React from 'react';

function RobotInfo({ name, description }) {
  return (
    <article className="flex flex-col items-start p-4 md:p-6 lg:p-8 max-w-full rounded-3xl bg-gray-500 bg-opacity-50 w-full md:w-[400px] translate-x-5 max-md:translate-x-0">
      <h2 className="text-2xl md:text-3xl font-extrabold">
        {name}
      </h2>
      <p className="mt-10 md:mt-20 text-base md:text-lg">
        {description}
      </p>
    </article>
  );
}

export default RobotInfo;
