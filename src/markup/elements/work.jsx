import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Import Images
import bg1 from '../../images/background/line-bg1.png';
import ptImg2 from '../../images/shap/plus-orange.png';

class aboutSection extends Component{
	render(){
		return(
			<>
				
				<section className="section-area section-sp5 work-area" style={{backgroundImage: "url("+bg1+")", backgroundRepeat:" no-repeat", backgroundPosition: "center", backgroundSize: "100%"}}>
					
					
					<img className="pt-img2 animate2" src={ptImg2} alt=""/>
				</section>
				
			</>
		);
	}
}

export default aboutSection;