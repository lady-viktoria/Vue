<template>
  <div id="app" :class="[$style.wrapper]">
    <header>
      <h1>My personal costs</h1>
    </header>
    <main>
      <AddPayment @addNewPayment="addData" />
      <br />
      <PaymentsDisplay :list="paymentsList" />
    </main>
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <!-- <router-view /> -->
  </div>
</template>

<script>
import PaymentsDisplay from "./components/PaymentsDisplay.vue";
import AddPayment from "./components/AddPayment.vue";

export default {
  name: "App",
  components: {
    PaymentsDisplay,
    AddPayment,
  },
  data: () => ({
    paymentsList: [],
    data: {
      text: "Arguments",
    },
  }),
  methods: {
    addData(data) {
      console.log(data);
      this.paymentsList.push(data);
    },
    fetchData() {
      return [
        {
          date: "28.03.2021",
          category: "Food",
          value: 169,
        },
        {
          date: "20.03.2021",
          category: "Sport",
          value: 400,
        },
        {
          date: "26.03.2021",
          category: "Internet",
          value: 300,
        },
      ];
    },
  },
  created() {
    this.paymentsList = this.fetchData();
  },
};
</script>

<style lang="scss" module>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
// .wrapper {
//   background: #2c3e50;
// }
</style>
