import React, { useState, useEffect } from 'react'
import { Line } from 'react-chartjs-2';
import { getSingleCoinHistoricalChart } from '../../services/cryptoApi';

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
)

const chartDays = [{
    label: "1 hrs",
    value: "h1",
},
{
    label: "12 hrs",
    value: "h12",
},
{
    label: "1 day",
    value: "d1",
},
{
    label: "1 Months",
    value: "m1",
},
];

const CoinChart = ({ id }) => {
    const [historicData, setHistoricData] = useState([]);
    const [days, setDays] = useState("h1");



    useEffect(() => {
        getSingleCoinHistoricalChart(id, days).then((data) => {
            setHistoricData(data)
        })
    }, [id, days]);

    // Line Chart data start
    const data = {
        labels: historicData?.data?.map((coin) => {
            let newDate = new Date(coin.date);
            let time =
                newDate.getHours() > 24
                    ? `${newDate.getHours() - 12}:${newDate.getMinutes()} PM`
                    : `${newDate.getHours()}:${newDate.getMinutes()} AM`;
            return days === "h1" || days === "h12" || days === "d1" ? time : newDate.toLocaleDateString();
        }),
        datasets: [
            {
                label: 'Price In USD',
                data: historicData?.data?.map((coin) => coin.priceUsd),
                fill: false,
                backgroundColor: '#0071bd',
                borderColor: '#0071bd',
            },
        ],
    };

    const options = {
        elements: {
            point: {
                radius: 1,
            },
        },
    };
    // Line Chart data finish

    return (
        <>
            <Line data={data} options={options} />
            <div className='button-container'>
                {chartDays.map((day) => {
                    let selected = day.value === days
                    return (
                        <button
                            key={day.value}
                            onClick={() => setDays(day.value)}
                            style={{
                                backgroundColor: selected ? "#e6f7ee" : "",
                                color: selected ? "black" : "",
                                fontWeight: selected ? 700 : 500,
                            }}
                        >
                            {day.label}
                        </button>
                    )
                })}
            </div>
        </>
    )
}

export default CoinChart