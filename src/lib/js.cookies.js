import Cookies from "js-cookie";

export function getClientCookie(name) {
  return Cookies.get(name);
}

export function setClientCookie(name, value) {
  return Cookies.set(name, value);
}