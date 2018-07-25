<template>
  <div>
    <form>
      <md-card>
        <h3 class="title">New Customer</h3>
        <md-card-content>
          <div class="md-layout">
            <div class="md-layout-item md-small-size-100 md-size-50">
              <md-field>
                <label>First Name</label>
                <md-input v-model="firstname" type="text" required></md-input>
              </md-field>
            </div>
            <div class="md-layout-item md-small-size-100 md-size-50">
              <md-field>
                <label>Last Name</label>
                <md-input v-model="lastname" type="text" required></md-input>
              </md-field>
            </div>
            <div class="md-layout-item md-small-size-100 md-size-50">
              <md-field>
                <label>Email</label>
                <md-input v-model="email" type="email" required></md-input>
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
  props: {
    dataBackgroundColor: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      firstname: null,
      lastname: null,
      email: null
    }
  },
  methods: {
    submit () {
      let inputPerson = {
        firstname: this.firstname,
        lastname: this.lastname,
        email: this.email
      }
      this.$emit('add-customer', inputPerson)
    }
  }
}
</script>
<style scoped>
  h3 {
    color: #d50000;
  }
</style>
