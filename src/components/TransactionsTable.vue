<template>
  <div class="homepage">
    <table class="transaction-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Description</th>
          <th>Date</th>
          <th>Categories</th>
          <th>Montant</th>
        </tr>
      </thead>
      <!-- Table body -->
      <tbody>
        <tr v-for="transaction in transactions" :key="transaction.id">
          <td>{{ transaction.id }}</td>
          <td>{{ transaction.description }}</td>
          <td>{{ new Intl.DateTimeFormat('fr-FR').format(transaction.date) }}</td>
          <td>{{ transaction.category.name}}</td>
          <td>{{ NumberFormat(transaction.montant) }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import { NumberFormat } from "@/stores/UtilesCodes/FormatNumber";
defineProps(["transactions"]);
</script>

<style scoped>
/* Styles for the homepage */
.homepage {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

/* Styles for the table */
.transaction-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}

/* Styles for table headers */
.transaction-table th {
  border: 1px solid #3498db; /* Blue color */
  padding: 12px;
  text-align: center;
  background-color: #ecf0f1; /* Light grey-blue background */
  color: #2c3e50; /* Dark blue text */
}

/* Styles for table cells */
.transaction-table td {
  border: 1px solid #3498db; /* Blue color */
  padding: 12px;
  text-align: center;
  background-color: #ecf0f1; /* Light grey-blue background */
  color: #34495e; /* Dark blue text */
}

/* Styles for the title h2 */
h2 {
  font-size: 24px;
  margin-bottom: 16px;
  text-align: center;
  color: #3498db; /* Blue color for the title */
}
</style>
