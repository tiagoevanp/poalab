import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { Home } from './components/Home';
import { Header } from './components/Header';

const App = () => (
	<div className="app">
		<Header />
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="open-day" element={<div></div>} />
      	</Routes>
	</div>
);

export default App;
