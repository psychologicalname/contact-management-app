import React from 'react';

//components
import LineGraph from '../components/LineGraph';
import Map from '../components/Map';

const Dashboard: React.FC = () => {
    return (
        <div>
            <h1 className='text-lg font-semibold'>COVID-19 Dashboard</h1>
            <div className="my-4">
                <LineGraph />
            </div>
            <div className="mb-6 mt-12">
                <Map />
            </div>
        </div>
    );
};

export default Dashboard;
