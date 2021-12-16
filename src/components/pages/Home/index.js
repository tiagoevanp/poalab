import React from 'react';

import Elinks from '../../../resources/externalLinks.json';

export const Home = () =>
	<section className='page-content'>
		<div className='page-content-title'>
			<h1>POALAB</h1>
		</div>
		<p className='page-content-text'>O POALAB é um laboratório de fabricação digital que está conectado à rede mundial de <a className='page-content-link' target="_blank" rel='noreferrer' href={Elinks.fab_foundation}>fab labs</a> e opera como um programa de extensão do IFRS campus Porto Alegre.<br /><br />
		Temos como missão popularizar o acesso e letramento na fabricação digital, funcionando como uma plataforma de criatividade, aprendizagem e invenção.<br/><br />
		Ser um Fab Lab significa estar conectado a uma comunidade mundial de alunos, educadores, técnicos, pesquisadores e inovadores desenvolvendo atividades dentro da filosofia do conhecimento aberto.</p>
	</section>;
