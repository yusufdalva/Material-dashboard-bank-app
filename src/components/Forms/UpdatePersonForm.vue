<template>
  <div>
    <form>
      <h3 class="title">Update Customer</h3>
      <md-card-content>
        <div class="md-layout">
          <div class="md-layout-item md-small-size-100 md-size-50">
            <md-field>
              <label>First Name</label>
              <md-input v-model="firstname" type="text"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-50">
            <md-field>
              <label>Last Name</label>
              <md-input v-if="!lastname" v-model="lastname" type="text"></md-input>
              <md-input v-if="lastname" v-model="lastname" type="text" required></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-50">
            <md-field>
              <label>E-Mail address</label>
              <md-input v-model="email" type="email"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-size-50 text-right">
            <md-button class="md-raised" type="submit" @click="submit">Submit</md-button>
          </div>
        </div>
      </md-card-content>
    </form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      firstname: null,
      lastname: null,
      email: null
    }
  },
  methods: {
    submit () {
      let updateObj = {
        firstname: this.firstname,
        lastname: this.lastname,
        email: this.email
      }
      this.$emit('update-customer', updateObj)
    }
  }
}
</script>

<style type="css" scoped>
  h3 {
    color: #3377FF
  }
</style>
