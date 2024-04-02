import AboutNavbar from '@/components/common/header/AboutNavbar';

export default function RootLayout(props: React.PropsWithChildren) {
  return (
    <>
      <AboutNavbar />
      <main>{props.children}</main>
    </>
  );
}
