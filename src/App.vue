<script setup>
import { RouterLink, RouterView } from "vue-router";
import Navbar from "./components/Navbar.vue";
import Sidebar from "./components/Sidebar.vue";
</script>

<template>
  <div class="container-fluid">
  <header class="col-md=12 row">
    <Navbar />
  </header>
  <main class="row">
    <aside class="col-md-3" style="">
<Sidebar/>
  </aside>
  <section class="col-md-9"><RouterView /></section>
  </main>
    
  </div>
</template>

<style>
 
</style>
