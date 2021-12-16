import React from 'react';

import './style.scss';

export const Card = ({ img, title, description }) => {
	const openModal = () => {
		const modalBackdropEl = document.getElementById('modal-backdrop');
		const modalEl = document.getElementById('modal');
		console.log(img.src);
		modalEl.style.backgroundImage = `url('${ img.src }')`;
		modalBackdropEl.style.display = 'flex';
	};

	return <div onClick={openModal} className='card' title={title}>
		<img src={img.src} alt={img.alt}/>
		<div className='card-text'>
			<p className='card-title'>{title}</p>
			<p className='card-description'>{description}</p>
		</div>
	</div>;
};
