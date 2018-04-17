export function urlEscape(str) {
  return str.replace(/\s/g, '%C+');
}
