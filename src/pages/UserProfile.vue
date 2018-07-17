<template>
  <div class="content">
    <div class="md-layout">
      <div class="md-layout-item md-medium-size-100 md-size-50">
        <create-bank-form data-background-color="green">

        </create-bank-form>
      </div>
      <div class="md-layout-item md-medium-size-100 md-size-50">
        <create-person-form data-background-color="blue">

        </create-person-form>
      </div>
      <div class="md-layout-item md-medium-size-100 md-size-50">
        <create-account-form></create-account-form>
      </div>
      <div class="md-layout-item md-medium-size-100 md-size-50">
        <user-card>

        </user-card>
      </div>
    </div>
  </div>
</template>

<script>
import {
  UserCard
} from '@/pages'
import CreateBankForm from '../components/Forms/CreateBankForm'
import CreatePersonForm from '../components/Forms/CreatePersonForm'
import CreateAccountForm from '../components/Forms/CreateAccountForm'

export default{
  components: {
    CreateAccountForm,
    CreatePersonForm,
    CreateBankForm,
    UserCard
  }
}
</script>
