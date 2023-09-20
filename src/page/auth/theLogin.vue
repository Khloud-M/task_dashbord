<template>
  <div>
    <h2>تسجيل الدخول</h2>
    <h2>تسجيل دخول ع لوحة تحكم</h2>
  </div>
  <form @submit.prevent="submitForm">
    <v-text-field
      label=" رقم الجوال"
      prepend-inner-icon="mdi-phone"
      type="tel"
      v-model="phone"
    ></v-text-field>
    <v-text-field
      label=" كلمة المرور"
      v-model="password"
      :type="show ? 'text' : 'password'"
      :append-inner-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
      prepend-inner-icon="mdi-lock-outline"
      @click:append-inner="show = !show"
    ></v-text-field>
    <!-- <input
      type="submit"
      value="تسجيل الدخول"
      :is-loading="isLoading"
      :status="status"
      style="position: relative"
    /> -->
    <button type="submit" style="padding: 10px 20px">
      تسجيل الدخول
      <v-progress-circular
        indeterminate
        color="white"
        size="20"
        style="margin: 0 5px"
        v-if="isLoading"
      ></v-progress-circular>
    </button>

    <router-link to="/forgetpass"> نسيت كلمة المرور</router-link>
  </form>
</template>

<script>
export default {
  data() {
    return {
      phone: null,
      password: null,
      show: false,
      isLoading: false,
      status: "",
    };
  },
  methods: {
    submitForm() {
      this.isLoading = true;
      const mydata = new FormData();
      mydata.append("phone", this.phone);
      mydata.append("password", this.password);
      this.axios({
        method: "POST",
        url: "https://apis.quickly-egypt.com/admin/users/auth/login.php",
        data: mydata,
      })
        .then(() => {
          if (
            this.phone.length == 11 &&
            !this.password == "" &&
            this.password.length > 6
          ) {
            console.log(this.phone.length);

            this.$toast.success(`تم تسجيل الدخول بنجاح `);
            this.$router.push("/home");
            this.isLoading = false;
            this.status = true; // or success
            setTimeout(() => {
              this.status = "";
            }, 2000);
          } else {
            this.$toast.error(` بياناتك غير صحيحة`);
          }
        })
        .catch((error) => {
          console.error(error);
          this.isLoading = false;
          this.status = false; //or error
        });
    },
  },
};
</script>

<style scoped>
h2 {
  padding: 3px 0;
  color: #232323;
}
a {
  color: var(--second-color);
  padding: 0 10px;
  font-size: 16px;
  transition: all 0.5s linear;
}
a:hover {
  color: #ff0000;
}
/* .text- */
</style>
