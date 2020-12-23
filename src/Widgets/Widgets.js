import React from 'react';
import './Widgets.css';
import InfoIcon from '@material-ui/icons/Info';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

const Widgets = () => {
	const newsArticle = (heading, subtitle) => (
		<div class="widgets__article">
			<div class="widgets__articleLeft">
				<FiberManualRecordIcon />
			</div>

			<div class="widgets__articleRight">
				<h4>{heading}</h4>
				<p>{subtitle}</p>
			</div>
		</div>
	);
	return (
		<div className="widgets">
			<div className="widgets__header">
				<h2>LinkedIn News</h2>
				<InfoIcon />
			</div>
			{newsArticle(
				'The Easiest Way To Create Parallax Scrolling With simpleParallax.',
				'SimpleParallax is a very simple and tiny JavaScript library which adds parallax animations on any images.'
			)}
			{newsArticle(
				'The Simplest Way to Add Google Maps to Your Site.',
				'When building a website, you often need to include a map to give people a better sense of direction. '
			)}
			{newsArticle(
				'Converting from Speech to Text with JavaScript.',
				'Its a very powerful browser interface that allows you to record human speech and convert it into text. '
			)}
			{newsArticle(
				'JavaScript Async/Await Explained in 10 Minutes.',
				'Now, with the most recent addition of Async/Await, writing JavaScript code is about to get even better!.'
			)}
		</div>
	);
};

export default Widgets;
