import React from "react";

const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={`w-full mx-auto  2xl:max-w-[1360px] xl:max-w-[1200px] lg:max-w-[1024px] md:max-w-[768px] sm:max-w-[640px] md:px-[40px] sm:px-[30px] px-[20px]`}>
      {children}
    </div>
  );
};

export default Container;
