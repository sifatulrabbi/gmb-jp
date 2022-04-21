// dependencies
import { atom } from "recoil";

// state
export const benefitsState = atom({
  key: "benefitsState",
  default: [
    {
      name: `いちおう登録したが<br/>手応えがない`,
      summary:
        "Googleマイビジネスを 登録しただけでは よい評価点はもらえません GMBクラブでは あなたのお店の露出が増やす評価点が上がり方をアドバイスしています",
    },
    {
      name: `やり方が<br/>よくわからない`,
      summary:
        "GMBのマイビジ点検を利用すれば、あなたのお店のマイビジネスをわかりやすくアドバイス・サポート いたします",
    },
    {
      name: `他のSNSと<br/>一緒でしょ?`,
      summary:
        "Googleマイビジネスは他のSNSと違い お店やサービスを 探している人に特化しています ということは新規のお客様開拓が簡単にできます",
    },
  ],
});
