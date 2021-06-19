import ChartBar from "./ChartBar";

import './Chart.css'

const Chart = (props) => {
    const arrayValues = props.dataPoints.map(dataPoint => dataPoint.value)
    const totalMaximum = Math.max(...arrayValues)
    return(
        <div className='chart'>
            {arrayValues}
            {props.dataPoints.map(dataPoint =>
                <ChartBar key={dataPoint.label}
                          value={dataPoint.value}
                          maxValue={totalMaximum}
                          label={dataPoint.label}/>)}
        </div>
    )
}

export default Chart