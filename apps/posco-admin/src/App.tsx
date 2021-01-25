import React from 'react';
import logo from './logo.svg';
import './App.css';
import { FlexBox } from '@posco/ui/lib/boxes';
import { GlobalTemplate } from '@posco/ui/lib/templates';
function App() {
	return (
		<GlobalTemplate
			header={<div>header</div>}
			menu={<div>menu</div>}
			contents={<div>contents</div>}
		/>
	);
}

export default App;
