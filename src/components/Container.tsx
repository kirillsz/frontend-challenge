import type { FC, PropsWithChildren } from "react";
const Container: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="max-w-screen-xl mx-auto px-4 md:px-6 h-full">
      {children}
    </div>
  );
};

export default Container;
