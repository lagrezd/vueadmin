<template>
    <!-- START HEADER -->
    <header id="header" class="page-topbar">
        <!-- start header nav-->
        <div class="navbar-fixed">
            <nav class="orange darken-3">
                <div class="nav-wrapper">
                    <router-link to="/"><a id="logo-container" class="brand-logo">Vue Admin</a></router-link>
                    <ul class="right hide-on-med-and-down">
                        <router-link to="/settings" v-if="authorized" tag="li" active-class="active"><a><i class="material-icons">settings</i></a></router-link>
                        <router-link to="/users" v-if="authorized" tag="li" active-class="active"><a><i class="material-icons">supervisor_account</i></a></router-link>
                        <router-link to="/user/1" v-if="authorized" tag="li" active-class="active"><a>{{ getUser.displayName || getUser.email }}</a></router-link>
                        <li class="search-out hiddendiv">
                            <input type="text" class="search-out-text">
                        </li>
                        <li class="hiddendiv">
                            <a href="javascript:void(0);" class="waves-effect waves-block waves-light"><i class="material-icons">search</i></a>
                        </li>
                        <li class="hiddendiv">
                            <a href="javascript:void(0);" class="waves-effect waves-block waves-light"><i class="material-icons">settings_overscan</i></a>
                        </li>                    </li>
                        <li class="hiddendiv">
                            <a href="javascript:void(0);" class="waves-effect waves-block waves-light"><i class="material-icons">notifications</i></a>
                        </li>
                        <li>
                            <a @click="logout" class="waves-effect waves-block waves-light" title="Deconnexion"><i class="material-icons">power_settings_new</i></a>
                        </li>
                    </ul>
                </div>
                <ul id="nav-mobile" class="side-nav" style="transform: translateX(-100%);">
                    <li><a href="#">Navbar Link</a></li>
                </ul>
            </nav>
        </div>
    </header>
    <!-- END HEADER -->
</template>

<script>
    export default {
      methods: {
        logout () {
          this.$store.dispatch('signOut')
          this.$router.push('/login')
        }
      },
      computed: {
        isLoggedIn () {
          return this.$store.getters.isLoggedIn
        },
        userName () {
          return this.$store.getters.userName
        },
        authorized () {
          return this.$store.getters.getAuth
        },
        getUser () {
          return this.$store.getters.getUser
        }
      }
    }
</script>

<style scoped>
    h1.logo-wrapper{
        margin: 0px 0px;
    }
    h1 span.logo-text{
        display: none;
    }
    header .brand-logo {
        padding: 0 20px;
    }
    @media only screen and (max-width: 992px) {
        nav .nav-wrapper {
            text-align: center;
        }
        nav .nav-wrapper a.page-title {
            font-size: 36px;
        }
    }
    li.search-out:hover{
        background: transparent;
    }
    .search-out{
        display: none;
    }
    .search-out-text{
        border-bottom: 1px solid #fff !important;
    }
    .search-out input[type=text]:focus:not([readonly]){
        border-bottom: 1px solid #fff !important;
        box-shadow:none;
    }
</style>
