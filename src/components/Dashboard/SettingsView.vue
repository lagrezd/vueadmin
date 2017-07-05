<template>
    <section id="content">
        <!--breadcrumbs start-->
        <nav class="grey">
            <div class="nav-wrapper">
                <div class="col s12">
                    <router-link to="/" class="breadcrumb">Dashboard</router-link>
                    <router-link to="/user" class="breadcrumb">Settings</router-link>
                </div>
            </div>
        </nav>
        <!--breadcrumbs end-->

        <div class="container">
            <h4 class="text-center">Settings</h4>
            <div id="card-stats">
                <div class="row">
                    <form class="col s12">
                        <div class="row">
                            <div class="input-field col s6">
                                <div class="col s1"><i class="material-icons prefix">today</i></div>
                                <div class="col s11"><datepicker :readonly="true" format="MMM/D/YYYY" id="dateInput" width="100%" class="materialize-textarea"></datepicker></div>
                            </div>
                            <div class="input-field col s6">
                                <input id="last_name" type="text" class="validate">
                                <label for="last_name">Last Name</label>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import datepicker from 'vue-date-picker'
    export default {
      data () {
        return {
        }
      },
      components: {
        datepicker
      },
      computed: {
        datetime () {
          return new Date()
        }
      },
      methods: {
        clearInput (vueModel) {
          vueModel = ''
        }
      }
    }
</script>

<style>
    /* .nav-wrapper a:first-child {
        margin-left: 20px;
    } */
    nav { background-color: inherit }
</style>
