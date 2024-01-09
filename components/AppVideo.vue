<template>
    <v-container>
        <NuxtLink v-bind:to="{ name: 'video-id', params: { id: props.videoId } }">
            <v-row>
                <v-col cols="3">
                    <NuxtImg v-bind:src="props.item.snippet.thumbnails.medium.url" />
                </v-col>
                <v-col>
                    <v-list>
                        <v-list-item> {{ props.item.snippet.title }}</v-list-item>
                        <v-list-item> {{ props.item.snippet.publishedAt }}</v-list-item>
                        <v-list-item> {{ props.item.snippet.channelTitle }}</v-list-item>
                        <v-list-item> {{ shortDescription }} ...</v-list-item>
                    </v-list>
                </v-col>
            </v-row>
        </NuxtLink>
    </v-container>
</template>

<script setup lang="ts">
interface Props {
    item: Object
    videoId: string
}

const props = defineProps<Props>()

const shortDescription = computed(() => {
    return props.item.snippet.description.slice(0, 140)
})
</script>