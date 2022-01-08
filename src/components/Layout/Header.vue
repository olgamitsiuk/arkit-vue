<template>
  <header id="header" class="header-section">
    <div class="container">
      <nav class="navbar ">
        <router-link to="/arkit-vue/" class="navbar-brand"><img src="/arkit/img/logo-dark.png" alt="Arkit"></router-link>
        <div class="d-flex menu-wrap">
          <div id="mainmenu" class="mainmenu">
            <ul class="nav">
              <li><router-link to="/arkit-vue/" data-scroll class="nav-link active" >Home<span class="sr-only">(current)</span></router-link></li>
              <li><router-link to="/arkit-vue/about">About</router-link></li>
              <li><router-link to="/arkit-vue/services">Services</router-link></li>
              <li><router-link to="/arkit-vue/projects">Projects</router-link></li>
              <li><router-link to="/arkit-vue/contacts">Contact</router-link></li>
              <li class="phone"><i class="fa fa-phone"></i> (+38 050) 19 45 116</li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
name: "HeaderHome"
}
</script>

<style scoped>

</style>