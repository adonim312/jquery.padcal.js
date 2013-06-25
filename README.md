jquery.padcal.js
================

## 日めくりカレンダー風 jQuery プラグイン

### 概要

* 日めくりカレンダー風 UI です。
* jQuery 1.6.5 以上に依存です。
* IE 10, Chrome 27, Firefox 21 で動作確認しています。
* <span> と <input> に対応しています。ゆえに inline です。
* <span> なら表示だけを日めくりカレンダー風にします。
* <input> なら日めくりもできます。 value 属性 = 日付です。
* type 属性は radio/checkbox/file/time/number 以外でお願いします。 text が無難です。
* 日付のフォーマットは “yyyy-MM-dd” のみです。
* タイムゾーンは JST のみです。
* suger.js 依存とかにすれば、柔軟な対応ができると思いますが・・・。
* デフォルトでは土曜日は青系、日曜日は赤系の配色になっています。
* 祝祭日には未対応です。
* 見た目は css にしていますので、カスタマイズしてください。
* 需要は極僅と思いますが MIT Lisense でご利用いただけます。

### デモ
ここで動かすのが面倒だったので、下記参照願います。  
[サンプル](http://goo.gl/l8U0u "サンプル")

### 使い方
* HTML
    <head>
      <script src="//ajax.googleapis.com/ajax/libs/jquery/[バージョン]/jquery.min.js"></script>
      <script src="[任意のjsフォルダ]/jquery.padcal.js"></script>
      <link rel="stylesheet" href="[任意のcssフォルダ]/jquery.padcal.css"></link>
    </head>
    <body>
      <!-- span の場合 デフォルトはシステム日付 -->
      <span id="padcal-sample1"></span>
      <!-- 初期値を持たせることもできます -->
      <!-- <span id="padcal-sample1">2013-06-25</span> -->

      <!-- input の場合 デフォルトはシステム日付 ※ type は text が無難 -->
      <input id="padcal-sample2" type="text" />
      <!-- 初期値を持たせることもできます -->
      <!-- <input id="padcal-sample2" type="text" value="2013-06-25" /> -->
    </body>
  				
* Javascript
    $(function(){
      $("#padcal-sample1").padcal();
      $("#padcal-sample2").padcal();

      // input の value の取得
      window.alert($("#padcal-sample2").val());
      // input の value の設定、 change イベント発火のため change() も発行してください
      $("#padcal-sample2").val("2013-06-01").change();
    });
					
## 開発/ダウンロード
Github  
https://github.com/adonim312/jquery.padcal.js
