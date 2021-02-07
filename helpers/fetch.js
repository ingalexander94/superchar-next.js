import fetch from "isomorphic-fetch";

const URL_BACKEND = process.env.NEXT_PUBLIC_APP_API_URL;

const fetchWithoutToken = async (endpoint = "", data = {}, method = "GET") => {
  if (method === "GET") return await fetch(`${URL_BACKEND}/${endpoint}`);
  return await fetch(`${URL_BACKEND}/${endpoint}`, {
    method,
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(data),
  });
};

const fetchWithToken = async (
  endpoint = "",
  token,
  data = {},
  method = "GET"
) => {
  if (method === "GET")
    return await fetch(`${URL_BACKEND}/${endpoint}`, {
      method,
      headers: {
        "x-token": token,
      },
    });
  return await fetch(`${URL_BACKEND}/${endpoint}`, {
    method,
    headers: {
      "Content-type": "application/json",
      "x-token": token,
    },
    body: JSON.stringify(data),
  });
};

export { fetchWithoutToken, fetchWithToken };
