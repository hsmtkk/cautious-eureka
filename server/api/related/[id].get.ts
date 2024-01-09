export default defineEventHandler((event) => {
    console.log("/api/related/:id")
    const id = event.context.params.id
    return { message: "dummy" }
})