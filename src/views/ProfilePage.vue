<template>
  <div id="ProfilePage">
    <h2>PROFIL</h2>
    <div class="container">
      <p>ID: {{ CurrentUserId }}</p>
      <p>Navn: {{ CurrentUserName }} {{ CurrentLastName }}</p>
      <p>Email: {{ CurrentEmail }}</p>
      <p>Telefon: {{ CurrentPhone }}</p>
    </div>
    <button class="btn btn-primary" v-on:click="UpdateUserPage">
      Rediger oplysninger
    </button>
    <br />
    <br />
   <!-- <a
      href="mailto:KU-Bikes@QR.com?subject=Indgiv ris eller ros&body=Ris/Ros til KU-bikes:"
    >
      <button class="btn btn-primary" id="btnOutlook">
        Send Ris eller Ros fra outlook app
      </button>
    </a> -->
  </div>
</template>

<script>
import axios from 'axios';
let baseUserUrl = "https://mort-rest.azurewebsites.net/api/users/";
export default {
  User: {
    User_id: 0,
    User_email: "",
    User_password: "",
    User_firstname: "",
    User_lastname: "",
    User_mobile: 0,
    Account_status_id: 0,
    UserQuestionOne: "",
    UserAnswerOne: "",
    UserQuestionTwo: "",
    UserAnswerTwo: "",
    UserQuestionThree: "",
    UserAnswerThree: "",
  },
  FullUser: [],
  UserNotFull: [],
  CurrentUserId: null,
  CurrentUserName: "",
  CurrentLastName: "",
  CurrentEmail: "",
  CurrentPhone: 0,
  updateUserData: {
    User_firstname: "",
    User_lastname: "",
    User_email: "",
    User_mobile: 0,
  },
  responseMessage: null,
  created() {
      this.HentAltOmEnBruger()
  },
  methods: {
    async HentBruger() {
      let urlGet = baseUserUrl + this.loginEmail;
      const Result = await axios.get(urlGet);
      this.UserNotFull = Result.data;
    },
    async HentAltOmEnBruger() {
      let urlGet = baseUserUrl + "user/" + parseInt(this.CurrentUserId);
      const Result = await axios.get(urlGet);
      this.FullUser = Result.data;
    },
    InputFilled() {
      this.HentAltOmEnBruger();
      this.updateUserData.user_firstname = this.CurrentUserName;
      this.updateUserData.user_lastname = this.CurrentLastName;
      this.updateUserData.user_email = this.CurrentEmail;
      this.updateUserData.user_mobile = this.CurrentPhone;
    },
    async updateUser() {
      let urlGet = baseUserUrl + "updateUser/" + parseInt(this.CurrentUserId);
      const Response = await axios.put(urlGet, this.updateUserData);
      this.responseMessage = Response.data;
    },

  },
};
</script>

<style>
</style>