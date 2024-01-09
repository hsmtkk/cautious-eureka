export default defineEventHandler((event) => {
    console.log("/api/video/:id")
    const id = event.context.params.id
    return { message: "dummy" }
})