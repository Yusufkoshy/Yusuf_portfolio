<template>
  <div id="app">
    <nav class="bg-black flex items-center p-3 flex-wrap mt-1 mx-1">
      <a href="#" class="p-2 inline-flex items-center lg:ml-24">
        <img src="./assets/logo.png" alt="logo" class="w-16" />
      </a>
      <button
        class="icon text-white inline-flex hover:bg-gray-900 lg:hidden w-6 ml-auto"
        @click="show = !show"
      >
        <img
          src="./assets/menu-svgrepo-com.svg"
          alt="menu icon"
          class="bg-white"
        />
      </button>

      <div
        class="top__nav w-full lg:inline-flex lg:flex-grow lg:w-auto ease-in-out duration-300"
        id="navigation"
        v-if="show == false"
      >
        <div
          class="lg:inline-flex lg:flex-row lg:ml-auto lg:pr-12 flex flex-col items-center"
        >
          <router-link
            class="bg-black text-white hover:text-cyan-500 duration-500 lg:inline-flex lg:w-auto px-3 py-2 rounded"
            to="/"
            >Home</router-link
          >
          <router-link
            class="bg-black text-white hover:text-cyan-500 duration-500 lg:inline-flex lg:w-auto px-3 py-2 rounded"
            to="/about"
            >About</router-link
          >
        </div>
      </div>
    </nav>
    <Transition name="fade">
      <router-view />
    </Transition>
    <footer
      v-motion
      :initial="{
        opacity: 0,
        y: 200,
      }"
      :visible="{
        opacity: 1,
        y: 0,
        delay: 900,
      }"
      class="bg-black text-gray-700 text-center p-3 mx-1 mb-1"
    >
      <p>Copyright © 2022 Yusuf - Development.</p>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
    };
  },
  methods: {
    toggle(event) {
      event.target.classList.toggle("hidden");
    },
  },
};
</script>

<style lang="scss">
html {
  background-color: black;
  border: solid #127483;
  border-width: 4px;
}

.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.5s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter-to {
  opacity: 1;
}

.fade-leave-to {
  opacity: 0;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  text-decoration: none;
  list-style: none;
  font-family: inherit;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

nav {
  font-family: cursive;
  font-size: larger;
  font-weight: bolder;
}

.cursive {
  font-family: cursive;
}
</style>
