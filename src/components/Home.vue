<template>
    <div class="hello">
        <section>
            <router-link to="/">Home</router-link>
            <router-link to="/login" v-if="!isLoggedIn">Login</router-link>
            <a href="#" v-if="isLoggedIn" @click="logout">Logout</a>
        </section>
        Nom:
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
      }
    },
    computed: {
      isLoggedIn () {
        return this.$store.getters.isLoggedIn
      }
    }
  }
</script>

<style scoped>

</style>
