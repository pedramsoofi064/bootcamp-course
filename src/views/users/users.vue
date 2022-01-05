<template>
  <div class="user">
    <ul class="user-list">
      <li
        v-for="(user, index) in users"
        :key="`user-${index}`"
        class="user-link"
        @click="goToUserPage(user)"
      >
        - {{ user.name }}
      </li>
      <!-- <router-link
        tag="li"
        v-for="(user, index) in users"
        :key="`user-${index}`"
        class="user-link"
        :to="`/users/${user.id}?name=${user.name}`"
      >
        - {{ user.name }}
      </router-link> -->
    </ul>
    <hr />
    <router-view />
  </div>
</template>

<script>
export default {
  name: "Users",
  data() {
    return {
      users: [
        { id: 0, name: "aliRezai" },
        { id: 1, name: "kamranAlipor" },
        { id: 2, name: "saharMiri" },
        { id: 3, name: "parsaSalehi" },
        { id: 4, name: "mohammadGholami" },
      ],
    };
  },
  methods: {
    goToUserPage(user) {
      // code

    //   this.$router.push(`/users/${user.id}?name=${user.name}`);
    this.$router.push({
        name: 'user',
        params: {id: user.id},
        query: {name: user.name}
    })
    },
  },
};
</script>

<style lang="scss" scoped>
.user-list {
  list-style: circle;
}
.user-link {
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    color: #189ab4;
  }
}
</style>
