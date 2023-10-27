<script setup lang="ts">
import { computed, inject, ref, Ref } from "vue";
import TransactionsTable from "@/components/TransactionsTable.vue";
import { NumberFormat } from "@/stores/UtilesCodes/FormatNumber.ts";

const dataInfo = inject<Ref<{
  id: number,
  description: string,
  categorie: string,
  date: Date,
  montant: bigint;
}[]>>("dataInfo")!;

const solde = computed(() => {
  const resultat = {};
  for (let i of dataInfo.value) {
    const nomCategorie = i.categorie;
    if(!resultat[nomCategorie]){
      resultat[nomCategorie]=0n;
    }
    resultat[nomCategorie]+=i.montant;
  }
  return resultat;
});
</script>

<template>
  <h1>Historique des virements</h1>
  <div>
    <p>Les sommes par catégories:</p>
    <ul>
     <li v-for="(somme,nomCategorie) in solde" :key="nomCategorie" >{{ nomCategorie }}:{{ NumberFormat(somme) }}</li>
    </ul>
    <!-- Les somme : {{ NumberFormat(solde) }}</p>  -->
   
    <TransactionsTable :transactions="dataInfo"></TransactionsTable>
    <router-link to="/new-transaction">Nouvelle transaction</router-link><br>
    <router-link to="/new-categorie">Ajouter une catégorie de transactions</router-link>
  </div>
</template>
