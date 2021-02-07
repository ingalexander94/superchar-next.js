import { showMessage } from "./alerts";
import { fetchWithoutToken } from "./fetch";
import Cookie from "js-cookie";

export const initAuth = async (userData = {}, type = "login") => {
  type === "register" && delete userData.confirmPassword;
  const request = await fetchWithoutToken(`auth/${type}`, userData, "POST");
  const body = await request.json();
  const { ok, msg } = body;
  if (!ok) {
    await showMessage("error", msg);
    return { ok: false };
  }
  const { user, token } = body;
  Cookie.set("token", token);
  return {
    ok: true,
    user,
    token,
  };
};

export const filterUsers = (users = [], filter = "") =>
  filter
    ? users.filter((user) =>
        user.name.toLowerCase().includes(filter.toLowerCase())
      )
    : users;
