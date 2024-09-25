import React from 'react';

function RobotInfo({ name, description }) {
  return (
    <article className="flex flex-col items-start pt-3 pr-14 pb-7 pl-3 max-w-full rounded-3xl bg-gray-500 bg-opacity-50 w-[400px] translate-x-5 max-md:pr-5">
      <h2 className="text-3xl font-extrabold">
        {name}
      </h2>
      <p className="mt-20 text-lg max-md:mt-10">
        {description}
      </p>
    </article>
  );
}

export default RobotInfo;
