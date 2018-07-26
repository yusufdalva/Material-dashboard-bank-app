<template>
  <div>
    <form>
      <md-card>
        <h3 class="title">Update Bank</h3>
        <md-card-content>
          <div class="md-layout">
            <div class="md-layout-item md-small-size-100 md-size-50">
              <md-field>
                <label>Bank Name</label>
                <md-input v-model="bankname" type="text"></md-input>
              </md-field>
            </div>
            <div class="md-layout-item md-small-size-100 md-size-50">
              <md-field>
                <label>Location</label>
                <md-input v-model="location" type="text"></md-input>
              </md-field>
            </div>
            <div class="md-layout-item md-small-size-100 md-size-50">
              <md-field>
                <label>Latitude</label>
                <md-input v-model="latitude" type="number"></md-input>
              </md-field>
            </div>
            <div class="md-layout-item md-small-size-100 md-size-50">
              <md-field>
                <label>Longitude</label>
                <md-input v-model="longitude" type="number"></md-input>
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
export default {
  data () {
    return {
      bankname: null,
      location: null,
      latitude: null,
      longitude: null
    }
  },
  methods: {
    submit () {
      let updateObj = {
        bankname: this.bankname,
        location: this.location,
        latitude: this.latitude,
        longitude: this.longitude
      }
      this.$emit('update-bank', updateObj)
    }
  }
}
</script>

<style type="css" scoped>
  h3 {
    color: #3377FF
  }
</style>
