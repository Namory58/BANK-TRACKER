<script setup lang="ts">
import { computed, ref } from "vue";
import TransactionsTable from "@/components/TransactionsTable.vue";
import { NumberFormat } from "@/stores/UtilesCodes/FormatNumber";
import { transactionsClasse } from "@/stores/entites/Transactions";
import { categoryClass } from "@/stores/entites/Categories"

const transactions = ref<transactionsClasse[]>([]);
const Categories = ref<categoryClass[]>([]);

type transactionDTO = {
  id: number,
  description: string,
  date: string,
  montant: number,
  category: string,
  categoryId: number,
};
type CategoriesDTO = {
  id: number,
  name: string,
};

//Appel à L'api
async function getTransactions(): Promise<void> {
  const transactionsApiUrl = await fetch("http://localhost:3000/transactions");
  const categoriesApiUrl = await fetch("http://localhost:3000/categories");
  const category: CategoriesDTO[] = await categoriesApiUrl.json();
  category.map(i => {
    Categories.value.push(new categoryClass(i.id, i.name));
  });
  const transactionsDb: transactionDTO[] = await transactionsApiUrl.json();
  for (let i of transactionsDb) {
    const category = Categories.value.find(x => x.id === i.categoryId);
    if (category != undefined) {
      transactions.value.push(new transactionsClasse(i.id, i.description, new Date(i.date), BigInt(i.montant), category));
    }

  }
}
getTransactions();

const solde = computed(() => {
  const resultat = {};
  transactions.value.map(i => {
    const nameCategory = i.category.name;
    if (!resultat[nameCategory]) {
      resultat[nameCategory] = 0n;
    }
    resultat[nameCategory] += i.montant;
  })
  return resultat;
});
</script>

<template>
  <h1>Historique des virements</h1>
  <p>Les sommes par catégories:</p>

  <li v-for="(somme, nameCategory) in solde" :key="nameCategory">{{ nameCategory }}:{{ NumberFormat(somme) }}</li>

  <TransactionsTable :transactions="transactions"></TransactionsTable>
  <router-link to="/new-transaction">Nouvelle transaction</router-link><br>
  <router-link to="/new-categorie">Ajouter une catégorie de transactions</router-link>
</template>
