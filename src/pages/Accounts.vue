<template>
  <div class="content">
    <div class="md-layout">
      <div class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100">
        <md-card md-with-hover>
          <md-card-header data-background-color="green">
            <h4 class="title">Account table</h4>
            <p class="category">Displaying the list of accounts with sample data</p>
          </md-card-header>
          <md-card-content>
            <account-table table-header-color="green"></account-table>
          </md-card-content>
        </md-card>
      </div>
    </div>
  </div>
</template>

<script>
import AccountTable from '../components/Tables/AccountTable'
export default {
  name: 'Accounts',
  components: {
    AccountTable
  }
}
</script>

<style scoped>

</style>
