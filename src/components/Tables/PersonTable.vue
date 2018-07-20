<template>
  <div>
    <md-table v-model="people" :table-header-color="tableHeaderColor">
      <md-table-row slot="md-table-row" slot-scope="{ item }">
        <md-table-cell md-label="ID">{{ item.id }}</md-table-cell>
        <md-table-cell md-label="Full Name">{{ item.name }}</md-table-cell>
        <md-table-cell md-label="E-mail">{{ item.email }}</md-table-cell>
        <md-table-cell md-label="Join Date">{{ item.date }}</md-table-cell>
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
import CreatePersonForm from '../Forms/CreatePersonForm'
let people = [
  {
    id: 1,
    name: 'Mehmet',
    email: 'memo@gmail.com',
    date: '25-02-2008'
  },
  {
    id: 2,
    name: 'Şahin',
    email: 'sahin@hotmail.com',
    date: '18-04-2010'
  },
  {
    id: 3,
    name: 'Fırat',
    email: 'turAt@yahoo.com',
    date: '05-12-1996'
  }
]
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
  data () {
    return {
      showForm: false,
      selected: [],
      people: people
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
      let newPerson = {
        id: people.length + 1,
        name: obj.firstname + ' ' + obj.lastname,
        email: obj.email,
        date: obj.joindate
      }
      people.push(newPerson)
      if (this.showForm) {
        this.showForm = false
      }
    }
  }
}

</script>

<style scoped>

</style>
