<template>
  <div class="home">
    <!-- <div>
      <h2>
        status:
        <span>{{status}}</span>
      </h2>
      <button @click="StatusChanger">toggle status</button>
    </div>-->
    <br />
    <br />
    <button @click="hello(`hello from ${name}!`)">Say Hello</button>
    <br />
    <h2>Hello {{firstName | capitalize }} {{lastName | capitalize }}</h2>
    <!-- <input type="text" placeholder="firstname" name id v-model="changeFirstName" />
    <input type="text" placeholder="lastname" name id v-model="changeLastName" />
    <br />-->
    <br />
    <button @click="isSelected = 'AboutMe'">AboutMe</button>
    <button @click="isSelected = 'Team'">Team</button>
    <!-- <component :is="isSelected">
      <h2>This is dynamic components</h2>
    </component>-->
    <transition name="fade">
      <component :is="isSelected">
        <h2>This is dynamic components</h2>
      </component>
    </transition>

    <div>
      <h2>counter:{{counter}}</h2>
      <button @click="addToCounter">+</button>
      <button @click="SubFromCounter">-</button>
    </div>
  </div>
</template>

<script>
//import compnents in home page.
// import AboutMe from "../components/AboutMe";
import Team from "../components/Team";
// @ is an alias to /src
import AlertMixins from "../mixins/AlertMixins";

export default {
  name: "Home",
  components: {
    AboutMe: () => import("../components/AboutMe"),
    Team
  },
  filters: {
    capitalize: function(value) {
      if (!value) return "";
      value = value.toString();
      return value.charAt(0).toUpperCase() + value.slice(1);
    }
  },
  mixins: [AlertMixins],
  data() {
    return {
      isSelected: "Team",
      name: "Home Page",
      counter: 0,
      firstName: "nima",
      lastName: "torabi"
      // status: null
    };
  },
  computed: {
    // StatusChanger: {
    //   get() {
    //     return this.status === null ? true : this.status;
    //   },
    //   set(value) {
    //     this.status = value;
    //   }
    // }
  }
  // computed: {}
  // methods: {
  //   changeComponent: function(value) {
  //     return (this.isSelected = value);
  //   }
  // }
  // methods: {
  //   hello: function(value) {
  //     console.log(value);
  //   }
  // }
};
</script>
<style scoped>
.fade-enter {
  opacity: 0;
}
.fade-enter-active {
  opacity: 0.5;
  transition: 0.5s ease-in-out;
}
.fade-leave {
  opacity: 1;
}
.fade-leave-active {
  opacity: 0;
  transition: 0.5s ease-in-out;
}
</style>
