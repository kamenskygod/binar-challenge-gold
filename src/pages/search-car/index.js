import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Col, Row } from 'reactstrap';
import Form from '../../components/Form';
import Button from '../../components/Button';
import Input from '../../components/Input';
import Segment from '../../components/segment';
import SelectBox from '../../components/Selectbox';
import LoaderSvg from '../../components/Loader';
import useFetchingHooks from '../../hooks/useFetching';

import "../../assets/css/search-car.css";
import carBanner from "../../assets/images/img_car.png"

const categoryData = [{
    value: "small",
    label: "2 - 4 Orang"
}, {
    value: "medium",
    label: "4 - 6 Orang"
}, {
    value: "large",
    label: "6 - 8 Orang"
}]

const priceData = [{
    value: 400000,
    label: "< Rp.400.000"
}, {
    value: 600000,
    label: " Rp. 400.000 - Rp. 600.000"
}, {
    value: 400000,
    label: "> Rp.400.000"
}]

const statusData = [{
    value: true,
    label: "Disewa"
}, {
    value: false,
    label: "Tidak Disewa"
}]
const SearchCar = (props) => {
    const [value, setValue] = useState({
        carName: "",
        kapasitas: "",
        harga: "",
        status: ""
    })
    const navigate = useNavigate()
    const [backDrop, setBackDrop] = useState(false)

    const { data, error, loading, setParams } = useFetchingHooks({
        url: "https://bootcamp-rent-cars.herokuapp.com/customer/v2/car",
        parameter: {
            carName: "",
            kapasitas: "",
            harga: "",
            status: ""
        }
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setValue(prev => ({
            ...prev,
            [name]: value
        }))
    }

    document.addEventListener("click", (e) => {
        if (e.target.id === "back-drop") {
            setBackDrop(false)
        }
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        setParams({
            name: value.carName,
            catgory: value.kapasitas,
            isRented: value.status,
            minPrice: value.harga,
            maxPrice: value.harga
        })
        setBackDrop(false)
    }
    const formatNumber = (number) => new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(number);
    
    return (
        <>
            {backDrop && <div id="back-drop" className='backdrop'></div>}
            <section className="section-banner">
                <div className="wrapper-banner">
                    <div className="grid-item item-1 px-3 px-md-4 ps-lg-3 ps-xl-0 pe-lg-0">
                        <div className="parent-text ps-lg-3 ps-xl-0">
                            <div className="text">
                                <h1 className="judul fw-bold mb-3">Sewa & Rental mobil Terbaik di kawasan Jawa Timur</h1>
                                <p className="deskripsi fw-bold mb-3">
                                    Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap
                                    melayani kebutuhanmu untuk sewa mobil selama 24 jam.
                                </p>
                            </div>
                            <Button
                                type="button"
                                onClick={() => navigate('/cari-mobil')}
                                className="fw-bold"  >
                                Mulai Sewa Mobil
                            </Button>
                        </div>
                    </div>
                    <div className="grid-item item-2 ps-3 ps-md-4 ps-lg-0 d-flex align-items-end">
                        <div className="wrapper-mobil">
                            <img src={carBanner} alt="mercy" className="mobil"/>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section-searchbar">
                <Segment className='position-absolute wrapper-searchbar-form'>
                    <Form onSubmit={handleSubmit}>
                        <Segment className='wrapper-searchbar'>
                            <Input
                                onFocus={() => { setBackDrop(true) }}
                                onChange={handleChange}
                                placeholder="Masukan Nama/Tipe Mobil"
                                className="form-control form-input-searchbar"
                                name="carName"
                                label={"Nama Mobil"} />
                            <SelectBox
                                onFocus={() => { setBackDrop(true) }}
                                onChange={handleChange}
                                name="kapasitas"
                                title="Masukan Kapasitas Mobil"
                                label="Kategori"
                                data={categoryData}
                            />
                            <SelectBox
                                onFocus={() => { setBackDrop(true) }}
                                onChange={handleChange}
                                name="harga"
                                title="Masukan Harga Sewa"
                                label="Harga Sewa"
                                data={priceData}
                            />
                            <SelectBox
                                onFocus={() => { setBackDrop(true) }}
                                onChange={handleChange}
                                name="status"
                                title="Masukan Status Mobil"
                                label="Status"
                                data={statusData}
                            />
                            <Segment className='d-flex align-items-end'>
                                <Button className="btn-searchbar">Cari Mobil</Button>
                            </Segment>
                        </Segment>
                    </Form>
                </Segment>
            </section>
            <section className="section-list-mobil">
                <Segment className="wrapper-list-car mx-auto">
                    {loading === "fetching" && <Segment className="text-center w-100"><LoaderSvg /></Segment>}
                    {loading === "reject" && <Segment className="text-center w-100">{error}</Segment>}
                    
                    {<Row>
                        {
                            loading === "resolve" && data?.data?.cars?.map((item, index) => {
                                return (
                                    <Col key={index} md={4} className="pb-4">
                                        <Segment className="card card-list-car d-flex flex-column">
                                            <img className="img-card" src={item.image} alt="pict-car" />
                                            <p className="label mb-0 pt-3">{item.name}</p>
                                            <p className="price fw-bold mb-0 pt-2">{formatNumber(item.price)} / Hari</p>
                                            <p className="description fw-bold mb-0 pt-2">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                            </p>
                                            <Button
                                                onClick={() => navigate(`/cari-mobil/${item.id}`)}
                                                type="button"
                                                className="btn green-btn mt-4">Pilih Mobil
                                            </Button>
                                        </Segment>
                                    </Col>
                                )
                            })
                        }
                    </Row>}
                </Segment>
            </section>
        </>
    )
}

export default SearchCar