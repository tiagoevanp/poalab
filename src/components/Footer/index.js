import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faYoutubeSquare } from '@fortawesome/free-brands-svg-icons';

import IfrsLogo from '../../resources/logos/ifrs.svg';
import './style.scss';

export const Footer = () => <footer>
	<div className='ifrs-logo'>
	    <img src={IfrsLogo} alt='Logo IFRS' />
	</div>
	<div>
		<p> Coordenação: André Peres - andre.peres@poa.ifrs.edu.br </p>
		<p>R. Cel. Vicente, 281 Sala 1016 - Torre Sul<br />Centro Histórico - Porto Alegre/RS<br />CEP: 90030-041</p>
	</div>
	<div className='channels'>
		<p>Canais:</p>
		<div className='links'>
			<a href="#"><FontAwesomeIcon title='Facebook' icon={faFacebookSquare} color='blue' size='3x'/></a>
			<a href="#"><FontAwesomeIcon title='Youtube' icon={faYoutubeSquare} color='red' size='3x'/></a>
		</div>
	</div>
</footer>;
