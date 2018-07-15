<template>
  <q-page class="flex back-color-default">
    <div class="main-div-page">
      <div class="my-breadcrumbs">
        <q-breadcrumbs separator=">" active-color="cyan-8" color="cyan-7">
          <q-breadcrumbs-el label="Dashboard" to="/Dashboard" />
          <q-breadcrumbs-el label="Perfil" to="/Profile" class="bread-active"/>
        </q-breadcrumbs>
      </div>

    </div>



  </q-page>
</template>

<style>
</style>

<script>
  export default {
    name: 'Profile'
  }
</script>
<style lang="stylus">
  @import '~variables';

</style>
