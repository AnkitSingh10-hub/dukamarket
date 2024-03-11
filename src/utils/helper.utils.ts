export function getNestedFormData(
  formData: FormData,
  // eslint-disable-next-line
  data: any,
  prekey: string | null = null
) {
  for (const key of Object.keys(data)) {
    let dataKey = key
    if (prekey) {
      dataKey = `${prekey}[${key}]`
    } else if (Array.isArray(data)) {
      dataKey = `[${dataKey}]`
    }
    if (typeof data[key] == 'object') {
      if (data[key] instanceof File) {
        formData.append(dataKey, data[key])
      } else if (data[key] === null) {
        // pass
      } else {
        formData = getNestedFormData(formData, data[key], dataKey)
      }
    } else {
      formData.append(dataKey, data[key])
    }
  }
  return formData
}
export function removeFilesForPatch(fileList: { property: any; fieldName: any }[]) {
  for (let file of fileList) {
    const property = file.property
    const fieldName = file.fieldName
    let field = property[fieldName]
    if (field === undefined || field === null || typeof field === 'string') {
      delete property[fieldName]
    }
  }
}
