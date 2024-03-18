import koa from "koa";
import staticPath from "koa-static";
import renderReact from "./server.entry";
import path from "path";

const app = new koa();
app.use(staticPath(path.join(__dirname, "../public")));

renderReact(app);

app.listen(3009, () => {
  console.log("server is running at http://localhost:3009");
});
