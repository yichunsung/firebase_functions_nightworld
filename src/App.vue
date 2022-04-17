<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from './components/HelloWorld.vue';
</script>

<template>
  <ul>
    <li>
      <router-link to="/">home</router-link>
    </li>
    <li>
      <router-link to="/about">哈囉</router-link>
    </li>
  </ul>
  <router-view></router-view>
</template>

<style>

</style>
