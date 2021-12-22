export declare type ChartType = 'line' | 'bar' | 'axis-mixed' | 'pie' | 'percentage' | 'heatmap'
export declare type AxisMode = 'span' | 'tick'
export declare type ChartData = {
  labels?: Array<string>
  datasets?: Array<Datasets>
  dataPoints?: {
    [x: string]: number
  }
  start?: Date
  end?: Date
}
export declare type Datasets = {
  name?: string
  chartType?: ChartType
  values: Array<number>
}
export declare type SelectEvent = {
  label: string
  values: number[]
  index: number
}
export declare type TooltipOptions = {
  formatTooltipX?: (value: number) => any
  formatTooltipY?: (value: number) => any
}
export declare type IFrappeChartsProps = {
  animate?: 0 | 1
  title?: string
  type?: ChartType
  data: ChartData
  height?: number
  colors?: Array<string>
  axisOptions?: {
    xAxisMode?: AxisMode
    yAxisMode?: AxisMode
    xIsSeries?: 0 | 1
  }
  barOptions?: {
    spaceRatio?: number
    stacked?: 0 | 1
    height?: number
    depth?: number
  }
  lineOptions?: {
    dotSize?: number
    hideLine?: 0 | 1
    hideDots?: 0 | 1
    heatline?: 0 | 1
    regionFill?: number
    areaFill?: number
    spline?: 0 | 1
  }
  isNavigable?: boolean
  maxSlices?: number
  truncateLegends?: 0 | 1
  tooltipOptions?: TooltipOptions
  onDataSelect?: (event: SelectEvent) => void
  valuesOverPoints?: 0 | 1
}
