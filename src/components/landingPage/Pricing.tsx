import { Card, Row, Col } from 'antd';
const Pricing = () => {
  return (
    <section>
      <div className="w-full flex justify-center">
        <div className="w-11/12 py-5">
          <div className="py-3">
            <div className="lg:text-3xl text-center text-lg mt-2 font-bold">
              Kami Memberikan Solusi Inovatif <br /> untuk Pertumbuhan Bisnis
              Kamu
            </div>
            <div className="lg:text-sm text-center text-xs uppercase font-semibold text-[#20B15A]">
              Apa yang Kami Lakukan
            </div>
          </div>
          <div>
            <Row gutter={16}>
              <Col span={8}>
                <Card title="Card title" bordered={false}>
                  Card content
                </Card>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
