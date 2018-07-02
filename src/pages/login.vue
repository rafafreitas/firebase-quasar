<template>
  <div>
    <div class="background-div"></div>
    <div class="background-login"></div>
    <div class="flex justify-center" :class="heightSize">
      <div class="content-login text-white text-center width-3of4 bg-width-2of5 gt-bg-width-1of4 sm-auto " id="login">
        <div class="card-title">
          <svg id="logo" viewBox="0 0 483 483"
               style="enable-background:new 0 0 460 460;"
               xml:space="preserve" width="128px" height="128px"
               v-html="logoMethod">
          </svg>
          <h4>Informe suas Credenciais</h4>
        </div>
        <div class="card-content">
          <div class="stacked-label stacked-first">
            <q-input class="input-login" type="text" align="left" v-model="email" float-label="E-mail" />
          </div>
          <div class="stacked-label">
            <q-input class="input-login" type="password" align="left" v-model="password" float-label="Senha" />
          </div>
        </div>
        <div class="card-actions inline-block vertical-middle">
          <q-btn color="amber" @click="login()" label="Login" />
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
  /* eslint-disable */
  import Vivus from 'vivus'
  import logoData from './logoData'
  import { Platform } from 'quasar'
  export default {
    mounted () {
      this.startAnimation()
    },
    computed: {
      heightSize (){
        if (Platform.is.desktop) {
          return 'items-center'
        }
        return ''
      },
      logoMethod () {
        return logoData[this.logo]
      }
    },
    data () {
      return {
        logos: Object.keys(logoData),
        logo: 'Keytronic',
        email: '',
        password: '',
        toneColor: 10,
        vivus: ''
      }
    },
    methods: {
      login () {
        this.$router.push('/')
      },
      startAnimation () {
        this.vivus = new Vivus('logo', {
            duration: 200,
            forceRender: false
          }, function(element) {
            for (let item of element.el.children[0].children) {
              item.setAttribute('style', 'fill:white')
              item.setAttribute('style', 'fill:white')
            }
          }
        )
      }
    }
  }
</script>
<style lang="scss">
  div.background-div{
    z-index: 1;
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: black;
    opacity: 0.2;
  }
  div.background-login{
    z-index: 0;
    background-image: url("../statics/background.jpg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: absolute;
    width: 100%;
    height: 100vh;
    overflow: hidden;
  }
  div.content-login{
    z-index: 10;
    margin-top: 100px;
    margin-bottom: 0px;
    div.card-content {
      min-height: 160px;
      .q-if:hover:before{
        color: #fff!important;
      }
      div.input-login {
        color: #ffc107 !important;
        .q-if-label{
          color: #ffffff;
        }
        input {
          color: #ffffff !important;
        }
        div.q-if-label {
          text-align: left !important;
        }
      }
      div.stacked-first {
        margin-bottom: 15px;
      }
    }
    div.card-actions button{
      width: 300px;
      background: #ffc107e3!important;
    }
  }
  h4 {
    font-weight: 300;
    font-size: 17pt;
  }
</style>

