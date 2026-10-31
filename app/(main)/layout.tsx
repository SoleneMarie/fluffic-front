import MainLayoutComponent from "@/components/layouts/MainLayoutComponent";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <MainLayoutComponent>{children}</MainLayoutComponent>;
}
