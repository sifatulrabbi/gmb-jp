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
        "<p>まずはマイビジ点検で あなたのGoogleマイビジネスの弱点を浮き彫りに します。弱点を見つけることで評価点をプラスして 検索順位をランクアップさせます</p>",
    },
    {
      name: "改善とアドバイス",
      Icon: Chat,
      summary:
        "<p>GMBJAPANの強みは独自のランキングファクターを保有していること 延べ３０００社から得たフィードバックデータをもとに 最新の評価基準を確立し、ランクアップへの アプローチをアドバイスしています。</p>",
    },
    {
      name: "強力なバックエンド",
      Icon: Writing,
      summary:
        "<p>あなたのお店で行えないランクアップ施策は 一括おまかせで作業します あなたのお店を１番目立つ場所に表示されるまで 毎月自動で行います しかも、成果報酬スタイルなのでランクインするまで費用はかかりません</p>",
    },
    {
      name: "集客の景色が変わります",
      Icon: PaperPlane,
      summary:
        "<p>GMBJAPANの お客様の継続率は業界トップの８５％を誇ります 面白いのは勝ち組パターンに入ったお客様の６割は このコロナ禍でも事業を拡大しているということ ※新規１店舗から２店舗３店舗へと拡大するお客様が増加してます</p>",
    },
  ],
});
