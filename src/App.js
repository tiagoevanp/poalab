import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { Equipments, Home, OpenDay, Photos, Calendar, Links } from './components/pages';
import { Header } from './components/Header';
import { Banner } from './components/Banner';
import { Footer } from './components/Footer';
import { Modal } from './components/Modal';

const App = () => (
	<div className="app">
		<Modal />
		<div>
			<Header />
			<Banner />
		</div>
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="open-day" element={<OpenDay />} />
			<Route path="equipments" element={<Equipments />} />
			<Route path="photos" element={<Photos />} />
			<Route path="calendar" element={<Calendar />} />
			<Route path="links" element={<Links />} />
		</Routes>
		<Footer />
	</div>
);

export default App;
