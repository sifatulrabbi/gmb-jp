// dependencies
import { atom } from "recoil";
// components
import PaperPlane from "../../components/CustomIcons/PaperPlane";
import Compass from "../../components/CustomIcons/Compass";
import Writing from "../../components/CustomIcons/Writing";
import Chat from "../../components/CustomIcons/Chat";

// state
export const mainWorkState = atom({
  key: "mainWorkState",
  default: [
    {
      name: "マイピジ点検",
      Icon: Compass,
      summary:
        "<p>まずはマイビジ点検で<br/>あなたのGoogleマイビジネスの弱点を浮き彫りに します。<br/>弱点を見つけることで評価点をプラスして 検索順位をランクアップさせます</p>",
    },
    {
      name: "改善とアドバイス",
      Icon: Chat,
      summary:
        "<p>GMBJAPANの強みは独自のランキングファクターを 保有していること<br/>3000社から得たフィードバックデータをもとに 最新の評価基準を確立し、ランクアップへの アプローチをアドバイスしています。</p>",
    },
    {
      name: "強力なバックエンド",
      Icon: Writing,
      summary:
        "<p>あなたのお店で行えないランクアップ施策は<br/>括おまかせで作業します<br/>あなたのお店を1番目立つ場所に表示されるまで 毎月自動で行います<br/>しかも、成果報酬スタイ系なのでランクインするまで 費用はかかりません</p>",
    },
    {
      name: "朱客の景色が変わります",
      Icon: PaperPlane,
      summary:
        "<p>GMBJAPANの<br/>お客様の継続率は業界トップの85%を誇ります<br/>面白いのは勝ち組パターンに入ったお客様の6割は<br/>このコロナ禍でも事業を拡大しているということ<small>新規1店舗から2店舗3店舗へと拡大するお客様多</small></p>",
    },
  ],
});
