<template>
    <div class="login-page">

        <!-- Start Page Loading -->
        <div id="loader-wrapper">
            <div id="loader"></div>
            <div class="loader-section section-left"></div>
            <div class="loader-section section-right"></div>
        </div>
        <!-- End Page Loading -->

        <div class="section"></div>
        <main>
            <div class="col s12 z-depth-4 card-panel">
                <form class="col s12 login-form" @submit.prevent="login({ email, password })">
                    <p class="center login-form-text">Vue Admin</p>
                    <div class='row'>
                        <div class='input-field col s12'>
                            <i class="material-icons prefix">account_circle</i>
                            <input type="email" v-model="email" name="email" id="email" class="validate">
                            <label for="email">Entrer votre email</label>
                        </div>
                    </div>
                    <div class='row'>
                        <div class='input-field col s12'>
                            <i class="material-icons prefix">lock</i>
                            <input type="password" v-model="password" name="password" id="password" class="validate">
                            <label for="password">Entrer votre mot de passe</label>
                        </div>
                    </div>
                    <div class='row'>
                        <div class="input-field col s12">
                            <button type="submit" class='btn waves-effect waves-light col s12'>Connexion</button>
                        </div>
                    </div>
                </form>
            </div>
        </main>
    </div>
</template>

<script>
  export default {
    data () {
      return {
        email: 'damien@atypicom.fr',
        password: 'sed64c33',
        authenticating: false
      }
    },
    methods: {
      signInWithPassword () {
        if (this.email.length > 0 && this.password.length > 0) {
            this.$store.dispatch('signInWithPassword', this.credential)
        }
      },
      login () {
        this.authenticating = true
        this.$store.dispatch('login', {
          email: this.email,
          password: this.password
        }).then(() => {
          this.$router.push('/')
        })
      },
      logout () {
        this.$store.dispatch('logout')
      }
    },
    computed: {
      credential () {
        return {email: this.email, password: this.password}
      },
      isLoggedIn () {
        return this.$store.getters.isLoggedIn
      }
    }
  }
</script>

<style scoped>
    .login-page {
        display: table;
        margin: auto;
    }
    html, body {
        height: 100%;
    }

    body {
        display: table-cell;
        vertical-align: middle;
    }

    main {
        flex: 1 0 auto;
    }

    .login-form {
         width: 300px;
    }

    .login-form-text {
        text-transform: uppercase;
        letter-spacing: 2px;
        font-size: 0.8rem;
    }

    button.btn {
        background-color: #ff4081;
    }
    button.btn:hover {
        background-color: #ff4081;
    }

    .input-field input[type=date]:focus + label,
    .input-field input[type=text]:focus + label,
    .input-field input[type=email]:focus + label,
    .input-field input[type=password]:focus + label {
        color: #e91e63;
    }

    .input-field input[type=date]:focus,
    .input-field input[type=text]:focus,
    .input-field input[type=email]:focus,
    .input-field input[type=password]:focus {
        border-bottom: 2px solid #e91e63;
        box-shadow: none;
    }
</style>
