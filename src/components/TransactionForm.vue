<template>
  <div id="app">
    <fieldset>
      <legend>Nouvelle transaction</legend>
      <form @submit.prevent="Ajoutertransac">
        <div>
          <label for="date">date:</label>
          <input type="date" id="date" name="date" v-model="date" />
        </div>
        <div>
          <label for="categorie">categorie</label>
          <select v-model="categorie">
            <option disabled value="">Choisir la catégoier</option>
            <option v-for="t in Categories">{{ t.NameCategorie }}</option>
          </select>
        </div>
        <div>
          <label for="Montant">Montant:</label>
          <input
            type="number"
            step="0.01"
            id="Montant"
            name="montant"
            v-model="montant"
          />
        </div>
        <div>
          <label for="description">Description:</label>
          <input
            type="text"
            id="date"
            name="description"
            v-model="description"
          />
        </div>
        <input type="submit" value="Ajouter une transaction" />
      </form>
    </fieldset>
  </div>
</template>

<script setup  lang="ts">
import { ref, inject, type Ref } from "vue";

const date = ref("");
const montant = ref("");
const description = ref("");
const categorie = ref("");

const emits = defineEmits(["newTransactionEvent"]);

const Categories = inject<
  Ref<
    {
      id: number;
      NameCategorie: string;
    }[]
  >
>("ListeCategorie")!;

function Ajoutertransac() {
  if (
    (date.value != "" && description.value != "" && montant.value != "",
    categorie.value != "")
  ) {
    const newDate = new Date(date.value);
    const newmontant = BigInt(Math.floor(Number(montant.value) * 100));
    emits(
      "newTransactionEvent",
      newDate,
      description.value,
      categorie.value,
      newmontant
    );

    date.value = "";
    description.value = "";
    montant.value = "";
    categorie.value = "";
  }
}
</script>