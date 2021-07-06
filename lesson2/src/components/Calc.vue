<template>
  <div>
    <div>
      <input type="number" placeholder="op1" v-model.number="operand1" />
      <input placeholder="op2" v-model.number="operand2" type="number" />
      ={{ result }}
    </div>

    <div class="error" v-if="error">Ошибка: {{ error }}</div>

    <div class="strange-message">
      <template v-if="result < 0">Отрицательное число</template>
      <template v-else-if="result < 100">Число меньше 100</template>
      <template v-else>Число больше 100</template>
    </div>

    <!-- <div class="collection">
      <div v-for="(item, idx) in collection" :key="idx">{{ item }}</div>
       {{ collection }} 
    </div> -->

    <input type="checkbox" id="checkbox" v-model="keybord" />
    <label for="checkbox">Отобразить экранную клавиатуру</label>
    <br />

    <div class="collection" v-if="keybord">
      <button
        v-for="(item, idx) in collection"
        :key="idx"
        @click="operandChoise(item)"
      >
        {{ item }}
      </button>
      <button @click="deleteLastSymbol()">"Back"</button>
      <!-- {{ collection }} -->
    </div>

    <input type="radio" id="one" value="1" v-model.number="operandRadio" />
    <label for="one">Операнд 1</label>
    <br />
    <input type="radio" id="two" value="2" v-model.number="operandRadio" />
    <label for="two">Операнд 2</label>
    <br />
    <span>Выбрано: {{ operandRadio }}</span>

    <div class="buttons">
      <button
        v-for="btn in buttons"
        :key="btn"
        v-bind:title="btn"
        @click="calculate(btn)"
      >
        {{ btn }}
      </button>
    </div>

    <div class="logs">
      {{ logs }}
    </div>

    <div>
      <!-- <button @click="sum = operand1 + operand2">+</button> -->
      <!-- <button v-on:click="sum = operand1 * operand2">*</button> -->

      <!-- <button @click="add">+</button>
      <button @click="substract">-</button>
      <button @click="multiply">*</button>
      <button @click="div">/</button>
      <button @click="result = Math.trunc(operand1 / operand2)">Int/</button>
      <button @click="degree">**</button> -->
      <!-- <button @click="eventFn">Event</button> -->

      <!-- <button @click="calculate('+')">+</button>
      <button @click="calculate('-')">-</button>
      <button @click="calculate('*')">*</button>
      <button @click="calculate('/')">/</button>
      <button @click="result = Math.trunc(operand1 / operand2)">Int/</button>
      <button @click="calculate('**')">**</button> -->
      result : {{ result }}
    </div>
  </div>
</template>

<script>
export default {
  name: "Calc",
  data: () => ({
    keybord: true,
    operandRadio: 1,
    operand1: 0,
    operand2: 0,
    result: 0,
    buttons: ["+", "-", "*", "/", "**"],
    collection: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
    logs: {},
    error: "",
  }),
  methods: {
    // eventFn() {
    //   console.log(arguments);
    // },

    operandChoise(item) {
      switch (this.operandRadio) {
        case 1:
          this.operand1 = +`${this.operand1}${item}`;
          break;
        case 2:
          this.operand2 = +`${this.operand2}${item}`;
          break;
      }
    },

    deleteLastSymbol() {
      switch (this.operandRadio) {
        case 1:
          this.operand1 = Math.floor(this.operand1 / 10);
          break;
        case 2:
          this.operand2 = Math.floor(this.operand2 / 10);
          break;
      }
    },

    calculate(operation = "+") {
      this.error = "";
      switch (operation) {
        case "+":
          this.add();
          break;
        case "-":
          this.substract();
          break;
        case "*":
          this.multiply();
          break;
        case "/":
          this.div();
          break;
        case "**":
          this.degree();
          break;
      }

      const key = Date.now();
      const value = `${this.operand1} ${operation} ${this.operand2} = ${this.result}`;
      this.$set(this.logs, key, value);

      //   this.logs[
      //     Date.now()
      //   ] = `${this.operand1} ${this.operation} ${this.operand2} = ${this.result}`;
    },
    add() {
      this.result = this.operand1 + this.operand2;
    },
    substract() {
      this.result = this.operand1 - this.operand2;
    },
    multiply() {
      this.result = this.operand1 * this.operand2;
    },
    div() {
      const { operand1, operand2 } = this;
      if (operand2 === 0) {
        this.error = "На 0 делить нельзя!";
      } else {
        // т.к. исп деструктуризация, можно исп просто operand1, operand2
        this.result = operand1 / operand2;
      }
    },
    degree() {
      this.result = Math.pow(this.operand1, this.operand2);
    },
  },
};
</script>

<style lang="scss" scoped>
.error {
  color: red;
}
</style>