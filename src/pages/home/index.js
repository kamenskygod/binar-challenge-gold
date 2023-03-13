import React from 'react';
import { useNavigate } from "react-router-dom";

import Button from "../../components/Button";

import carBanner from "../../assets/images/img_car.png"
import servicesCheck from "../../assets/images/fi_check.svg"
import servicesPerson from "../../assets/images/img_service.png"
import icComplete from "../../assets/images/icon_complete.png"
import icPrice from "../../assets/images/icon_price.png"
import icHours from "../../assets/images/icon_24hrs.png"
import icProfessional from "../../assets/images/icon_professional.png"
import personTestimoni from "../../assets/images/testimoni_1.png"
import icRate from "../../assets/images/ic_rate.svg"

const Home = (props) => {
    const navigate = useNavigate();

    return (
        <>
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
            <section className="section-layanan px-3" id="sectionOurServices">
                <div className="container container-custom px-0">
                    <div className="d-block d-lg-flex justify-content-lg-between">
                        <div className="card-layanan item-1 mb-4 mb-lg-0">
                            <img src={servicesPerson} alt="img" className="img-person d-block mx-auto" />
                        </div>
                        <div className="card-layanan item-2">
                            <p className="title-layanan fw-bold mb-3 mb-lg-4">Best Car Rental for any kind of trip in Jawa Timur!</p>
                            <p className="caption-layanan fw-bold">
                                Sewa mobil di Makassar bersama Binar Car Rental jaminan harga
                                lebih murah dibandingkan yang lain, kondisi mobil baru, serta
                                kualitas pelayanan terbaik untuk perjalanan wisata, bisnis, wedding,
                                meeting, dll.
                            </p>
                            <ul className="list-layanan mb-0 ps-0">
                                <li className="list-item mb-3">
                                    <img src={servicesCheck} alt="check" />
                                    <span className="fw-bold">Sewa Mobil Dengan Supir di Bali 12 Jam</span>
                                </li>
                                <li className="list-item mb-3">
                                    <img src={servicesCheck} alt="check" />
                                    <span className="fw-bold">Sewa Mobil Lepas Kunci di Bali 24 Jam</span>
                                </li>
                                <li className="list-item mb-3">
                                    <img src={servicesCheck} alt="check" />
                                    <span className="fw-bold">Sewa Mobil Jangka Panjang Bulanan</span>
                                </li>
                                <li className="list-item mb-3">
                                    <img src={servicesCheck} alt="check" />
                                    <span className="fw-bold">Gratis Antar - Jemput Mobil di Bandara</span>
                                </li>
                                <li className="list-item">
                                    <img src={servicesCheck} alt="check" />
                                    <span className="fw-bold">Layanan Airport Transfer / Drop In Out</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section-why-us px-3" id="sectionWhyUs">
                <div className="container container-custom px-0">
                    <div className="why-us-content item-1 pb-3 pb-lg-0">
                        <h2 className="title-why-us fw-bold text-center text-lg-start mb-3">Why Us?</h2>
                        <p className="subtitle-why-us fw-bold text-center text-lg-start mb-0">Mengapa harus pilih Binar Car Rental?</p>
                    </div>
                    <div className="row gy-3 why-us-list mt-lg-4">
                        <div className="col-12 col-lg-3 col-sm-6">
                            <div className="why-us-list-item p-4">
                                <img src={icComplete} alt="complete" />
                                <h3 className="why-us-title-content fw-bold my-3">Mobil Lengkap</h3>
                                <p className="why-us-info-content fw-bold mb-0">Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat</p>
                            </div>
                        </div>
                        <div className="col-12 col-lg-3 col-sm-6">
                            <div className="why-us-list-item p-4">
                                <img src={icPrice} alt="price" />
                                <h3 className="why-us-title-content fw-bold my-3">Harga Murah</h3>
                                <p className="why-us-info-content fw-bold mb-0">Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil lain
                                </p>
                            </div>
                        </div>
                        <div className="col-12 col-lg-3 col-sm-6">
                            <div className="why-us-list-item p-4">
                                <img src={icHours} alt="24 hours" />
                                <h3 className="why-us-title-content fw-bold my-3">Layanan 24 Jam</h3>
                                <p className="why-us-info-content fw-bold mb-0">Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga tersedia di
                                    akhir minggu
                                </p>
                            </div>
                        </div>
                        <div className="col-12 col-lg-3 col-sm-6">
                            <div className="why-us-list-item p-4">
                                <img src={icProfessional} alt="professional" />
                                <h3 className="why-us-title-content fw-bold my-3">Sopir Profesional</h3>
                                <p className="why-us-info-content fw-bold mb-0">Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat waktu</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section-testimonial" id="sectionTestimonial">
                <div className="testimonial-container">
                    <h2 className="title-testimonial fw-bold text-center mb-3">Testimonial</h2>
                    <p className="subtitle-testimonial fw-bold text-center mb-0">Berbagai review positif dari para pelanggan kami</p>
                    <div className="list-testimonial d-flex flex-nowrap justify-content-start overflow-scroll px-3 px-md-0">
                        <div className="wrapper-slide-testimonial d-flex justify-content-center">
                            <div className="col-md-4 list-card-testimonial">
                                <div className="row">
                                    <div className="col-md-3 mb-4 mb-md-0 d-flex align-items-center justify-content-center">
                                        <img className="photo-profile" src={personTestimoni} alt="person testimoni" />
                                    </div>
                                    <div className="col-md-9">
                                        <img className="rate mb-4 mb-sm-2 mx-auto me-md-auto ms-md-0" src={icRate} alt="rate" />
                                        <p className="testimoni-caption fw-bold mb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                            eiusmod tempor
                                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                            laboris nisi ut aliquip ex ea commodo consequat.</p>
                                        <p className="testimoni-user mb-0">John Dee 32, Bromo</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 list-card-testimonial">
                                <div className="row">
                                    <div className="col-md-3 mb-4 mb-md-0 d-flex align-items-center justify-content-center">
                                        <img className="photo-profile" src={personTestimoni} alt="person testimoni" />
                                    </div>
                                    <div className="col-md-9">
                                        <img className="rate mb-4 mb-sm-2 mx-auto me-md-auto ms-md-0" src={icRate} alt="rate" />
                                        <p className="testimoni-caption fw-bold mb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                            eiusmod tempor
                                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                            laboris nisi ut aliquip ex ea commodo consequat.</p>
                                        <p className="testimoni-user mb-0">John Dee 32, Bromo</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 list-card-testimonial">
                                <div className="row">
                                    <div className="col-md-3 mb-4 mb-md-0 d-flex align-items-center justify-content-center">
                                        <img className="photo-profile" src={personTestimoni} alt="person testimoni" />
                                    </div>
                                    <div className="col-md-9">
                                        <img className="rate mb-4 mb-sm-2 mx-auto me-md-auto ms-md-0" src={icRate} alt="rate" />
                                        <p className="testimoni-caption fw-bold mb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                            eiusmod tempor
                                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                            laboris nisi ut aliquip ex ea commodo consequat.</p>
                                        <p className="testimoni-user mb-0">John Dee 32, Bromo</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="testimoni-button mt-4">
                        <button className="btn btn-slider pe-1 p-0"><i className="fa fa-chevron-left"></i></button>
                        <button className="btn btn-slider ps-1 p-0 active"><i className="fa fa-chevron-right"></i></button>
                    </div>
                </div>
            </section>

            <section className="section-rent-now px-3">
                <div className="container container-custom bg-rent">
                    <h2 className="rent-title fw-bold text-center mb-3">Sewa Mobil di Jawa Timur Sekarang</h2>
                    <div className="wrapper-rent-info mx-auto">
                        <p className="rent-info fw-bold text-center">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                            et dolore magna aliqua.
                        </p>
                    </div>
                    <div className="wrapper-btn text-center">
                        <Button
                            type="button"
                            onClick={() => navigate('/cari-mobil')}
                            className="btn btn-sewa"  >
                            Mulai Sewa Mobil
                        </Button>
                    </div>
                </div>
            </section>

            <section className="section-faq px-3" id="sectionFAQ">
                <div className="container container-custom px-0">
                    <div className="wrapper-faq">
                        <div>
                            <p className="title-section fw-bold text-center text-md-start mb-0">Frequently Asked Question</p>
                            <div className="wrapper-subtitle-faq pt-3">
                                <p className="subtitle-section fw-bold text-center text-md-start mb-0">
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur impedit qui sit
                                    tempore labore.
                                </p>
                            </div>
                        </div>
                        <div>
                            <div className="accordion accordion-custom" id="accordion1">
                                <div className="accordion-item item-custom">
                                    <p className="accordion-header" id="itemHeader1">
                                        <button className="accordion-button collapsed fw-bold button-item-custom" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapse1" aria-expanded="false" aria-controls="collapse1">
                                            Apa saja syarat yang dibutuhkan?
                                        </button>
                                    </p>
                                    <div id="collapse1" className="accordion-collapse collapse collapse-item-custom" aria-labelledby="itemHeader1"
                                    data-bs-parent="#accordion1">
                                        <div className="accordion-body">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit obcaecati nam esse ipsa labore sint a quis
                                            laudantium voluptate voluptates corrupti delectus fugiat adipisci alias, totam ea ipsam distinctio iure.
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion accordion-custom" id="accordion2">
                                <div className="accordion-item item-custom">
                                    <p className="accordion-header" id="itemHeader2">
                                        <button className="accordion-button collapsed fw-bold button-item-custom" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapse2" aria-expanded="false" aria-controls="collapse2">
                                            Berapa hari minimal sewa mobil lepas kunci?
                                        </button>
                                    </p>
                                    <div id="collapse2" className="accordion-collapse collapse collapse-item-custom" aria-labelledby="itemHeader2"
                                    data-bs-parent="#accordion2">
                                        <div className="accordion-body">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit obcaecati nam esse ipsa labore sint a quis
                                            laudantium voluptate voluptates corrupti delectus fugiat adipisci alias, totam ea ipsam distinctio iure.
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion accordion-custom" id="accordion3">
                                <div className="accordion-item item-custom">
                                    <p className="accordion-header" id="itemHeader3">
                                        <button className="accordion-button collapsed fw-bold button-item-custom" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapse3" aria-expanded="false" aria-controls="collapse3">
                                            Berapa hari sebelumnya sabaiknya booking sewa mobil?
                                        </button>
                                    </p>
                                    <div id="collapse3" className="accordion-collapse collapse collapse-item-custom" aria-labelledby="itemHeader3"
                                    data-bs-parent="#accordion3">
                                        <div className="accordion-body">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit obcaecati nam esse ipsa labore sint a quis
                                            laudantium voluptate voluptates corrupti delectus fugiat adipisci alias, totam ea ipsam distinctio iure.
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion accordion-custom" id="accordion4">
                                <div className="accordion-item item-custom">
                                    <p className="accordion-header" id="itemHeader4">
                                        <button className="accordion-button collapsed fw-bold button-item-custom" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapse4" aria-expanded="false" aria-controls="collapse4">
                                            Apakah ada biaya antar-jemput?
                                        </button>
                                    </p>
                                    <div id="collapse4" className="accordion-collapse collapse collapse-item-custom" aria-labelledby="itemHeader4"
                                    data-bs-parent="#accordion4">
                                        <div className="accordion-body">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit obcaecati nam esse ipsa labore sint a quis
                                            laudantium voluptate voluptates corrupti delectus fugiat adipisci alias, totam ea ipsam distinctio iure.
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion accordion-custom" id="accordion5">
                                <div className="accordion-item item-custom">
                                    <p className="accordion-header" id="itemHeader5">
                                        <button className="accordion-button collapsed fw-bold button-item-custom" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapse5" aria-expanded="false" aria-controls="collapse5">
                                            Bagaimana jika terjadi kecelakaan?
                                        </button>
                                    </p>
                                    <div id="collapse5" className="accordion-collapse collapse collapse-item-custom" aria-labelledby="itemHeader5"
                                    data-bs-parent="#accordion5">
                                        <div className="accordion-body">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit obcaecati nam esse ipsa labore sint a quis
                                            laudantium voluptate voluptates corrupti delectus fugiat adipisci alias, totam ea ipsam distinctio iure.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home