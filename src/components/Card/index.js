import React from 'react';

import './style.scss';

export const Card = ({ img, title, description }) => <div className='card' title={title}>
	<img src={img.src} alt={img.alt}/>
	<div className='card-text'>
		<p className='card-title'>{title}</p>
		<p className='card-description'>{description}</p>
	</div>
</div>;
