import Image from 'next/image';
import Link from 'next/link';

const Logo: React.FC = () => {

    return (
        <Link href="/">
            <Image
                src="/images/footer/Logo-1.png"
                alt="logo"
                width={0}
                height={0}
                style={{ width: '200px', height: '100px' }}
                quality={100}
                className='dark:block hidden'
            />
        </Link>
    );
};

export default Logo;
