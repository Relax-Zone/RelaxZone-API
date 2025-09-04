import Elysia from "elysia";
import { auth } from "./../lib/auth";


export const app = new Elysia({ aot: false })
app.get('/', () => { return { isOk: true , message : "ทดสอบภาษาไทย 🤩"}})
.mount(auth.handler)
.onError(({ code, error }) => {
    console.log(code)
    return new Response(JSON.stringify({ error: error.toString() ?? code }), { status: 500 })
})

