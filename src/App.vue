<template>
  <div>
    <h1>{{ title }}</h1>
    <p>Welcome..</p>
    <div v-if="showModal">
      <Modal theme="sale" @close="toggleModal">
        <template v-slot:links>
          <a href="#">sign up now</a>
          <a href="#">more info</a>
        </template>
        <h1>Ninja Givaway</h1>
        <p>Grab your ninja swag for half price!</p>
      </Modal>
    </div>
    <button @click="toggleModal">open modal</button>
    <div v-if="showModal2">
      <Modal @close="toggleModal2">
        <h1>This is the second modal</h1>
        <p>you did it!</p>
      </Modal>
    </div>
    <button @click="toggleModal2">open second modal</button>
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
      title: 'My First Vue App :)',
      showModal: false,
      showModal2: false,
    }
  },
  methods: {
    handleClick() {
      console.log(this.$refs.name)
      this.$refs.name.classList.add('active')
      this.$refs.name.focus()
    },
    toggleModal() {
      this.showModal = !this.showModal
    },
    toggleModal2() {
      this.showModal2 = !this.showModal2
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
