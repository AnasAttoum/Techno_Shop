import Image from 'next/image'
import draw from '/public/Intro.svg'
import styles from '@/styles/home.module.css'
import Explore from '@/sections/Explore';
import WhyChooseUs from '@/sections/WhyChooseUs';

export default function Home() {

  return (
    <>
      <div className={`flex items-center mt-24 gap-20 ${styles.container}`}>
        <div className='flex flex-col gap-10'>
          <div className="mb-4" style={{ fontSize: '4.2vw', lineHeight: '5vw' }}><span className="font-bold" style={{ color: 'var(--primary)' }}>Techno Shop</span> is your perfect choice</div>
          <div className="text-gray-400" style={{ fontSize: '1.6vw' }}>discover the world of technology with techno shop, It’s fast, trustful and convenient. We produce high-quality products.
          </div>
        </div>
        <Image src={draw} alt='Intro pic to techno shop' style={{ width: '80%', objectFit: 'contain' }} />
      </div>

      <Explore />

      <WhyChooseUs />
    </>
  );
}