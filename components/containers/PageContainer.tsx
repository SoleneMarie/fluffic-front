import type { ReactNode } from "react";

type PageContainerProps = {
  children: ReactNode;
};

const PageContainer = ({ children }: PageContainerProps) => {
  return (
    <div className="mx-auto flex min-h-screen w-full max-w-300 flex-col p-4 md:px-8 lg:px-10">
      {children}
    </div>
  );
};

export default PageContainer;
