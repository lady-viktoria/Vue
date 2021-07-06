<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <Calc />
    <HelloWorld 
      msg="Welcome to Your Vue.js App" 
      :myArr="arr"/>
    Text: {{ message }} длина {{ message.length } }
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import Calc from "@/components/Calc.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
    Calc
  },
  data: () => ({
    message: "Ваша реклама",
    arr: [1,2,3,4,5]
  }),
};
</script>
