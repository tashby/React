import React from 'react';
import ContactsList from './ContactsList';

let contacts = [{
	id: 1,
	name: 'Scott',
	phone: '555 555 5555'
}, {
	id: 2,
	name: 'Courtney',
	phone: '555 111 5555'
},{
	id: 3,
	name: 'Tim',
	phone: '555 888 5555'
},{
	id:4,
	name: 'Jane',
	phone: '555 222 5555'
},
]

class App extends React.component {
	render() {
		console.log(this.props.contacts);
		return (
			<div>
				<h1>Contacts List</h1>
				<ContactsList contacts={this.prop.contacts} />
			</div>
			)
	}
}

React.render(<App contacts={contacts} />, document.getElementById('app'));