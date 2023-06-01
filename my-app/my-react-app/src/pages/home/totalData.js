import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
ChartJS.register(ArcElement, Tooltip, Legend);
export function TotalData({totalIncomeExpense}){

    const inputData = {
    labels: ['Total income', 'Total expense'],
    datasets: [
        {
            label: '$',
            data: [totalIncomeExpense.totalIncome, totalIncomeExpense.totalExpense],
            backgroundColor: [
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 99, 132, 0.2)',
            ],
            borderColor: [
                'rgba(54, 162, 235, 1)',
                'rgba(255, 99, 132, 1)',
            ],
            borderWidth: 1,
        },
    ],
};

    return (
        <>
        <div style={{paddingLeft: "25%"}}>
            <Doughnut
                    data={inputData}
                    options={{ responsive: false }}
                    width={300}
                    height={300}
                />;
        </div>
        </>
    )

}