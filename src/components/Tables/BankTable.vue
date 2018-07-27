<template>
  <div>
    <md-table v-model="banks" :table-header-color="tableHeaderColor">
      <md-table-row slot="md-table-row" slot-scope="{ item }">
        <md-table-cell md-label="Update">
          <md-radio v-model="toUpdate" :value="item._id"></md-radio>
        </md-table-cell>
        <md-table-cell md-label="Delete">
          <md-radio v-model="toDelete" :value="item._id"></md-radio>
        </md-table-cell>
        <md-table-cell md-label="ID">{{ item._id }}</md-table-cell>
        <md-table-cell md-label="Bank Name">{{ item.bankname }}</md-table-cell>
        <md-table-cell md-label="Location">{{ item.location }}</md-table-cell>
        <md-table-cell md-label="Longitude">{{ item.longitude }}</md-table-cell>
        <md-table-cell md-label="Latitude">{{ item.latitude }}</md-table-cell>
      </md-table-row>
      <div class="md-layout-item md-size-100 text-right">
        <md-button class="md-info" @click="enterNew" v-if="!showForm && !formToCreate">Create</md-button>
        <md-button class="md-info" @click="updateInst" v-if="toUpdate && !showForm && !formToUpdate">
          Update
        </md-button>
        <md-button class="md-info" @click="deleteBank" v-if="toDelete">Delete</md-button>
        <md-button class="md-info" @click="cancelOp" v-if="showForm">Cancel</md-button>
      </div>
      <div>
        <update-bank-form v-if="showForm && formToUpdate" @update-bank="updateBank"></update-bank-form>
        <create-bank-form v-if="showForm && formToCreate" @add-bank="addBank"></create-bank-form>
      </div>
    </md-table>
  </div>
</template>

<script>
import axios from 'axios'
import UpdateBankForm from '../Forms/UpdateBankForm'
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
      toUpdate: null,
      toDelete: null,
      formToCreate: false,
      formToUpdate: false,
      showForm: false,
      selected: [],
      banks: []
    }
  },
  created () {
    axios.get('http://localhost:4040/api/banks')
      .then(response => {
        this.banks = response.data
      })
  },
  methods: {
    enterNew: function () {
      this.showForm = true
      this.formToCreate = true
    },
    cancelOp () {
      this.showForm = false
      this.formToUpdate = false
      this.formToCreate = false
    },
    updateInst () {
      this.showForm = true
      this.formToUpdate = true
    },
    addBank (obj) {
      if ((obj.bankname !== null || obj.bankname !== '') && (obj.location !== null || obj.location !== '') &&
      obj.longitude !== null && obj.latitude !== null) {
        axios.post('http://localhost:4040/api/banks', {
          bankname: obj.bankname,
          location: obj.location,
          latitude: obj.latitude,
          longitude: obj.longitude
        }).then(response => { // response.data returns the new instance created
          this.banks.push(response.data)
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
    },
    updateBank (obj) {
      const url = 'http://localhost:4040/api/banks/' + this.toUpdate
      let toChange = {}
      axios.get(url)
        .then(response => {
          toChange = response.data
        })
        .then(() => {
          if (obj.bankname !== null) {
            toChange.bankname = obj.bankname
          }
          if (obj.location !== null) {
            toChange.location = obj.location
          }
          if (obj.longitude !== null) {
            toChange.latitude = obj.latitude
          }
          if (obj.latitude !== null) {
            toChange.longitude = obj.longitude
          }
          if (obj.bankname !== null || obj.location !== null || obj.longitude !== null || obj.latitude !== null) {
            axios.put(url, toChange)
            for (let i = 0; i < this.banks.length; i++) {
              if (this.banks[i]._id === this.toUpdate) {
                this.banks[i] = toChange
              }
            }
          }
        })
        .then(() => {
          this.showForm = false
          this.formToUpdate = false
        })
    },
    deleteBank () {
      let bankToDelete = {}
      const url = 'http://localhost:4040/api/banks/' + this.toDelete
      for (let i = 0; i < this.banks.length; i++) {
        if (this.banks[i]._id === this.toDelete) {
          bankToDelete = this.banks[i]
          this.banks.splice(i, 1)
        }
      }
      axios.delete(url, bankToDelete).then(() => {
        this.toDelete = null
      })
    }
  },
  components: {
    UpdateBankForm,
    CreateBankForm
  }
}
</script>
