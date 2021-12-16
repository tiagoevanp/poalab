import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { Equipments, Home, OpenDay } from './components/pages';
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
		</Routes>
		<Footer />
	</div>
);

export default App;
