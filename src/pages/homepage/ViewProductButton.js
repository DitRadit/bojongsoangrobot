import * as React from "react";

function ViewProductButton() {
    return (
        <div className="flex flex-col text-white rounded-none w-full my-1.5">
            <div className="relative flex flex-col px-4 py-2 mt-1 bg-black border-2 border-gray-700 rounded-3xl w-full transition-transform duration-300 hover:bg-white hover:text-black hover:scale-105">
                {/* Added hover effects */}
                <div className="self-start text-4xl font-bold">VIEW MORE <br></br> PRODUCT</div>
                <div className="flex flex-col md:flex-row gap-4 items-start mt-4 text-lg">
                    <button className="mt-2 px-28 py-2 font-bold bg-white  border-2 border-gray-700 text-black rounded-3xl hover:bg-black hover:text-white transition-all duration-300">
                        VIEW
                    </button>
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

export default ViewProductButton;
