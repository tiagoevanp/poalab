import React from 'react';

import PoaLabLogo from '../../resources/logos/poalab.svg';
import './style.scss';

export const Home = () =>
	<section className='home'>
		<h1>POALAB</h1>
		<img src={PoaLabLogo} alt='Poalab logo'/>
		<p>O POALAB é um laboratório de fabricação digital e está conectado à rede mundial de fab labs. Opera como um programa de extensão do IFRS campus Porto Alegre. Temos como missão popularizar o acesso e letramento na fabricação digital, funcionando como uma plataforma de criatividade, aprendizagem e invenção. Ser um Fab Lab significa estar conectado a uma comunidade mundial de alunos, educadores, técnicos, pesquisadores e inovadores e desenvolver atividades dentro da filosofia do conhecimento aberto. Conheça a FAB CHARTER A Carta de Intenções que regra os Fab Labs</p>
	</section>;
