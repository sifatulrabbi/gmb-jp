// dependencies
import { atom } from "recoil";

// state
export const introState = atom({
  key: "introductionState",
  default: [
    `<pre style="color: inherit; font-family: inherit">       やり方がよくわからない</pre>`,
    `<pre style="color: inherit; font-family: inherit">他のSNSと一緒でしょ?       </pre>`,
    `<pre style="color: inherit; font-family: inherit">いちおう登録したが      </pre>
    <pre style="color: inherit; font-family: inherit">手応えがない</pre>`,
  ],
});
