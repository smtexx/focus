export function preparePhone(phone) {
  return phone.replace(/[ \-\(\)]/g, '');
}
