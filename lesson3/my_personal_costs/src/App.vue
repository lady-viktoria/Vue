<template>
  <div id="app" :class="[$style.wrapper]">
    <header>
      <h1>My personal costs</h1>
    </header>
    <div class="menu">
      <router-link to="/dashboard">Dashboard</router-link> /
      <router-link to="/about">About</router-link> /
      <router-link to="/notfound">NotFound</router-link> /
      <!-- <a href="dashboard">Dashboard</a> / <a href="about">About</a> /
      <a href="notfound">Not Found</a> -->
    </div>
    <main>
      <div class="content-page">
        <router-view />
        <!-- <About v-if="page === 'about'" />
        <Dashboard v-if="page === 'dashboard'" />
        <NotFound v-if="page === 'notfound'" /> -->
      </div>
      <button @click="showForm()">ADD +</button>
      <p></p>
      <AddPayment
        @addNewPayment="addData"
        :categories="categories"
        placeholder="value"
        v-if="addForm"
      />
      <br />
      <CategorySelect :categories="categories" />
      Total: {{ getFPV }}
      <PaymentsDisplay :list="currentElements" />
      <Pagination
        :cur="curPage"
        :n="n"
        :length="paymentsList.length"
        @paginate="onChangePage"
      />
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
import CategorySelect from "./components/CategorySelect.vue";
import Pagination from "./components/Pagination.vue";
// import About from "./views/About.vue";
// import Dashboard from "./views/Dashboard.vue";
// import NotFound from "./views/NotFound.vue";

import AddPayment from "./components/AddPayment.vue";
import { mapMutations, mapGetters, mapActions } from "vuex";

export default {
  name: "App",
  components: {
    PaymentsDisplay,
    AddPayment,
    CategorySelect,
    Pagination,
    // About,
    // Dashboard,
    // NotFound,
  },
  // data: () => ({
  //   paymentsList: [],
  //   data: {
  //     text: "Arguments",
  //   },
  // }),

  data() {
    return {
      page: "",
      curPage: 1,
      n: 5,
      addForm: false,
    };
  },

  methods: {
    ...mapMutations(["setPaymentListData", "addDataToPaymentList"]),
    ...mapActions(["fetchData", "fetchCategory"]),

    addData(data) {
      console.log(data);
      // this.paymentsList.push(data);
      this.addDataToPaymentList(data);
    },
    showForm() {
      this.addForm = !this.addForm;
    },
    /*fetchData() {
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
    },*/
    // setPage() {
    //   //   this.page = location.hash.slice(1);
    //   // },
    //   this.page = location.pathname.slice(1);
    // },
    onChangePage(p) {
      this.curPage = p;
    },
  },
  computed: {
    // ...mapGetters(["getPaymentList"]),
    ...mapGetters({
      paymentsList: "getPaymentList",
      categories: "getCategoryList",
    }),

    currentElements() {
      const { n, curPage } = this;
      return this.paymentsList.slice(n * (curPage - 1), n * (curPage - 1) + n);
    },

    getFPV() {
      return this.$store.getters.getFullPaymentValue;
    },
    paymentsList() {
      return this.$store.getters.getPaymentList;
    },
  },
  created() {
    // инициализируется свойство paymentsList из data этого компонента
    // this.paymentsList = this.fetchData();

    //вызов мутации
    // this.$store.commit("setPaymentListData", this.fetchData());

    //обратиться к мутации напрямую, как к методу текущего компонента
    // this.setPaymentListData(this.fetchData());

    // this.$store.dispatch("fetchData");
    this.fetchData("page2");
    this.fetchData("page1");
    this.fetchData("page2");
    if (!this.categories.length) {
      this.fetchCategory();
    }
  },
  mounted() {
    const page = this.$route.params.page || 1;
    this.curPage = Number(page);
    // this.setPage();
    // const links = document.querySelectorAll("a");
    // links.forEach((link) => {
    //   link.addEventListener("click", (event) => {
    //     event.preventDefault();
    //     history.pushState({}, "", link.href);
    //     this.setPage();
    //   });
    // });
    // window.addEventListener("popstate", this.setPage);
    // // window.addEventListener("hashchange", () => {
    // //   this.setPage();
    // // });
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
