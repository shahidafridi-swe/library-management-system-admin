import React from 'react';
import Footer from '../Shared/Footer';
import NoticeBoard from './NoticeBoard';
import OverdueToReturnList from './OverdueToReturnList';
import PendingToReturnList from './PendingToReturnList';
import ShowImage from './ShowImage';
import Total from './Total';
const Dashboard = () => {
    return (
        <div>
            <NoticeBoard ></NoticeBoard>
            <PendingToReturnList></PendingToReturnList>
            <OverdueToReturnList></OverdueToReturnList>
            <Total></Total>
            <ShowImage />
            <Footer></Footer>
        </div>
    );
};

export default Dashboard;