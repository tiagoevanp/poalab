import React from 'react';

import ELinks from '../../../resources/externalLinks.json';

export const Links = () => <section className='page-content'>
	<div className='page-content-title'><h1>Links Úteis</h1></div>
	<div className='links'>
		<ul>
			{
				ELinks.useful_links.map((link) => {
					console.log(link);
					return <li key={link}><a className='page-content-link' href={link} target="_blank" rel='noreferrer'>{link}</a></li>;
				})
			}
		</ul>
	</div>
</section>;
