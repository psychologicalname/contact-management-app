import React from 'react';
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    TimeScale,
} from 'chart.js';
import 'chartjs-adapter-date-fns';

//hooks
import { useHistoricalData } from '../services/covidDataService';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, TimeScale);

const LineGraph: React.FC = () => {
    const { data } = useHistoricalData();

    const chartData = {
        labels: data ? Object.keys(data.cases) : [],
        datasets: [
            {
                label: 'Cases',
                data: data ? Object.values(data.cases) : [],
                borderColor: 'rgba(75, 192, 192, 1)',
                fill: false,
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'top' as const,
            },
            title: {
                display: true,
                text: 'COVID-19 Cases',
            },
        },
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Date',
                    padding: { top: 10 },

                },
            },
            y: {
                title: {
                    display: true,
                    text: 'Cases',
                    padding: { bottom: 20 },
                },

            },
        },
    }

    return <div className='lg:w-[130vh] lg:h-[80vh]'>
        <Line data={chartData} options={options} />
    </div>
};

export default LineGraph;
