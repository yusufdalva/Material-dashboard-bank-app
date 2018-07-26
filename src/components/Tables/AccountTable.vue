<template>
  <div>
    <md-table v-model="accounts" :table-header-color="tableHeaderColor" >
      <md-table-row slot="md-table-row" slot-scope="{ item }">
        <md-table-cell md-label="Update">
          <md-radio v-model="toUpdate" :value="item._id"></md-radio>
        </md-table-cell>
        <md-table-cell md-label="ID">{{ item._id }}</md-table-cell>
        <md-table-cell md-label="Person ID">{{ item.owner }}</md-table-cell>
        <md-table-cell md-label="Bank ID">{{ item.bank }}</md-table-cell>
        <md-table-cell md-label="Balance">{{ item.balance }}</md-table-cell>
      </md-table-row>
      <div>{{ toUpdate }}</div>
      <div class="md-layout-item md-size-100 text-right">
        <md-button class="md-info" @click="enterNew" v-if="!formToCreate">Create New Account</md-button>
        <md-button class="md-info" @click="cancelOp" v-if="formToCreate">Cancel</md-button>
      </div>
      <div>
        <create-account-form v-if="formToCreate" @add-account="addAccount"></create-account-form>
      </div>
    </md-table>
  </div>
</template>

<script>
import axios from 'axios'
import CreateAccountForm from '../Forms/CreateAccountForm'
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
      toUpdate: null,
      formToUpdate: false,
      formToCreate: false,
      selected: [],
      accounts: []
    }
  },
  created () {
    axios.get('http://localhost:4040/api/accounts')
      .then(response => {
        this.accounts = response.data
      })
  },
  methods: {
    enterNew () {
      if (!this.formToCreate) {
        this.formToCreate = true
      }
    },
    cancelOp () {
      if (this.formToCreate) {
        this.formToCreate = false
      }
    },
    addAccount (obj) {
      if ((obj.person_id !== null) && (obj.bank_id !== null) && (obj.accBalance !== null)) {
        axios.post('http://localhost:4040/api/accounts', {
          owner: obj.owner,
          bank: obj.bank,
          balance: obj.balance
        })
          .then(response => {
            this.accounts.push(response.data)
          })
        if (this.formToCreate) {
          this.formToCreate = false
        }
      } else {
        let errorMsg = ''
        if (obj.owner === null) {
          errorMsg += 'Please select a target customer to generate account \n'
        }
        if (obj.bank === null) {
          errorMsg += 'Please select a target bank to generate account \n'
        }
        if (obj.balance === null) {
          errorMsg += 'Please enter an initial balance for the account to generate \n'
        }
        alert(errorMsg)
      }
    }

  }
}
</script>
