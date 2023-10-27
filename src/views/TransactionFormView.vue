<script  setup lang="ts">

import { inject, type Ref } from "vue";
import { useRouter } from "vue-router";
import TransactionFrom from "@/components/TransactionForm.vue";

 const route = useRouter();
const dataInfo = inject<
  Ref<
    {
      id:number,
      description: string,
      categorie:string,
      date: Date,
      montant: bigint,
    }[]
  >
>("dataInfo")!;

function Ajoutertransac(date :Date,description:string,categorie:string,montant :bigint){
  const newId = dataInfo.value.length + 1;
  dataInfo.value.push({
    id: newId,
    description: description,
    categorie : categorie,
    date:date,
    montant: montant
  });
  route.push("/");
}
</script>

<template>
  <router-link  to="/" >&lt; Retour</router-link>
  <TransactionFrom v-on:newTransactionEvent="Ajoutertransac"></TransactionFrom>
</template>