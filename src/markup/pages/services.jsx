import React, {Component} from 'react';
import { Link } from 'react-router-dom';

// Import Images
import bnrImg1 from "../../images/banner/img1.jpg";
import waveBlue from "../../images/shap/wave-blue.png";
import circleDots from "../../images/shap/circle-dots.png";
import plusBlue from "../../images/shap/plus-blue.png";
import earIcon from "../../images/icon/ear_no_bg.png";
import hearingAid from "../../images/icon/Hearing aid.png";


class Services extends Component{
	
	render(){
		return (
			<>
				<div className="page-content bg-white">
					<div className="banner-wraper">
						<div className="page-banner" style={{backgroundImage: "url("+bnrImg1+")"}}>
							<div className="container">
								<div className="page-banner-entry text-center">
									<h1>Tjenester</h1>
									<nav aria-label="breadcrumb" className="breadcrumb-row">
										<ul className="breadcrumb">
											<li className="breadcrumb-item"><Link to="/"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-home"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg> Hjem</Link></li>
											<li className="breadcrumb-item active" aria-current="page">Tjenester</li>
										</ul>
									</nav>
								</div>
							</div>
							<img className="pt-img1 animate-wave" src={waveBlue} alt=""/>
							<img className="pt-img2 animate2" src={circleDots} alt=""/>
							<img className="pt-img3 animate-rotate" src={plusBlue} alt=""/>
						</div>
					</div>
					
					<section className="section-area section-sp1">
						<div className="container">
							<div className="row">
								<div className="col-lg-4 col-md-6 mb-30">
									<div className="feature-container feature-bx2 feature1">
										<div className="feature-box-xl mb-20">
										<img src={earIcon} alt=''/>
										</div>
										<div className="icon-content">
											<h3 className="ttr-title">Øreskylling</h3>
											<p>Ved sekresjon fra ører (for eksempel renning fra dren, ørebetennelse med perforert trommehinne, renning fra øregangseksem) kan det være aktuelt med skylling av øregangen. Legen foreslår fortrinnsvis saltvannskylling</p>
											<Link to="/service-detail" className="btn btn-primary light">View More</Link>
										</div>
									</div>
								</div>
								<div className="col-lg-4 col-md-6 mb-30">
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
											<h3 className="ttr-title">Allergiutredninger</h3>
											<p>Vi foretar allergitesting og utredninger på vårt kontor, hovedsakelig med tanke på luftveisbårne allergier. Vi tar ikke prøver for matvareallergi og matintoleranser</p>
											<Link to="/service-detail" className="btn btn-primary light">View More</Link>
										</div>
									</div>
								</div>
								<div className="col-lg-4 col-md-6 mb-30">
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
											<Link to="/service-detail" className="btn btn-primary light">View More</Link>
										</div>
									</div>
								</div>
								<div className="col-lg-4 col-md-6 mb-30">
									<div className="feature-container feature-bx2 feature2">
										<div className="feature-box-xl mb-20">
											<img src={hearingAid} alt=''/> 
										</div>
										<div className="icon-content">
											<h3 className="ttr-title">Hørselsmålinger og høreapparater</h3>
											<p>Hørselsmåling og eventuelt tilpasning av høreapparat foregår etter henvisning fra din lege, med de medisinske opplysninger som fremkommer i legens brev (tidligere øresykdommer, larmpåvirkning osv.) Du vil bli tilskrevet om kombinert time hvor du både skal til audiograf for hørselsmåling og så til dr. Hægeland for vurdering av resultatet.</p>
											<Link to="/service-detail" className="btn btn-primary light">View More</Link>
										</div>
									</div>
								</div>
								<div className="col-lg-4 col-md-6 mb-30">
									<div className="feature-container feature-bx2 feature3">
										<div className="feature-box-xl mb-20">
											<span className="icon-cell">
												<svg enableBackground="new 0 0 512 512" height="85" viewBox="0 0 512 512" width="85" xmlns="http://www.w3.org/2000/svg">	
													<path d="m181.049 229.112-76.87 76.971c-14.045 14.07-14.045 36.883 0 50.953l50.881 50.974c14.045 14.07 36.815 14.07 50.86 0l178.611-178.899h-203.482z" fill="#e2c4ff"/>
													<path d="m495.277 81.339c-10.57-10.578-24.625-16.403-39.574-16.403-3.325 0-6.605.288-9.813.853 3.065-17.397-2.103-35.975-15.505-49.387-10.57-10.577-24.624-16.402-39.574-16.402s-29.003 5.825-39.573 16.402c-21.816 21.83-21.816 57.352 0 79.182 2.71 2.712 5.648 5.111 8.772 7.18l-18.689 18.716-52.105-52.184c-3.902-3.907-10.233-3.912-14.142-.012-3.908 3.902-3.914 10.234-.011 14.143l18.64 18.67-196.602 196.922c-17.56 17.593-17.902 46.002-1.029 64.017l-16.422 16.452c-3.896 3.903-3.896 10.226 0 14.129l12.383 12.406-88.75 88.913c-3.901 3.909-3.896 10.24.013 14.142 1.953 1.948 4.509 2.922 7.065 2.922 2.562 0 5.125-.979 7.078-2.936l88.724-88.887 12.357 12.38c1.876 1.88 4.422 2.936 7.078 2.936s5.202-1.056 7.078-2.936l16.396-16.426c8.547 8.028 19.644 12.432 31.418 12.432 12.28 0 23.825-4.79 32.506-13.487l196.588-196.91 18.617 18.648c1.953 1.956 4.515 2.935 7.077 2.935 2.557 0 5.113-.975 7.065-2.923 3.908-3.902 3.914-10.234.011-14.143l-52.155-52.24 18.732-18.758c2.054 3.126 4.453 6.09 7.198 8.836 10.57 10.577 24.624 16.402 39.573 16.402s29.003-5.825 39.574-16.402c21.817-21.831 21.817-57.352.001-79.182zm-129.892-50.8c6.792-6.796 15.822-10.539 25.426-10.539s18.635 3.743 25.427 10.539c13.407 13.416 13.997 34.875 1.773 49.001-.638.583-1.266 1.183-1.881 1.799-.616.617-1.214 1.245-1.795 1.882-6.533 5.671-14.791 8.766-23.524 8.766-9.604 0-18.634-3.743-25.427-10.54-14.025-14.035-14.025-36.873.001-50.908zm-239.787 380.799-24.74-24.786 9.327-9.344 14.287 14.313 10.454 10.473zm73.244-10.392c-4.903 4.912-11.42 7.617-18.352 7.617s-13.449-2.705-18.353-7.617l-50.881-50.975c-10.134-10.152-10.134-26.672-.001-36.823l196.578-196.898 87.616 87.767zm177.227-244.657-20.619-20.654 24.634-24.669c3.498.676 7.086 1.021 10.727 1.021 3.325 0 6.606-.288 9.813-.853-1.189 6.75-1.139 13.678.151 20.413zm105.062-9.905c-6.792 6.796-15.823 10.539-25.427 10.539s-18.635-3.743-25.427-10.539c-13.407-13.416-13.998-34.875-1.773-49.001.638-.583 1.266-1.183 1.881-1.799.617-.617 1.215-1.246 1.797-1.884 6.532-5.67 14.789-8.764 23.521-8.764 9.604 0 18.635 3.743 25.427 10.54 14.026 14.035 14.026 36.873.001 50.908z" fill="#020288"/>
												</svg>
											</span> 
										</div>
										<div className="icon-content">
											<h3 className="ttr-title">Annen ting</h3>
											<p>Eksempeltekst</p>
											<Link to="/service-detail" className="btn btn-primary light">View More</Link>
										</div>
									</div>
								</div>
								<div className="col-lg-4 col-md-6 mb-30">
									<div className="feature-container feature-bx2 feature1">
										<div className="feature-box-xl mb-20">
											<span className="icon-cell">
												<svg enableBackground="new 0 0 512 512" height="85" viewBox="0 0 512 512" width="85" xmlns="http://www.w3.org/2000/svg">
													<path d="m351.524 124.49h-37.907v-37.907h-44.657v37.907h-37.906v44.657h37.906v37.907h44.657v-37.907h37.907z" fill="#a4fcc4"/>
													<path d="m291.289 279.415c73.114 0 132.597-59.482 132.597-132.597s-59.483-132.596-132.597-132.596-132.598 59.482-132.598 132.596 59.484 132.597 132.598 132.597zm0-245.193c62.086 0 112.597 50.511 112.597 112.597s-50.511 112.597-112.597 112.597c-62.087 0-112.598-50.511-112.598-112.597s50.511-112.597 112.598-112.597z"/>
													<path d="m502 267.736c-32.668 0-59.245 26.577-59.245 59.245v13.605h-240.266v-19.048c0-23.625-19.221-42.846-42.846-42.846h-90.398v-17.584c0-32.668-26.577-59.245-59.245-59.245-5.522 0-10 4.478-10 10v275.914c0 5.522 4.478 10 10 10h49.245c5.522 0 10-4.478 10-10v-39.327h373.51v39.327c0 5.522 4.478 10 10 10h49.245c5.522 0 10-4.478 10-10v-210.041c0-5.522-4.478-10-10-10zm-342.356 30.957c12.598 0 22.846 10.249 22.846 22.846v19.048h-113.245v-41.894zm-110.399 179.085h-29.245v-254.623c16.812 4.434 29.245 19.77 29.245 37.954zm20-49.327v-67.864h373.51v67.864zm422.755 49.327h-29.245v-150.797c0-18.185 12.434-33.521 29.245-37.954z"/>
												</svg>
											</span> 
										</div>
										<div className="icon-content">
											<h3 className="ttr-title">Annen ting</h3>
											<p>Eksempeltekst</p>
											<Link to="/service-detail" className="btn btn-primary light">View More</Link>
										</div>
									</div>
								</div>
							</div>	
						</div>
					</section>
					
				</div>
				
			</>
		);
	}
}

export default Services;