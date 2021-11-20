<template>
  <div :class="[$style.wrp]">
    <div @click="onClick(cur - 1)">&lt;</div>
    <div
      v-for="i in amount"
      :key="i"
      :class="{
        [$style.active]: cur === i,
      }"
      @click="onClick(i)"
    >
      {{ i }}
    </div>
    <div @click="onClick(cur + 1)">&gt;</div>
    <!-- <button v-for="(pageKey, idx) in pageKeys" :key="idx">{{ pageKey }}</button> -->
  </div>
</template>

<script>
export default {
  name: "Pagination",
  props: {
    length: Number,
    n: Number,
    cur: Number,
    // pageKeys: {
    //   type: Array,
    //   default: () => [],
    // },
  },
  computed: {
    amount() {
      return Math.ceil(this.length / this.n);
    },
  },
  methods: {
    onClick(p) {
      if (p < 1 || p > this.amount || p === this.cur) {
        return;
      }
      this.$emit("paginate", p);
    },
  },
};
</script>

<style module lang="scss">
.wrp {
  display: flex;
  & > div {
    padding: 10px;
    &.active {
      background: #ccc;
    }
  }
}
</style>