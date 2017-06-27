<template>
    <div>
        <nav class="light-blue lighten-1" role="navigation">
            <div class="nav-wrapper container">
                <router-link to="/"><a id="logo-container" class="brand-logo">Vue Admin</a></router-link>
                <ul class="right hide-on-med-and-down">
                    <router-link to="/login" v-if="!isLoggedIn" tag="li"><a>Login</a></router-link>
                    <router-link to="/user" v-if="isLoggedIn" tag="li"><a>{{ userName }}</a></router-link>
                    <li><a @click="logout">Logout</a></li>
                    <li><a href="#" data-activates="nav-mobile" class="button-collapse"><i class="material-icons">menu</i></a></li>
                </ul>
                <ul id="nav-mobile" class="side-nav" style="transform: translateX(-100%);">
                    <li><a href="#">Navbar Link</a></li>
                </ul>
            </div>
        </nav>
        <div class="section"></div>
        <div class="container">
            Nom: {{ userName }}
            <div class="section"></div>
            <table class="responsive-table">
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Item Name</th>
                    <th>Item Price</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>Alvin</td>
                    <td>Eclair</td>
                    <td>$0.87</td>
                </tr>
                <tr>
                    <td>Alan</td>
                    <td>Jellybean</td>
                    <td>$3.76</td>
                </tr>
                <tr>
                    <td>Jonathan</td>
                    <td>Lollipop</td>
                    <td>$7.00</td>
                </tr>
                <tr>
                    <td>Shannon</td>
                    <td>KitKat</td>
                    <td>$9.99</td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'hello',
    data () {
      return {
      }
    },
    methods: {
      logout () {
        this.$store.dispatch('logout')
        this.$router.push('/login')
      }
    },
    computed: {
      isLoggedIn () {
        return this.$store.getters.isLoggedIn
      },
      userName () {
        return this.$store.getters.userName
      }
    }
  }
</script>

<style scoped>

</style>
