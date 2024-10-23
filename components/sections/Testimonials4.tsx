
'use client'
import { Swiper, SwiperSlide } from "swiper/react"
import { swiperGroupAnimate } from "@/util/swiperOption"
export default function Testimonials4() {
    return (
        <>

            <section className="section-box box-testimonials background-3">
                <div className="container-testimonials">
                    <div className="block-testimonials">
                        <div className="testimonials-left">
                            <div className="box-author-testimonials"> <img src="/assets/imgs/page/homepage1/testimonial.png" alt="Travila" /><img src="/assets/imgs/page/homepage1/testimonial2.png" alt="Travila" /><img src="/assets/imgs/page/homepage1/testimonial3.png" alt="Travila" />Testimonials</div>
                            <h2 className="text-52-bold mt-8 mb-25 neutral-1000">What our clients are saying about us?</h2>
                            <p className="text-lg-medium neutral-500">Don’t just take our word for it—see what our satisfied users have to say about TheTicketScanner.</p>
                        </div>
                        <div className="testimonials-right">
                            <div className="container-slider">
                                <div className="box-swiper mt-30">
                                    <div className="swiper-container swiper-group-animate swiper-group-journey">
                                        <Swiper {...swiperGroupAnimate}>
                                            <SwiperSlide>
                                                <div className="card-testimonial background-card">
                                                    <div className="card-top">
                                                        <div className="card-author">
                                                            <div className="card-image"> <img src="/assets/imgs/page/homepage1/author.png" alt="Travila" /></div>
                                                            <div className="card-info">
                                                                <p className="text-lg-bold neutral-1000">Sara Mohamed</p>
                                                                <p className="text-sm neutral-1000">Atlanta</p>
                                                            </div>
                                                        </div>
                                                        <div className="card-rate"> <img src="/assets/imgs/template/icons/star.svg" alt="Travila" /><img src="/assets/imgs/template/icons/star.svg" alt="Travila" /><img src="/assets/imgs/template/icons/star.svg" alt="Travila" /><img src="/assets/imgs/template/icons/star.svg" alt="Travila" /><img src="/assets/imgs/template/icons/star.svg" alt="Travila" />
                                                        </div>
                                                    </div>
                                                    <div className="card-info">
                                                        <p className="neutral-500">I’ve always hated hunting down tickets across multiple sites. TheTicketScanner does all the hard work for me. I found great seats for my favorite concert at an unbeatable price, all in just a few clicks! Highly recommend!</p>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div className="card-testimonial background-card">
                                                    <div className="card-top">
                                                        <div className="card-author">
                                                            <div className="card-image"> <img src="/assets/imgs/page/homepage1/author2.png" alt="Travila" /></div>
                                                            <div className="card-info">
                                                                <p className="text-lg-bold neutral-1000">Atend John</p>
                                                                <p className="text-sm neutral-1000">Califonia</p>
                                                            </div>
                                                        </div>
                                                        <div className="card-rate"> <img src="/assets/imgs/template/icons/star.svg" alt="Travila" /><img src="/assets/imgs/template/icons/star.svg" alt="Travila" /><img src="/assets/imgs/template/icons/star.svg" alt="Travila" /><img src="/assets/imgs/template/icons/star.svg" alt="Travila" /><img src="/assets/imgs/template/icons/star.svg" alt="Travila" />
                                                        </div>
                                                    </div>
                                                    <div className="card-info">
                                                        <p className="neutral-500">As a frequent sports fan, I was tired of comparing prices manually. TheTicketScanner made it easy to find the best deals without any hassle. I even saved money on tickets to a Braves game. I’m a loyal user now!</p>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                        </Swiper>
                                    </div>
                                </div>
                                <div className="box-button-slider box-button-slider-team text-start">
                                    <div className="swiper-button-prev swiper-button-prev-style-1 swiper-button-prev-animate">
                                        <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" >
                                            <path d="M7.99992 3.33325L3.33325 7.99992M3.33325 7.99992L7.99992 12.6666M3.33325 7.99992H12.6666" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                    <div className="swiper-button-next swiper-button-next-style-1 swiper-button-next-animate">
                                        <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" >
                                            <path d="M7.99992 12.6666L12.6666 7.99992L7.99992 3.33325M12.6666 7.99992L3.33325 7.99992" strokeLinecap="round" strokeLinejoin="round"> </path>
                                        </svg>
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
