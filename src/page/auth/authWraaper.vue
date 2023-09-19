<template>
  <v-row class="login">
    <v-col class="content" cols="lg-6">
      <div>
        <img src="@/assets/image/logo.png" alt="logo" />
      </div>
      <router-view></router-view>
    </v-col>
    <v-col class="image" cols="lg-6">
    </v-col>
  </v-row>
</template>

<script>
export default {};
</script>

<style scoped>
.v-row {
    margin: 0px !important;
}
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
}
.image {
  background-image: url("../../assets/image/cover.webp");
  height: 100%;
  background-position: center;
  background-size: cover;
}
.content {
  text-align: center;
  padding: 30px;
}
form {
  margin: 20px 0;
}
</style>
