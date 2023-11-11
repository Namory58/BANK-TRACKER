<template>
  <div id="app">
    <fieldset>
      <legend>Nouvelle transaction</legend>
      <form @submit.prevent="Ajoutertransac" class="transaction-form">
        <div class="form-group">
          <label for="date">Date :</label>
          <input type="date" id="date" name="date" v-model="date" required />
        </div>
        <div class="form-group">
          <label for="categorie">Catégorie :</label>
          <select v-model="categorie">
            <option disabled value="">Choisir la catégorie</option>
            <option v-for="t in Categories" :value="t.id">{{ t.name }}</option>
          </select>
        </div>
        <div class="form-group">
          <label for="montant">Montant :</label>
          <input type="number" step="0.01" id="montant" name="montant" v-model="montant" />
        </div>
        <div class="form-group">
          <label for="description">Description :</label>
          <input type="text" id="description" name="description" v-model="description" />
        </div>
        <input type="submit" value="Ajouter une transaction" />
      </form>
    </fieldset>
  </div>
</template>

<script setup  lang="ts">
import { ref} from "vue";
import { categoryClass } from "@/stores/entites/Categories"

const date = ref("");
const montant = ref("");
const description = ref("");
const categorie = ref("");

const emits = defineEmits(["newTransactionEvent"]);

const Categories = ref<categoryClass[]>([]);

type CategoriesDTO = {
  id: number,
  name: string,
};
async function getCategories():Promise<void> {
    const categoryApi =  await fetch("http://localhost:3000/categories");
    const resultat:CategoriesDTO []  = await categoryApi.json();
    resultat.map(x=>{
      Categories.value.push(new categoryClass(x.id,x.name))
    });
}
getCategories();
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
      newmontant,
      categorie.value
    );

    date.value = "";
    description.value = "";
    montant.value = "";
    categorie.value = "";
  }
}
</script>
<style scoped>
/* Styles pour le formulaire */
.transaction-form {
  max-width: 400px;
  margin: auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

/* Styles pour les groupes de formulaire */
.form-group {
  margin-bottom: 15px;
}

/* Styles pour les labels des champs */
label {
  display: block;
  margin-bottom: 8px;
}

/* Styles pour les champs de formulaire */
input,
select {
  width: 100%;
  padding: 8px;
  margin-bottom: 10px;
  box-sizing: border-box;
}

/* Styles pour le bouton Ajouter une transaction */
input[type="submit"] {
  background-color: #4caf50;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

input[type="submit"]:hover {
  background-color: #45a049;
}
</style>