<template>
  <div>
    <md-table v-model="banks" :table-header-color="tableHeaderColor">
      <md-table-row slot="md-table-row" slot-scope="{ item }">
        <md-table-cell md-label="ID">{{ item._id }}</md-table-cell>
        <md-table-cell md-label="Bank Name">{{ item.bankname }}</md-table-cell>
        <md-table-cell md-label="Location">{{ item.location }}</md-table-cell>
        <md-table-cell md-label="Longitude">{{ item.longitude }}</md-table-cell>
        <md-table-cell md-label="Latitude">{{ item.latitude }}</md-table-cell>
      </md-table-row>
      <div class="md-layout-item md-size-100 text-right">
        <md-button class="md-info" @click="enterNew" v-if="!showForm">Create New Bank</md-button>
        <md-button class="md-info" @click="cancelOp" v-if="showForm">Cancel</md-button>
      </div>
      <div>
        <create-bank-form v-if="showForm" @add-bank="addBank"></create-bank-form>
      </div>
    </md-table>
  </div>
</template>

<script>
import axios from 'axios'
import CreateBankForm from '../Forms/CreateBankForm'
export default {
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
      banks: []
    }
  },
  created () {
    axios.get('http://localhost:4040/api/banks')
      .then(response => {
        this.banks = response.data
        console.log('On Bank Page: ' + this.banks)
      })
  },
  methods: {
    enterNew: function () {
      if (!this.showForm) {
        this.showForm = true
      }
    },
    cancelOp () {
      if (this.showForm) {
        this.showForm = false
      }
    },
    addBank: function (obj) {
      if ((obj.bankname !== null || obj.bankname !== '') && (obj.location !== null || obj.location !== '') &&
        obj.longitude !== null && obj.latitude !== null) {
        axios.post('http://localhost:4040/api/banks', {
          bankname: obj.bankname,
          location: obj.location,
          latitude: obj.latitude,
          longitude: obj.longitude
        }).then(() => {
          axios.get('http://localhost:4040/api/banks')
            .then(response => {
              this.banks = response.data
            })
        })
        if (this.showForm) {
          this.showForm = false
        }
      } else {
        let errorMsg = ''
        if (obj.bankname === null || obj.bankname === '') {
          errorMsg += 'Please enter a bank name to generate the bank \n'
        }
        if (obj.location === null || obj.location === '') {
          errorMsg += 'Please enter a location to generate the bank \n'
        }
        if (obj.longitude === null) {
          errorMsg += 'Please enter a longitude for the location of the bank to generate the bank \n'
        }
        if (obj.latitude === null) {
          errorMsg += 'Please enter a latitude for the location of the bank to generate the bank \n'
        }
        alert(errorMsg)
      }
    }

  },
  components: {
    CreateBankForm
  }
}
</script>
