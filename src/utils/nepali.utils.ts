// import { useI18n } from "vue-i18n";

export function nepaliUnicodeNumber(
  text: string | number | undefined | null,
  defaultText = ''
): string {
  if (text || text == 0) {
    text = String(text)
  } else {
    text = defaultText
  }
  const locale = 'ne'
  // try {
  //   const i18n = useI18n();
  //   locale = i18n.locale.value;
  // } catch {
  //   // console.error("Could no load locale");
  // }
  if (locale == 'ne') {
    const chars: { [key: string]: string } = {
      '0': '०',
      '1': '१',
      '2': '२',
      '3': '३',
      '4': '४',
      '5': '५',
      '6': '६',
      '7': '७',
      '8': '८',
      '9': '९'
    }
    if (text == '0' || (text && text != null)) {
      return text.toString().replace(/[0123456789]/g, (m) => chars[m])
    }
  }
  return text
}

export function englishUnicodeNumber(text: string) {
  const chars: any = {
    '०': '0',
    '१': '1',
    '२': '2',
    '३': '3',
    '४': '4',
    '५': '5',
    '६': '6',
    '७': '7',
    '८': '8',
    '९': '9'
  }
  return text.toString().replace(/[०१२३४५६७८९]/g, (m) => chars[m])
}
