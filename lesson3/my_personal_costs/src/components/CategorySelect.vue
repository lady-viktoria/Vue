<template>
  <div>
    <select v-on:change="onChange($event)" v-model="selected">
      <option
        :class="[$style.choiseCategory]"
        value=""
        disabled
        selected
        hidden
      >
        Select payment description
      </option>
      <option v-for="(option, idx) in categories" :key="idx">
        {{ option }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  name: "CategorySelect",
  props: {
    categories: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      selected: "",
    };
  },
  methods: {
    onChange(event) {
      this.$emit("onChange", event.target.value);
    },
    //this.$emit("addNewPayment", data);
  },
};
</script>
<style module lang="scss">
option:nth-child(1)::after .choiseCategory {
  background: aqua;
}
#choiseCat {
  background: rgb(179, 9, 122);
  // text-rendering: auto;
  // color: -internal-light-dark(black, white);
  // letter-spacing: normal;
  // word-spacing: normal;
  // text-transform: none;
  // text-indent: 0px;
  // text-shadow: none;
  // display: inline-block;
  // text-align: start;
  // appearance: auto;
  // background-color: -internal-light-dark(rgb(255, 255, 255), rgb(59, 59, 59));
  // -webkit-rtl-ordering: logical;
  // cursor: text;
  // margin: 0em;
  // font: 400 13.3333px Arial;
  // padding: 1px 2px;
  // border-width: 2px;
  // border-style: inset;
  // border-color: -internal-light-dark(rgb(118, 118, 118), rgb(133, 133, 133));
  // border-image: initial;
}
</style>
