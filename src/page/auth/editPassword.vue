<template>
  <div>
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
  </form>

</template>

<script>
export default {
  data() {
    return {
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
        .then(() => {
          this.$router.push("/");
          this.$toast.success(`تم تسجيل الدخول بنجاح `);
        })
        .catch(() => {
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
  margin-bottom: 10px;

}
</style>
