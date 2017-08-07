import React from 'react';
import ReactDOM from 'react-dom';
import BarHeader from './Components/barheader.js';
import BarFooter from './Components/barfooter.js';

const App = ({barz}) =>
	<div >
		<BarHeader />
		Stuff
		<BarFooter />
	</div>

ReactDOM.render(
 	<App />, document.querySelector('.react-root')
);
