import { sendGTMEvent } from '@next/third-parties/google';
import Link from 'next/link';

const ViewMore = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '10vh',
        marginTop: '15px',
        marginBottom: '10px',
      }}
    >
      <Link
        href='/products'
        onClick={() => sendGTMEvent({ evet: 'Hello', value: 'Helloe world' })}
      >
        <div
          className='rounded-lg py-3 text-center text-base font-semibold text-white shadow'
          style={{
            background: '#298592',
            width: '150px',
            marginTop: '10px',
            marginBottom: '10px',
          }}
        >
          View All Items
        </div>
      </Link>
    </div>
  );
};

export default ViewMore;
