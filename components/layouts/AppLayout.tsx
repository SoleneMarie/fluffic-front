"use client";

import { useState } from "react";

import type { TUser } from "@/types/user";

import SideMenu from "./SideMenu";
import TopNav from "./TopNav";

type AppLayoutProps = {
  children: React.ReactNode;
  user?: TUser;
};

const AppLayout = ({ children, user }: AppLayoutProps) => {
  const [sideMenuOpen, setSideMenuOpen] = useState<boolean>(false);

  const handleSideMenu = (): void => {
    setSideMenuOpen((prev) => !prev);
  };

  return (
    <>
      <TopNav
        user={user}
        onMenuClick={handleSideMenu}
        isMenuOpen={sideMenuOpen}
      />
      <SideMenu
        isOpen={sideMenuOpen}
        onClose={handleSideMenu}
        userId={user?.id}
      />
      <main>{children}</main>
    </>
  );
};

export default AppLayout;
