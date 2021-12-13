import React, { useState } from 'react';

import './style.scss';

export const Banner = () => {
	const [visible, setVisible] = useState(true);

	const closeBanner = () => {
		setVisible(false);
	};

	return <div className='banner' style={{ display: visible ? 'flex' : 'none' }}>
		<div>
		    <p><b>ATENÇÃO: </b>Estamos Mudando de sala! Continuaremos no campus Porto Alegre do IFRS e voltaremos em breve</p>
	    </div>
		<button onClick={closeBanner}>x</button>
	</div>;
};
