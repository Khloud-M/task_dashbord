<template>
  <!-- <v-row class="login"> -->
  <!-- <v-col class="content" cols="lg-6" style="background-color: red;"> -->
  <div>
    <!-- <img src="@/assets/image/logo.png" alt="logo" /> -->
    <h2> تعين الرقم السري</h2>
  </div>
  <form @submit.prevent="submitForm">
    <v-text-field
      label="   كلمة المرور الجديدة"
      v-model="password"
      :type="show ? 'text' : 'password'"
      :append-inner-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
      @click:append-inner="show = !show"
    ></v-text-field>
    <input type="submit" value="تسجيل الدخول" :is-loading="isLoading" />
    <!-- <base-button :isLoading="isLoading">تسجيل الدخول</base-button> -->
    <router-link to="/forgetpass"> نسيت كلمة المرور</router-link>
  </form>
  <!-- </v-col> -->
  <!-- <v-col class="image" cols="lg-6">
      <img src="@/assets/image/login_img.jpg" alt="image" />
      image
    </v-col> -->
  <!-- </v-row> -->
</template>

<script>
import server from "@/api/server.js";
import VueButtonSpinner from "vue-button-spinner";
export default {
  components: {
    VueButtonSpinner,
  },
  data() {
    return {
      isLoading: false,
      phone: null,
      password: null,
      show: false,
    };
  },
  methods: {
    submitForm() {
      this.isLoading = true;
      const mydata = new FormData();
      mydata.append("id", 1);
      mydata.append("new_password", this.password);
      this.axios({
        method: "POST",
        url: "https://apis.quickly-egypt.com/admin/users/auth/forget_password/edit_password.php",
        data: mydata,
      })
        .then((response) => {
          console.log("login ");
          console.log(response);
          // this.$store.commit("setCurrentUserData", response.data.data);
          this.$router.push("/");
          this.$toast.success(`تم تسجيل الدخول بنجاح `);
        })
        .catch((error) => {
          this.isLoading = false;
          console.log(error);
          this.$toast.error(` بياناتك غير صحيحة`);
        });

      //  console.log("login")
    },
  },
};
</script>

<style scoped>
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  height: 100%;
  background-color: var(--main_bg_clr);
}
.image img {
  width: 100%;
  height: 100%;
}
.content {
  text-align: center;
  /* background-color: var(--main_bg_clr); */
  /* height: 100%; */
  padding: 30px;
  /* display: flex;
  flex-direction: column;
  align-items: center; */
}
h2 {
  padding: 3px 0;
  color: #232323;
}
form {
  margin: 20px 0;
  width: 80%;
  margin: auto;
  /* background-color: green; */
}
a {
  color: var(--second-color);
  padding: 0 10px;
  font-size: 18px;
  transition: all 0.5s linear;
}
a:hover{
  color: #ff0000;
}
/* .text- */
</style>
