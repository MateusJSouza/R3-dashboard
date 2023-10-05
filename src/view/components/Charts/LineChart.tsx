import { mockLineData as data } from '../../../mocks/mockData'

import { ResponsiveLine } from '@nivo/line'

export function LineChart() {
  return (
    <ResponsiveLine
      data={data}
      margin={{ top: 20, bottom: 0 }}
      xScale={{ type: 'point' }}
      yScale={{
        type: 'linear',
        min: 'auto',
        max: 'auto',
        stacked: true,
        reverse: false,
      }}
      yFormat=" >-.2f"
      curve="natural"
      areaOpacity={0.1}
      axisTop={null}
      axisRight={null}
      axisBottom={null}
      axisLeft={null}
      isInteractive={true}
      enableGridX={false}
      enableGridY={false}
      enablePoints={true}
      enableCrosshair={false}
      colors={(d) => d.color}
      pointSize={8}
      pointBorderWidth={2}
      pointLabelYOffset={-12}
      enableArea={true}
      areaBlendMode="darken"
      useMesh={true}
    />
  )
}
