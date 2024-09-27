import * as React from "react";

function AboutUs() {
  return (
    <div className="flex flex-col text-white rounded-none w-full my-1.5">
      <div className="flex flex-col px-3 py-4 mt-1 bg-black border-2 border-gray-700 rounded-3xl w-full transition-transform duration-300 hover:bg-white hover:text-black hover:scale-105">
        <div className="self-start text-4xl font-bold">ABOUT US</div>
        <div className="flex gap-10 items-start mt-20 text-sm">
          <div className="grow shrink self-start">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/339cb4bda8b481e84eb989de7fde42b30cb0d02f208c70c5115133d1800d7e8c?placeholderIfAbsent=true&apiKey=29ef8dbb4e274cc58b5055e8cc61d6af"
            className="object-contain shrink-0 self-end mt-16 w-8 aspect-[1.02]"
            alt="Additional Info"
          />
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
