import React from "react";
import { renderToString } from "react-dom/server";
import {
  createStaticHandler,
  createStaticRouter,
  StaticRouterProvider,
} from "react-router-dom/server";
import routes from "../src/router";
import createFetchRequest from "./helpers/request";
import fs from "fs";
import path from "path";

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
      <React.StrictMode>
        <StaticRouterProvider
          router={router}
          context={context}
          nonce="the-nonce"
        />
      </React.StrictMode>
    );

    ctx.body = htmlTemplate(html);
  });
}

function htmlTemplate(
  serverRenderedContent,
  scripts: string[] = [],
  styles: string[] = []
) {
  const json = JSON.stringify({ page: "server" });

  let htmlContent = fs.readFileSync(
    path.resolve("src/public/index.html"),
    "utf-8"
  );

  // 定义要添加的脚本内容
  const scriptContent = `<script>window.__context__ = ${json}</script>`;
  const replaceRootContent = `<div id="root">${serverRenderedContent}</div>`;
  htmlContent = htmlContent.replace(
    '<div id="root"></div>',
    replaceRootContent
  );

  if (styles?.length) {
    insertContentByHtmlTag(htmlContent, "</head>", styles.join(""));
  }

  const insertContents = scriptContent + scripts.join("");
  // + `<script type="module" src="./entry.client.tsx"></script>`;
  return insertContentByHtmlTag(htmlContent, "</body>", insertContents);
}

function insertContentByHtmlTag(
  htmlContent: string,
  html: string,
  content: string
) {
  const startIndex = htmlContent.indexOf(html);

  if (startIndex === -1) return `Could not find ${html} tag in the HTML file.`;

  const newHtmlContent =
    htmlContent.slice(0, startIndex) + content + htmlContent.slice(startIndex);
  return newHtmlContent;
}
