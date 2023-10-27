<script setup lang="ts">
import { ref,inject ,type Ref } from "vue";
import CategorieFrom from"@/components/CategorieFrom.vue"

const ListeCategorie =inject<
Ref<{
    id:number,
    NameCategorie : string,
}[]>
>("ListeCategorie")!;

function AddCategorie(Categorie :string){
   const id = ListeCategorie.value.length +1;
    ListeCategorie.value.push({
        id: id,
        NameCategorie :Categorie
    });
}
</script>
<template>
    <router-link  to="/" >&lt; Retour</router-link>
    <CategorieFrom v-on:categorieEvent="AddCategorie"></CategorieFrom>
</template>