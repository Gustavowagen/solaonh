import React, { Component } from 'react';

// Import Images
import lingBg2 from "../../images/background/line-bg2.png"
import animate1 from "../../images/shap/trangle-orange.png"
import animate2 from "../../images/shap/square-dots-orange.png"
import animateRotate from "../../images/shap/line-circle-blue.png"
import animateWave from "../../images/shap/wave-blue.png"

import SirenPfp from "../../images/team/Siren pfp.jpg";
import GrethePfp from "../../images/team/Grethe pfp.jpg";
import IngridPfp from "../../images/team/Ingrid pfp.jpg";
import LisbethPfp from "../../images/team/Lisbeth pfp.jpg";
import ThorildPfp from "../../images/team/Thorild pfp.jpg";




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



class LatestNewsSection extends Component{
	render(){
		return(
			<>		
				<section className="section-area section-sp1 blog-area" style={{backgroundImage: "url("+lingBg2+")", backgroundPosition: "center", backgroundSize: "cover",}}>
					<div className="container">
					<div className="row">
											
						
							<div className="container">
								<div className="page-banner-entry text-center">
									<h1>Våre ansatte</h1>

								</div>
							</div>

						
					
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
					
					<img className="pt-img1 animate1" src={animate1} alt=""/>
					<img className="pt-img2 animate2" src={animate2} alt=""/>
					<img className="pt-img3 animate-rotate" src={animateRotate} alt=""/>
					<img className="pt-img4 animate-wave" src={animateWave} alt=""/>
				</section>
				
			</>
		);
	}
}

export default LatestNewsSection;