<script setup lang="ts">
import CategorieFrom from "@/components/CategorieFrom.vue"
import { ref } from "vue";

const validedForm = ref(false);

async function AddCategorie(Categorie: string) {
    validedForm.value = false;

    const reponse = await fetch("http://localhost:3000/categories", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name: Categorie,
        }),
    });

    if (reponse.ok) {
        validedForm.value = true;
    } else {
        validedForm.value = false;
    }
}
</script>
<template>
    <div>
        <router-link to="/">&lt; Retour</router-link>
        <CategorieFrom v-on:categorieEvent="AddCategorie"></CategorieFrom>
        <p v-if="validedForm" class="success-message">Ajouté avec succès</p>
        <p v-else>Ajouter une catégorie</p>
    </div>
</template>

<style scoped>
/* Ajoutez ici vos styles CSS spécifiques à cette page */
.success-message {
    color: green;
    font-weight: bold;
}
</style>
