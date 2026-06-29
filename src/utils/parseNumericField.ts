export const parseNumericField = (value: string): number => {
  if (value.trim() === '') return NaN
  const parsed = Number(value)
  return Number.isNaN(parsed) ? NaN : parsed
}
