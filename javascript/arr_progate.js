// ============== map メソッドの使い方 =========
// 配列に対して特定の処理をした配列を返す、今回は全部2倍にしている。

const numbers = [1, 2, 3, 4];

// 定数numbersにmapメソッドを使って配列を作り、定数doubledNumbersに代入してください
const doubledNumbers = numbers.map((number) => {
  return number * 2;
});

// 定数doubledNumbersを出力してください
console.log(doubledNumbers);


const names = [
  {firstName: "Kate", lastName: "Jones"},
	{firstName: "John", lastName: "Smith"},
	{firstName: "Denis", lastName: "Williams"},
	{firstName: "David", lastName: "Black"}
];

// 定数namesにmapメソッドを使って新しい配列を作り、定数fullNamesに代入してください
const fullNames = names.map((name) => {
  return name.firstName + name.lastName;
});

// 定数fullNamesを出力してください
console.log(fullNames);



// ============= filterメソッドの使い方========
// 条件に引っかかったものをすべて出す

const numbers = [1, 2, 3, 4];

// filterメソッドを使ってnumbersから偶数を取り出し、定数evenNumbersに代入してください
const evenNumbers = numbers.filter((number) => {
  return number % 2 === 0;
});

// evenNumbersを出力してください
console.log(evenNumbers);


const characters = [
  {id: 1, name:"にんじゃわんこ", age: 14},
  {id: 2, name:"ベイビーわんこ", age: 5},
  {id: 3, name:"ひつじ仙人", age: 100}
];

// charactersから20歳未満のキャラクターを取り出し、定数underTwentyに代入してください
const underTwenty = characters.filter((character) => {
  return character.age < 20;
});

// underTwentyを出力してください
console.log(underTwenty);



// ============= findメソッドの使い方 ==========
// 条件に合致した最初の値のみを出力
const numbers = [1, 3, 5, 7, 9];

// findメソッドを使って配列numbersから3の倍数を見つけ、定数foundNumberに代入してください
const foundNumber = numbers.find((number) => {
  return number % 3 === 0;
});

// foundNumberを出力してください
console.log(foundNumber);


const characters = [
  {id: 1, name: "にんじゃわんこ", age: 6},
  {id: 2, name: "ベイビーわんこ", age: 2},
  {id: 3, name: "ひつじ仙人", age: 100},
  {id: 4, name: "とりずきん", age: 21}
];

// 定数charactersからidが3のオブジェクトを見つけ、定数foundCharacterに代入してください
const foundCharacter = characters.find((character) => {
  return character.id === 3
});

// foundCharacterを出力してください
console.log(foundCharacter);


// ============= forEach =======================
const characters = ["にんじゃわんこ", "ベイビーわんこ", "ひつじ仙人", "とりずきん"];

// forEachメソッドを使って、配列charactersの中身をすべて出力してください
characters.forEach((character) => {
  console.log(character);
});


// ============= pushメソッド ================
const characters = ["にんじゃわんこ", "ベイビーわんこ", "ひつじ仙人"];

console.log(characters);

// pushメソッドを使って配列charactersに、文字列「とりずきん」を追加してください
characters.push("とりずきん");
