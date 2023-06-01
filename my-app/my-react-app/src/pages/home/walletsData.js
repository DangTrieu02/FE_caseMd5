import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top'
        },
        title: {
            display: true,
            text: 'Chart.js Bar Chart',
        },
    },
};


export function WalletsData({walletsIncomeExpense}) {
    const labels = walletsIncomeExpense.map(item=>item.name);
    const inputData = {
        labels,
        datasets: [
            {
                label: 'Income',
                data: walletsIncomeExpense.map((item) => item.income),
                backgroundColor:  'rgba(255, 206, 86, 0.5)',
            },
            {
                label: 'Expense',
                data: walletsIncomeExpense.map((item) => item.expense),
                backgroundColor: 'rgba(75, 192, 192, 0.5)',
            },
        ],
    };

    return (
        <div style={{ paddingLeft: '20%', width: "100%", height: "100%" }}>
            <Bar options={options} data={inputData} options={{ responsive: false }} width={300} height={300}/>
        </div>
    )

}