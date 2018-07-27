<template>
  <div>
    <form>
      <md-card>
        <h3 class="title">New Account</h3>
        <md-card-content>
          <div class="md-layout md-gutter">
            <div class="md-layout-item md-small-size-100 md-size-50">
              <md-field>
                <label>Customers</label>
                <md-select v-model="selectedPerson" required>
                  <md-option v-for="person in people" :key="person._id" :value="person._id">
                   Person ID : {{ person._id }}
                  </md-option>
                </md-select>
              </md-field>
            </div>
            <div class="md-layout-item md-small-size-100 md-size-50">
              <md-field>
                <label>Banks</label>
                <md-select v-model="selectedBank" required>
                  <md-option v-for="bank in banks" :key="bank._id" :value="bank._id">
                   Bank ID : {{ bank._id }}
                  </md-option>
                </md-select>
              </md-field>
            </div>
            <div class="md-layout-item md-small-size-100 md-size-50">
              <md-field>
                <label>Balance</label>
                <md-input v-model="accBalance" type="number" required></md-input>
              </md-field>
            </div>
            <div class="md-layout-item md-size-100 text-right">
              <md-button class="md-raised" type="submit" @click="submit">Submit</md-button>
            </div>
            </div>
        </md-card-content>
      </md-card>
    </form>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  props: {
    dataBackgroundColor: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      selectedPerson: null,
      selectedBank: null,
      accBalance: null,
      people: [],
      banks: []
    }
  },
  created () {
    axios.get('http://localhost:4040/api/customers')
      .then(response => {
        this.people = response.data
      })
    axios.get('http://localhost:4040/api/banks')
      .then(response => {
        this.banks = response.data
      })
  },
  methods: {
    submit () {
      let newAccount = {
        owner: this.selectedPerson,
        bank: this.selectedBank,
        balance: this.accBalance
      }
      this.$emit('add-account', newAccount)
    }
  }
}

</script>

<style scoped>
  h3 {
    color: #d50000;
  }
</style>
