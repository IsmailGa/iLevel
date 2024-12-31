import React from "react";

const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={`w-full mx-auto lg:px-[80px] md:px-[40px] sm:px-[20px] `}>
      {children}
    </div>
  );
};

export default Container;
