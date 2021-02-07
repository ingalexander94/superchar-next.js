import { parse } from "cookie";

export const parseCookie = (req) =>
  parse(req ? req.headers.cookie || "" : document.cookie);
