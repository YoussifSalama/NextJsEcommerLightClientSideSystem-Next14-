const { cookies } = require("next/headers");

export const setServerCookie = (name, value) => {
  cookies().set(name, value);
};

export const getServerCookie = (name) => {
  return cookies().get(name)?.value;
};