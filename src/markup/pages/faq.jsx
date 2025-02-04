import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Accordion} from 'react-bootstrap';

// Import Images
import bnrImg1 from "../../images/banner/img1.jpg";
import waveBlue from "../../images/shap/wave-blue.png";
import circleDots from "../../images/shap/circle-dots.png";
import plusBlue from "../../images/shap/plus-blue.png";

class Faq extends Component{
	
	render(){
		return (
			<>
				<div className="page-content bg-white">
					<div className="banner-wraper">
						<div className="page-banner" style={{backgroundImage: "url("+bnrImg1+")"}}>
							<div className="container">
								<div className="page-banner-entry text-center">
									<h1>Vanlige spørsmål</h1>
									<nav aria-label="breadcrumb" className="breadcrumb-row">
										<ul className="breadcrumb">
											<li className="breadcrumb-item"><Link to="/"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-home"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg> Home</Link></li>
											<li className="breadcrumb-item active" aria-current="page">Vanlige spørsmål</li>
										</ul>
									</nav>
								</div>
							</div>
							<img className="pt-img1 animate-wave" src={waveBlue} alt=""/>
							<img className="pt-img2 animate2" src={circleDots} alt=""/>
							<img className="pt-img3 animate-rotate" src={plusBlue} alt=""/>
						</div>
					</div>
					
					<section className="section-sp3">
						<div className="container">
							<div className="row">
								<div className="col-lg-6">
									<Accordion defaultActiveKey="0" className="accordion ttr-accordion1">
										<Accordion.Item eventKey="0">
											<Accordion.Header>Spørsmål</Accordion.Header>
											<Accordion.Body>
												<p className="mb-0">Svar</p>
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
								<div className="col-lg-6">
									<Accordion defaultActiveKey="2" className="accordion ttr-accordion1">
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
						</div>
					</section>
				</div>
			
			</>
		);
	}
}

export default Faq;