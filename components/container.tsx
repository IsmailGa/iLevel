import React from "react";

const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={`w-full mx-auto max-w-[1360px] md:px-[40px] sm:px-[30px] px-[20px]`}>
      {children}
    </div>
  );
};

export default Container;
