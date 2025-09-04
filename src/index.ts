
import { Env } from "bun"
import {app} from "./app"
import { Context } from "elysia"

export default {
  async fetch(
    request: Request,
    env: Env,
    ctx: Context,
    
  ): Promise<Response> {
    const response = await app.fetch(request)
    if (!response.headers.has("Content-Type"))
      response.headers.set("Content-Type", "text/plain; charset=utf-8")
    return response
  },
}