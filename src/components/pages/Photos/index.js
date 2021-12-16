import React from 'react';

import { PhotoCard } from '../../Card';
import Photo1 from '../../../resources/photos/DSC_4915.jpeg';
import Photo2 from '../../../resources/photos/DSC_4916.jpeg';
import Photo3 from '../../../resources/photos/DSC_4917.jpeg';
import Photo4 from '../../../resources/photos/DSC_4944.JPG.jpg';
import './style.scss';

export const Photos = () =>
	<section className='page-content'>
		<div className='page-content-title'><h1>Fotos</h1></div>
		<div className='photos'>
			<PhotoCard src={Photo1} />
			<PhotoCard src={Photo2} />
			<PhotoCard src={Photo3} />
			<PhotoCard src={Photo4} />
		</div>
	</section>;
