<template>
  <div class="addForm">
    <input v-model="date" placeholder=" Payment date" />
    <!-- <input v-model="category" placeholder="category" /> -->
    <CategorySelect
      @onChange="onCategorySelect"
      :categories="categories"
      :class="addForm"
    />
    <input v-model.number="value" type="number" placeholder=" Payment amount" />
    <button @click="onClick">Add Data</button>
  </div>
</template>

<script>
import CategorySelect from "./CategorySelect.vue";
export default {
  name: "AddPayment",
  components: {
    CategorySelect,
  },
  props: {
    categories: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      date: "",
      category: "",
      value: null,
      addForm: false,
    };
  },
  methods: {
    onClick() {
      const { category, value } = this;
      const data = {
        date: this.date || this.getCurrentDate,
        category,
        value,
      };

      console.log("add", data);
      this.$emit("addNewPayment", data);
    },
    onCategorySelect(c) {
      this.category = c;
    },
  },
  computed: {
    getCurrentDate() {
      const today = new Date();
      const d = today.getDate();
      const m = today.getMonth() + 1;
      const y = today.getFullYear();
      return `${d}.${m}.${y}`;
    },
  },
};
</script>

<style>
.addForm {
  width: 200px;
}
.addForm input,
select {
  padding: 3px 5px;
  width: 100%;
  border-width: 1px;
}
.addForm select {
  box-sizing: content-box;
  width: 100%;
}
</style>