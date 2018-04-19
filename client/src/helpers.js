export function urlEscape(str) {
  return str.replace(/\s/g, '%2C+');
}
