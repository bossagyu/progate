// =========== コンストラクタのオーバーライド =========
class Dog extends Animal {
  // constructorを追加してください
  constructor(name, age, breed) {
    super(name, age);
    this.breed = breed;
  }

  info() {
    this.greet();
    console.log(`名前は${this.name}です`);
    // 「犬種は〇〇です」と出力してください
    console.log(`犬種は${this.breed}です`);


    console.log(`${this.age}歳です`);
    const humanAge = this.getHumanAge();
    console.log(`人間年齢で${humanAge}歳です`);
  }

  getHumanAge() {
    return this.age * 7;
  }
}



// ============ オーバーライド =========
class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  
  greet() {
    console.log("こんにちは");
  }
  
  info() {
    this.greet();
    console.log(`名前は${this.name}です`);
    console.log(`${this.age}歳です`);
  }
}

class Dog extends Animal {
  // infoメソッドを追加してください
  info() {
    this.greet();
    console.log(`名前は${this.name}です`);
    console.log(`${this.age}歳です`);
    
    const humanAge = this.getHumanAge();
    console.log(`人間年齢で${humanAge}歳です`);
  }

  getHumanAge() {
    return this.age * 7;
  }
}

const dog = new Dog("レオ", 4);
dog.info();



// ============= メソッド ============
class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log("こんにちは");
  }

  // infoメソッドを追加してください
  info() {
    console.log(`名前は${this.name}です`);
    console.log(`${this.age}歳です`);
  }

}

const animal = new Animal("レオ", 3);
animal.greet();

// animalに対してinfoメソッドを呼び出してください
animal.info();



//============ コンストラクタ (3) ===========
class Animal {
  // 引数に「name」と「age」を追加してください
  constructor(name, age) {
    // 「"レオ"」の代わりに引数nameの値を代入してください
    this.name = name;

    // 「3」の代わりに引数ageの値を代入してください
    this.age = age;
  }
}

// 引数に「"モカ"」と「8」を渡してください
const animal = new Animal("モカ", 8);

console.log(`名前: ${animal.name}`);
console.log(`年齢: ${animal.age}`);



// ============ プロパティ ================
class Animal {
  constructor() {
    // nameの値に文字列「レオ」を代入してください
    this.name = "レオ";

    // ageの値に数値の「3」を代入してください
    this.age = 3;
  }
}

const animal = new Animal();

// 「名前: 〇〇」となるように出力してください
console.log(`名前: ${animal.name}`);

// 「年齢: 〇〇」となるように出力してください
console.log(`年齢: ${animal.age}`);




// ============ コンストラクタの生成 ===========

class Animal {
  // コンストラクタを追加してください
  constructor(){
    console.log("インスタンスを生成しました");
  }
}

const animal = new Animal();

