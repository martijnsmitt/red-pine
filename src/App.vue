<template>
  <div id="app">
    <nav>
      <ul>
        <li><router-link :to="{name: 'home'}">Home</router-link></li>
        <li><router-link :to="{name: 'gallery'}">Gallery</router-link></li>
        <li><router-link :to="{name: 'contact'}">Contact</router-link></li>
        </ul>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {

}
</script>
