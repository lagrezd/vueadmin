<template>
    <div>
        <!-- Start Page Loading -->
        <div id="loader-wrapper">
            <div id="loader"></div>
            <div class="loader-section section-left"></div>
            <div class="loader-section section-right"></div>
        </div>
        <!-- End Page Loading -->

        <HeaderView></HeaderView>

        <!-- START MAIN -->
        <div id="main">
            <!-- START WRAPPER -->
            <div class="wrapper">
                <SidebarView></SidebarView>
                <router-view></router-view>
            </div>
        </div>
        <!-- END MAIN -->

        <FooterView></FooterView>
    </div>
</template>

<script>
  import HeaderView from './Dashboard/Header.vue'
  import SidebarView from './Dashboard/Sidebar.vue'
  import FooterView from './Dashboard/Footer.vue'
  export default {
    data () {
      return {
      }
    },
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
    },
    components: {
      HeaderView,
      SidebarView,
      FooterView
    }
  }
</script>

<style>
    #main,
    footer {
        padding-left: 240px;
    }
    .margin {
        margin: 0;
    }
    #input-select .input-field label {
        position: absolute;
        top: -14px;
        font-size: 0.8rem;
    }
    #sidenav-overlay {
        background-color: transparent;
    }
    .container {
        padding: 0 0.5rem;
        margin: 0 auto;
        max-width: 100% !important;
        width: 98%;
    }

    #left-sidebar-nav span.badge.new{
        line-height: 20px;
        margin-top: 11px;
    }

    #content .container .row {
        margin-bottom: 0;
    }
    @media only screen and (min-width: 601px) {
        .container {
            width: 98%;
        }
    }
    @media only screen and (min-width: 993px) {
        .container {
            width: 98%;
        }
    }
    @media only screen and (max-width: 993px) {
        #main,
        footer {
            padding-left: 0px;
        }
    }
</style>
