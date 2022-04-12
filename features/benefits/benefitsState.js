// dependencies
import { atom } from "recoil";

// state
export const benefitsState = atom({
  key: "benefitsState",
  default: [
    {
      name: `いちおう登録したが<br/>手応えがない`,
      summary:
        "Googleマイビジネスを 登録しただけでは よい評価点はもらえません GMBクラブでは あなたのお店の露出が増える 評価点が",
    },
    {
      name: `やり方が<br/>よくわからない`,
      summary:
        "GMBのマイビジ点検を 利用すれば、 あなたのお店のマイビジネスを わかりやすく アドバイス・サポート いたします",
    },
    {
      name: `他のSNSと<br/>一緒でしょ?`,
      summary:
        "Googleマイビジネスは 他のSNSと違い お店やサービスを 探しているひとに 特化しています ということは 新規のお客様開",
    },
  ],
});
