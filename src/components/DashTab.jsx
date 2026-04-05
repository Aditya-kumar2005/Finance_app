import React from 'react';
import SumCards from './SumCards';
import BalChart from './BalChart';
import CatChart from './CatChart';
import Recent from './Recent';

const DashTab = ({ go }) => {
  return <div className="fu"><SumCards/><div className="grid grid-cols-1 lg:grid-cols-5 gap-6 mb-8"><BalChart/><CatChart/></div><Recent go={go}/></div>;
};

export default DashTab;