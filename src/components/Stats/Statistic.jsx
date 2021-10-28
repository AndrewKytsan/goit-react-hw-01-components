import React from "react";
import PropTypes from "prop-types";
import s from './statistic.module.scss'
import colorGenerator from '../../colorGenerator.js'

const Statistic = ({ title, stats }) => (
    <div className={s.statistics}>
        <h2 className={s.title}>{title}</h2>
        <ul className={s.stat_list}>
            {stats.map((stat) => (
               <li key={stat.id} className={s.item} style={{ backgroundColor: colorGenerator() }}>
        <span className={s.label}>{stat.label}</span>
        <span className={s.percent}>{stat.percentage}%</span>
    </li>
            ))}
        </ul>
    </div>
);

Statistic.defaultProps = {
    title: "Upload stats",
};

Statistic.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.shape({
        id: PropTypes.number.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
    }),
};
export default Statistic;