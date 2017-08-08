import React from 'react';
import ReactDOM from 'react-dom';
import {Navbar, NavItem, Icon, Dropdown, Button, Footer} from 'react-materialize';

class BarHeader extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<Navbar brand='Barz' className='light-green' waves='light' fixed right>
				<NavItem href='get-started.html'>Get Started</NavItem>
				<NavItem href='components.html'>About Barz</NavItem>
				<NavItem href='#'><Icon left>facebook</Icon></NavItem>
				<NavItem href='#'><Icon left>twitter</Icon></NavItem>
			</Navbar>
		);
	}

}

export default BarHeader;