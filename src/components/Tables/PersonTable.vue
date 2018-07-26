<template>
  <div>
    <md-table v-model="people" :table-header-color="tableHeaderColor">
      <md-table-row slot="md-table-row" slot-scope="{ item }">
        <md-table-cell md-label="Update">
          <md-radio v-model="toUpdate" :value="item._id"></md-radio>
        </md-table-cell>
        <md-table-cell md-label="ID">{{ item._id }}</md-table-cell>
        <md-table-cell md-label="Full Name">{{ item.customername }}</md-table-cell>
        <md-table-cell md-label="E-mail">{{ item.email }}</md-table-cell>
        <md-table-cell md-label="Join Date">{{ item.createdAt }}</md-table-cell>
      </md-table-row>
      <div>{{ toUpdate }}</div>
      <div class="md-layout-item md-size-100 text-right">
        <md-button class="md-info" @click="enterNew" v-if="!showForm && !formToCreate">Create</md-button>
        <md-button class="md-info" @click="updateInst" v-if="toUpdate && !showForm && !formToUpdate">
          Update</md-button>
        <md-button class="md-info" @click="cancelOp" v-if="showForm">Cancel</md-button>
      </div>
      <div>
        <update-person-form v-if="showForm && formToUpdate" @update-customer="updateCustomer"></update-person-form>
        <create-person-form v-if="showForm && formToCreate" @add-customer="addCustomer"></create-person-form>
      </div>
    </md-table>
  </div>
</template>

<script>
import axios from 'axios'
import CreatePersonForm from '../Forms/CreatePersonForm'
import UpdatePersonForm from '../Forms/UpdatePersonForm'
export default {
  components: {
    CreatePersonForm,
    UpdatePersonForm
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
      })
      .catch(err => {
        throw err
      })
  },
  data () {
    return {
      toUpdate: null,
      toDelete: null,
      formToCreate: false,
      formToUpdate: false,
      showForm: false,
      selected: [],
      people: []
    }
  },
  methods: {
    enterNew () {
      this.showForm = true
      this.formToCreate = true
    },
    cancelOp () {
      this.showForm = false
      if (this.formToCreate) {
        this.formToCreate = false
      }
      if (this.formToUpdate) {
        this.formToUpdate = false
      }
    },
    updateInst () {
      this.showForm = true
      this.formToUpdate = true
    },
    addCustomer (obj) {
      if (obj.firstname !== null && obj.lastname !== null && obj.email !== null &&
        obj.email.indexOf('@') !== -1) {
        axios.post('http://localhost:4040/api/customers', {
          customername: obj.firstname + ' ' + obj.lastname,
          email: obj.email
        }).then(response => { // response.data returns the new instance created
          this.people.push(response.data)
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
    },
    updateCustomer (obj) {
      const url = 'http://localhost:4040/api/customers/' + this.toUpdate
      let toChange = {}
      axios.get(url)
        .then(response => {
          toChange = response.data
        })
        .then(() => {
          if (obj.firstname === null && obj.lastname === null) {
            alert('Please enter both first name and last name information to change customer name information')
          }
          if (obj.firstname !== null && obj.lastname !== null) {
            toChange.customername = obj.firstname + ' ' + obj.lastname
          }
          if (obj.email !== null) {
            toChange.email = obj.email
          }
          if (obj.firstname !== null || obj.lastname !== null || obj.email !== null) {
            axios.put(url, toChange)
            for (let i = 0; i < this.people.length; i++) {
              if (this.people[i]._id === this.toUpdate) {
                this.people[i] = toChange
              }
            }
          }
          this.showForm = false
          this.formToUpdate = false
        })
    }
  }
}

</script>

<style scoped>

</style>
