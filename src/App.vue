<template>
  <div>
    <h1>{{ title }}</h1>
    <Modal />
    <input type="text" ref="name" />
    <button @click="handleClick">click me</button>
  </div>
</template>

<script>
import Modal from './components/Modal.vue'

export default {
  name: 'App', //name is optional
  components: { Modal },
  data() {
    return {
      title: 'My First Vue App :)'
    }
  },
  methods: {
    handleClick() {
      console.log(this.$refs.name)
      this.$refs.name.classList.add('active')
      this.$refs.name.focus()
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
