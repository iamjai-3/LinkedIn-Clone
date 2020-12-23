import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import HeaderOption from './HeaderOption';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationIcon from '@material-ui/icons/Notifications';
import Img from '../Jai.jpeg';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from '../features/userSlice';
import { auth } from '../firebase';

const Header = () => {
	const dispatch = useDispatch();
	const user = useSelector(selectUser);

	const logoutOfApp = () => {
		dispatch(logout());
		auth.signOut();
	};

	return (
		<div className="header">
			{/* Header Left */}
			<div className="header__left">
				<img src="https://www.flaticon.com/svg/static/icons/svg/174/174857.svg" alt="" />
				<div class="header__search">
					<SearchIcon />
					<input placeholder="Search" type="text" />
				</div>
			</div>
			{/* Header Right */}
			<div className="header__right">
				<HeaderOption Icon={HomeIcon} title="Home" />
				<HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
				<HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
				<HeaderOption Icon={ChatIcon} title="Messaging" />
				<HeaderOption Icon={NotificationIcon} title="Notifications" />
				<HeaderOption avatar={true} title="Click to Logout" onClick={logoutOfApp} />
				{/* avatar={user.photoUrl} */}
			</div>
		</div>
	);
};

export default Header;
