import { Avatar } from '@material-ui/core';
import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
	const recentItem = (topic) => (
		<div class="sidebar__recentItem">
			<span class="sidebar__hash">#</span>
			<p>{topic}</p>
		</div>
	);
	return (
		<div className="sidebar">
			<div class="sidebar__top">
				<img
					src="https:images.unsplash.com/photo-1579546929518-9e396f3cc809?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3jlLWZlZWR8MXx8fGVufDB8fHw%3D&w=1000&q=80"
					alt=""
				/>
				<Avatar className="sidebar__avatar" />
				<h2>Jai</h2>
				<h4>jai@gmail.com</h4>
			</div>

			<div class="sidebar__stats">
				<div class="sidebar__stat">
					<p>Who viewed you</p>
					<p className="sidebar__statNumber">2,542</p>
				</div>
				<div class="sidebar__stat">
					<p>Views on post</p>
					<p className="sidebar__statNumber">2,542</p>
				</div>
			</div>

			<div class="sidebar__bottom">
				<p>Recent</p>
				{recentItem('reactjs')}
				{recentItem('programming')}
				{recentItem('software')}
				{recentItem('developer')}
			</div>
		</div>
	);
};

export default Sidebar;
