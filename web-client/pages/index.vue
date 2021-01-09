<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <div class="text-center">
        <logo/>
        <vuetify-logo/>
      </div>
      <v-card>
        <v-card-title class="headline">
          {{ message }}


          <div v-if="tricks">
            <p v-for="(item, index)  in tricks">
              {{ item.name }}-{{index}}
            </p>
          </div>
          <div>
            <v-text-field label="Tricking Name" v-model="trickName"/>
            <v-btn @click="saveTrick">Save Trick</v-btn>
          </div>

          <v-btn @click="reset">Reset Message</v-btn>
          <v-btn @click="resetTricks">Reset Tricks</v-btn>
        </v-card-title>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import Logo from '~/components/Logo.vue'
import VuetifyLogo from '~/components/VuetifyLogo.vue'
import https from "https";
import {mapState, mapActions, mapMutations} from 'vuex';

export default {
  components: {
    Logo,
    VuetifyLogo
  },
  data: () => ({
    trickName: ""
  }),
  // async asyncData({$axios}) {
  //   const agent = new https.Agent({ rejectUnauthorized: false });
  //   return await $axios.get("https://localhost:5001/api/home", { httpsAgent: agent})
  //     .then(({data}) => {
  //       return {message: data};
  //     });
  // }
  async asyncData(){
    // await this.fetchMessage();
    // await this.fetchTricks();
  },
  computed: {
    ...mapState({
      message: state => state.message
    }),
    ...mapState('tricks',{
      tricks: state => state.tricks
    })
  },
  // async fetch(){
  //   await this.$store.dispatch("fetchMessage" );
  // },
  methods: {
    ...mapMutations([
      'reset'
    ]),
    ...mapMutations('tricks',{
      resetTricks: 'reset'
    }),
    ...mapActions('tricks', ['createTrick','fetchTricks']),
    ...mapActions(['fetchMessage']),
    async saveTrick() {
      await this.createTrick({trick: {name: this.trickName}});
      console.log("ssss",this.tricks);
      const sssssss=this.tricks;
    },

  },
  async created(){
      await this.fetchMessage();
      await this.fetchTricks();
  }
}
</script>
