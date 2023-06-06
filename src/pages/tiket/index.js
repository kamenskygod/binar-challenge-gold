import React from 'react';
// import { useDispatch } from "react-redux";
import { Button, Col, Row, Card } from 'reactstrap';
// import { authentication } from "../../store/actions/login-aunthetication";
import check from '../../assets/images/check.png';
import '@fortawesome/fontawesome-free/css/all.css';
import Segment from '../../components/segment';

const Etiket = () => {
  // const dispatch = useDispatch();
  // const [state] = useState({
  //   email: "",
  //   password: "",
  // });

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setState((prev) => ({
  //     ...prev,
  //     [name]: value,
  //   }));
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   dispatch(authentication(state));
  // };

  return (
    <Segment className="container etiket-js">
      <div className="d-flex justify-content-center">
        <img src={check} alt="check" style={{ width: '7%' }} />
      </div>
      <div className="text-center">
        <h2>Pembayaran Berhasil</h2>
        <p style={{ color: '#8A8A8A' }}>Tunjukkan invoice ini ke petugas BCR di titik temu.</p>
      </div>
      <Card className=" card-pdf p-5  align-items-center text-center container">
        <div className="d-flex justify-content-center container">
          <Row>
            <Col
              md={6}
              className=" d-flex flex-column justify-content-center align-items-center text-start"
            >
              <h4 className="title-tiket text-start container">Invoice</h4>
              <p className="title-tiket2 text-start container">*no invoice</p>
            </Col>
            <Col md={6} className="d-flex justify-content-end align-items-center">
              <Button color="primary" outline className="title-unduh d-flex gap-2">
                <i className="fa-solid fa-download"></i>
                Unduh
              </Button>
            </Col>
            <Col md={12} className=" pdf-btn d-flex justify-content-center align-items-center px-1">
              <div className=" d-flex justify-content-center align-items-center gap-2">
                <i class="fa-solid fa-image"></i>
                pdf viewers
              </div>
            </Col>
          </Row>
        </div>
      </Card>
    </Segment>
  );
};

export default Etiket;
