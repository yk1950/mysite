'use strict';
{
// 「時間計算」の勉強のためﾌﾟﾛｸﾞﾗﾑと関係ない記述をする。（基準日とは1970.1.1.00秒)
  console.log(new Date());/* ()内が空欄だと日本語基準の現在時間が「文字で表示」。 */ 
  console.log(new Date().getTime())/* 現在時間の基準日経過ﾐﾘ秒が「数値」で表示 */
  console.log(typeof(Date.now()));/* ()内空欄の場合、上記と同様経過ﾐﾘ秒が「数値」で表示  ﾋﾟﾘｵﾄﾞ忘れるな！！ﾀｲﾌﾟは数値(number) */ 
 
 /* new Dateの引数にｶﾝﾏで年月日時間を入力した場合、未入力項目あっても無視される(中身はｵﾌﾞｼﾞｪｸﾄ。ｶﾝﾏがないと値が無視される。*/

// ①-1学習開始日の取得とﾎﾞﾀﾝｸﾘｯｸ後の

let tBackup = new Date();/* Date.nowではｴﾗｰとなる。？？？ */
console.log(typeof(tBackup));console.log(tBackup);/* tを変数にした。tBackupが変わる!!2/23 object型*/

document.querySelector('#start1').addEventListener('click',()=>{
  // 大きなｹｱﾚｽﾐｽ！！前文のﾋﾟｲｵﾄﾞをｶﾝﾏで入力（ｴﾗｰとならない！）。現象として全てのｸﾘｯｸに反応して日付がﾌﾞﾗｳｻﾞ表示されてしまった。3/3発見改修。

if('#start1'!==true){document.querySelector('#start2').textContent=(tBackup.toLocaleDateString())}/* 年月日まで表示 →時、分まで表示させたい→改修→もとに戻した3/3 */// tolocaleStringを使う事で ３／３
});
}
// ➄-1 自習経過時間（秒）の計算<3/2chatGPTﾊﾟｸﾘ> let day=Date.now()はmiri秒で取得できる(new Dateは秒まで）
document.addEventListener('DOMContentLoaded', () => {
    // 開始時刻（固定）
    const startTime = new Date(); // ページ読み込み時の時刻
    // ﾎﾞﾀﾝｸﾘｯｸ時の処理(終了時人間の判断でｸﾘｯｸ)
    document.querySelector('#calculateTime').addEventListener('click', () => {
        // 終了時刻（ボタンクリック時の時刻）
        const endTime = new Date();/* ﾍﾟｰｼﾞ読み込み後の今（学習終了と判断しﾎﾞﾀﾝｸﾘｯｸした時刻）を定数に代入 */

        // 経過時間をミリ秒で計算
        const elapsedTime = endTime - startTime;

        // 経過時間を秒に変換
        const seconds =Math.floor(elapsedTime / 1000);

 // 経過時間を表示
     document.getElementById('elapsedTime').textContent = `${seconds}秒`;
    });
})
 { 
  // ➁-1 ﾃｷｽﾄｴﾘｱ（元＜HTML>文字のｸﾘｯｸ削除と空欄上書き、ｺﾝｿｰﾙ表示）
  document.querySelector('#text').addEventListener('click', () => { 
    if('#glass'!==0){
     document.querySelector('#text').value='';  
       console.log('HTML textﾀｸﾞのidのvalueの当初文字列に（if文で）空欄上書き成功'); }
//  ➁-2  ﾃｷｽﾄｴﾘｱ（新規入力と入力文字ｺﾝｿｰﾙ表示）  
document.querySelector('#text').addEventListener('input',()=>{

const textareaElement = document.querySelector('#text');
    const inputElement = document.querySelector('textarea'); 
    textareaElement.textContent = inputElement.value;  
   console.log(inputElement.value);   
    })
  
 /* A.ﾘｽﾅｰでclick記述した場合はｲﾝﾌﾟｯﾄ枠内でｸﾘｯｸしてから文字入力後ｸﾘｯｸした場合に下段に文字P表示される。
 B.ﾘｽﾅｰでinput記述にするとｽﾀｰﾄｸﾘｯｸ時から文字P表示される  2/4 */ 
// 2/5keydownで試す（inputより文字表示が1テンポ遅れる）

    })
//  ➂-1 ｲﾝﾌﾟｯﾄﾌｫｰﾑ１（元<HTML>入力文字のｸﾘｯｸ削除と空欄上書き、ｺﾝｿｰﾙ表示）

    // 重要！！ 2/12最終記述で左記のとおり｝）を追記した。理由はtextｴﾘｱ処理を終えないとinputｴﾘｱでのﾃﾞﾘｰﾄ処理ができないため＝処理の分離が？*/
 document.querySelector('#glass').addEventListener('click', () => { 

 if('#glass'!==0){
document.querySelector('#glass').value='';  
 console.log('HTML inputﾀｸﾞid valueの初期文字に（条件付きで）空欄を上書き済');   
 
// 2/12 21時完成 elseを消して手前の波ｶｯｺ(ｵﾚﾝｼﾞ）を記述した。
}
//  else {
//  ➂-2 ｲﾝﾌﾟｯﾄﾌｫｰﾑ１（入力文字のﾌﾞﾗｳｻﾞ表示とｺﾝｿｰﾙ表示）
 document.querySelector('#glass').addEventListener('input',()=>{
          const p2Element = document.querySelector('p1');
          const input2Element = document.querySelector('#glass');
// 定数pElementに定数inputElementの値を代入

p2Element.textContent = input2Element.value;
    // pElement.textContent = inputElement.value.length;
    console.log(input2Element.value);        
        })
   
 /* 'input’のｺﾝｿｰﾙ表示がとても参考となる。  ｲﾍﾞﾝﾄﾘｽﾅｰを①'input’は文字入力そのままPに表示。➁'click'は文字入力し／ﾃｷｽﾄｴﾘｱ内をｸﾘｯｸ後ｐに表示。➂'change'は.文字入力し/ﾃｷｽﾄｴﾘｱ外をｸﾘｯｸ,あるいはｴﾝﾀｰ後ｐに表示。 */
  })

  // ④-1 ﾃｷｽﾄｴﾘｱ（元＜HTML>文字のｸﾘｯｸ「削除」と「空欄上書き」「ｺﾝｿｰﾙ表示」）
// 以下２／１２追記で改善！！（複数Event記述） 複数のｲﾍﾞﾝﾄ記述が可能と解った。
 
document.querySelector('.item').addEventListener(`click`, () => {
  if('.item'!==0){
 document.querySelector('.item').value='';  
    console.log('clicked');
  }
 //  ④-2 ｲﾝﾌﾟｯﾄﾌｫｰﾑ2（入力文字「数」のﾌﾞﾗｳｻﾞ表示と文字のｺﾝｿｰﾙ表示）
 {  document.querySelector('.item').addEventListener(`input`, () => {
   
    const p1Element = document.querySelector('p2');
    const input1Element = document.querySelector('.item');
    
console.log(input1Element.value);
    p1Element.textContent = input1Element.value.length; 
 }  )}})}

// ⑥-1 1ｸﾘｯｸでメッセージと画像の表示
 //上のｶｯｺはｴﾗｰ表示が消えるまで繰り返し記述したものの理解できない。意味はなんなの？？3/3 20;28
//  追加課題3/7 画像＋上部ｺﾒﾝﾄは何かｱｸｼｮﾝしてからﾌﾞﾗｳｻﾞ表示させる。= 完成3/10
document.addEventListener('DOMContentLoaded', () => {/*3/10 下113行目から転記した。 */

document.querySelector('#button3').addEventListener('click',()=>{
document.querySelector("#msgPhot").textContent='We are frends since”1963"'
console.log('Favolite代入=HTML表示');}
)
// document.addEventListener('DOMContentLoaded', () => {/* この位置で記入するとｴﾗｰになる3/8→上段に移転で解決 */
  //  DOMContentLoaded イベントは、HTMLページの読み込みが終わり、DOMツリーの構築が完了した時に発生するイベント。 この時点では、まだページに含まれる画像やスタイルシートの読み込みが完了しているとは限りません。
  // ボタンクリックイベントの追加 ByIdの場合はidの前に#は不要3/8 
  // 3/10 button3に変更⁼意図したとおり 1ﾎﾞﾀﾝでﾀｲﾏｰ処理と画像表示され、完成。
  document.getElementById('button3').addEventListener('click', () => {
     
    // 画像コンテナの取得showImageBtn
      const container = document.getElementById('phot1');
      // 画像要素の作成
      const image = document.createElement('img');
      image.src = 'IMG_0099.png'; // ここに表示したい画像のURLを指定
      image.alt = '変更中'; // 画像が表示されない場合に表示されるテキスト
console.log(image.src); /* ｺﾝｿｰﾙに「画像ﾌｧｲﾙ url」表示完了。重要参考例！！ */

  // document.getElementById('button3').addEventListener('click', () => {
     /* 3/10 20:26 この記述をしたことで「MY Favolite」ﾎﾞﾀﾝを再度（2回目)ｸﾘｯｸすると画像が表示され目的達成！！
      以下、コンテナに画像挿入直前に記述したことが奏功か
      ？＝実践に使える「！！*/
  
//  ﾀｲﾏｰ設定と画像要素を挿入(window.は省略可）
window. setTimeout(() => {   /* setTimeout記述（3/11googleﾊﾟｸﾘ）*/
      container.innerHTML = ''; //3/10chatGPTのﾊﾟｸﾘ=ｺﾝﾃﾅを空にする（既に画像があれば削除）=親切
// ３秒後に画像表示される。3/11（googleﾊﾟｸﾘ）
      container.appendChild(image);//3/10chatGPTのﾊﾟｸﾘ
    }, 3000);
    console.log(Date.now());/* 参考まで記述 */
    console.log(image);/*参考まで */
  })
    // }) /* ⑦の処理をさせるため左記のｶｯｺを羅列し結果、奏功(3/11） */
  
// ⑦JSでHTMLﾀｸﾞにｸﾘｯｸ毎に文字表示／消滅を完成。今回は2度目のｸﾘｯｸで時刻表示させた。
// 課題はtoggle活用でon,offとしたい。

document.querySelector('#button4').addEventListener('click', () => {
  if ('#lastMsg'!==true){
  document.querySelector('#lastMsg').textContent='お疲れ様～！！！'}

document.querySelector('#button4').addEventListener('click', () => {
 if('#lastMsg'!==true){
  const nD=(new Date());
  document.querySelector('#lastMsg').textContent=nD;}
  
 })})/* 2024/3/19に左記のｶｯｺ記述（変更）で上の日時取得とHTMLへのが表示ができただけでなく、下のイラスト表示とclassのtoggle（’on’）が作動するようになった。理解できず！！ */
// document.write("<a>"+moji+'  '+number+"</a>");/* HTMLに新たにタグを生成し直接表示させる方法＜document.write +定数+ これは危険！！*/

// ⑧ﾀﾞｳﾝﾛｰﾄﾞした画像をﾌｧｲﾙにし、ﾎﾞﾀﾝをｸﾘｯｸすると画像出現、再ｸﾘｯｸすると画像消滅機能。ﾎﾟｲﾝﾄは「定数化とCSS定義」Jsで「toggle」構文が重要！3/13 22
const btn5 = document.getElementById('button5');
const phot2 = document.getElementById('phot2');
const phot3 = document.getElementById('phot3');/* 3/29にｲﾗｽﾄ１枚追加 */
      // 画像要素の作成
        btn5.addEventListener('click',()=>{
phot2.classList.toggle('on');
console.log(phot2);/* 3/29にｲﾗｽﾄ１枚追加 */
phot3.classList.toggle('on');/* 3/29にｲﾗｽﾄ１枚追加 */
   })})
// -----------------------------------------------------------------------------
  // ⑨ 年齢計算3/17ｽﾀｰﾄ ①入力ｴﾘｱのﾃﾞﾌｫﾙﾄ文字をｸﾘｯｸし空欄とする
   document.querySelector('#myYmd').addEventListener('click', () => { 
    if('#myYmd'!==0){
   document.querySelector('#myYmd').value='';  
    console.log('年齢計算ﾃﾞﾌｫﾙﾄ文字を消去');  }
 
// // 入力文字が「半角数字」且つ「最終８桁」でないとｴﾗｰ（ｱﾗｰﾄ）か上記のように強制文字消去にして再入力を促す。2024/3/29より。上の構文は空欄のｲﾝﾌﾟｯﾄｴﾘｱの要素取得(id=mayYmd)

// 3/29ｃｈａｔＧｐｔで完璧！！。以下構文で・「半角数字以外はダメ」・「同 ８桁以上は受け付けず」・「ダメ、拒否文は発生時で入力文を全削除する」。入力欄にフォーカスがある間、非数字の入力を検出してアラートを表示する
// この構文で全て網羅されている（重要！！！）
document.getElementById('myYmd').addEventListener('input', function() {
  const inputValue = this.value;
  if (!/^\d+$/.test(inputValue)) {
      alert('半角数字のみで入力してください。');
      this.value = ''; // 全入力をクリア
  }
});


document.querySelector('#myYmd').addEventListener('input',()=>{
  const inputyyyymmdd=document.querySelector('#myYmd').value;  
      
          document.getElementById('agecalc').addEventListener('click',()=>{
           const birthday=inputyyyymmdd;
            console.log(birthday);
console.log(typeof(birthday));/* この最後のstringをBirthdayに代入したい3/17、2135   22:31*/
let yyyy=birthday.substr(0,4);console.log(yyyy);
            let mm=birthday.substr(4,2);console.log(mm);
            let dd=birthday.substr(6,2);console.log(dd);
            let birthymd=[yyyy,mm,dd];/* この構文で配列を作れる */
            console.log(birthymd);
            // 計算のため取得した配列をｵﾌﾞｼﾞｪｸﾄに戻している
let birthyyyymmdd=[birthymd];/* 誕生日配列を変数array1に変換*/
console.log(typeof(birthyyyymmdd));/* =object */console.log(birthyyyymmdd);

const nd=new Date(birthyyyymmdd);/* 誕生日のnew Date＝ndを取得 */
console.log(nd);/* 誕生日のnew Dateを表示（日本語） */

console.log(new Date());/* 今日の時刻を表示（日本語） */

let sa=0;/* 22:48 この構文を入力したらｴﾗｰ消失！！！ 理由わからず！！！ */
sa=(new Date()-nd.getTime());/* 誕生日からの経過時間を計算 */
console.log(sa);/* 経過ﾐﾘ秒が表示 */

// 上記計算のsaから整数年齢と整数経過日数を取得。
const Avrgday=365.24219/* 1年の公式平均日数 */
let pastdate=0;/* 3/17 定数の初期値に０を代入でｴﾗｰ解消する！！？？ */
let todayOldyy=0;/* 3/17 定数の初期値に０を代入でｴﾗｰ解消する！！？？ */
pastdate=(Math.floor(sa/(1000*60*60*24)));/*生まれてからの経過日数 */
todayOldyy=(Math.floor(sa/(1000*60*60*24*Avrgday)));/* 今日の整数年齢 */
console.log(todayOldyy);console.log(pastdate);

let lastmm=0;
let todayOldmm=0;
lastmm=sa%(1000*60*60*24*Avrgday);/* 去年の誕生日から今日までの時間経過 */
todayOldmm=Math.floor(lastmm/(1000*60*60*24)/(Avrgday/12));/*上記の月数＝去年の誕生日からの経過月数 概算 */
console.log(todayOldmm);

// todayOlddd=今月の誕生の日からの経過日。－２（誤差調整のため）
let todayOlddd=0;
let lastdd=0;
lastdd=sa%(1000*60*60*24*(Avrgday/12));
todayOlddd=Math.floor(lastdd/(1000*60*60*24)/(Avrgday/12/24))-1;
console.log(todayOlddd);

  // 結果の表示①
  document.getElementById('mainbirthday').textContent ='誕生日は'+(yyyy)+'年'+(mm)+'月'+(dd)+'日なので';
  let pastdate33=pastdate.toLocaleString();/*初めての3桁ｶﾝﾏdebut3/17 */
            document.getElementById('daysPast').textContent =' 生まれてから'+(pastdate33)+'日経っています。';
  
 // 結果の表示➁
    // 以下の条件式のコメントのHTML配置に苦労しました。
if(todayOldmm===0&&todayOlddd<=2){ 
         document.getElementById('alllastmsg').textContent =+(todayOldyy)+'歳になったばかりです。' }
            else if(todayOldmm===0&&todayOlddd>=2){ document.getElementById('alllastmsg').textContent =+(todayOldyy)+ '歳と約'+(todayOlddd)+'日です。'}
            else(       
                document.getElementById('alllastmsg').textContent =+(todayOldyy)+ '年と'+(todayOldmm)+'ヵ月と約'+(todayOlddd)+'日です。')}
        /* 最後のコメント文はﾎﾞﾀﾝｸﾘｯｸ時に出現するようにする.JS内記述で改良3/17
 日にちは２日以内であればﾏｲﾅｽ表示はやめて「になったばかりです」にしたい＝条件式挿入でほぼ解決3/17*/
    )})})

    // 2024.3.29 ｃｈａｔＧｐｔより
  //   document.getElementById('inputForm').addEventListener('submit', function(event) {
  //     const inputValue = document.getElementById('numberInput').value;

  //     // 正規表現を使用して半角数字のみをチェック
  //     const regex = /^\d{8}$/;
  //     if (!regex.test(inputValue)) {
  //         // 条件を満たさない場合はアラートを表示し、入力をクリア
  //         alert('半角数字のみで8桁の数字を入力してください。');
  //         event.preventDefault(); // フォームの送信をキャンセル
  //         document.getElementById('numberInput').value = ''; // 入力をクリア
  //     } else {
  //         // 条件を満たす場合はアラートを表示
  //         alert('完成！！');

