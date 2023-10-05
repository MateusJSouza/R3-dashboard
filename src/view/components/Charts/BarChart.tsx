import { mockBarData as data } from '../../../mocks/mockData'
import { ResponsiveBar } from '@nivo/bar'

export const BarChart = () => (
  <ResponsiveBar
    data={data}
    keys={['reality', 'target']}
    indexBy="month"
    margin={{ top: 50, right: 10, bottom: 50, left: 10 }}
    padding={0.3}
    innerPadding={10}
    maxValue={150}
    groupMode="grouped"
    valueScale={{ type: 'linear' }}
    indexScale={{ type: 'band', round: false }}
    colors={({ data, id }) =>
      id === 'reality' ? data.realityColor : data.targetColor
    }
    borderRadius={4}
    isInteractive={true}
    axisTop={null}
    axisRight={null}
    axisLeft={null}
    enableGridY={false}
    enableLabel={false}
    labelSkipWidth={12}
    labelSkipHeight={12}
    role="application"
  />
)
