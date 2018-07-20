<template>
  <div class="content">
    <div class="md-layout">
      <div class="md-layout-item md-medium-size-100 md-size-30">
        <bank-card></bank-card>
      </div>
    </div>
  </div>
</template>

<script>
import CreateBankForm from '../components/Forms/CreateBankForm'
import CreatePersonForm from '../components/Forms/CreatePersonForm'
import CreateAccountForm from '../components/Forms/CreateAccountForm'
import BankCard from '../components/Cards/BankCard'

export default{
  components: {
    BankCard,
    CreateAccountForm,
    CreatePersonForm,
    CreateBankForm
  }
}
</script>
