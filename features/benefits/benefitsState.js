// dependencies
import { atom } from "recoil";

// state
export const benefitsState = atom({
  key: "benefitsState",
  default: [
    {
      name: `いちおう登録したが<br/>手応えがない`,
      summary:
        "Googleマイビジネスを<br/>登録しただけでは<br/>よい評価点はもらえません<br/>GMBクラブでは<br/>あなたのお店の露出が増やす評価点が上がり方をアドバイスしています",
    },
    {
      name: `やり方が<br/>よくわからない`,
      summary:
        "GMBのマイビジ点検を利用すれば、<br/>あなたのお店のマイビジネスをわかりやすく<br/>アドバイス・サポート<br/>いたします",
    },
    {
      name: `他のSNSと<br/>一緒でしょ?`,
      summary:
        "1-3Googleマイビジネスは他のSNSと違い<br/>お店やサービスを<br/>探している人に特化しています<br/>ということは新規のお客様開拓が簡単にできます",
    },
  ],
});
