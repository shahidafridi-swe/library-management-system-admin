import React from 'react';
import RegAUser from '../Members/RegAUser';
import Footer from '../Shared/Footer';
import NoticeBoard from './NoticeBoard';
import OverdueToReturnList from './OverdueToReturnList';
import PendingToReturnList from './PendingToReturnList';
// import ShowImage from './ShowImage';
import Total from './Total';
const Dashboard = () => {
    return (
        <div>
            <NoticeBoard ></NoticeBoard>
            <PendingToReturnList></PendingToReturnList>
            <OverdueToReturnList></OverdueToReturnList>
            <Total></Total>
            {/* <ShowImage /> */}
            <Footer></Footer>
            <RegAUser/>
        </div>
    );
};

export default Dashboard;