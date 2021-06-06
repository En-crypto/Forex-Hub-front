import * as React from 'react';
import Paper from '@material-ui/core/Paper';

import {
    ArgumentAxis,
    ValueAxis,
    Chart,
    LineSeries,
} from '@devexpress/dx-react-chart-material-ui';

export default function LineChart() {
    return(
        <Paper className = 'chart'>
        <Chart
            data={[
                { argument: 1, value: 10 },
                { argument: 2, value: 500 },
                { argument: 3, value: 30 },
            ]}
            easing = {( number ) => 1000}	
            duration='10000'
        >
            <ArgumentAxis />
            <ValueAxis />

            <LineSeries valueField="value" argumentField="argument" />
        </Chart>
    </Paper>
    )

}