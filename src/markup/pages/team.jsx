import React, {Component} from 'react';
import { Link } from 'react-router-dom';

// Import Images
import bnrImg1 from "../../images/banner/img1.jpg";
import trangleOrange from "../../images/shap/trangle-orange.png";
import squareDotsOrange from "../../images/shap/square-dots-orange.png";
import lineCircleBlue from "../../images/shap/line-circle-blue.png";
import waveBlue from "../../images/shap/wave-blue.png";
import circleDots from "../../images/shap/circle-dots.png";
import plusBlue from "../../images/shap/circle-dots.png";
import SirenPfp from "../../images/team/Siren pfp.jpg";
import GrethePfp from "../../images/team/Grethe pfp.jpg";
import IngridPfp from "../../images/team/Ingrid pfp.jpg";
import LisbethPfp from "../../images/team/Lisbeth pfp.jpg";
import ThorildPfp from "../../images/team/Thorild pfp.jpg";

// Team Content
const teamMembers = [
	{ 
		thumb: SirenPfp,
		title: "Siren M. Hægeland",		
		subtitle: "Spesialist i øre, nese og halssykdom",
		socialMedia: [
			{ platform: 'Twitter', link: 'https://twitter.com/' },
			{ platform: 'LinkedIn', link: 'https://www.linkedin.com/' },
			{ platform: 'Instagram', link: 'https://www.instagram.com/' },
		],
	},
	{ 
		thumb: GrethePfp,
		title: "Grethe",		
		subtitle: "Audiograf",
		socialMedia: [
			{ platform: 'Twitter', link: 'https://twitter.com/' },
			{ platform: 'LinkedIn', link: 'https://www.linkedin.com/' },
			{ platform: 'Instagram', link: 'https://www.instagram.com/' },
		],
	},
	{ 
		thumb: IngridPfp,
		title: "Ingrid",		
		subtitle: "Audiograf",
		socialMedia: [
			{ platform: 'Twitter', link: 'https://twitter.com/' },
			{ platform: 'LinkedIn', link: 'https://www.linkedin.com/' },
			{ platform: 'Instagram', link: 'https://www.instagram.com/' },
		],
	},
	{ 
		thumb: LisbethPfp,
		title: "Lisbeth",		
		subtitle: "Audiograf",
		socialMedia: [
			{ platform: 'Twitter', link: 'https://twitter.com/' },
			{ platform: 'LinkedIn', link: 'https://www.linkedin.com/' },
			{ platform: 'Instagram', link: 'https://www.instagram.com/' },
		],
	},
	{ 
		thumb: ThorildPfp,
		title: "Thorild",		
		subtitle: "Sekretær",
		socialMedia: [
			{ platform: 'Twitter', link: 'https://twitter.com/' },
			{ platform: 'LinkedIn', link: 'https://www.linkedin.com/' },
			{ platform: 'Instagram', link: 'https://www.instagram.com/' },
		],
	},
]

class Team extends Component{
	
	render(){
		return (
			<>
				
				<div className="page-content bg-white">
					
					<div className="banner-wraper">
						<div className="page-banner" style={{backgroundImage: "url("+bnrImg1+")"}}>
							<div className="container">
								<div className="page-banner-entry text-center">
									<h1>Våre ansatte</h1>
									<nav aria-label="breadcrumb" className="breadcrumb-row">
										<ul className="breadcrumb">
											<li className="breadcrumb-item"><Link to="/"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-home"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg> Hjem</Link></li>
											<li className="breadcrumb-item active" aria-current="page">Våre ansatte</li>
										</ul>
									</nav>
								</div>
							</div>
							<img className="pt-img1 animate-wave" src={waveBlue} alt=""/>
							<img className="pt-img2 animate2" src={circleDots} alt=""/>
							<img className="pt-img3 animate-rotate" src={plusBlue} alt=""/>
						</div>
					</div>
					
					<section className="section-area section-sp1 team-wraper">
						<div className="container">
							<div className="row">
								{teamMembers.map((teamMember, index) =>(
									<div key={index} className="col-lg-4 col-sm-6">
										<div className="team-member mb-30">
											<div className="team-media">
												<img src={teamMember.thumb} alt=""/>
											</div>
											<div className="team-info">
												<div className="team-info-comntent">
													<h4 className="title">{teamMember.title}</h4>
													<span className="text-secondary">{teamMember.subtitle}</span>
												</div>
												<ul className="social-media mt-3">
												{teamMember.socialMedia.map((social, index) => (
													<li key={index}>
														<a rel="noreferrer" target="_blank" href={social.link}>
															<i className={`fab fa-${social.platform.toLowerCase()}`} />
														</a>
													</li>
												))}
											</ul>
											</div>
										</div>
									</div>
								))}
							</div>
						</div>
						
						<img className="pt-img1 animate1" src={trangleOrange} alt=""/>
						
						<img className="pt-img2 animate2" src={squareDotsOrange} alt=""/>
						
						<img className="pt-img3 animate-rotate" src={lineCircleBlue} alt=""/>
						
						<img className="pt-img4 animate-wave" src={waveBlue} alt=""/>
						
						<img className="pt-img5 animate-wave" src={plusBlue} alt=""/>
						
					</section>
					
				</div>
				
			</>
		);
	}
}

export default Team;