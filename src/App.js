import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { Home } from './components/Home';
import { Header } from './components/Header';
import { Banner } from './components/Banner';
import { Footer } from './components/Footer';

const App = () => (
	<div className="app">
		<div>
			<Header />
			<Banner />
		</div>
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="open-day" element={<div></div>} />
		</Routes>
		<Footer />
	</div>
);

export default App;
