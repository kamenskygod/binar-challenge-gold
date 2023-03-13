import React, { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Col, Row } from 'reactstrap';
import Input from '../../../components/Input';
import Segment from '../../../components/segment';
import SelectBox from '../../../components/Selectbox';
import LoaderSvg from '../../../components/Loader';
import { fetchApi } from '../../../config/services';

import "../../../assets/css/search-car.css";

const carSize = {
    small: "2 - 4 Orang",
    medium: "4 - 6 Orang",
    large: "6 - 8 Orang"
}

const DetailCar = (props) => {
    const [data, setData] = useState(null);
    const [loader, setloader] = useState("idle");
    const { id } = useParams();
    const fetchingMobil = useCallback((params = null) => {
        setloader("fetching")
        fetchApi(`https://bootcamp-rent-cars.herokuapp.com/customer/car/${id}`, params).then(result => {
            setData(result.data)
            setloader("resolve")
        }).catch(e => {
            setloader("reject")
        })
    }, [id])

    useEffect(() => {
        fetchingMobil()
    }, [fetchingMobil])

    const formatNumber = (number) => new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(number);

    return (
        <>
            <section className="section-searchbar-detail">
                <Segment className='position-absolute wrapper-searchbar-form-detail'>
                    <Segment className='container-searchbar-detail'>
                        <p className='fw-bold title-searchbar-detail'>Pencarianmu</p>
                        <Segment className="wrapper-searchbar-detail">
                            <Input
                                disabled={true}
                                placeholder="Masukan Nama/Tipe Mobil"
                                className="form-control form-input-searchbar"
                                name="carName"
                                label={"Nama Mobil"} />
                            <SelectBox
                                disabled={true}
                                name="kapasitas"
                                title="Masukan Kapasitas Mobil"
                                label="Kategori"
                            />
                            <SelectBox
                                disabled={true}
                                name="harga"
                                title="Masukan Harga Sewa"
                                label="Harga Sewa"
                            />
                            <SelectBox
                                disabled={true}
                                name="status"
                                title="Masukan Status Mobil"
                                label="Status"
                            />
                        </Segment>
                    </Segment>
                </Segment>
            </section>
            {loader !== "resolve" && <Segment className="text-center w-100"><LoaderSvg /></Segment>}
            {loader === "resolve" && 
            <section className='section-detail-car mx-auto'>
                <Segment className="contains-box contains-car">
                    <Row>
                        <Col md={7}>
                            <Segment className="card p-4">
                                <Segment className="title pb-4">
                                    <h6>Tentang Paket</h6>
                                </Segment>
                                <Segment className="body">
                                    <h6>Includes</h6>
                                    <ul>
                                        <li>Apa saja yang termasuk dalam paket misal durasi max 12 jam.</li>
                                        <li> Sudah termasuk bensin selama 12 jam.</li>
                                        <li>Sudah termasuk Tiket Wisata.</li>
                                        <li>Sudah termasuk pajak.</li>
                                    </ul>
                                </Segment>
                                <Segment className="body">
                                    <h6>Exclude</h6>
                                    <ul>
                                        <li>Tidak termasuk biaya makan sopir Rp 75.000/hari.</li>
                                        <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam .</li>
                                        <li>Tidak termasuk akomodasi penginapan.</li>
                                    </ul>
                                </Segment>
                                <Segment className="body">
                                    <h6>Refund, Reschedule, Overtime</h6>
                                    <ul>
                                        <li>Tidak termasuk biaya makan sopir Rp 75.000/hari.</li>
                                        <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam.</li>
                                        <li>Tidak termasuk akomodasi penginapan.</li>
                                        <li>Tidak termasuk biaya makan sopir Rp 75.000/hari.</li>
                                        <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam.</li>
                                        <li> Tidak termasuk akomodasi penginapan.</li>
                                        <li>Tidak termasuk biaya makan sopir Rp 75.000/hari.</li>
                                        <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam.</li>
                                        <li>Tidak termasuk akomodasi penginapan.</li>
                                    </ul>
                                </Segment>
                            </Segment>
                        </Col>
                        <Col md={5}>
                            <Segment className="card card-size d-flex flex-column p-4">
                                <img className="img-max-contain" src={data?.image} alt="pict-car" />
                                <Segment className="py-4">
                                    <Segment className="py-1" style={{ fontSize: "14px", fontWeight: 700 }}>{data?.name}</Segment>
                                    <Segment className="py-1" style={{ fontSize: "10px", color: "#8A8A8A" }}>
                                        <i className='fa fa-users'></i> {carSize[data?.category]}
                                    </Segment>
                                    <Segment className="d-flex justify-content-between py-1">
                                        <Segment style={{ fontSize: "14px", fontWeight: 700 }}>Total</Segment>
                                        <Segment style={{ fontSize: "14px", fontWeight: 700 }}>{formatNumber(data?.price)}</Segment>
                                    </Segment>
                                </Segment>
                            </Segment>
                        </Col>
                    </Row>
                </Segment>
            </section>}
        </>
    )
}

export default DetailCar