import { Metadata } from 'next';
import { FormTabs } from './components/FormTabs';
import { FormsTitle } from './components/FormsTitle';

export const metadata: Metadata = {
  title: 'Contact Us',
};

const Page = () => {
  return (
    <>
      <FormsTitle />
      <FormTabs />
    </>
  );
};

export default Page;
