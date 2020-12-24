import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { login, logout, selectUser } from './features/userSlice';
import Feed from './Feed/Feed';
import { auth } from './firebase';
import Header from './Header/Header';
import Login from './Login/Login';
import Sidebar from './Sidebar/Sidebar';
import Widgets from './Widgets/Widgets';
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';
const App = () => {
	const user = useSelector(selectUser);
	const dispatch = useDispatch();

	useEffect(() => {
		auth.onAuthStateChanged((userAuth) => {
			if (userAuth) {
				// user is logged in
				dispatch(
					login({
						email: userAuth.email,
						uid: userAuth.uid,
						displayName: userAuth.displayName,
						photoUrl: userAuth.photoURL
					})
				);
			} else {
				// user is logged out
				dispatch(logout());
			}
		});
	}, []);

	return (
		<>
			<BrowserView>
				<div className="app">
					<Header />
					{!user ? (
						<Login />
					) : (
						<div className="app__body">
							<Sidebar />
							<Feed />
							<Widgets />
						</div>
					)}
				</div>
			</BrowserView>
			<MobileView>
				<h1> Coming soon on mobile...! Open this link in Desktop </h1>
			</MobileView>
		</>
	);
};

export default App;
