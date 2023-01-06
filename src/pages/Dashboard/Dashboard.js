import React from 'react';
import Footer from '../Shared/Footer';
import NoticeBoard from './NoticeBoard';
import OverdueToReturnList from './OverdueToReturnList';
import PendingToReturnList from './PendingToReturnList';
import Total from './Total';
const Dashboard = () => {
    return (
        <div>
            <NoticeBoard ></NoticeBoard>
            <PendingToReturnList></PendingToReturnList>
            <OverdueToReturnList></OverdueToReturnList>
            <Total></Total>
            <Footer></Footer>
        </div>
    );
};

export default Dashboard;