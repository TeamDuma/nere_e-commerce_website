'use client';
import React from 'react';

const TableOfContents: React.FC = () => {
  return (
    <div className='w-full px-4'>
      <div className='ml-12 w-full max-w-md break-words rounded px-4 py-3 text-left text-gray-800'>
        <ol className='list-decimal pl-4'>
          <li>
            <a
              className='block rounded px-2 py-1 hover:bg-gray-200'
              href='#about'
            >
              {' '}
              About this Notice{' '}
            </a>
          </li>
          <li>
            <a
              className='block rounded px-2 py-1 hover:bg-gray-200'
              href='#cookies'
            >
              {' '}
              Cookies and how we use them{' '}
            </a>
          </li>
          <li>
            <a
              className='block rounded px-2 py-1 hover:bg-gray-200'
              href='#third-party-cookies'
            >
              {' '}
              Third Party Cookies{' '}
            </a>
          </li>
          <li>
            <a
              className='block rounded px-2 py-1 hover:bg-gray-200'
              href='#consent'
            >
              {' '}
              Consent{' '}
            </a>
          </li>
          <li>
            <a
              className='block rounded px-2 py-1 hover:bg-gray-200'
              href='#changes'
            >
              {' '}
              Changes to this Cookie Policy{' '}
            </a>
          </li>
          <li>
            <a
              className='block rounded px-2 py-1 hover:bg-gray-200'
              href='#further-information'
            >
              {' '}
              Further Information{' '}
            </a>
          </li>
        </ol>
      </div>
      <div className='ml-4 p-8'>
        <section id='about'>
          <h2 className='my-1 text-lg font-bold text-[#298592]'>
            {' '}
            1. About this Notice{' '}
          </h2>
          <p className='py-2'>
            This Cookie Notice provides information on how Nere Community uses
            cookies when you visit our Platform.
          </p>
        </section>

        <section id='cookies'>
          <h2 className='my-1 text-lg font-bold text-[#298592]'>
            {' '}
            2. Cookies and how we use them{' '}
          </h2>
          <p className='py-2'>
            A cookie is a small file of letters and numbers that websites send
            to the browser which are stored in the user terminal, which might be
            your computer, phones or applications, your personal computer, a
            mobile phone, a tablet, or any other device. Cookies allow us to
            distinguish you from other users of our Platform, which helps us to
            provide you with an enhanced browsing experience.
          </p>
        </section>

        <section id='third-party-cookies'>
          <h2 className='my-1 text-lg font-bold text-[#298592]'>
            {' '}
            3. Third Party Cookies{' '}
          </h2>

          <p className='py-2'>
            We use Google Analytics, a web analytics service provided by Google
            Ireland Limited. Google Analytics uses cookies to analyze how users
            interact with our Platform, including information such as the
            products viewed, the time spent on individual pages, and actions
            taken. This information helps us understand and improve the
            performance of our website. You can learn more about Google
            Analytics and how it collects and processes data by visiting the
            official Google Analytics page.
          </p>
          <p className='py-2'>
            Our Platform also uses PostHog, an analytics tool which tracks live
            events such as page views and link clicks on the website. Through
            PostHog we gather information about how users interact with the
            Platform and also capture session recordings which allow us to see
            where visitors are getting stuck, find solutions to these obstacles
            and as a result create a better user experience for them. For more
            information about PostHog, please visit 
            <span
              style={{
                color: 'blue',
                textDecoration: 'underline',
                cursor: 'pointer',
                padding:'5px'
              }}
              onClick={() =>
                (window.location.href =
                  '       https://posthog.com/docs/privacy  ')
              }
            >
              https://posthog.com/docs/privacy
            </span>
          </p>
          <p className='py-2'>
            For more details of the personal data that We collect and use, the
            measures we have in place to protect personal data, your legal
            rights, and our legal obligations, please refer to our Privacy
            notice.
          </p>
        </section>

        <section id='consent'>
          <h2 className='my-1 text-lg font-bold text-[#298592]'>
            {' '}
            4. Consent{' '}
          </h2>
          <p className='py-2'>
            Before Cookies are placed on your computer or device, you will be
            shown a prompt requesting your consent to set those Cookies. By
            giving your consent to the placing of Cookies you are enabling Us to
            provide the best possible experience and service to you. In order to
            control your Cookies preference, you can choose to enable or disable
            Cookies in your internet browser. Most internet browsers also enable
            you to choose whether you wish to disable all Cookies or only third-
            party Cookies. By default, most internet browsers accept Cookies but
            this can be changed. For further details, please consult the help
            menu in your internet browser or the documentation that came with
            your device. If you choose to deny consent to the placing of
            Cookies, certain features of Our Site may not function fully or as
            intended.
          </p>
        </section>

        <section id='changes'>
          <h2 className='my-1 text-lg font-bold text-[#298592]'>
            {' '}
            5. Changes to this Cookie Policy{' '}
          </h2>
          <p className='py-2'>
            We may alter this Cookie Policy at any time. If We do so, details of
            the changes will be highlighted at the top of this page. Any such
            changes will become binding on you on your first use of Our Site
            after the changes have been made. You are therefore advised to check
            this page from time to time. In the event of any conflict between
            the current version of this Cookie Policy and any previous
            version(s), the provisions current and in effect shall prevail
            unless it is expressly stated otherwise.
          </p>
        </section>

        <section id='further-information'>
          <h2 className='my-1 text-lg font-bold text-[#298592]'>
            {' '}
            6. Further Information{' '}
          </h2>
          <p className='py-2'>
            If you are looking for more information on how we process your
            personal data, or you wish to exercise your legal rights in respect
            of your personal data, please send us an email at{' '}
            <span
              style={{
                color: 'blue',
                textDecoration: 'underline',
                cursor: 'pointer',
              }}
              onClick={() =>
                (window.location.href = 'mailto:info@nerecommunity.com')
              }
            >
              info@nerecommunity.com
            </span>
          </p>
          <p className='py-2'>
            To learn more about Nere Community, its legal entity and our terms
            of service, please refer to our terms of service and ‘about’ page.
          </p>
        </section>
      </div>
    </div>
  );
};

export default TableOfContents;
