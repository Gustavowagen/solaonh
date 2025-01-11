import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Slider from "react-slick";

// Import Images
import lineCircleBlue from "../../images/shap/line-circle-blue.png";
import squareDotsOrange from "../../images/shap/square-dots-orange.png";
import waveBlue from "../../images/shap/wave-blue.png";
import squareRotate from "../../images/shap/square-rotate.png";
import earIcon from "../../images/icon/ear_no_bg.png";

class ServicesSliderSection extends Component{
	render(){
			
		const settings = {
			dots: false,
			infinite: true,
			speed: 1000,
			slidesToShow: 3,
			slidesToScroll: 1,
			responsive: [
				{
					breakpoint: 991,
					settings: {
						slidesToShow: 2,
					}
				},
				{
					breakpoint: 591,
					settings: {
						slidesToShow: 1,
					}
				}
			]
		};
		
		return(
			<>
				
				<section className="section-area section-sp1 service-wraper">
					<div className="row align-items-left">
						<div className="col-xl-3 col-lg-7 mb-30">	
							<div className="heading-bx">
								<h6 className="title-ext text-secondary">Tjenester</h6>
								<h2 className="title">Våre tjenester</h2>
								<p>Vi driver en generell ØNH praksis med fokus på utredning, diagnostikk og behandling av vanlige problemstillinger i Øre-nese-hals-området. Vi har flere audiografer tilknyttet praksisen og tilpasser også høreapparater.</p>
							</div>
							<Link to="/services" className="btn btn-secondary btn-lg shadow">Alle tjenester</Link>
						</div>
						<div className="col-xl-8 mb-15">	
							<Slider {...settings} className="service-slide slick-arrow-none">
								<div className="slider-item">
									<div className="feature-container feature-bx2 feature1">
										<div className="feature-box-xl mb-30" style={{display:'flex', justifyContent:'center', alignItems:"center"}}>
											<img src={earIcon} alt=''/>
											
										</div>
										<div className="icon-content">
											<h3 className="ttr-title">Øreskylling</h3>
											<p>Ved sekresjon fra ører (for eksempel renning fra dren, ørebetennelse med perforert trommehinne, renning fra øregangseksem) kan det være aktuelt med skylling av øregangen. Legen foreslår fortrinnsvis saltvannskylling</p>
											<Link to="/service-detail" className="btn btn-primary light">Se mer</Link>
										</div>
									</div>
								</div>
								<div className="slider-item">
									<div className="feature-container feature-bx2 feature2">
										<div className="feature-box-xl mb-20">
											<span className="icon-cell">
												<svg enableBackground="new 0 0 512 512" height="80" viewBox="0 0 512 512" width="80" xmlns="http://www.w3.org/2000/svg">
													<g fill="#020288">
														<path d="m311.734 208.706h-25.074v-25.083c0-5.522-4.478-10-10-10h-41.32c-5.523 0-10 4.478-10 10v25.083h-25.074c-5.523 0-10 4.478-10 10v41.33c0 5.522 4.477 10 10 10h25.074v25.082c0 5.522 4.477 10 10 10h41.32c5.522 0 10-4.478 10-10v-25.082h25.074c5.522 0 10-4.478 10-10v-41.33c0-5.522-4.477-10-10-10zm-10 41.33h-25.074c-5.522 0-10 4.478-10 10v25.082h-21.32v-25.082c0-5.522-4.477-10-10-10h-25.074v-21.33h25.074c5.523 0 10-4.478 10-10v-25.083h21.32v25.083c0 5.522 4.478 10 10 10h25.074z"/>
														<path d="m330.566 120.217v-51.05c0-5.522-4.478-10-10-10h-14.759v-49.167c0-5.522-4.478-10-10-10h-79.616c-5.523 0-10 4.478-10 10v49.167h-14.758c-5.523 0-10 4.478-10 10v51.049c-37.43 23.089-62.429 64.475-62.429 111.589v270.195c0 5.522 4.477 10 10 10h253.992c5.522 0 10-4.478 10-10v-270.194c0-47.115-24.999-88.501-62.43-111.589zm-104.374-100.217h19.808v2.559c0 5.522 4.477 10 10 10 5.522 0 10-4.478 10-10v-2.559h19.808v39.167h-59.616zm-24.759 59.167h109.133v30.965c-15.03-6.023-31.427-9.338-48.583-9.338h-11.967c-17.156 0-33.552 3.315-48.583 9.338zm171.563 412.833h-233.992v-260.194c0-61.212 49.8-111.012 111.012-111.012h11.967c61.213 0 111.013 49.8 111.013 111.012z"/>
														<path d="m181.465 350.096h149.069v102.32h-149.069z" fill="#a4fcc4"/>
													</g>
												</svg>
											</span> 
										</div>
										<div className="icon-content">
											<h3 className="ttr-title">Allergier</h3>
											<p>Vi foretar allergitesting og utredninger på vårt kontor, hovedsakelig med tanke på luftveisbårne allergier. Vi tar ikke prøver for matvareallergi og matintoleranser</p>
											<Link to="/service-detail" className="btn btn-primary light">Se mer</Link>
										</div>
									</div>
								</div>
								<div className="slider-item">
									<div className="feature-container feature-bx2 feature3">
										<div className="feature-box-xl mb-20">
											<span className="icon-cell">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 64 64"
												width="64px"
												height="64px"
												fill="#000000"
												>

												<circle cx="32" cy="40" r="18" fill="#f4c2c2" stroke="#333" stroke-width="2" />


												<path
													d="M25 38c2 0 2 0 4 0M35 38c2 0 2 0 4 0"
													fill="none"
													stroke="#333"
													stroke-width="2"
													stroke-linecap="round"
												/>
												<text x="42" y="18" font-size="8" font-family="Arial, sans-serif" font-weight="bold" fill="#333">
													Zzz
												</text>


												<path
													d="M40 25c3 -4 6 -1 8 -5"
													fill="none"
													stroke="#333"
													stroke-width="2"
													stroke-linecap="round"
												/>

												
												<ellipse cx="32" cy="44" rx="4" ry="2" fill="#333" />


												<path
													d="M31 36c0 -2 2 -2 2 0"
													fill="none"
													stroke="#333"
													stroke-width="2"
													stroke-linecap="round"
												/>
												</svg>

											</span> 
										</div>
										<div className="icon-content">
											<h3 className="ttr-title">Snorking</h3>
											<p>Snorking kan være bare lyd, eller det kan være symptom på sykdom. Vi utreder snorking særlig med tanke på å avdekke søvnapné.</p>
											<Link to="/service-detail" className="btn btn-primary light">Se mer</Link>
										</div>
									</div>
								</div>
							</Slider>
						</div>	 
					</div>
					<img className="pt-img1 animate-rotate" src={lineCircleBlue} alt=""/>
					<img className="pt-img2 animate2" src={squareDotsOrange} alt=""/>
					<img className="pt-img3 animate-wave" src={waveBlue} alt=""/>
					<img className="pt-img4 animate1" src={squareRotate} alt=""/>
				</section>
				
			</>
		);
	}
}

export default ServicesSliderSection;