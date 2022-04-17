<script setup>

import { ref, onMounted } from 'vue';
import { getRequest } from '../api.js';

const haha = ref('');

onMounted(() => {
  getHaha();
});

const getHaha = async() => {
  const path = '/haha';
  try {
    const res = await getRequest(path);
    haha.value = res.data.message;
  } catch (err) {
    console.log(err);
    haha.value = '';
  }
};

</script>

<template>
  <h1>
    哈囉你好嗎
  </h1>
  <h2>
    {{ haha }}
  </h2>
  <p>
    {{ `${ haha }-hello` }}
  </p>
</template>

<style>

</style>
