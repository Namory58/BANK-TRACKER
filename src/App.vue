<script  setup lang="ts">
import { ref, provide } from 'vue'

const dataInfo = ref<{
  id:number,
  description : string,
  categorie : string,
  date : Date,
  montant :bigint,

}[]>([
  { id: 1, description: "Coures",categorie:"virement", date: new Date(), montant: -150n },
  { id: 2, description: "Virement",categorie:"virement" ,date: new Date(), montant: 220n },
]);

const ListeCategorie =ref<{
    id:Number,
    NameCategorie : string
}[]>([]);
provide("dataInfo",dataInfo);
provide("ListeCategorie",ListeCategorie);



</script>

<template>
  <router-view></router-view>
</template>


