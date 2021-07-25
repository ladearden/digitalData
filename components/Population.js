import {Bar, Chart} from 'react-chartjs-2'
import * as Utils from './Utlis'
import ChartDataLabels from 'chartjs-plugin-datalabels';

function Population() {
    Chart.register(ChartDataLabels);

    const population = [
        30313,
        32736,
        35226,
        36486,
        37439,
        38124,
    ]

    const households = [
        11755,	13041,	14177,	14826,	15372,	15810,
    ]

    const labels = [
        '2016',
        '2021',
        '2026',
        '2031',
        '2036',
        '2041',
    ]


    const chartData = {
        labels:labels,
        datasets:[{
            label: 'Total Households',
            data: households,
            backgroundColor: Utils.CHART_COLORS.blue,
        },{
                label: 'Total Population',
                data: population,
                backgroundColor: Utils.CHART_COLORS.purple,
            },
        ]
    }

    return (
        <div>
            <h2>Population Projections</h2>
            <Bar
            data={chartData}
            options={{
                plugins: {
                    legend: {
                        display: true,
                    },
                    title: {
                        display: true,
                        padding: 10,
                        text: 'Total population projections — Armidale Regional LGA'
                    },
                    datalabels: {
                        display: true,
                        color: 'black',
                        anchor: 'end',
                        align: 'top',
                        clamp: true
                     }
                }
            }}
            ></Bar>
        </div>
    )
}

export default Population

