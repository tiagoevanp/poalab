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
			<li><Link to="/equipments">Equipamentos</Link></li>
			<li><Link to="/photos">Fotos</Link></li>
			<li><Link to="/calendar">Calendário</Link></li>
			<li><Link to="/links">Links Úteis</Link></li>
		</ul>
	</div>
</nav>;

export const VerticalMenu = () => <div className='vertical-nav-bar'>
	<ul>
		<li><Link to="/">Página Inicial</Link></li>
		<li><Link to="/open-day">Open Day</Link></li>
		<li><Link to="/equipments">Equipamentos</Link></li>
		<li><Link to="/photos">Fotos</Link></li>
		<li><Link to="/calendar">Calendário</Link></li>
		<li><Link to="/links">Links Úteis</Link></li>
	</ul>
</div>;
