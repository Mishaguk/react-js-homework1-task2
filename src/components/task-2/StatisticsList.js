import React from 'react';
import Statistics from './Statistics';
import styles from './Statistics.module.css';



const StatisticsList = ({ title, stats }) => 
(
	
	<ul className= {styles.hr}>
		<h2>{title}</h2>
		{stats.map(item => (
			<li key= {item.id}>
				
				<Statistics {...item} />
				</li>
		))}
	</ul>
);
export default StatisticsList;