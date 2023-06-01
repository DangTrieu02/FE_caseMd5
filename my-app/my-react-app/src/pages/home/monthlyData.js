
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


export default function MonthlyData({monthlyIncomeExpense}) {

    const labels = monthlyIncomeExpense.map(item=>`Month ${item.month}`);
    const inputData = {
        labels,
        datasets: [
            {
                label: 'Income',
                data: monthlyIncomeExpense.map((item) => item.totalIncome),
                backgroundColor:  'rgba(255, 206, 86, 0.5)',
            },
            {
                label: 'Expense',
                data: monthlyIncomeExpense.map((item) => item.totalExpense),
                backgroundColor: 'rgba(75, 192, 192, 0.5)',
            },
        ],
    };


    return (
            <div style={{ padding: '0px 0 200 0px', width:"100%",height:"100%"}}>
                <Bar options={options} data={inputData} />
            </div>
    )


}