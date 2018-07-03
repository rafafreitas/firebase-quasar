<template>
  <q-page class="flex flex-center">
    <div class="div-forbidden">
      <p class="text-center">
        <img
          src="~assets/forbidden.png"
          style="width:30vw;max-width:150px;"
        >
      </p>
      <p class="text-faded">Desculpe, você não tem altorização pra isso...<strong>(403)</strong></p>
      <p class="text-center">
        <q-btn
          color="secondary"
          style="width:200px;"
          @click="$router.push('/home')"
        >Voltar</q-btn>
      </p>
    </div>
  </q-page>
</template>

<script>
  export default {
    name: 'forbidden'
  }
</script>
<style>
</style>
