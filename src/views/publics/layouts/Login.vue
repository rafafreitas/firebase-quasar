<template>
  <div>
    <div class="background-div"></div>
    <div class="background-login">
      <video poster="../../../statics/video/inicial.png" id="bgvid" playsinline autoplay muted loop>
        <source src="../../../statics/video/coral-video.mp4" type="video/mp4">
      </video>
    </div>
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
          <p></p>
        </div>

        <div class="card-actions inline-block vertical-middle">
          <q-btn :loading="loadingBtn" color="amber" @click="Login()">
            {{labelBtn}}
          </q-btn>
        </div>
        <br>
        <br>
        <div class="card-actions inline-block vertical-middle">
          <!--<q-btn color="amber" @click="create()" label="Cadastrar" />-->
        </div>

      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
  /* eslint-disable */
  import Vivus from 'vivus'
  import Firebase from '../../../helpers/firebase'
  import logoData from '../../../components/logoData'
  import { Platform } from 'quasar'
  import { Notify } from 'quasar'
  export default {
    data () {
      return {
        logo: 'Keytronic',
        labelBtn: 'Login',
        loadingBtn: false,
        email: '',
        password: '',
        vivus: ''
      }
    },
    mounted () {
      this.startAnimation()
      this.$store.dispatch('getUserConnected')
        .then((retorno) =>{
          console.log('Retorno', retorno)
          if (!retorno.emailVerified){
            console.log("E-mail not verified!")
            this.callMsg('info', 'Por favor, confirme seu e-mail!')
          }else{
            this.$router.push('/home')
          }
        })
        .catch((err) =>{
          console.log('Erro', err)

        })
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
    methods: {
      Login () {
        this.loadingBtn = true
        this.$store.dispatch('getAuth',{email: this.email, password: this.password})
          .then((retorno) =>{
            console.log('Retorno', retorno)
            if (!retorno.emailVerified){
              console.log("E-mail not verified!")
              this.callMsg('info', 'Por favor, confirme seu e-mail!')
            }else{
              this.$router.push('/home')
            }
            this.loadingBtn = false
          })
          .catch((err) =>{
            console.log('Erro', err)
            this.callMsg('negative', err)
            this.loadingBtn = false
          })
      },
      create () {
        Firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(
          (resp) => {
            console.log(resp)
            resp.user.sendEmailVerification().then(function() {
              console.log('Verifique seu email.')
            }).catch(function(error) {
              // An error happened.
            });

            resp.user.updateProfile({
              displayName: "Jane Q. User",
              newCampo: "Jane Q. User",
              photoURL: "https://example.com/jane-q-user/profile.jpg"
            }).then(function() {
              console.log('User alterado')
            }).catch(function(error) {
              // An error happened.
            });

          },
          (err) => {
            console.log(err)
          }
        )
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
      },
      callMsg(type, msg){
        this.$q.notify({
          message: msg,
          timeout: 3000,
          type: type,
          icon: 'report_problem',
          position: 'center',
          //detail: 'Optional detail message.',
          actions: [
            {
              label: 'Ok!',
              icon: 'check',
              noDismiss: false,
              handler: () => {
                console.log('Entendido!')
              }
            },
          ],


        })
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
    opacity: 0;
  }
  div.background-login{
    z-index: 0;
    /*background-image: url("../../../statics/background.jpg");*/
    /*background-position: center;*/
    /*background-repeat: no-repeat;*/
    /*background-size: cover;*/
    position: absolute;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  div.content-login{
    z-index: 10;
    margin-top: 100px;
    margin-bottom: 0px;
    /*
    1a98bb4f
    8b95ab5c
    36827470
    */
    background-color: #1a98bb73;
    border-radius: 25px;
    padding: 20px 20px 0px 20px;
    div.card-content {
      min-height: 160px;
      .q-if:hover:before{
        color: #fff!important;
      }
      div.input-login {
        color: #0de0a7  !important;
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
      background: #0de0a7e3!important;
    }
  }
  h4 {
    font-weight: 300;
    font-size: 17pt;
  }
</style>

