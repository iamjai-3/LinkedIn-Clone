import React from 'react';
import './App.css';
import Feed from './Feed';
import Header from './Header';
import Sidebar from './Sidebar';

const App = () => {
	return (
		<div className="app">
			{/* Header */}
			<Header />
			{/* App Body */}
			<div className="app__body">
				<Sidebar />
				<Feed />
			</div>
			{/* Side Body */}

			{/* Feed */}
			{/* Widgets */}
		</div>
	);
};

export default App;
