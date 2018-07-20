<template>
  <div>
    <md-table v-model="banks" :table-header-color="tableHeaderColor">
      <md-table-row slot="md-table-row" slot-scope="{ item }">
        <md-table-cell md-label="ID">{{ item.id }}</md-table-cell>
        <md-table-cell md-label="Location">{{ item.Location }}</md-table-cell>
        <md-table-cell md-label="Longitude">{{ item.Lng }}</md-table-cell>
        <md-table-cell md-label="Latitude">{{ item.Lat }}</md-table-cell>
      </md-table-row>
      <div class="md-layout-item md-size-100 text-right">
        <md-button class="md-info" @click="enterNew" v-if="!showForm">Create New Bank</md-button>
        <md-button class="md-info" @click="cancelOp" v-if="showForm">Cancel</md-button>
      </div>
      <div>
        <create-bank-form v-if="showForm" @add-bank="addBank"></create-bank-form>
      </div>
      <div>{{ showForm }}</div>
    </md-table>
  </div>
</template>

<script>
import CreateBankForm from '../Forms/CreateBankForm'
let banks = [
  {
    id: 1,
    Location: 'Ankara - Çankaya',
    Lng: (Math.random() * 200).toFixed(2),
    Lat: (Math.random() * 200).toFixed(2)
  },
  {
    id: 2,
    Location: 'Istanbul - Kadıköy',
    Lng: (Math.random() * 200).toFixed(2),
    Lat: (Math.random() * 200).toFixed(2)
  },
  {
    id: 3,
    Location: 'İzmir - Alsancak',
    Lng: (Math.random() * 200).toFixed(2),
    Lat: (Math.random() * 200).toFixed(2)
  }
]
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
      banks: banks
    }
  },
  methods: {
    enterNew: function () {
      if (!this.showForm) {
        this.showForm = true
      }
    },
    cancelOp () {
      if (this.showForm) {
        this.showForm = true
      }
    },
    addBank: function (obj) {
      let newBank = {
        id: banks.length + 1,
        Location: obj.location,
        Lng: obj.longitude,
        Lat: obj.latitude
      }
      banks.push(newBank)
      if (this.showForm) {
        this.showForm = false
      }
    }
  },
  components: {
    CreateBankForm
  }
}
</script>
