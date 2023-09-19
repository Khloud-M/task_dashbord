<template>
  <v-row class="login">
    <v-col class="content" cols="lg-6">
      <div>
        <img src="@/assets/image/logo.png" alt="logo" />
        <h2>تسجيل الدخول</h2>
        <h2>تسجيل دخول ع لوحة تحكم</h2>
      </div>
      <form @submit.prevent="submitForm">
        <v-text-field
          label="البريد الإلكتروني"
          type="email"
          v-model="email"
        ></v-text-field>
        <v-text-field
          label=" كلمة المرور"
          v-model="password"
          :type="show ? 'text' : 'password'"
          :append-inner-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
          @click:append-inner="show = !show"
        ></v-text-field>
        <input  type="submit" value="تسجيل الدخول" />
      </form>
    </v-col>
    <v-col class="image" cols="lg-6">
      <!-- <img src="@/assets/image/login_img.jpg" alt="image" /> -->
      image

    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      email: null,
      password: null,
      show: false,
    };
  },
  methods: {
    submitForm(){
       console.log("login")
    }
  }
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
}
</style>
