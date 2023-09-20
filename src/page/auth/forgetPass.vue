<template>
  <div>
    <h2>إرسال الكود</h2>
  </div>
  <form @submit.prevent="submitForm">
    <v-text-field
      label=" رقم الهاتف"
      type="tel"
      v-model="phone"
      append-inner-icon="mdi-phone"
    ></v-text-field>
    <input type="submit" value=" إرسال" />
  </form>
</template>

<script>
export default {
  data() {
    return {
      phone: null,
    };
  },
  methods: {
    submitForm() {
      const mydata = new FormData();
      mydata.append("phone", this.phone);
      this.axios({
        method: "POST",
        url: "https://apis.quickly-egypt.com/admin/users/auth/forget_password/send_code.php",
        data: mydata,
      }).then(() => {
        localStorage.setItem("phone_num", this.phone);
        if (this.phone.length == 11) {
          this.$toast.success(`تمت   بنجاح `);
          this.$router.push("/varifactionCode");
        } else {
          this.$toast.error(` "ب"ياناتك غير صحيحة`);
        }
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
</style>
