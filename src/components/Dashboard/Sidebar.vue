<template>
    <!-- START LEFT SIDEBAR NAV-->
    <aside id="left-sidebar-nav">
        <ul id="slide-out" class="side-nav fixed leftside-navigation">
            <router-link to="/" exact tag="li" class="treeview bold" active-class="active">
                <a class="waves-effect waves-cyan">
                    <i class="material-icons">dashboard</i>
                    <span> Dashboard</span>
                </a>
            </router-link>
            <li class="no-padding">
                <ul class="collapsible" data-collapsible="accordion" v-for="client in clients">
                    <router-link to="/" exact tag="li" active-class="active" class="no-padding">
                        <a class="collapsible-header waves-effect waves-cyan">
                            <i class="material-icons">menu</i>
                            <span>{{ client.nom }}</span>
                        </a>
                        <div class="collapsible-body">
                            <ul>
                                <router-link to="/1" tag="li">
                                    <a>Client 1</a>
                                </router-link>
                                <router-link to="/2/calltracking" tag="li">
                                    <a>Client 2</a>
                                </router-link>
                            </ul>
                        </div>
                    </router-link>
                </ul>
            </li>
        </ul>
        <a href="#" data-activates="slide-out" class="sidebar-collapse btn-floating btn-medium waves-effect waves-light hide-on-large-only darken-2"><i class="mdi-navigation-menu" ></i></a>
    </aside>
    <!-- END LEFT SIDEBAR NAV-->
</template>

<script>
    export default {
      data () {
        return {
          clients: [{
            'date': '23/05/2017',
            'nom': 'Project 1',
            'projets': [{
              'ndd': 'www.mywebsite.com',
              'num': '0000000000000'
            }, {
              'ndd': 'www.mywebsite.com',
              'num': '0000000000000'
            }, {
              'ndd': 'www.mywebsite.com',
              'num': '0000000000000'
            }],
            'roles': 2
          }, {
            'date': '23/05/2017',
            'nom': 'Project 2',
            'roles': 1
          }]
        }
      }
    }
</script>

<style scoped>
    ul.side-nav.fixed {
        top: 64px;
    }
    .side-nav {
        width: 240px;
    }
    @media only screen and (max-width: 992px) {
        ul.side-nav.fixed {
            top: 56px;
        }
    }
    ul.side-nav.fixed hr {
        display: block;
        height: 1px;
        border: 0;
        border-top: 1px solid #e0e0e0;
        margin: 1em 0;
        padding: 0;
    }
    .side-nav a {
        line-height: 42px;
        height: 42px;
    }
    #left-sidebar-nav {
        position: fixed;
        width: 100px;
        left: 180px;
        z-index: 999;
        height: auto;
    }
    #slide-out li a i {
        line-height: inherit;
        width: 2rem;
        font-size: 1.6rem;
        display: block;
        float: left;
        text-align: center;
        margin-right: 1rem;
    }
    #slide-out ul.side-nav li {
        padding: 0px !important;
    }
    ul.side-nav li {
        padding: 0;
    }
    ul.side-nav .collapsible-header {
        margin: 0;
    }
    .caption {
        font-size: 1.25rem;
        font-weight: 300;
        margin-bottom: 30px;
    }
    .caption-uppercase {
        font-size: 1.25rem;
        font-weight: 300;
        margin-bottom: 30px;
        text-transform: uppercase;
    }
    .sidebar-collapse {
        position: absolute;
        left: -170px;
        top: -45px;
    }
    ul.side-nav.fixed {
        overflow: hidden;
    }
    ul.side-nav.fixed li {
        line-height: 44px;
    }
    ul.side-nav.fixed li:hover,
    ul.side-nav.fixed li.active {
        background-color: rgba(0, 0, 0, 0.05);
    }
    ul.side-nav.fixed li a {
        font-size: 14px;
        font-weight: 400;
    }
    .side-nav .collapsible-body li a{
        /* margin: 0 1rem 0 3rem; */
    }
    .side-nav .collapsible-body li a, .side-nav.fixed .collapsible-body li a {
        /* padding: 0; */
    }
    ul.side-nav.fixed ul.collapsible-accordion {
        background-color: #FFF;
    }
    ul.side-nav.fixed:hover {
        /*overflow-y:hidden;*/
    }
    ul.side-nav.fixed li.user-details {
        /* background: url(../images/user-bg.jpg) no-repeat center center; */
        -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
        background-size: cover;
        /*overflow: hidden;*/

        margin-bottom: 15px;
        padding: 15px 0px 0px 15px;
    }
    .user-details .row {
        margin: 0;
    }
    .user-task,
    .user-time {
        margin: 0;
        font-size: 13px;
        color: #fff;
    }
    ul.side-nav.fixed .profile-image {
        /*height: 50px;*/
    }
    ul.side-nav.fixed .profile-btn {
        margin: 0;
        text-transform: capitalize;
        padding: 0;
        text-shadow: 1px 1px 1px #444;
        font-size: 15px;
    }
    .user-roal {
        color: #fff;
        margin-top: -16px;
        font-size: 13px;
        text-shadow: 1px 1px 1px #444;
    }
    .bold > a {
        font-weight: bold;
    }
    nav.top-nav {
        height: 122px;
        -webkit-box-shadow: none;
        -moz-box-shadow: none;
        box-shadow: none;
    }
    nav.top-nav a.page-title {
        line-height: 122px;
        font-size: 48px;
    }
    .side-nav.fixed a {
        display: block;
        padding: 0 15px;
        color: #444;
    }
    /*.side-nav .collapsible-header, .side-nav.fixed .collapsible-header {
        padding: 0;
    }
    .side-nav .collapsible-header, .side-nav.fixed .collapsible-header a {
        padding: 0 15px;
    }*/
</style>
