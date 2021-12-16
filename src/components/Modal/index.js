import React, { useRef } from 'react';

import './style.scss';

export const Modal = () => {
	const ref = useRef();

	const dispatchModal = () => {
		ref.current.style.display = 'none';
	};

	return <div id="modal-backdrop" ref={ref} style={{ display: 'none' }} onClick={dispatchModal}>
		<div id="modal">
		</div>
	</div>;
};
