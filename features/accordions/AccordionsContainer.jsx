import React from "react";
import { v4 } from "uuid";
import Accordion from "./Accordion";
import Section from "../../components/Section";

const accordionData = [
  {
    dark: true,
    title: "Googleマイビジネスとは",
    body: `Googleマイビジネス（Googleビジネスプロフィール）とは、Google検索結果またはGoogleマップ上に表示されるお店の情報を、お店側が無料で登録・管理できるものです<br/>完全無料にもかかわらずかなり目立つ位置に表示され、写真やイベント情報、最新情報、メニューなどたくさんの情報を載せることができるため、登録・更新するだけで大きな効果が期待できるサービスです。`,
  },
  {
    dark: false,
    title: "MEOとは",
    body: `MEOとはMap Engine Optimizationの略称で、Google MAP向けの地図エンジンで最適化を図ることを指します。 検索エンジンで「地域名+キーワード」で検索すると、自然検索結果の上段にGoogleマップの枠が表示されます。<br/>「ローカル検索」「ローカルSEO」とも呼ばれ、店舗ビジネスや地域ビジネスにおいては<br/>Web集客の上で重要施策となります。<br/>MEOはSEOと同様に、Googleのアルゴリズムによって検索結果が反映されるので、検索上位に表示させるためには「対策」が必要です。`,
  },
  {
    dark: true,
    title: "Googleマイビジネス点検とは",
    body: `MEO対策の１つでGoogleのアルゴリズムを理解することで、Googleマイビジネス（Googleビジネスプロフィール）を検索上位に表示させるために現在の評価点を点検・添削しますGMBJAPAN独自のサービスです`,
  },
];

function AccordionsContainer() {
  return (
    <Section
      body={{
        content: (
          <div className="flex flex-col h-max">
            {accordionData.map((data, index) => (
              <Accordion key={v4()} {...data} id={index} />
            ))}
          </div>
        ),
      }}
    />
  );
}

export default AccordionsContainer;
