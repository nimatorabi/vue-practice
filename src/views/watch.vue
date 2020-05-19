<template>
  <div>
    <h2>watch page</h2>
    <div>
      Killometer to meter :
      <input type="text" placeholder="How much?" v-model="kilometer" /> .km
    </div>
    <div>
      meter to Killometer :
      <input type="text" placeholder="How much?" v-model="meter" /> .m
    </div>
    <div class="inline-block card">
      <div :class="{onlineMarker: true, online: status, offline: !status}"></div>
      <p class="user-state">User is {{ (status) ? 'online' : 'offline' }}</p>
    </div>

    <div class="margin-5">
      <input type="checkbox" v-model="status" />Toggle status
    </div>
  </div>
</template>

<script>
import AlertMixins from "../mixins/AlertMixins";
export default {
  data() {
    return {
      kilometer: 0,
      meter: 0,
      statusProxy: null
    };
  },
  computed: {
    status: {
      get() {
        return this.statusProxy === null ? true : this.statusProxy;
      },
      set(val) {
        this.statusProxy = val;
      }
    }
  },
  mixins: [AlertMixins]
};
</script>

<style>
#demo {
  font-family: Helvetica;
  font-size: 12px;
}
.inline-block > * {
  display: inline-block;
}
.card {
  margin-top: 2rem;
  padding: 2px 10px;
  border-radius: 3px;
}
.onlineMarker {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  transition: all 0.5s ease-out;
}

.online {
  background-color: #3c3;
}

.offline {
  background-color: #aaa;
}

.user-state {
  text-transform: uppercase;
  letter-spacing: 1px;
}

.margin-5 {
  margin: 5px;
}
</style>