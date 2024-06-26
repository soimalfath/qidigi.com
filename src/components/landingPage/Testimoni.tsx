import { Card, Carousel } from 'antd';
const Testimoni = () => {
  return (
    <section>
      <div className="w-full flex justify-center">
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
          <Carousel autoplay>
            <Card title="Card title" bordered={false}>
              Card content
            </Card>
            <Card title="Card title" bordered={false}>
              Card content
            </Card>
            <Card title="Card title" bordered={false}>
              Card content
            </Card>
            <Card title="Card title" bordered={false}>
              Card content
            </Card>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Testimoni;
