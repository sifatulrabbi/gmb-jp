// dependencies
import { atom } from "recoil";

// state
export const testimonialState = atom({
  key: "testimonialState",
  default: [
    "顧問編集者とは?",
    "顧問編集者は具体的に何をするのか?",
    "なぜ「経営者」が発信するのか?",
    "なぜ「企業側」に編集者が必要なのか?",
    "どんな効果があるのか?",
    "お客さまの声",
  ],
});
