<script setup lang="ts">
import {NumberFormat} from "@/stores/UtilesCodes/FormatNumber.ts";
defineProps(["transactions"])

</script>
<template>
  <div>
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Description</th>
          <th>Catégorie</th>
          <th>Date</th>
          <th>Montant</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="transaction in transactions" :key="transaction.id">
          <td>{{ transaction.id }}</td>
          <td>{{ transaction.description }}</td>
          <td>{{ transaction.categorie }}</td>
          <td>{{ new Intl.DateTimeFormat('fr-FR').format(transaction.date)}}</td>
          <td>{{ NumberFormat(transaction.montant) }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style>
table {
  border-collapse: collapse;
}
table th,
table td {
  border: 1px solid #ccc;
  padding: 10px;
  text-align: center;
}
/* Style pour le titre h2 */
h2 {
  font-size: 20px;
  margin-bottom: 6px;
  text-align: center;
}
</style>