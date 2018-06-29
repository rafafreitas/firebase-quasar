<template>
  <q-layout view="lHh Lpr lFf">
    <q-layout-header>
      <q-toolbar
        color="cyan-9"
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
        </q-btn>
        <q-btn flat round dense icon="more_vert" />
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
              <q-btn style="background: #7B1FA2" icon="lock_outline" class="data-actions-btn" />
              <q-btn style="background: #7B1FA2" icon="person_outline" class="data-actions-btn">
                <q-chip v-if="true" floating color="red">!</q-chip>
              </q-btn>
              <q-btn style="background: #7B1FA2" icon="exit_to_app" class="data-actions-btn"/>
            </div>

          </div>
        </q-list-header>
        <q-item @click.native="openURL('http://quasar-framework.org')">
          <q-item-side icon="school" />
          <q-item-main label="Docs" sublabel="quasar-framework.org" />
        </q-item>
        <q-item @click.native="openURL('https://github.com/quasarframework/')">
          <q-item-side icon="code" />
          <q-item-main label="GitHub" sublabel="github.com/quasarframework" />
        </q-item>
        <q-item @click.native="openURL('https://discord.gg/5TDhbDg')">
          <q-item-side icon="chat" />
          <q-item-main label="Discord Chat Channel" sublabel="https://discord.gg/5TDhbDg" />
        </q-item>
        <q-item @click.native="openURL('http://forum.quasar-framework.org')">
          <q-item-side icon="record_voice_over" />
          <q-item-main label="Forum" sublabel="forum.quasar-framework.org" />
        </q-item>
        <q-item @click.native="openURL('https://twitter.com/quasarframework')">
          <q-item-side icon="rss feed" />
          <q-item-main label="Twitter" sublabel="@quasarframework" />
        </q-item>
      </q-list>
    </q-layout-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { openURL } from 'quasar'

export default {
  name: 'LayoutDefault',
  data () {
    return {
      leftDrawerOpen: this.$q.platform.is.desktop
    }
  },
  methods: {
    openURL
  }
}
</script>

<style lang="scss">
  .data-menu-top{
    padding-top: 0px;

    .data-menu-header{
      background-color: #1c7f6b;
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
</style>
