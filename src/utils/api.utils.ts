import { camelToSnakeCase } from './index.utils'

export function queryBuilder(params: { [key: string]: string | number | boolean }): string {
  let query = ''
  if (Object.keys(params).length > 0) {
    query += '?'
  }
  for (const key of Object.keys(params)) {
    if (params[key] || params[key] == false) {
      query += `&${camelToSnakeCase(key)}=${params[key]}`
    }
  }
  return query
}
