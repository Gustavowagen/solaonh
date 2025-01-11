import React, { Component } from 'react';

// Import Images
import plusOrange from "../../images/shap/plus-orange.png"
import squareBlue from "../../images/shap/square-blue.png"
import circleDots from "../../images/shap/circle-dots.png"
import circleOrange2 from "../../images/shap/circle-orange-2.png"

class testimonialSection extends Component{
	
	render(){
		return(
			<>
					
				
				<section className="section-area section-sp3 testimonial-wraper">
					<div className="container" style={{display:"flex", alignItems:"center", flexDirection:"column"}}>
						<div className="heading-bx text-center">
							<h6 className="title-ext text-secondary">Sted</h6>
							<h2 className="title m-b0">Hvor er vi?</h2>
							<p style={{color:"black"}}>Kontoret ligger i 2.etasje over COOP MEGA, midt i Solakrossen. Gratis parkering på parkeringsplassen eller i parkeringshuset. Heis og trapp er tilgjengelig fra COOP MEGA. Direkte inngang fra 2. etasje i parkeringshuset.</p>
						</div>
						<div>
							<div className="col-lg-6 text-center">
								<div className="thumb-wraper">
								<div style={{width:"75vw"}}><iframe title='location-map' width="100%" height="600" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=720&amp;height=600&amp;hl=en&amp;q=Solakrossen%2017,%204050%20Sola+(Sola%20%C3%B8re%20nese%20hals%20klinikk)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/">gps systems</a></iframe></div>
								</div>
							</div>
						</div>	 
					</div>
					<img className="pt-img1 animate1" src={plusOrange} alt=""/>
					<img className="pt-img2 animate2" src={squareBlue} alt=""/>
					<img className="pt-img3 animate3" src={circleDots} alt=""/>
					<img className="pt-img4 animate4" src={circleOrange2} alt=""/>
				</section>
				
			</>
		);
	}
}

export default testimonialSection;