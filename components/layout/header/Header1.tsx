'use client'
import CurrencyDropdown from '@/components/elements/CurrencyDropdown'
import LanguageDropdown from '@/components/elements/LanguageDropdown'
import dynamic from 'next/dynamic'
import Link from 'next/link'
const ThemeSwitch = dynamic(() => import('@/components/elements/ThemeSwitch'), {
	ssr: false,
})
export default function Header1({ scroll, handleLogin, handleMobileMenu, handleRegister, handleSidebar }: any) {
	return (
		<>

			<header className={`header sticky-bar ${scroll ? "stick" : ""}`}>
				<div className="container-fluid background-body">
					<div className="main-header">
						<div className="header-left">
							<div className="header-logo"><Link className="d-flex" href="/"><img className="light-mode" alt="Travila" src="/assets/imgs/template/logo.svg" /><img className="dark-mode" alt="Travila" src="/assets/imgs/template/logo-w.svg" /></Link></div>
							<div className="header-nav">
								<nav className="nav-main-menu">
									<ul className="main-menu">
										<li className="mega-li has-children"><Link className="active" href="/">Home</Link>
											<div className="mega-menu">
												<div className="mega-menu-inner">
													<div className="row align-items-center">
														<div className="col-lg-10">
															<div className="row align-items-center">
																<div className="col-lg-4">
																	<p className="text-md-bold mb-10 neutral-1000">Start Your
																		Journey</p>
																	<h5 className="mb-45 neutral-1000">Book, Pack, Go! Your Ultimate
																		Travel Companion</h5><Link href="#" className="btn btn-brand-secondary">Exploring Now
																		<svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
																			<path d="M8 15L15 8L8 1M15 8L1 8" stroke="" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"> </path>
																		</svg></Link>
																</div>
																<div className="col-lg-4">
																	<div className="card-home-link background-body"> <Link className="card-icon" href="/"> <img src="/assets/imgs/template/icons/activity.svg" alt="Travila" /></Link>
																		<div className="card-info"> <Link href="/">
																			<h6 className="text-md-bold">Home 01 - All Services
																			</h6>
																		</Link>
																			<p className="text-xs-medium neutral-500">Tours,
																				Activities, Destinations, Hotels, Rental,
																				Tickets</p>
																		</div>
																	</div>
																	<div className="card-home-link background-body"> <Link className="card-icon" href="/index-2"> <img src="/assets/imgs/template/icons/map.svg" alt="Travila" /></Link>
																		<div className="card-info"> <Link href="/index-2">
																			<h6 className="text-md-bold">Home 02 - All Services
																			</h6>
																		</Link>
																			<p className="text-xs-medium neutral-500">Tours,
																				Activities, Destinations, Hotels, Rental,
																				Tickets</p>
																		</div>
																	</div>
																	<div className="card-home-link background-body"> <Link className="card-icon" href="/index-3"> <img src="/assets/imgs/template/icons/deck-chair.svg" alt="Travila" /></Link>
																		<div className="card-info"> <Link href="/index-3">
																			<h6 className="text-md-bold">Home 03 - All Services
																			</h6>
																		</Link>
																			<p className="text-xs-medium neutral-500">Tours,
																				Activities, Destinations, Hotels, Rental,
																				Tickets</p>
																		</div>
																	</div>
																</div>
																<div className="col-lg-4">
																	<ul className="list-featured">
																		<li><Link className="tours" href="/index-4">Home 04 -
																			Tours</Link></li>
																		<li><Link className="activities" href="/index-5">Home 05 -
																			Activities</Link></li>
																		<li><Link className="destinations" href="/index-6">Home 06
																			- Destinations</Link></li>
																		<li><Link className="hotels" href="/index-7">Home 07 -
																			Hotels</Link></li>
																		<li><Link className="rental-car" href="/index-8">Home 08 -
																			Rental Car</Link></li>
																		<li><Link className="property" href="/index-9">Home 09 -
																			Property</Link></li>
																		<li><Link className="tickets" href="/index-10">Home 10 -
																			Tickets</Link></li>
																	</ul>
																</div>
															</div>
														</div>
														<div className="col-lg-2"><img src="/assets/imgs/template/world.png" alt="Travila" /></div>
													</div>
												</div>
											</div>
										</li>
										<li className="has-children"><Link href="/tickets">Tickets</Link>
											<ul className="sub-menu">
												<li><Link href="/tickets">Flight tickets</Link></li>
												<li><Link href="/tickets-2">Train tickets</Link></li>
												<li><Link href="/book-ticket">Ticket details</Link></li>
											</ul>
										</li>
										<li className="has-children"><Link href="/javascript:void(0)">Pages</Link>
											<ul className="sub-menu">
												<li><Link href="/about">About</Link></li>
												<li><Link href="/contact">Contact</Link></li>
												<li><Link href="/privacy">Privacy</Link></li>
												<li><Link href="/faq">FAQs</Link></li>
												<li><Link href="/help-center">Help center</Link></li>
												<li><Link href="/become-expert">Become Expert</Link></li>
												<li><Link href="/comming-soon">Coming soon</Link></li>
												<li><Link href="/term">Term</Link></li>
												<li><Link href="/404">404</Link></li>
											</ul>
										</li>
										<li className="has-children"><Link href="/blog-grid">Blog</Link>
											<ul className="sub-menu">
												<li><Link href="/blog-grid">Grid Full</Link></li>
												<li><Link href="/blog-grid-2">Grid Sidebar</Link></li>
												<li><Link href="/blog-grid-3">List</Link></li>
												<li><Link href="/blog-detail">Blog Details</Link></li>
												<li><Link href="/blog-detail-2">Blog Details 2</Link></li>
											</ul>
										</li>
										<li><Link href="/contact">Contact</Link></li>
										<li><Link href="/about">About Us</Link></li>
									</ul>
								</nav>
							</div>
						</div>
						<div className="header-right">
							<div className="d-none d-xxl-inline-block align-middle mr-15">
								<ThemeSwitch />
								<a className="btn btn-default btn-signin" onClick={handleLogin}>Signin</a>
							</div>
							<div className="burger-icon-2 burger-icon-white" onClick={handleSidebar}>
								<img src="/assets/imgs/template/icons/menu.svg" alt="Travila" />
							</div>
							<div className="burger-icon burger-icon-white" onClick={handleMobileMenu}>
								<span className="burger-icon-top" />
								<span className="burger-icon-mid" />
								<span className="burger-icon-bottom" />
							</div>
						</div>
					</div>
				</div>
			</header>
		</>
	)
}
