import Header from '@/components/common/header/Header';

export default function RootLayout(props: React.PropsWithChildren) {
  return (
    <>
      <Header />
      {props.children}
    </>
  );
}
