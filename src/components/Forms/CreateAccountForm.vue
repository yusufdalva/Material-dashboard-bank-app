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
                  <md-option v-for="person in people" :key="person.id" :value="person.id">
                    {{ person.name }}
                  </md-option>
                </md-select>
              </md-field>
            </div>
            <div class="md-layout-item md-small-size-100 md-size-50">
              <md-field>
                <label>Banks</label>
                <md-select v-model="selectedBank" required>
                  <md-option v-for="bank in banks" :key="bank.id" :value="bank.id">
                    {{ bank.City}} - {{ bank.County }}
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
            <div>Bank ID: {{ selectedBank }} , Person ID: {{ selectedPerson }}</div>
            </div>
        </md-card-content>
      </md-card>
    </form>
  </div>
</template>

<script>
let people = [
  {
    id: 17328372783,
    name: 'Mehmet',
    email: 'memo@gmail.com'
  },
  {
    id: 938298392832,
    name: 'Şahin',
    email: 'sahin@hotmail.com'
  },
  {
    id: 348742033,
    name: 'Fırat',
    email: 'turAt@yahoo.com'
  }
]
let banks = [
  {
    id: 1738473874,
    City: 'Ankara',
    County: 'Çankaya',
    Lng: (Math.random() * 200).toFixed(2),
    Lat: (Math.random() * 200).toFixed(2)
  },
  {
    id: 24738743874,
    City: 'Istanbul',
    County: 'Kadıköy',
    Lng: (Math.random() * 200).toFixed(2),
    Lat: (Math.random() * 200).toFixed(2)
  },
  {
    id: 38277827382,
    City: 'İzmir',
    County: 'Alsancak',
    Lng: (Math.random() * 200).toFixed(2),
    Lat: (Math.random() * 200).toFixed(2)
  }
]
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
      people: people,
      banks: banks
    }
  },
  methods: {
    submit () {
      let newAccount = {
        person_id: this.selectedPerson,
        id: Math.floor(Math.random() * 10000000),
        bank_id: this.selectedBank,
        accBalance: this.accBalance
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
