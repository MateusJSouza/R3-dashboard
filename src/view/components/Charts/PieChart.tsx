import { ResponsivePie } from '@nivo/pie'
import { mockPieData as data } from '../../../mocks/mockData'

export const PieChart = () => (
  <ResponsivePie
    data={data}
    margin={{ left: 50, top: 40, bottom: 30, right: 10 }}
    sortByValue={true}
    innerRadius={0.55}
    padAngle={2}
    cornerRadius={3}
    activeOuterRadiusOffset={8}
    colors={({ data }) => data.color}
    borderWidth={1}
    borderColor={{ theme: 'background' }}
    enableArcLabels={false}
    enableArcLinkLabels={false}
    arcLabel={(item) => `${item.value}%`}
  />
)
