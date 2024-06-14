import { Card, Col, Row } from 'antd';
import {
  LineChartOutlined,
  GlobalOutlined,
  SoundOutlined,
} from '@ant-design/icons';
import { DataCard } from '@/types/landingPage/landingPage';
import { ilustrationWhatWeDo } from '@/config/landingPage/image';
import Image from 'next/image';

export const WhatWeDo = () => {
  const dataCardWhatWeDo: DataCard[] = [
    {
      icon: <LineChartOutlined className="text-3xl" />,
      title: 'Membuat Strategi Pertumbuhan Digital',
      content:
        'Kami membantu Anda mengembangkan strategi digital yang komprehensif untuk mencapai target bisnis Anda. Dari analisis pasar hingga implementasi, kami memastikan setiap langkah Anda membawa hasil yang nyata.',
    },
    {
      icon: <GlobalOutlined className="text-3xl" />,
      title: 'Pengembangan Website yang Optimal',
      content:
        'Qidigi merancang dan mengembangkan situs web yang responsif, menarik, dan user-friendly. Kami fokus pada pengalaman pengguna yang optimal untuk memastikan pengunjung betah dan kembali lagi',
    },
    {
      icon: <SoundOutlined className="text-3xl" />,
      title: 'Digital Marketing yang Efektif',
      content:
        ' Dari Google Ads, Tiktok Ads, Marketplace hingga Meta Ads, kami merancang dan menjalankan kampanye iklan yang ditargetkan untuk memaksimalkan ROI. Kami menggunakan data dan analisis untuk memastikan iklan Anda mencapai audiens yang tepat.',
    },
  ];

  return (
    <section className="lg:py-20">
      <div className="w-full  flex justify-center">
        <div className="w-11/12 py-5">
          <div className="py-3">
            <div className="lg:text-sm text-xs uppercase font-semibold text-[#20B15A]">
              Apa yang Kami Lakukan
            </div>
            <div className="lg:text-3xl text-lg mt-2 font-bold">
              Kami Memberikan Solusi Inovatif <br /> untuk Pertumbuhan Bisnis
              Kamu
            </div>
          </div>
          <div className="lg:py-9">
            <Row gutter={16}>
              {dataCardWhatWeDo.map((item, index) => (
                <Col xs={24} key={index} md={8}>
                  <Card bordered={false}>
                    <div className="px-4 py-3  rounded-xl w-fit bg-[#D7F5DC]">
                      {item.icon}
                    </div>
                    <div>
                      <div className="font-bold my-3 text-lg">{item.title}</div>
                      <div>{item.content}</div>
                    </div>
                  </Card>
                </Col>
              ))}
            </Row>
          </div>
          <div className="flex py-9 justify-center">
            <div className="lg:flex lg:justify-evenly grid grid-cols-4">
              {ilustrationWhatWeDo.map((item, index) => (
                <div
                  className={
                    index === 3
                      ? 'lg:border-r-0  lg:ml-4 lg:p-8'
                      : 'lg:border-r  lg:p-8 lg:ml-4'
                  }
                  key={index}
                >
                  <div className="flex justify-center">
                    <Image src={item.src} alt={item.alt}></Image>
                  </div>
                  <div className="text-center text-sm font-semibold py-2">
                    {item.caption}
                  </div>
                  <div className="text-[#20B15A] text-center lg:text-4xl text-2xl font-semibold">
                    {item.number}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
