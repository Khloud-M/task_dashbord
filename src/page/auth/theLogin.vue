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
        <input  type="submit" value="تسجيل الدخول"  :loading="isLoading"/>
      </form>
    </v-col>
    <v-col class="image" cols="lg-6">
      <!-- <img src="@/assets/image/login_img.jpg" alt="image" /> -->
      image

    </v-col>
  </v-row>
</template>

<script>
import server from "@/api/server.js"
export default {
  data() {
    return {
      isLoading: false,
      email: null,
      password: null,
      show: false,
    };
  },
  methods: {
    submitForm(){
      const mydata = new FormData() ;
      mydata.append("username" , this.email);
      mydata.append("password" , this.password);
      this.axios({
        method: "POST",
        url: "/dashboard/login",
        data: mydata,
      })
      .then((response) => {
          console.log("login ")
          console.log(response);
          this.$store.commit("setCurrentUserData",
           response.data.data,

          );
            // this.$router.push("/");
            this.$toast.success(`تم تسجيل الدخول بنجاح `);
        })
        .catch((error) => {
          this.isLoading = false;
          console.log(error);
          this.$toast.error(` بياناتك غير صحيحة`);
        });

      //  console.log("login")
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
