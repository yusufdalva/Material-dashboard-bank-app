<template>
  <div>
    <md-table v-model="people" :table-header-color="tableHeaderColor">
      <md-table-row slot="md-table-row" slot-scope="{ item }">
        <md-table-cell md-label="ID">{{ item.id }}</md-table-cell>
        <md-table-cell md-label="Name">{{ item.name }}</md-table-cell>
        <md-table-cell md-label="E-mail">{{ item.email }}</md-table-cell>
      </md-table-row>
    </md-table>
  </div>
</template>

<script>
export default {
  name: 'person-table',
  tableHeaderColor: {
    type: String,
    default: ''
  },
  data () {
    return {
      selected: [],
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
      ]
    }
  }
}

</script>

<style scoped>

</style>
