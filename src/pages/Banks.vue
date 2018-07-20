<template>
  <div class="content">
    <div class="md-layout">
      <div class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100">
        <md-card md-with-hover>
          <md-card-header data-background-color="blue">
            <h4 class="title">List of Banks</h4>
            <p class="category">Displaying the list of banks with sample data</p>
          </md-card-header>
          <md-card-content>
            <bank-table table-header-color="blue"></bank-table>
          </md-card-content>
        </md-card>
      </div>
    </div>
  </div>
</template>

<script>
import BankTable from '../components/Tables/BankTable'
export default {
  name: 'Banks',
  components: {BankTable}
}
</script>

<style scoped>

</style>
