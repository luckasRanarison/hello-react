import React from "react";

const Container = ({ children }) => {
  return (
    <div className="w-screen h-screen duration-300 flex justify-center items-center bg-light dark:bg-background">
      <div className="w-5/6 h-5/6 min-w-[300px] max-w-[550px] max-h-[450px] flex flex-col">
        {children}
      </div>
    </div>
  );
};

export default Container;
