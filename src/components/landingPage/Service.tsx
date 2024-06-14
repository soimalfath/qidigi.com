import { Row, Card, Col } from 'antd';

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
              <Col span={8}>
                <Card hoverable bordered={true}>
                  <div>Pengembangan Website</div>
                  <div>
                    Membangun situs web yang menarik, responsif, dan
                    dioptimalkan untuk pengalaman pengguna yang luar biasa.
                  </div>
                  <div className="grid">
                    <span>
                      - Desain dan pengembangan situs web kustom Pengembangan
                    </span>
                    <span>
                      - e-commerce Optimasi kecepatan dan performa situs
                    </span>
                    <span>- Pemeliharaan dan dukungan berkelanjutan</span>
                  </div>
                </Card>
              </Col>
              <Col span={8}>
                <Card title="Card title" hoverable bordered={true}>
                  Card content
                </Card>
              </Col>
              <Col span={8}>
                <Card title="Card title" hoverable bordered={true}>
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

export default Service;
