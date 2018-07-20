<template>
  <div>
    <md-table v-model="accounts" :table-header-color="tableHeaderColor" >
      <md-table-row slot="md-table-row" slot-scope="{ item }">
        <md-table-cell md-label="Person ID">{{ item.person_id }}</md-table-cell>
        <md-table-cell md-label="Bank ID">{{ item.bank_id }}</md-table-cell>
        <md-table-cell md-label="IBAN">{{ item.iban }}</md-table-cell>
        <md-table-cell md-label="Balance">{{ item.accBalance }}</md-table-cell>
      </md-table-row>
      <div class="md-layout-item md-size-100 text-right">
        <md-button class="md-info" @click="enterNew" v-if="!showForm">Create New Account</md-button>
        <md-button class="md-info" @click="cancelOp" v-if="showForm">Cancel</md-button>
      </div>
      <div>
        <create-account-form v-if="showForm" @add-account="addAccount"></create-account-form>
      </div>
    </md-table>
  </div>
</template>

<script>
import CreateAccountForm from '../Forms/CreateAccountForm'
let accounts = [
  {
    person_id: Math.floor(Math.random() * 3) + 1,
    iban: 'TR200006277989188594311367',
    bank_id: Math.floor(Math.random() * 3) + 1,
    accBalance: (Math.random() * 1000000).toFixed(2)
  },
  {
    person_id: Math.floor(Math.random() * 3) + 1,
    iban: 'TR240006286471238664357838',
    bank_id: Math.floor(Math.random() * 3) + 1,
    accBalance: (Math.random() * 1000000).toFixed(2)
  },
  {
    person_id: Math.floor(Math.random() * 3) + 1,
    iban: 'TR030006235672666598567775',
    bank_id: Math.floor(Math.random() * 3) + 1,
    accBalance: (Math.random() * 1000000).toFixed(2)
  },
  {
    person_id: Math.floor(Math.random() * 3) + 1,
    iban: 'TR230006225254179799995365',
    bank_id: Math.floor(Math.random() * 3) + 1,
    accBalance: (Math.random() * 1000000).toFixed(2)
  },
  {
    person_id: Math.floor(Math.random() * 3) + 1,
    iban: 'TR970006293248724621515538',
    bank_id: Math.floor(Math.random() * 3) + 1,
    accBalance: (Math.random() * 1000000).toFixed(2)
  }
]
export default {
  components: {
    CreateAccountForm
  },
  props: {
    tableHeaderColor: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      showForm: false,
      selected: [],
      accounts: accounts
    }
  },
  methods: {
    enterNew () {
      if (!this.showForm) {
        this.showForm = true
      }
    },
    cancelOp () {
      if (this.showForm) {
        this.showForm = false
      }
    },
    addAccount (obj) {
      let newAccount = {
        person_id: obj.person_id,
        iban: 'TR200006277989188594311367',
        bank_id: obj.bank_id,
        accBalance: obj.accBalance
      }
      accounts.push(newAccount)
      if (this.showForm) {
        this.showForm = false
      }
    }
  }
}
</script>
