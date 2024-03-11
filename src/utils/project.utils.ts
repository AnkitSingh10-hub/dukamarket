export function projectLabel(status?: string | null): string {
  const labelMap: { [key: string]: string } = {
    "no-data": "Insufficient data",
    suitable: "No sustainability risks detected",
    onprogress: "Moderate sustainability risks detected",
    "not-suitable": "Potentially severe sustainability risks detected",
  };
  if (status && status in labelMap) {
    return labelMap[status];
  }
  return labelMap["no-data"];
}
export function projectColor(status?: string | null): string {
  const colorMap: { [key: string]: string } = {
    "no-data": "grey",
    suitable: "positive",
    onprogress: "warning",
    "not-suitable": "negative",
  };
  if (status && status in colorMap) {
    return colorMap[status];
  }
  return "grey";
}

export function maxRiskStatus(status: string[]): string {
  const statusMap: { [key: string]: number } = {
    "no-data": 0,
    suitable: 1,
    onprogress: 2,
    "not-suitable": 3,
  };
  const statusNumber = status.map((x) => {
    if (x && x in statusMap) {
      return statusMap[x];
    } else {
      return 0;
    }
  });
  const statusMax = Math.max(...statusNumber);
  const finalStatus = Object.keys(statusMap).find(
    (key) => statusMap[key] === statusMax
  );
  if (finalStatus) {
    return finalStatus;
  }
  return "no-data";
}
