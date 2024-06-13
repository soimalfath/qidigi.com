import heroImage from '@/config/landingPage/image';
import { HeroImages } from '@/config/landingPage/image';
import { Button } from 'antd';
import Image from 'next/image';

export const Hero = () => {
  return (
    <section className="bg-[#D7F5DC] w-full">
      <div className="grid justify-center items-center px-6 pt-3 lg:px-14 grid-cols-1 lg:grid-cols-2">
        <div className="lg:px-7 ">
          <div className="flex mb-2 lg:mb-4 lg:justify-start justify-center">
            <div className=" bg-[#20B15A] px-4 py-1  text-xs  text-white rounded-2xl flex w-fit items-center justify-center">
              Kini Saatnya
            </div>
          </div>
          <div className="font-bold text-center  lg:text-start text-3xl lg:text-6xl">
            Maksimalkan Potensi Digital Bisnis Kamu dengan Qidigi
          </div>
          <div className="lg:my-6 my-2 text-sm text-center lg:text-start px-5 lg:px-0">
            Jasa Web Development dan Digital Marketing Terbaik dan Termurah
            untuk Mengembangkan Bisnis Kamu
          </div>
          <div className="flex py-6 lg:py-0 justify-center lg:justify-start">
            <Button type="primary">Selengkapnya</Button>
          </div>
        </div>
        <div className="flex pt-4 lg:py-0 justify-center">
          <Image src={heroImage} alt="hero-image" />
        </div>
      </div>
      <div className="pb-10 flex justify-center w-full ">
        <div className=" bg-white flex justify-center w-full">
          <div className="w-11/12">
            <div className="flex items-center justify-between py-3  lg:py-10 flex-auto">
              {HeroImages.map((item, index) => (
                <Image
                  key={index}
                  src={item.src}
                  className="w-10 lg:w-16"
                  alt={item.alt}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
