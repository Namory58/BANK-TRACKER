
<script setup lang="ts">
import { ref } from "vue";

const newCategorie = ref("");

const emits = defineEmits(["categorieEvent"]);

function SubmitCategorie() {
  if (newCategorie.value != "" && newCategorie.value.length <= 12) {
    emits("categorieEvent", newCategorie.value);
  }
  newCategorie.value="";
 console.log("Ajouter une transactions");
}
</script>
<template>
  <div id="app">
    <fieldset>
      <legend>Ajouter une Categorie</legend>
      <form @submit.prevent="SubmitCategorie">
        <div>
          <label>Nom Catégorie:</label>
          <input type="text" v-model="newCategorie" />
        </div>
        <input type="submit" value="Ajouter" />
      </form>
    </fieldset>
  </div>
</template>
