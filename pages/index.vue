<template>
    <AppVideo v-for="item in data.items" v-bind:item="item" v-bind:video-id="item.id" />
    <v-container>
        <v-btn v-on:click="loadMore">More</v-btn>
    </v-container>
</template>

<script setup lang="ts">
const { data } = await useFetch("/api/popular")

const loadMore = async () => {
    // console.log("loadMore")
    const nextPageToken = data.value.nextPageToken
    // console.log("nextPageToken")
    // console.log(nextPageToken)
    const { data: resp } = await useFetch("/api/popular", { query: { pageToken: nextPageToken } })
    // console.log("resp")
    // console.log(resp)
    data.value = resp.value
}
</script>