<template>
  <div class="payments-list">
    <!-- <div v-for="(item, idx) in list" :key="idx">{{ idx + 1 }}-{{ item }}</div> -->

    <table id="table" cellpadding="10">
      <tr>
        <th>Номер платежа</th>
        <th>Дата</th>
        <th>Описание</th>
        <th>Сумма платежа</th>
      </tr>
      <tr v-for="(item, idx) in list" :key="idx">
        <td align="center">{{ idx + 1 }}</td>
        <td>{{ item.date }}</td>
        <td>{{ item.category }}</td>
        <td align="center">{{ item.value }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "PaymentsDisplay",
  props: {
    list: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {};
  },
};
</script>

<style lang="sass" scoped>
</style>