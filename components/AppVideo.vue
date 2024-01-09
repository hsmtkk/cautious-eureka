<template>
    <NuxtLink v-bind:to="{ name: 'video-id', params: { id: props.videoId } }">
        <NuxtImg v-bind:src="props.item.snippet.thumbnails.medium.url" />
        {{ props.item.snippet.title }}
        {{ props.item.snippet.publishedAt }}
        {{ props.item.snippet.channelTitle }}
        {{ props.item.snippet.description }}
    </NuxtLink>
</template>

<script setup lang="ts">
interface Props {
    item: Object
    videoId: string
}

const props = defineProps<Props>()
</script>