<template>
  <div>
    <md-table v-model="accounts" :table-header-color="tableHeaderColor" >
      <md-table-row slot="md-table-row" slot-scope="{ item }">
        <md-table-cell md-label="Person ID">{{ item.person_id }}</md-table-cell>
        <md-table-cell md-label="Bank ID">{{ item.bank_id }}</md-table-cell>
        <md-table-cell md-label="IBAN">{{ item.iban }}</md-table-cell>
      </md-table-row>
    </md-table>
  </div>
</template>

<script>
export default {
  name: 'account-table',
  props: {
    tableHeaderColor: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      selected: [],
      accounts: [
        {
          person_id: Math.floor(Math.random() * 3) + 1,
          iban: 'TR200006277989188594311367',
          bank_id: Math.floor(Math.random() * 3) + 1
        },
        {
          person_id: Math.floor(Math.random() * 3) + 1,
          iban: 'TR240006286471238664357838',
          bank_id: Math.floor(Math.random() * 3) + 1
        },
        {
          person_id: Math.floor(Math.random() * 3) + 1,
          iban: 'TR030006235672666598567775',
          bank_id: Math.floor(Math.random() * 3) + 1
        },
        {
          person_id: Math.floor(Math.random() * 3) + 1,
          iban: 'TR230006225254179799995365',
          bank_id: Math.floor(Math.random() * 3) + 1
        },
        {
          person_id: Math.floor(Math.random() * 3) + 1,
          iban: 'TR970006293248724621515538',
          bank_id: Math.floor(Math.random() * 3) + 1
        }
      ]
    }
  }
}
</script>
