import React, {Component} from 'react';
import {Link} from 'react-router-dom';

// Import Images
import bnrImg1 from "../../images/banner/img1.jpg";
import waveBlue from "../../images/shap/wave-blue.png";
import circleDots from "../../images/shap/circle-dots.png";
import plusBlue from "../../images/shap/plus-blue.png";
import "./booking.css";

class Booking extends Component{
	
	render(){
		return (
			<>
				
				<div className="page-content bg-white">
					
					<div className="banner-wraper">
						<div className="page-banner" style={{backgroundImage: "url("+bnrImg1+")"}}>
							<div className="container">
								<div className="page-banner-entry text-center">
									<h1>Time</h1>
									<nav aria-label="breadcrumb" className="breadcrumb-row">
										<ul className="breadcrumb">
											<li className="breadcrumb-item"><Link to="/"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-home"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg> Hjem</Link></li>
											<li className="breadcrumb-item active" aria-current="page">Time</li>
										</ul>
									</nav>
								</div>
							</div>
							<img className="pt-img1 animate-wave" src={waveBlue} alt=""/>
							<img className="pt-img2 animate2" src={circleDots} alt=""/>
							<img className="pt-img3 animate-rotate" src={plusBlue} alt=""/>
						</div>
					</div>
				
					<section className="section-area section-sp2 appointment-wraper">
						<div id='center-div-booking'>
							<div id="booking-container">
								<p>Du må være henvist fra egen lege/fastlege for å få time hos oss! Legen din sender en henvisning til oss med relevante opplysninger. Ut fra disse opplysninger vurderer vi hastegrad, tidsbehov og setter opp avtale hos ØNH legen. Er du henvist til utredning som krever hørselstest, innebærer det time både hos audiograf(hørselsmåler) og lege.</p>
								<br />
								<p>Du får SMS'er med dato, klokkeslett og link til innkallingsbrev fra oss når du er satt opp til time. Det er lurt at du sjekker at legen din har riktig adresse og telefonnummer til deg i sin journal.</p>
								<br />
								<p>Er du over 75 år får du innkalling pr brev.</p>
								<br />
								<p>Skulle timen ikke passe for deg, bør du kontakte oss snarest :  <a href='contact-us'>Kontaktinformasjon</a></p>
							</div>			
						</div>
					</section>
					
				</div>
			
			</>
		);
	}
}

export default Booking;