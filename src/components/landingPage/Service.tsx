import { Row, Card, Col, Button } from 'antd';
import Image from 'next/image';
import IlusWebService from '@/assets/landingpage/ilustration/web-design.png';
import { CardServices } from '@/config/landingPage/cardService';

const Service = () => {
  return (
    <section className="lg:py-20">
      <div className="w-full  flex justify-center">
        <div className="w-11/12">
          <div className="py-3">
            <div className="lg:text-sm text-xs uppercase font-semibold text-[#20B15A]">
              Apa saja layanan kami
            </div>
            <div className="lg:text-3xl text-lg mt-2 font-bold">
              Kami menyediakan Solusi Digital <br /> Terpadu untuk Pertumbuhan
              Bisnis Kamu
            </div>
          </div>
          <div className="py-9">
            <Row gutter={16}>
              {CardServices.map((item, index) => (
                <Col key={index} md={6} xs={24}>
                  <Card hoverable bordered={true}>
                    <div className="flex p-5 justify-center">
                      <Image width={200} alt={item.alt} src={item.img}></Image>
                    </div>
                    <div className="text-lg font-semibold text-center">
                      {item.tittle}
                    </div>
                    <div className="text-center my-3">{item.content}</div>
                    <div className="grid">
                      <Button>Selengkapnya</Button>
                    </div>
                  </Card>
                </Col>
              ))}
            </Row>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
