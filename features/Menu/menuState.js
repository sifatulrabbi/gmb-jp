import { atom } from "recoil";

export const menuState = atom({
  key: "menuState",
  default: {
    show: false,
  },
});
