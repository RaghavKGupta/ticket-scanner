import Link from "next/link"

export default function WhyChooseUs1() {
    return (
        <>

            <section className="section-box box-why-choose-us background-body">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 mb-40"><span className="btn btn-tag">Why Choose Us</span>
                            <h2 className="title-why neutral-1000">Finding event tickets made simple, transparent, and hassle-free</h2>
                            <p className="text-xl-medium neutral-500">Say goodbye to jumping between different ticket platforms. We aggregate 
                                prices from top ticket providers like Ticketmaster, Seatgeek, and VividSeats, so you can compare and choose the 
                                best deal without the legwork.</p>
                        </div>
                        <div className="col-lg-6 mb-40">
                            <div className="row">
                                <div className="col-sm-6 mt-35">
                                    <div className="card-why-choose-us">
                                        <div className="card-image"> <img src="/assets/imgs/page/homepage1/destination.png" alt="Travila" /></div>
                                        <div className="card-info">
                                            <h6 className="text-xl-bold">100+ Events</h6>
                                            <p className="text-sm-medium neutral-400">Our expert team handpicked all
                                                events in this site.</p>
                                        </div>
                                    </div>
                                    <div className="card-why-choose-us card-why-choose-us-type-2">
                                        <div className="card-info">
                                            <h6 className="text-xl-bold">Fast Booking</h6>
                                            <p className="text-sm-medium neutral-400">Seamless and easy to use UI</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="card-why-choose-us background-body">
                                        <div className="card-image"> <img src="/assets/imgs/page/homepage1/support.png" alt="Travila" /></div>
                                        <div className="card-info">
                                            <h6 className="text-xl-bold neutral-1000">Great Support</h6>
                                            <p className="text-sm-medium neutral-400">We are here to help, before, during, and
                                                even after your event.</p>
                                        </div>
                                    </div>
                                    <div className="card-why-choose-us card-why-choose-us-type-3">
                                        <div className="card-info">
                                            <h6 className="text-xl-bold">Real-Time Pricing</h6>
                                            <p className="text-sm-medium">If prices drop or new seats become available, you'll be the first to know.</p>
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
