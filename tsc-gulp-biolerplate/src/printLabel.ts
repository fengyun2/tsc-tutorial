interface LabelledValue {
  label: string
}

export function printLabel(labelledObj: LabelledValue) {
  console.log(labelledObj.label)
}


