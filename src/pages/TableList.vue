<template>
  <div class="content">
    <div class="md-layout">
      <div class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100">
        <md-card md-with-hover>
          <md-card-header data-background-color="purple">
            <h4 class="title">Person table</h4>
            <p class="category">Displaying the list of people with sample data</p>
          </md-card-header>
          <md-card-content>
            <person-table table-header-color="purple"></person-table>
          </md-card-content>
        </md-card>
      </div>

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
import BankTable from '../components/Tables/BankTable'
import PersonTable from '../components/Tables/PersonTable'
import AccountTable from '../components/Tables/AccountTable'

export default{
  components: {
    PersonTable,
    BankTable,
    AccountTable
  }
}
</script>
