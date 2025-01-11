import React, { Component } from 'react';
import { BrowserRouter, Routes, Route, Outlet, Navigate } from "react-router-dom";

// Elements
import BackToTop from './elements/back-top';
import PageScrollTop from './elements/page-scroll-top';

// Layout
import Header from "./layout/header";
import Footer from "./layout/footer";

// All Pages Router
import Index from './pages/index';
import AboutUs from './pages/about-us';
import Team from './pages/team';
import Services from './pages/services';
import ServiceDetail from './pages/service-detail';
import Faq from './pages/faq';
import ContactUs from './pages/contact-us';
import Booking from './pages/booking';

class Markup extends Component{

	//<Route path="*" element={<Error />} />
	render(){
		return(
			<>	
			
				{/* {<BrowserRouter basename={'/react/'}> */}
				<BrowserRouter>
					
					<Routes>
						
						<Route element={<ThemeLayout />}>
							<Route path='/' element={<Index />} />
							<Route path='/about-us' element={<AboutUs />} />
							<Route path='/team' element={<Team />} />
							<Route path='/services' element={<Services />} />
							<Route path='/service-detail' element={<ServiceDetail />} />
							<Route path='/faq' element={<Faq />} />
							<Route path='/contact-us' element={<ContactUs />} />
							<Route path='/booking' element={<Booking />} />
							<Route path="*" element={<Navigate to="/" replace />} />
						</Route>
					</Routes>
					
					<PageScrollTop />
					
				</BrowserRouter>
				
				<BackToTop />
				
			</>
		);
	}
}
function ThemeLayout(){
	return(
		<>
			<Header />
			<Outlet />
			<Footer />
		</>
	);
}
export default Markup;