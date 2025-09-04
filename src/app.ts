import Elysia from "elysia";


export const app = new Elysia({ aot: false })
.onError(({ code, error }) => {
    console.log(code)
    return new Response(JSON.stringify({ error: error.toString() ?? code }), { status: 500 })
})


app.get('/', () => { return { isOk: true , message : "ทดสอบภาษาไทย 🤩"}})