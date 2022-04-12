import { atom } from "recoil";

export const menuState = atom({
  key: "menuState",
  default: {
    show: false,
    links: [
      { name: "ホーム", path: "/" },
      { name: "顧問編集者とは", path: "/" },
      { name: "お客さまの声", path: "/" },
      { name: "編集者紹介", path: "/" },
      { name: "お知らせ", path: "/" },
      { name: "会社概要", path: "/" },
    ],
    extraLinks: [
      { name: "資料ダウンロード", path: "/" },
      { name: "お問い合わせ", path: "/" },
    ],
  },
});
