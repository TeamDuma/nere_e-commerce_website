import AboutNavbar from '@/components/common/header/AboutNavbar';

export default function RootLayout(props: React.PropsWithChildren) {
  return (
    <>
      <AboutNavbar />
      <main className='bg-[#FEFDFB] font-ttnorms text-nere-black'>
        {props.children}
      </main>
    </>
  );
}
