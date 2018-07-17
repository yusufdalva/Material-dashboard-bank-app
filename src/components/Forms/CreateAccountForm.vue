<template>
  <div>
    <form>
      <md-card>
        <md-card-header :data-background-color="dataBackgroundColor">
          <h4 class="title">New Account</h4>
        </md-card-header>
        <md-card-content>
          <div class="md-layout md-gutter">
            <div class="md-layout-item md-small-size-100 md-size-50">
              <md-field>
                <md-select v-model="selectedPeople">
                  <md-option v-for="person in people" v-bind:key="person.name" :value="person.id">
                    {{ person.name }}
                  </md-option>
                </md-select>
              </md-field>
            </div>
            <div class="md-layout-item md-small-size-100 md-size-50">
              <md-field>
                <md-select v-model="selectedBank">
                  <md-option v-for="bank in banks" v-bind:key="bank.City" :value="bank.id">
                    {{ bank.City}} - {{ bank.County }}
                  </md-option>
                </md-select>
              </md-field>
            </div>
            <div class="md-layout-item md-size-100 text-right">
              <md-button class="md-raised">Submit</md-button>
            </div>
            </div>
        </md-card-content>
      </md-card>
    </form>
  </div>
</template>

<script>
export default {
  name: 'create-account-form',
  props: {
    dataBackgroundColor: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      selectedPeople: [],
      selectedBank: [],
      people: [
        {
          id: 1,
          name: 'Mehmet',
          email: 'memo@gmail.com'
        },
        {
          id: 2,
          name: 'Şahin',
          email: 'sahin@hotmail.com'
        },
        {
          id: 3,
          name: 'Fırat',
          email: 'turAt@yahoo.com'
        }
      ],
      banks: [
        {
          id: 1,
          City: 'Ankara',
          County: 'Çankaya',
          Lng: (Math.random() * 200).toFixed(2),
          Lat: (Math.random() * 200).toFixed(2)
        },
        {
          id: 2,
          City: 'Istanbul',
          County: 'Kadıköy',
          Lng: (Math.random() * 200).toFixed(2),
          Lat: (Math.random() * 200).toFixed(2)
        },
        {
          id: 3,
          City: 'İzmir',
          County: 'Alsancak',
          Lng: (Math.random() * 200).toFixed(2),
          Lat: (Math.random() * 200).toFixed(2)
        }
      ]
    }
  }
}

</script>

<style scoped>
  md-option {
    text-align-last: center;
  }

</style>
