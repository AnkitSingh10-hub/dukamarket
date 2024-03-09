<template>
  <h1>sjfksdjf</h1>
  <VeeForm @submit="register">
    <VeeField name="name" label="First Name" type="text" rules="required" v-model="val" />
    <VeeErrorMessage name="name" class="text-red-400" />
    <VeeField name="email" type="email" rules="email" />
    <VeeErrorMessage name="email" class="text-red-400" />
    <VeeField name="password" type="password" rules="min: 8" />
    <VeeErrorMessage name="password" class="text-red-400" />
    <button>submit</button>
  </VeeForm>
  {{ val }}
  <q-input filled color="white" class="rounded-md w-24 !text-white" v-model="text" label="Filled" />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useJwtStore } from '@/stores/jwt'
import { useMeta, useQuasar } from 'quasar'
import { useRouter } from 'vue-router'

useMeta({
  title: 'Login'
})
const JwtStore = useJwtStore()
const val = ref('')

const onSubmit = async (): Promise<void> => {
  await JwtStore.getJWT({
    username: username.value,
    password: password.value
  })
  $q.notify({
    message: 'Login successfully',
    type: 'positive',
    position: 'top-right'
  })
  $router.push({ name: 'Home' })
}
const register = () => {}
</script>

<style scoped lang="scss">
.login-form {
  width: 100%;
}
</style>
