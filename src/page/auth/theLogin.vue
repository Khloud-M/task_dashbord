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
    <input type="submit" value="تسجيل الدخول" :is-loading="isLoading" />
    <router-link to="/forgetpass"> نسيت كلمة المرور</router-link>
  </form>
</template>

<script>
export default {
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
      mydata.append("phone", this.phone);
      mydata.append("password", this.password);
      this.axios({
        method: "POST",
        url: "https://apis.quickly-egypt.com/admin/users/auth/login.php",
        data: mydata,
      })
        .then((response) => {
          console.log("login ");
          console.log(response);
          this.$toast.success(`تم تسجيل الدخول بنجاح `);
        })
        .catch((error) => {
          this.isLoading = false;
          console.log(error);
          this.$toast.error(` بياناتك غير صحيحة`);
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
