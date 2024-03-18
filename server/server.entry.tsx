import React from "react";
import { renderToString } from "react-dom/server";
import {
  createStaticHandler,
  createStaticRouter,
  StaticRouterProvider,
} from "react-router-dom/server";
import routes from "../src/router";
import createFetchRequest from "./helpers/request";

export default function (app) {
  app.use(async (ctx, next) => {
    const req = ctx.request;
    const res = ctx.res;
    let { query, dataRoutes } = createStaticHandler(routes);
    let fetchRequest = createFetchRequest(req, res);
    let context = await query(fetchRequest);

    if (context instanceof Response) {
      throw context;
    }

    let router = createStaticRouter(dataRoutes, context);
    let html = renderToString(
      <StaticRouterProvider
        router={router}
        context={context}
        nonce="the-nonce"
      />
    );

    ctx.body = htmlTemplate(html);
  });
}

function htmlTemplate(serverRenderedContent) {
  const json = JSON.stringify({ page: "server" });
  return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>SSR RENDER</title>
      </head>
      <body>
        <script>
          //向客户端渲染传递数据
          window.__context__ = ${json}
        </script>
        <div id="root">${serverRenderedContent}</div>
        <script src="https://unpkg.com/react@18.2.0/umd/react.production.min.js"></script>
        <script src="https://unpkg.com/react-dom@18.2.0/umd/react-dom.production.min.js"></script>
        <script src="/bundle.js"></script>
      </body>
    </html>
  `;
}
