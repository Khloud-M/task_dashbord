<template>
  <div>
    <h2>تأكيد الرمز</h2>
  </div>
  <form @submit.prevent="submitForm">
    <div class="myOtp">
      <v-otp-input
        ref="otpInput"
        input-classes="otp-input"
        separator="-"
        :num-inputs="4"
        :should-auto-focus="true"
        :is-input-num="true"
        :conditionalClass="['one', 'two', 'three', 'four']"
        :placeholder="['', '', '', '']"
        @on-change="handleOnChange"
        @on-complete="handleOnComplete"
        v-model="verification_code"
      />
      <!-- <input type="text" placeholder="cpde"  v-model="verification_code"> -->
    </div>
    <input type="submit" value=" تأكيد" :is-loading="isLoading" />
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
      verification_code: null,
      phone: localStorage.getItem("phone_num"),
    };
  },
  methods: {
    submitForm() {
      this.isLoading = true;
      const mydata = new FormData();
      mydata.append("verification_code", this.verification_code);
      this.axios({
        method: "POST",
        url: "https://apis.quickly-egypt.com/admin/users/auth/forget_password/confirm.php",
        data: mydata,
      })
        .then(() => {
          console.log("confirm ");
          this.$router.push("/editPassword");
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
<style >
.myOtp{
  /* width: 70%; */
  margin: auto;
}
.otp-input {
  width: 60px;
  height: 50px;
  padding: 5px;
  margin: 0 10px;
  font-size: 20px;
  border-radius: 4px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  text-align: center;
}
/* Background colour of an input field with value */
.otp-input.is-complete {
  background-color: #e4e4e4;
}
.otp-input::-webkit-inner-spin-button,
.otp-input::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
input::placeholder {
  font-size: 15px;
  text-align: center;
  font-weight: 600;
}
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
