<template>
  <div>
    <form>
      <md-card>
        <h3 class="title">Create Bank</h3>
        <md-card-content>
        <div class="md-layout">
          <div class="md-layout-item md-small-size-100 md-size-50">
            <md-field>
              <label>Bank Name</label>
              <md-input v-model="bankname" type="text" required></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-50">
            <md-field>
              <label>Location</label>
              <md-input v-model="location" type="text" required></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-50">
            <md-field>
              <label>Longitude</label>
              <md-input v-model="longitude" type="number" required></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-50">
            <md-field>
              <label>Latitude</label>
              <md-input v-model="latitude" type="number" required></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-size-100 text-right">
            <md-button class="md-raised" @click="submit">Submit</md-button>
          </div>
          </div>
        </md-card-content>
      </md-card>
    </form>
  </div>
</template>

<script>
export default {
  props: {
    dataBackgroundColor: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      bankname: null,
      location: null,
      longitude: null,
      latitude: null
    }
  },
  methods: {
    submit () {
      let inputBank = {
        bankname: this.bankname,
        location: this.location,
        longitude: this.longitude,
        latitude: this.latitude
      }
      this.$emit('add-bank', inputBank)
    }
  }
}
</script>
<style scoped>
  h3 {
    color: #d50000;
  }
</style>
