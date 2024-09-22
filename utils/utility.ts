export function parseNumberWithCommas(text: string): number {
  return parseInt(text.replace(/,/g, ''), 10);
}
