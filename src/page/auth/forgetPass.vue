<template>
  <div>
    <h2>إرسال الكود</h2>
  </div>
  <form @submit.prevent="submitForm">
    <v-text-field
      label=" رقم الهاتف"
      type="tel"
      v-modal="phone"
      append-inner-icon="mdi-phone"
    ></v-text-field>
    <input type="submit" value=" إرسال" :is-loading="isLoading" />
    <!-- <base-button :isLoading="isLoading">تسجيل الدخول</base-button> -->
    <!-- <router-link to="/forgetpass">  نسيت كلمة المرور</router-link> -->
  </form>
  <!-- <v-col class="image" cols="lg-6">
      <img src="@/assets/image/login_img.jpg" alt="image" />
      image
    </v-col> -->
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
      phone: null,
    };
  },
  methods: {
    submitForm() {
      this.isLoading = true;
      const mydata = new FormData();
      mydata.append("phone", this.phone);
      this.axios({
        method: "POST",
        url: "https://apis.quickly-egypt.com/admin/users/auth/forget_password/send_code.php",
        data: mydata,
      })
        .then(() => {
          console.log("forgeet ");
          localStorage.setItem("phone_num", this.phone);
          this.$router.push("/varifactionCode");
          this.$toast.success(`تمت   بنجاح `);

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
}
</style>
