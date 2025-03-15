import { Cookies } from "js-cookie";


export const getClientCookie = (cookieName) => {
  if (typeof document === "undefined") return null;
  const cookies = document.cookie.split("; ");
  const cookie = cookies.find((row) => row.startsWith(`${cookieName}=`));
  return cookie ? cookie.split("=")[1] : null;
};


export const setClientCookie = (name, value) => {
  return Cookies.set(name, value);
};