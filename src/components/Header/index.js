import React from 'react';
import { Link } from 'react-router-dom';

import PoaLabLogo from '../../resources/logos/poalab.svg';
import './style.scss';

export const Header = () => <nav className='nav-bar'>
	<div className='logo'>
		<img src={PoaLabLogo} alt='Poalab logo'/>
		<p>POALAB</p>
	</div>
	<div className='items'>
		<ul>
			<li><Link to="/">Página Inicial</Link></li>
			<li><Link to="/open-day">Open Day</Link></li>
			<li><a href='#'>Equipamentos</a></li>
			<li><a href='#'>Fotos</a></li>
			<li><a href='#'>Calendário</a></li>
			<li><a href='#'>Links Úteis</a></li>
		</ul>
	</div>

</nav>;
