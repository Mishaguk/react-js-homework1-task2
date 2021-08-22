import React from 'react';

import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

console.log(styles);

const Statistics = ({ title, label, percentage }) => (
	<div className = {styles.statistics}>
		<h2 className= {styles.title}>{title}</h2>
		<span className = {styles.label}>{label}</span>
		
		<span  className = {styles.percentage}>{percentage}%</span>
	</div>
); 

Statistics.propTypes = {
	title: PropTypes.string,
	label: PropTypes.string.isRequired,
	percentage: PropTypes.number.isRequired,
};

export default Statistics;
