import React from 'react';

import PoaLabLogo from '../../resources/logos/poalab.svg';
import './style.scss';

export const Home = () =>
	<div className='home'>
		<h1>POALAB</h1>
		<img src={PoaLabLogo} alt='Poalab logo'/>
	</div>;
