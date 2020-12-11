<template>
  <div>
    <select v-model="select" v-on:click="ADMHentCykelIDFraSelect()">
      <option value="" disabled selected>Select a bike</option>
      <option v-for="cycle in cycles2" :key="cycle.cycle_id">
        {{ cycle.cycle_id }}
      </option>
    </select>
    <span>Selected: {{ select }}</span>
    <br />
    <br />
    <button class="btn btn-success" id="AvaliableButton" v-on:click="Avaliable">
      Avaliable
    </button>
    <button
      class="btn btn-warning"
      id="UnavaliableButton"
      v-on:click="Unavaliable"
    >
      Unavaliable
    </button>
    <button
      class="btn btn-primary"
      id="HentCykelBesked"
      v-on:click="ADMHentBeskederCykel()"
    >
      Hent Beskeder
    </button>
    <br />
    <button
      class="btn btn-danger"
      id="DeleteCycleAdmin"
      v-on:click="ADMDeleteBike"
    >
      Slet cykel
    </button>
    <br />
    <br />
    <ol id="CykelBeskedListe" v-if="AllMessagesBike.length">
      <li v-for="messages in AllMessagesBike" :key="messages.messages_Id">
        id: {{ XX.messages_Id }} user: {{ XX.messages_user_id }} cykel:
        {{ XX.messages_cycle_id }} emne: {{ XX.messages_emne }} beskeder:
        {{ XX.messages_besked }} status: {{ XX.messages_status }}
      </li>
    </ol>
    <div v-else>Ingen Beskeder</div>
    <br />
    <br />
    <label for="Cykel Navn" class="float-left">Cykel navn:</label><br />
    <input
      id="cycle_new_name"
      class="form-control"
      v-model="cycle_name"
      placeholder="Cykelens navn"
    />
    <button class="btn btn-primary" id="OpretNyCykel" v-on:click="ADMAddBike()">
      Opret cykel i database
    </button>
  </div>
</template>

<script>
import axios from "axios";
let baseMessageUri = "https://mort-rest.azurewebsites.net/api/messages/";
let baseCycleUri = "https://mort-rest.azurewebsites.net/api/cycles/";

export default {
  name: "ADMCyclePage",
  data() {
    return {
      cycles2: [],
      messages: [],
      messagesBike: [],
      addCycleData: { cycle_name: "", cycle_coordinates: "" },
      responseId: 0,
      select: "",
      statusU: 1,
      statusA: 2,
      cycle: {
        cycle_id: 0,
        cycle_name: "",
        cycle_coordinates: "",
        fk_cycle_status_id: 0,
      },
      Message: {
        messages_Id: 0,
        messages_user_id: 0,
        messages_cycle_id: 0,
        messages_emne: "",
        messages_besked: "",
        messages_status: 0,
      },
    };
  },
  methods: {
    async ADMHentBeskeder() {
      const Result = await axios.get(baseMessageUri);
      this.messages = Result.data.total;
    },
    async AddNewCycle() {
      const Result = await axios.post(baseCycleUri, this.addCycleData);
      this.cycle_id = Result.data.id;
    },
    async getAllBikesAdmin() {
      const Result = await axios.get(baseCycleUri);
      this.cycles2 = Result.data.total;
    },
    async ADMDeleteBike() {
      const Result = await axios.delete(baseCycleUri + this.cycle.cycle_id);
      this.responseId = Result.data.id;
    },
    async Unavaliable() {
      let urlGet = baseCycleUri + "start/" + this.select;
      return axios.put(urlGet, this.statusU);
    },
    async Avaliable() {
      let urlGet = baseCycleUri + "slut/" + this.select;
      return await axios.put(urlGet, this.statusA);
    },
    async ADMHentBeskederCykel() {
      let UrlGet = baseCycleUri + "cycle/" + parseInt(this.select);
      const Result = await axios.get(UrlGet);
      this.messagesBike = Result.data;
    },
    ADMHentCykelIDFraSelect() {
      this.cycle_id = parseInt(this.select);
    },
  },
};
</script>

<style>
</style>