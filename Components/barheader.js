import React from 'react';
import ReactDOM from 'react-dom';
import {Navbar, NavItem, Icon, Dropdown, Button, Footer} from 'react-materialize';
import FacebookLogin from 'react-facebook-login';

class BarHeader extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			logged_in : false,
			user : null
		}
		this._responseFacebook = this._responseFacebook.bind(this);
	}

	_responseFacebook(response) {
  		var user = {
  			email : response.email,
  			name : response.name,
  			image_url : response.picture.data.url,
  			fbid : response.id,
  			fbtoken : response.accessToken,
  			expires : response.expiresIn
  		}
  		console.log(user);
  		this.setState({
  			logged_in : true,
  			user : user
  		})
	}

	render() {
		let fbsection = null;
		if(this.state.logged_in){
			fbsection = (
				<div>
					<img src={this.state.user.image_url} />
				</div>
			);
		} else {
			fbsection = (
				<FacebookLogin
    				appId="122640771697325"
    				autoLoad={true}
    				fields="name,email,picture"
    				callback={this._responseFacebook}
    				cssClass="my-facebook-button-class"
    				icon="fa-facebook"
  				/>
  			);
		}

		return (
			<Navbar brand='Barz' className='light-green' waves='light' fixed right>
				<NavItem href='get-started.html'>Get Started</NavItem>
				<NavItem href='components.html'>About Barz</NavItem>
				<NavItem href='#'>
					{fbsection}
  				</NavItem>
				<NavItem href='#'><Icon left>twitter</Icon></NavItem>
			</Navbar>
		);
	}

}

export default BarHeader;