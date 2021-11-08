/**
 *  const, let等の変数宣言
 */
// var val1 = "var変数";
// console.log(val1);

// // var変数は上書き可能
// val1 = "var変数を上書き";
// console.log(val1);
// // var変数は再宣言可能
// var val1 = "var変数を再宣言";
// console.log(val1);

// let val2 = "let変数";
// console.log(val2);

// // letは上書き可能
// val2 = "let変数を上書き";
// console.log(val2);

// // letは再宣言不可
// // let val2 = "あああ";

// const val4 = {
//   name: "Name",
//   age: "xx"
// };
// val4.name = "NameName";
// val4.addr = "Japan";
// console.log(val4);

// constで定義した配列はプロパティ変更可能
// const val5 = ["dog", "cat"];
// val5[0] = "bird";
// val5.push("monkey");
// console.log(val5);

/**
 * テンプレート文字列
 */
// const name = "Name";
// const age = 99;

// const message2 = `私の名前は${name}です。年齢は${age}です`;
// console.log(message2);

/**
 * アロー関数
 */
// 従来の関数
// function func1(str){
//   return str;
// }
const func1 = function (str) {
  return str;
};
console.log(func1("this is func1"));

// アロー関数
const func2 = (str) => {
  return str;
};
console.log(func2("this is func2"));

const func3 = (num1, num2) => {
  return num1 + num2;
};
console.log(func3(10, 20));
