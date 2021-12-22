import { IFrappeChartsProps } from '@modal/charts.modal'
import ReactFrappeChart from 'react-frappe-charts'

export default function FrappeCharts(props: IFrappeChartsProps): JSX.Element {
  return (
    <ReactFrappeChart
      type={props.type}
      colors={props.colors}
      axisOptions={props.axisOptions}
      height={props.height}
      data={props?.data}
      valuesOverPoints={props.valuesOverPoints}
      truncateLegends={props.truncateLegends}
      isNavigable={props.isNavigable}
      animate={props.animate}
      lineOptions={props.lineOptions}
      barOptions={props.barOptions}
      maxSlices={props.maxSlices}
      title={props.title}
      tooltipOptions={props.tooltipOptions}
    />
  )
}
