const { WebClient } = require("@slack/web-api");

(async () => {
  // OAuth トークン
  const token = "xoxb-5378271662497-5365550897379-wJOPuYNRVddWJelVNzeGUxHg";
  // #チャンネル名 of @ユーザー名
  const channel = "#うんこ";
  // メッセージ
  const text = "うんこ";

  const client = new WebClient(token);
  const response = await client.chat.postMessage({ channel, text });

  // 投稿に成功すると `ok` フィールドに `true` が入る。
  console.log(response.ok);
  // => true
})();
