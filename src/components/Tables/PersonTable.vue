<template>
  <div>
    <md-table v-model="people" :table-header-color="tableHeaderColor">
      <md-table-row slot="md-table-row" slot-scope="{ item }">
        <md-table-cell md-label="ID">{{ item._id }}</md-table-cell>
        <md-table-cell md-label="Full Name">{{ item.customername }}</md-table-cell>
        <md-table-cell md-label="E-mail">{{ item.email }}</md-table-cell>
        <md-table-cell md-label="Join Date">{{ item.createdAt }}</md-table-cell>
      </md-table-row>
      <div class="md-layout-item md-size-100 text-right">
        <md-button class="md-info" @click="enterNew" v-if="!showForm">Create New Customer</md-button>
        <md-button class="md-info" @click="cancelOp" v-if="showForm">Cancel</md-button>
      </div>
      <div>
        <create-person-form v-if="showForm" @add-customer="addCustomer"></create-person-form>
      </div>
    </md-table>
  </div>
</template>

<script>
import axios from 'axios'
import CreatePersonForm from '../Forms/CreatePersonForm'
export default {
  components: {
    CreatePersonForm
  },
  props: {
    tableHeaderColor: {
      type: String,
      default: ''
    }
  },
  created () {
    axios.get('http://localhost:4040/api/customers')
      .then(response => {
        this.people = response.data
        console.log('On Customers page: ' + this.people)
      })
      .catch(err => {
        throw err
      })
  },
  data () {
    return {
      showForm: false,
      selected: [],
      people: []
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
    addCustomer (obj) {
      if (obj.firstname !== null && obj.lastname !== null && obj.email !== null &&
        obj.email.indexOf('@') !== -1) {
        axios.post('http://localhost:4040/api/customers', {
          customername: obj.firstname + ' ' + obj.lastname,
          email: obj.email
        }).then(() => {
          axios.get('http://localhost:4040/api/customers')
            .then(response => {
              this.people = response.data
            })
        })
        if (this.showForm) {
          this.showForm = false
        }
      } else {
        let errorMsg = ''
        if (obj.firstname === null) {
          errorMsg += 'Enter your name to "First Name" area to generate account \n'
        }
        if (obj.lastname === null) {
          errorMsg += 'Enter your surname to "Last Name" area to generate account \n'
        }
        if ((obj.email === null) || (obj.email.indexOf('@') === -1)) {
          errorMsg += 'Enter a valid email address to "E-mail" area to generate account \n'
        }
        alert(errorMsg)
      }
    }
  }
}

</script>

<style scoped>

</style>
