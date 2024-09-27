import * as React from "react";

function ContactUs() {
    return (
        <div className="flex flex-col text-white rounded-none w-full my-1.5">
            <div className="relative flex flex-col px-4 py-2 mt-1 bg-black border-2 border-gray-700 rounded-3xl w-full transition-transform duration-300 hover:bg-white hover:text-black hover:scale-105">
                <div className="self-start text-4xl font-bold">CONTACT US</div>
                <div className="flex flex-col md:flex-row gap-4 items-start mt-4 text-lg">
                <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/f3276f3366a5ef3919602151ac4e55d9cd04702b98f18a77cbf41c7912ec0699?placeholderIfAbsent=true&apiKey=29ef8dbb4e274cc58b5055e8cc61d6af"
          alt="Decorative element"
          className="object-contain shrink-0 self-start max-w-full aspect-[1.98] w-[117px]"
        />
                </div>
                <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/339cb4bda8b481e84eb989de7fde42b30cb0d02f208c70c5115133d1800d7e8c?placeholderIfAbsent=true&apiKey=29ef8dbb4e274cc58b5055e8cc61d6af"
                    className="absolute bottom-2 right-2 w-8 md:w-6 lg:w-9 aspect-[1.02]"
                    alt="Additional Info"
                />
            </div>
        </div>
    );
}

export default ContactUs;
