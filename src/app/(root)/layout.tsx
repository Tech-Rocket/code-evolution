import React from "react";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <h1 className="text-3xl uppercase font-semibold p-2 border-2 border-red-500">
        navbar
      </h1>
      {children}
    </div>
  );
};

export default RootLayout;
