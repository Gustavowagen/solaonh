import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Accordion} from 'react-bootstrap';

// Import Images
import bnrImg1 from "../../images/banner/img1.jpg";
import waveBlue from "../../images/shap/wave-blue.png";
import circleDots from "../../images/shap/circle-dots.png";
import plusBlue from "../../images/shap/plus-blue.png";
import pdf from "../../images/icon/pdf.png";
import doc from "../../images/icon/doc.png";

class ServiceDetail extends Component{
	
	render(){
		return (
			<>
				<div className="page-content bg-white">
					
					<div className="banner-wraper">
						<div className="page-banner" style={{backgroundImage: "url("+bnrImg1+")"}}>
							<div className="container">
								<div className="page-banner-entry text-center">
									<h1>Tjeneste detaljer</h1>
									<nav aria-label="breadcrumb" className="breadcrumb-row">
										<ul className="breadcrumb">
											<li className="breadcrumb-item"><Link to="/"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-home"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg> Hjem</Link></li>
											<li className="breadcrumb-item active" aria-current="page">Tjeneste detaljer</li>
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
								<div className="col-lg-8 mb-30">
									<div className="clearfix">
										<div className="head-text mb-30">
											<h2 className="title mb-15">Hva er øre nese hals?</h2>
											<p className="mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
										</div>
									</div>
									<div className="clearfix">
										<div className="head-text mb-30">
											<h4 className="title mb-10">Vanlige spørsmål</h4>
											<p className="mb-0">Standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
										</div>
										<Accordion defaultActiveKey="0" className="accordion ttr-accordion1">
											<Accordion.Item eventKey="0">
												<Accordion.Header>Spørsmål</Accordion.Header>
												<Accordion.Body>
													<p className="mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
												</Accordion.Body>
											</Accordion.Item>
											<Accordion.Item eventKey="1">
												<Accordion.Header>Spørsmål</Accordion.Header>
												<Accordion.Body>
													<p className="mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
												</Accordion.Body>
											</Accordion.Item>
											<Accordion.Item eventKey="2">
												<Accordion.Header>Spørsmål</Accordion.Header>
												<Accordion.Body>
													<p className="mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
												</Accordion.Body>
											</Accordion.Item>
											<Accordion.Item eventKey="3">
												<Accordion.Header>Spørsmål</Accordion.Header>
												<Accordion.Body>
													<p className="mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
												</Accordion.Body>
											</Accordion.Item>
											<Accordion.Item eventKey="4">
												<Accordion.Header>Spørsmål</Accordion.Header>
												<Accordion.Body>
													<p className="mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
												</Accordion.Body>
											</Accordion.Item>
											<Accordion.Item eventKey="5">
												<Accordion.Header>Spørsmål</Accordion.Header>
												<Accordion.Body>
													<p className="mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
												</Accordion.Body>
											</Accordion.Item>
										</Accordion>
									</div>
								</div>
								<div className="col-lg-4">
									<aside className="sticky-top pb-1">

										<div className="widget">
											<div className="brochure-bx">
												<h5 className="title-head">Nedlasting</h5>
												<Link to="#" className="download-link">
													<img src={pdf} alt=""/>
													<h5 className="title">Brosjyre</h5>
													<span>Last ned</span>
												</Link>
												<Link to="#" className="download-link">
													<img src={doc} alt=""/>
													<h5 className="title">En annen fil</h5>
													<span>Last ned</span>
												</Link>
											</div>
										</div>
										
									</aside>
								</div>
							</div>
						</div>
					</section>
					
				</div>
				
			</>
		);
	}
}

export default ServiceDetail;