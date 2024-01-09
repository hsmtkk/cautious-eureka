<template>
    <v-container>
        <v-list>
            <v-list-item v-for="(item, index) in items" v-bind:key="item.id">
                <AppVideo v-bind:item="item" v-bind:video-id="item.id" />
            </v-list-item>
        </v-list>
    </v-container>
</template>

<script setup lang="ts">
const { data: items } = await useFetch("/api/popular")
</script>