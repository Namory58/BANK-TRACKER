<script  setup lang="ts">

import { useRouter } from "vue-router";
import TransactionFrom from "@/components/TransactionForm.vue";

 const route = useRouter();


 async function Ajoutertransac(date :Date,description:string,montant :bigint,categoryId:number){
  const UrlApi = await fetch("http://localhost:3000/transactions",{
        method :"POST",
        headers:{
          "Content-Type": "application/json"
        },
        body :JSON.stringify({
          description: description,
          date:date.toISOString(),
          montant:Number(montant),
          categoryId :categoryId,
        })
  });
  if(UrlApi.ok){
    route.push("/");
  } else{
    ///
  }
}
</script>

<template>
  <router-link  to="/" >&lt; Retour</router-link>
  <TransactionFrom v-on:newTransactionEvent="Ajoutertransac"></TransactionFrom>
</template>