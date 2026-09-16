import type { ReactNode } from "react";

type PageContainerProps = {
  children: ReactNode;
};

const PageContainer = ({ children }: PageContainerProps) => {
  return (
    <main className="mx-auto w-full max-w-300 p-4 md:px-8 lg:px-10">
      {children}
    </main>
  );
};

export default PageContainer;
