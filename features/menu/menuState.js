import { atom } from "recoil";

export const menuState = atom({
  key: "menuState",
  default: {
    show: false,
    links: [
      { name: "ホーム", path: "https://gmb-jp.com/" },
      {
        name: "マイビジネス点検とは",
        path: "https://gmb-jp.com/tenken/mybiji/",
      },
      { name: "勝ち組パターン", path: "https://gmb-jp.com/tenken/katigumi/" },
      { name: "GMBクラブ", path: "https://gmb-jp.com/tenken/gmbclub/" },
      { name: "お客様の声", path: "https://gmb-jp.com/tenken/review/" },
    ],
    extraLinks: [
      { name: "お申し込み", path: "https://gmb-jp.com/tenken/order/" },
      { name: "お問い合わせ", path: "https://gmb-jp.com/tenken/contact/" },
    ],
  },
});
