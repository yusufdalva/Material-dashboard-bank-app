<template>
  <div>
    <form>
        <h3 class="title">Update Account</h3>
      <md-card-content>
        <div class="md-layout">
          <div class="md-layout-item md-small-size-100 md-size-50">
            <md-field>
              <label>Balance</label>
              <md-input v-model="balance" type="number"></md-input>
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
      balance: null
    }
  },
  methods: {
    submit () {
      this.$emit('update-account', this.balance)
    }
  }
}
</script>

<style scoped>

</style>
