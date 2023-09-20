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
    <div class="reset_code">
      <button type="button" @click="countdown = 10">
        <v-icon> mdi-arrow-u-left-top</v-icon>
        إعادة إرسال الرمز مرة أخرى
      </button>
      <span> {{ countdown }}</span>
    </div>
    <input type="submit" value=" تأكيد" />
  </form>
</template>

<script>
export default {
  data() {
    return {
      verification_code: "",
      phone: localStorage.getItem("phone_num"),
      timerCount: 30,
      timerEnabled: true,
      countdown: 10,
    };
  },
  mounted() {
    this.startCountdown();

    this.$watch('verification_code', (value) => {
      if (value !== '') {
        this.stopCountdown();
      }
    });
  },
  watch: {
    countdown(value) {
      if (value === 0) {
        this.stopCountdown();
      }
    },
  },
  methods: {
    handleOnComplete(e){
      this.verification_code = e ;
      console.log(e);
    },
    submitForm() {
      console.log(this.verification_code)
      const mydata = new FormData();
      mydata.append("verification_code", this.verification_code);
      this.axios({
        method: "POST",
        url: "https://apis.quickly-egypt.com/admin/users/auth/forget_password/confirm.php",
        data: mydata,
      }).then(() => {
        if (this.verification_code.length == 4  ) {
          this.$router.push("/editPassword");
          this.$toast.success(`تمت   بنجاح `);
        } else {
          this.$toast.error(` بياناتك غير صحيحة`);
        }
      });
      // setTime()
    },
    setTime() {
      if (this.verification_code === "") {
        setTimeout(() => {
          this.timerCount--;
        }, 1000);
      }
    },
    startCountdown() {
      this.timerEnabled = true;
      this.countdown = 10;
      setInterval(() => {
        if (this.timerEnabled && this.countdown > 0) {
          this.countdown--;
        }
      }, 1000);
    },
    stopCountdown() {
      this.timerEnabled = false;
    },
  }
};
</script>
<style>
.reset_code {
  color: var(--main-color);
  display: flex;
  flex-direction: row;
  justify-content: center;
  column-gap: 100px;
  align-items: center;
  margin: 15px;
}
.myOtp {
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
.v-btn--variant-elevated {
    box-shadow:none !important;
}

</style>
