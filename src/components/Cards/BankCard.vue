<template>
    <stats-card data-background-color="green">
      <template slot="header">
        <md-icon >account_balance</md-icon>
      </template>
      <template slot="content">
        <p class="category">Number Of Banks:</p>
        <h3 class="title">30</h3>
      </template>
    </stats-card>
</template>

<script>
import StatsCard from './StatsCard'
export default {
  components: {StatsCard}
}
</script>

<style scoped>

</style>
