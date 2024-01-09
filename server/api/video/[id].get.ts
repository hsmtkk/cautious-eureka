export default defineEventHandler(async (event) => {
    console.log("/api/video/:id")
    const query = getQuery(event)
    const id = query.id

    const config = useRuntimeConfig()
    const apiKey = config.YOUTUBE_API_KEY

    const resp = await $fetch("https://www.googleapis.com/youtube/v3/videos", {
        query: {
            key: apiKey,
            part: "id,snippet",
            chart: "mostPopular",
            id: id,
        },
    })
    // console.log("resp")
    // console.log(resp)
    return resp.items[0]
})