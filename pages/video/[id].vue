<template>
    <v-container>
        <iframe id="ytplayer" type="text/html" width="640" height="360" v-bind:src="youtubeURL" frameborder="0"></iframe>
        <v-list>
            <v-list-item>{{ data.snippet.title }}</v-list-item>
            <v-list-item>{{ data.snippet.channelTitle }}</v-list-item>
            <v-list-item>{{ data.snippet.publishedAt }}</v-list-item>
            <v-list-item>{{ shortDescription }} ...</v-list-item>
        </v-list>
    </v-container>
</template>

<script setup lang="ts">
const route = useRoute()

const id = route.params.id

const { data } = await useFetch(`/api/video/${id}`)

const shortDescription = computed(() => {
    return data.value.snippet.description.slice(0, 140)
})

const youtubeURL = computed(() => {
    return `https://www.youtube.com/embed/${id}`
})

// console.log("data")
// console.log(data)
</script>