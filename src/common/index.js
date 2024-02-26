export const writeCookie = (key, value, days = 30) => {
  let date = new Date();

  date.setDate(date.getDate() + days);
  const cookie = (document.cookie =
    key + "=" + value + "; expires" + date.toGMTString() + "; path=/");
  console.log("cokie in write cookie", cookie);

  return cookie;
};

export const getTokenFromCookie = (cookieName) => {
  const expression = new RegExp(`(?<=${cookieName}=)[^;]*`);
  console.log(expression);

  const cookie = document.cookie.match(expression);
  console.log(cookie);
  return cookie;
};
