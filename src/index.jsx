import React from 'react';
import { render as r } from 'react-dom';

class Stars extends React.Component {
	render() {
		return <span>{ Array.from({length: this.props.length}, (v, i) => ++i).map(() =>'⭐️') }</span>
	}
}

r(
	<div>
		<Stars length="55" />
	</div>,
	document.querySelector('.cont')
);
