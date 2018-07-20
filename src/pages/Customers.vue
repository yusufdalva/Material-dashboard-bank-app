<template>
  <div class="content">
    <div class="md-layout">
      <div class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100">
        <md-card md-with-hover>
          <md-card-header data-background-color="purple">
            <h4 class="title">List of Customers</h4>
            <p class="category">Displaying the list of people with sample data</p>
          </md-card-header>
          <md-card-content>
            <person-table table-header-color="purple"></person-table>
          </md-card-content>
        </md-card>
      </div>
    </div>
  </div>
</template>

<script>
import PersonTable from '../components/Tables/PersonTable'

export default {
  name: 'Customers',
  components: {
    PersonTable
  }
}
</script>

<style scoped>

</style>
