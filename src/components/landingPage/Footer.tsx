import Image from 'next/image';
import Link from 'next/link';
import {
  WhatsAppOutlined,
  EnvironmentOutlined,
  MailOutlined,
} from '@ant-design/icons';
const Footer = () => {
  return (
    <section className="py-10 bg-[#20B15A] ">
      <div className="w-full flex justify-center">
        <div className="w-11/12 grid lg:flex items-center lg:justify-between">
          <div className="grid">
            <div className="bg-white rounded-lg px-2 mb-8 py-1 w-fit">
              <span className="font-bold lg:text-lg texet-white ">Qiblat </span>
              <span className="text-[#F55F1D]  lg:text-lg font-bold ">
                Digital
              </span>
            </div>
            <div>
              <div className="flex gap-2 text-sm lg:text-base text-white">
                <span>
                  <EnvironmentOutlined />
                </span>
                <span>Tamansari, Purbalingga, Jawa Tengah</span>
              </div>
              <div className="text-white my-2 flex gap-2 text-sm lg:text-base">
                <span>
                  <WhatsAppOutlined />
                </span>
                <span>
                  <Link href="https://wa.me/628158931112" target="_blank">
                    0815-8931-112
                  </Link>
                </span>
              </div>
              <div className="text-white flex gap-2 text-sm lg:text-base">
                <span>
                  <MailOutlined />
                </span>
                <span>
                  <Link target="_blank" href="mailto:qibatdigital@gmail.com">
                    qiblatdigital@gmail.com
                  </Link>
                </span>
              </div>
            </div>
            <div className="hidden mt-8 lg:flex ">
              <p className="w-full mt-8 text-sm text-center text-gray-100 md:mt-0 md:w-auto md:order-2">
                © Copyright {new Date().getFullYear()} Qiblat Digital, All
                Rights Reserved
              </p>
            </div>
          </div>
          <div className="grid mt-3 lg:mt-0 gap-3">
            <div className="text-white text-sm lg:text-base">Company</div>
            <div className="text-white text-sm lg:text-base">
              Privacy & Policy
            </div>
            <div className="flex lg:hidden">
              <p className="w-full mt-8  text-sm text-center text-gray-100 md:mt-0 md:w-auto md:order-2">
                © Copyright {new Date().getFullYear()} Qiblat Digital, All
                Rights Reserved
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Footer;
