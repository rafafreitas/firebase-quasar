<template>
  <q-layout view="lHh Lpr lFf">
    <q-layout-header>
      <q-toolbar
        color="dark"
        :inverted="$q.theme === 'ios'"
      >
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          aria-label="Menu"
        >
          <q-icon name="menu" />
        </q-btn>

        <q-toolbar-title>
          Firebase App
          <div slot="subtitle">Desenvolvido com Quasar v{{ $q.version }}</div>
        </q-toolbar-title>
        <q-btn flat round dense icon="dashboard" />
        <q-btn flat round dense icon="notifications_active">
          <q-chip v-if="true" floating color="red">1</q-chip>
          <q-popover>
          <q-list link class="no-border">
            <q-item v-close-overlay>
              <q-item-main label="Novas notificações 1" />
            </q-item>

            <q-item v-close-overlay>
              <q-item-main label="Novas notificações 2" />
            </q-item>
            <q-item v-close-overlay>
              <q-item-main label="Novas notificações 3" />
            </q-item>
          </q-list>
          </q-popover>
        </q-btn>
        <q-btn round flat icon="more_vert">
          <q-popover>
            <q-list link class="no-border">
              <q-item v-close-overlay>
                <q-item-main label="Listagem" />
              </q-item>
              <q-item v-close-overlay>
                <q-item-main label="Configurações" />
              </q-item>
              <q-item v-close-overlay>
                <q-item-main label="Sair" />
              </q-item>
            </q-list>
          </q-popover>
        </q-btn>
      </q-toolbar>
    </q-layout-header>

    <q-layout-drawer
      v-model="leftDrawerOpen"
      :content-class="$q.theme === 'mat' ? 'bg-grey-2' : null"
      side="left"
    >
      <q-list
        class="data-menu-top"
        no-border
        link
        inset-delimiter
      >
        <q-list-header class="data-menu-header">
          <div class="header-data-user row">
            <div class="col-5">
              <img class="data-user-img" src="../statics/user.png" />
            </div>
            <div class="col-7">
              <div class="div-data-user-name">
                <p class="data-user-name">Rafael Freitas</p>
              </div>
            </div>

          </div>
          <div class="header-data-actions row">
            <div class="col-5"></div>
            <div class="col-7 data-user-actions">
              <q-btn style="background: #591575" icon="lock_outline" class="data-actions-btn" />
              <q-btn style="background: #591575" icon="person_outline" class="data-actions-btn">
                <q-chip v-if="true" floating color="red">!</q-chip>
              </q-btn>
              <q-btn style="background: #591575" icon="exit_to_app" class="data-actions-btn"/>
            </div>

          </div>
        </q-list-header>
        <menuList/>

      </q-list>
    </q-layout-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { openURL } from 'quasar'
import menuList from './menuList'

export default {
  name: 'LayoutDefault',
  data () {
    return {
      leftDrawerOpen: this.$q.platform.is.desktop
    }
  },
  methods: {
    openURL
  },
  components:{
    menuList
  }
}
</script>

<style lang="scss">
  .data-menu-top{
    padding-top: 0px;
    padding-bottom: 0px;

    .data-menu-header{
      background-color: #303030;
      height: 150px;
      color: #fff;

      .header-data-user{
        .data-user-img{
          max-width: 70px;
        }
        div.div-data-user-name{
          border-bottom: solid aliceblue;
          p.data-user-name{
            margin-top: 25px;
            font-size: 12pt;
          }
        }
      }
      .header-data-actions{
        .data-actions-btn{
          max-width: 40px;
          margin-right: 10px;
        }
      }
    }
  }
  /* Let's get this party started */
  .q-layout-drawer::-webkit-scrollbar {
    width: 5px;
  }

  /* Track */
  .q-layout-drawer::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
    -webkit-border-radius: 10px;
    border-radius: 10px;
  }

  /* Handle */
  .q-layout-drawer::-webkit-scrollbar-thumb {
    -webkit-border-radius: 10px;
    border-radius: 10px;
    background: rgb(123, 31, 162);
    /*(42, 45, 53)*/
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.5);
  }
  .q-layout-drawer::-webkit-scrollbar-thumb:window-inactive {
    background: rgba(255,0,0,0.4);
  }
</style>
