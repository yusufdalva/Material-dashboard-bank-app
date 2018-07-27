<template>
  <div>
    <md-table v-model="accounts" :table-header-color="tableHeaderColor" >
      <md-table-row slot="md-table-row" slot-scope="{ item }">
        <md-table-cell md-label="Update">
          <md-radio v-model="toUpdate" :value="item._id"></md-radio>
        </md-table-cell>
        <md-table-cell md-label="Delete">
          <md-radio v-model="toDelete" :value="item._id"></md-radio>
        </md-table-cell>
        <md-table-cell md-label="ID">{{ item._id }}</md-table-cell>
        <md-table-cell md-label="Person ID">{{ item.owner }}</md-table-cell>
        <md-table-cell md-label="Bank ID">{{ item.bank }}</md-table-cell>
        <md-table-cell md-label="Balance">{{ item.balance }}</md-table-cell>
      </md-table-row>
      <div class="md-layout-item md-size-100 text-right">
        <md-button class="md-info" @click="enterNew" v-if="!showForm && !formToCreate">Create</md-button>
        <md-button class="md-info" @click="updateInst" v-if="toUpdate && !showForm && !formToUpdate">
          Update
        </md-button>
        <md-button class="md-info" @click="deleteAccount" v-if="toDelete">Delete</md-button>
        <md-button class="md-info" @click="cancelOp" v-if="showForm">Cancel</md-button>
      </div>
      <div>
        <update-account-form v-if="showForm && formToUpdate" @update-account="updateAccount"></update-account-form>
        <create-account-form v-if="showForm && formToCreate" @add-account="addAccount"></create-account-form>
      </div>
    </md-table>
  </div>
</template>

<script>
import axios from 'axios'
import UpdateAccountForm from '../Forms/UpdateAccountForm'
import CreateAccountForm from '../Forms/CreateAccountForm'
export default {
  components: {
    UpdateAccountForm,
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
      toDelete: null,
      formToUpdate: false,
      formToCreate: false,
      showForm: false,
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
      this.showForm = true
      this.formToCreate = true
    },
    cancelOp () {
      this.showForm = false
      this.formToCreate = false
      this.formToUpdate = false
    },
    updateInst () {
      this.showForm = true
      this.formToUpdate = true
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
    },
    updateAccount (balance) {
      if (!balance) {
        alert('Please enter a valid bank balance to modify the account')
      } else {
        const url = 'http://localhost:4040/api/accounts/' + this.toUpdate
        console.log(url)
        let toChange = {}
        axios.get(url)
          .then(response => {
            toChange = response.data
          })
          .then(() => {
            console.log(toChange)
            toChange.balance = balance
            axios.put(url, toChange)
            for (let i = 0; i < this.accounts.length; i++) {
              if (this.accounts[i]._id === this.toUpdate) {
                this.accounts[i] = toChange
                console.log(this.accounts[i])
              }
            }
          })
          .then(() => {
            this.showForm = false
            this.formToUpdate = false
          })
      }
    },
    deleteAccount () {
      let accToDelete = {}
      const url = 'http://localhost:4040/api/accounts/' + this.toDelete
      for (let i = 0; i < this.accounts.length; i++) {
        if (this.accounts[i]._id === this.toDelete) {
          accToDelete = this.accounts[i]
          this.accounts.splice(i, 1)
        }
      }
      axios.delete(url, accToDelete)
        .then(() => {
          this.toDelete = null
        })
    }
  }
}
</script>
