import Dog from "./dog";

// 定数dog1, dog2を確認してください
const dog1 = new Dog("レオ", 4, "チワワ");
const dog2 = new Dog("ベン", 2, "プードル");

// 以下を書き換えて、定数dog1, dog2をエクスポートしてください
export {dog1, dog2}



// ================= 名前付きimport =================
// 以下を書き換えて、定数dog1, dog2をインポートしてください
import {dog1, dog2} from "./dogData";

// 定数dog1とdog2を出力するように左からコピーして書き換えてください
console.log("---------");
dog1.info();
console.log("---------");
dog2.info();





// ================== importとexport ===================

// Animalクラスをインポートしてください
import Animal from "./animal";

class Dog extends Animal {
  constructor(name, age, breed) {
    super(name, age);
    this.breed = breed;
  }

  info() {
    this.greet();
    console.log(`名前は${this.name}です`);
    console.log(`犬種は${this.breed}です`);
    console.log(`${this.age}歳です`);
    const humanAge = this.getHumanAge();
    console.log(`人間年齢で${humanAge}歳です`);
  }

  getHumanAge() {
    return this.age * 7;
  }
}

// Dogクラスをエクスポートしてください
export default Dog;
