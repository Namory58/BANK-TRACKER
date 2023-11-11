<script setup lang="ts">
import { ref } from "vue";

const newCategorie = ref("");

const emits = defineEmits(["categorieEvent"]);

function SubmitCategorie() {
  if (newCategorie.value != "" && newCategorie.value.length <= 12) {
    emits("categorieEvent", newCategorie.value);
  }
  newCategorie.value = "";
}
</script>

<template>
  <div id="app">
    <fieldset>
      <legend>Ajouter une Catégorie</legend>
      <form @submit.prevent="SubmitCategorie">
        <div>
          <label for="newCategorie">Nom Catégorie:</label>
          <input type="text" id="newCategorie" v-model="newCategorie" />
        </div>
        <input type="submit" value="Ajouter" class="custom-button" />
      </form>
    </fieldset>
  </div>
</template>

<style>
/* Styles pour le formulaire */
#app {
    text-align: center;
}

fieldset {
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 20px;
    margin: 20px auto;
    max-width: 300px;
}

legend {
    font-size: 1.2em;
    font-weight: bold;
    margin-bottom: 10px;
}

form {
    display: flex;
    flex-direction: column;
}

/* Styles pour le bouton Ajouter avec une couleur de fond rouge */
.custom-button {
  background-color: #4caf50;
    color: white;
    padding: 10px 15px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 10px;
}

.custom-button:hover {
    background-color: darkred;
}
</style>
