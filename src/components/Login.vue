<template>
  <div class="hello">
    <section>
      <router-link to="/">Home</router-link>
      <router-link to="/login" v-if="!isLoggedIn">Login</router-link>
      <a href="#" v-if="isLoggedIn" @click="logout">Logout</a>
    </section>
    <form @submit.prevent="login({ email, password })">
      <input type="text" placeholder="email" v-model="email">
      <input type="password" placeholder="password" v-model="password">
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    login () {
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
    isLoggedIn () {
      return this.$store.getters.isLoggedIn
    }
  }
}
</script>

<style scoped>
</style>
