import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faYoutubeSquare } from '@fortawesome/free-brands-svg-icons';

import IfrsLogo from '../../resources/logos/ifrs.jpeg';
import ELinks from '../../resources/externalLinks.json';
import './style.scss';

export const Footer = () => <footer>
	<div className='ifrs-logo'>
	    <img src={IfrsLogo} alt='Logo IFRS' />
	</div>
	<div className='channels'>
		<a target='_blank' rel='noreferrer' href={ELinks.facebook_poalab}><FontAwesomeIcon title='Facebook' icon={faFacebookSquare} color='blue' size='3x'/></a>
		<a target='_blank' rel='noreferrer' href={ELinks.youtube_poalab}><FontAwesomeIcon title='Youtube' icon={faYoutubeSquare} color='red' size='3x'/></a>
	</div>
	<div>
		<p>Coordenação: André Peres - andre.peres@poa.ifrs.edu.br</p>
		<p>R. Cel. Vicente, 281 Sala 1016 - Torre Sul<br />Centro Histórico - Porto Alegre/RS<br />CEP: 90030-041</p>
	</div>
</footer>;
