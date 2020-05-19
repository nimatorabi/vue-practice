<template>
  <div class="item">
    <div class="itemDetails">
      <p>
        <strong>{{item.name}}</strong>
      </p>
      <p>
        Prices:
        <strong>${{item.price}}</strong>
      </p>
    </div>
    <ShopButton @buttonClicked="addToCard" :item="item">
      <p>add To card</p>
    </ShopButton>
    <!-- <button @click="addToCard(item)">add to cart</button> -->
  </div>
</template>

<script>
export default {
  name: "CardItem",
  props: ["item"],
  components: {
    ShopButton: () => import("../components/ShopButton")
  },
  data() {
    return {};
  },
  methods: {
    addToCard(item) {
      this.$emit("updateCard", item);
    }
  }
};
</script>

<style>
</style>