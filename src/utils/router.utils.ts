export function pathReplacer(
  action: string,
  valueList: { name: string; value: number | string }[]
): string {
  for (const value of valueList) {
    action = action.replace(value.name, String(value.value))
  }
  return action
}
