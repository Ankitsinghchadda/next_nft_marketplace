import React from "react";
import { useRouter } from "next/router";

const Button = ({name, handleClick}) => {
    const router = useRouter();
    if(router.asPath === '/' || router.asPath === '/Home'){
        return null;
    }

  return (
    <div className="w-full flex justify-center mt-4">
      <button className="bg-blue-500 text-white text-center px-8 py-2 w-full rounded-lg tracking-widest uppercase font-semibold cursor-pointer hover:bg-blue-600" onClick={handleClick}>
        {name}
      </button>
    </div>
  );
};

export default Button;
