<template>
  <nav class="navbar navbar-expand-lg " style="background-color: rgb(204, 67, 67);">
    <div class="container-fluid" style="margin-left: 620px;">
     <img src = "../src/assets/log.png">
    </div>
  </nav>
  <nav class="navbar navbar-expand-lg ">
    <div class="container-fluid">
      <i class="bi bi-house-door" style="color: #000000; font-size: 2em;"></i> <router-link to="/" class="nav-link" style="position:absolute; margin-left: 20px;margin-top: 5px; font-size: 1.5em;">Inicio</router-link>
      <i class="bi bi-file-earmark" style="color: #000000; margin-left: 75px; font-size: 2em;"></i> <router-link to="/mis_personajes" class="nav-link" style="position:absolute; margin-left: 130px;margin-top: 5px; font-size: 1.5em;">Personajes</router-link>
      <i class="bi bi-file-person" style="color: #000000; margin-left: 150px; font-size: 2em;"></i> <router-link to="/NPCs" class="nav-link" style="position:absolute; margin-left: 310px;margin-top: 5px; font-size: 1.5em;">NPC's</router-link>
      <i class="bi bi-people-fill" style="color: #000000; margin-left: 1000px; font-size: 2em;"></i> <router-link to="/otros" class="nav-link" style="position:absolute; margin-left: 1350px;margin-top: 5px; font-size: 1.5em;">Otros</router-link>
      <div class="collapse navbar-collapse" id="navbarNav" style="margin-left: 1200px;">
      </div>
    </div>
  </nav>
  <div>
      <div class="container" style="background-color:#ffffff; height:auto">
      <router-view/>
  </div>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
</style>
