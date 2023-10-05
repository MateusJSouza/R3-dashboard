const totalUsers = 4209

export const convertedData = (value: number) => (
  Math.round((value / totalUsers) * 100)
)
