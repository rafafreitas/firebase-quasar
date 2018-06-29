<template>
  <div>

    <q-item>
      <q-item-main class="menu-itens-label" label="Gerais" />
    </q-item>
    <q-item to="/dashboard">
      <q-item-side icon="dashboard" />
      <q-item-main label="Dasboard" sublabel="Gráficos/Informações" />
    </q-item>
    <q-item to="/users">
      <q-item-side icon="people_outline" />
      <q-item-main label="Usuários do Sistema" sublabel="Manter Funcionários" />
    </q-item>

    <q-item>
      <q-item-main class="menu-itens-label" label="Clientes" />
    </q-item>
    <q-item to="/clientes">
      <q-item-side icon="fas fa-user-tie" />
      <q-item-main label="Gerenciar Clientes" sublabel="Cadastrar/Editar" />
    </q-item>
    <q-item to="/campanhas">
      <q-item-side icon="far fa-images" />
      <q-item-main label="Manter Campanhas" sublabel="Cadastrar/Editar" />
    </q-item>

    <q-item>
      <q-item-main class="menu-itens-label" label="Parceiros" />
    </q-item>
    <q-item to="/parceiros">
      <q-item-side icon="fas fa-paint-brush" />
      <q-item-main label="Equipadoras" sublabel="Estabelecimentos Parceiros" />
    </q-item>
    <q-item to="/drivers">
      <q-item-side icon="fab fa-uber" />
      <q-item-main label="Motoristas" sublabel="Acompanhar informações" />
    </q-item>

    <q-item>
      <q-item-main class="menu-itens-label" label="Administrativa" />
    </q-item>
    <q-item to="/parceiros">
      <q-item-side icon="playlist_add_check" />
      <q-item-main label="Relatórios" sublabel="Análise de Dados" />
    </q-item>
    <q-item to="/drivers">
      <q-item-side icon="attach_money" />
      <q-item-main label="Financeiro" sublabel="Pagamentos" />
    </q-item>

  </div>
</template>

<script>
    export default {
        name: "menuList"
    }
</script>

<style lang="scss">
  .menu-itens-label{
    color: rgba(0,0,0,.54)!important;
    font-size: 16px;
    font-weight: 500;
  }
</style>
