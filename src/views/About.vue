<template>
  <div class="about">
    <h1 v-changestyle>This is an about page</h1>
    <button @click="hello(`hello from ${name}!`)">say Hello</button>
    <br />
    <br />
    <!-- <form action="#" @submit.prevent="setName(firstname,lastname)"> -->
    <input v-model="firstname" type="text" placeholder="First name" />
    <br />
    <p>{{this.firstname}}</p>
    <br />
    <input v-model="lastname" type="text" placeholder="Last name" />
    <br />
    <p>{{this.lastname}}</p>
    <br />
    <!-- <input type="submit" value="submit" /> -->
    <!-- </form> -->
    <div>
      <h2>{{firstname|capitalize}} {{lastname | capitalize}}</h2>
    </div>
    <form @submit.prevent="checkAnswer">
      <h2>Questions</h2>
      <h5>best js freamwork?</h5>
      <input type="text" name id v-model="yourAnswer" placeholder="write your answer!!" />
      <input type="submit" value="submit" />
    </form>
    <div>item you select : {{total}}</div>
    <section class="Footer">
      <CardItem v-for="item in items" :item="item" :key="item.id" @updateCard="updateCard"></CardItem>
    </section>
  </div>
</template>

<script>
import AlertMixins from "../mixins/AlertMixins";

export default {
  components: {
    CardItem: () => import("../components/CardItem")
  },
  mixins: [AlertMixins],
  data() {
    return {
      name: "About Page!",
      firstname: "",
      lastname: "",
      answer: "vue",
      yourAnswer: "",
      fullname: "",
      items: [
        {
          id: 1,
          name: "pride",
          price: 1
        },
        {
          id: 2,
          name: "pejout",
          price: 4
        },
        {
          id: 3,
          name: "samand",
          price: 2
        }
      ],
      cart: [],
      total: 0
    };
  },
  filters: {
    capitalize: function(value) {
      if (!value) return "";
      value = value.toString();
      return value.charAt(0).toUpperCase() + value.slice(1);
    }
  },
  computed: {
    checkAnswer: function() {
      if (this.yourAnswer === this.answer) {
        return alert("true answer!");
      } else {
        return alert("wrong answer!");
      }
    }
  },
  watch: {
    changes: function() {
      console.log("this is changed!");
    }
  },
  methods: {
    updateCard(e) {
      this.cart.push(e);
      this.total += 1;
    },
    emptyCard() {
      this.cart = [];
      this.total = 0;
    }
  }
};
</script>
