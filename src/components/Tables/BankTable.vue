<template>
  <div>
    <md-table v-model="banks" :table-header-color="tableHeaderColor">
      <md-table-row slot="md-table-row" slot-scope="{ item }">
        <md-table-cell md-label="ID">{{ item.id }}</md-table-cell>
        <md-table-cell md-label="City">{{ item.City }}</md-table-cell>
        <md-table-cell md-label="County">{{ item.County }}</md-table-cell>
        <md-table-cell md-label="Longitude">{{ item.Lng }}</md-table-cell>
        <md-table-cell md-label="Latitude">{{ item.Lat }}</md-table-cell>
      </md-table-row>
    </md-table>
  </div>
</template>

<script>
export default {
  name: 'bank-table',
  props: {
    tableHeaderColor: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      selected: [],
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
