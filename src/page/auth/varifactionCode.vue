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
    </div>
    <input type="submit" value=" تأكيد" :is-loading="isLoading" />
  </form>

</template>

<script>
export default {
  data() {
    return {
      verification_code: null,
      phone: localStorage.getItem("phone_num"),
    };
  },
  methods: {
    submitForm() {
      const mydata = new FormData();
      mydata.append("verification_code", this.verification_code);
      this.axios({
        method: "POST",
        url: "https://apis.quickly-egypt.com/admin/users/auth/forget_password/confirm.php",
        data: mydata,
      })
        .then(() => {
          this.$router.push("/editPassword");
          this.$toast.success(`تمت   بنجاح `);
        })
        .catch(() => {
          this.$toast.error(` بياناتك غير صحيحة`);
        });

    },
  },
};
</script>
<style >
.myOtp{
  width: 100%;
  display: flex !important;
  justify-content: center;
  margin: 25px auto;
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
h2 {
  padding: 3px 0;
  margin-bottom: 10px;
  color: #232323;
}

/* .text- */
</style>
