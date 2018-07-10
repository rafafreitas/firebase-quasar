<template>
  <div class="itens-menu-list">

    <q-item>
      <q-item-main class="menu-itens-label" label="Gerais" />
    </q-item>
    <q-item class="menu-item-container" to="/Dashboard">
      <q-item-side class="menu-itens-icon" icon="dashboard" />
      <q-item-main class="menu-itens-name" label="Dasboard" sublabel="Gráficos/Informações" />
    </q-item>
    <q-item class="menu-item-container" to="/users">
      <q-item-side class="menu-itens-icon" icon="people_outline" />
      <q-item-main class="menu-itens-name" label="Usuários do Sistema" sublabel="Manter Funcionários" />
    </q-item>

    <q-item>
      <q-item-main class="menu-itens-label" label="Clientes" />
    </q-item>
    <q-item class="menu-item-container" to="/clientes">
      <q-item-side class="menu-itens-icon" icon="fas fa-user-tie" />
      <q-item-main class="menu-itens-name" label="Gerenciar Clientes" sublabel="Cadastrar/Editar" />
    </q-item>
    <q-item class="menu-item-container" to="/grupos">
      <q-item-side class="menu-itens-icon" icon="far fa-images" />
      <q-item-main class="menu-itens-name" label="Manter Grupos" sublabel="Cadastrar/Editar" />
    </q-item>

    <q-item>
      <q-item-main class="menu-itens-label" label="Parceiros" />
    </q-item>
    <q-item class="menu-item-container" to="/parceiros">
      <q-item-side class="menu-itens-icon" icon="fas fa-paint-brush" />
      <q-item-main class="menu-itens-name" label="Equipadoras" sublabel="Estabelecimentos Parceiros" />
    </q-item>

    <q-item>
      <q-item-main class="menu-itens-label" label="Administrativa" />
    </q-item>
    <q-item class="menu-item-container" to="/Relatorios">
      <q-item-side class="menu-itens-icon" icon="playlist_add_check" />
      <q-item-main class="menu-itens-name" label="Relatórios" sublabel="Análise de Dados" />
    </q-item>
    <q-item class="menu-item-container" to="/Financeiro">
      <q-item-side class="menu-itens-icon" icon="attach_money" />
      <q-item-main class="menu-itens-name" label="Financeiro" sublabel="Pagamentos" />
    </q-item>

  </div>
</template>

<script>
    export default {
        name: "menuList"
    }
</script>

<style lang="stylus">
  @import '~variables';

  .menu-item-container:hover{
    background-color $houverColor!important;
    .menu-itens-icon{
      color: $white;
    }
  }
  .menu-itens-label{
    color:  $darkLabel!important;
    font-weight: 500;
    font-size: 16px;
  }
  .menu-itens-icon{
    color: $textIcons;
  }
  .q-item-sublabel{
    color: $secondText;
  }
  div.itens-menu-list{
    background-color: $lightPrimary;
    .menu-itens-name{
      color: $primaryText;
    }
  }
  .router-link-active{
    border-right: 5px solid $textIcons;
    background: $activeColor!important;
    .menu-itens-icon{
      color: $white;
    }

  }
</style>
