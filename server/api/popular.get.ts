export default defineEventHandler(async (event) => {
    console.log("/api/popular")
    const query = getQuery(event)
    const pageToken = query.pageToken
    // console.log("pageToken")
    // console.log(pageToken)

    const config = useRuntimeConfig()
    const apiKey = config.YOUTUBE_API_KEY

    const resp = await $fetch("https://www.googleapis.com/youtube/v3/videos", {
        query: {
            key: apiKey,
            part: "id,snippet",
            chart: "mostPopular",
            pageToken: pageToken,
        },
    })
    // console.log("resp")
    // console.log(resp)
    return resp
})