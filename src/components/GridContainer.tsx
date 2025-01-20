import type { FC, PropsWithChildren } from "react";
export const GridContainer: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-8 md:gap-10 xl:gap-12 mb-4 ">
      {children}
    </div>
  );
};
