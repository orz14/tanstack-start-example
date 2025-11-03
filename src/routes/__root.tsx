import {
  HeadContent,
  Scripts,
  createRootRouteWithContext,
} from "@tanstack/react-router"
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools"
import { TanStackDevtools } from "@tanstack/react-devtools"

import Header from "../components/Header"

import TanStackQueryDevtools from "../integrations/tanstack-query/devtools"

import appCss from "../styles.css?url"

import type { QueryClient } from "@tanstack/react-query"

interface MyRouterContext {
  queryClient: QueryClient
}

export const Route = createRootRouteWithContext<MyRouterContext>()({
  head: () => ({
    meta: [
      {
        charSet: "utf-8",
      },
      {
        httpEquiv: "X-UA-Compatible",
        content: "IE=edge",
      },
      {
        httpEquiv: "Content-Type",
        content: "text/html; charset=UTF-8",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      {
        name: "msapplication-TileImage",
        content:
          "https://cdn.jsdelivr.net/gh/orz14/orzcode@main/aisystem-landing/assets/logos/aisystem-landing-144.png",
      },
      {
        name: "geo.country",
        content: "id",
      },
      {
        name: "geo.placename",
        content: "Indonesia",
      },
      {
        name: "rating",
        content: "general",
      },
      {
        name: "author",
        content: "Oriz Wahyu N",
      },
      {
        property: "og:site_name",
        content: import.meta.env.VITE_APP_TITLE,
      },
      {
        property: "og:locale",
        content: "id_ID",
      },
      {
        property: "og:locale:alternate",
        content: "en_US",
      },
      {
        property: "og:locale:alternate",
        content: "en_GB",
      },
      {
        httpEquiv: "content-language",
        content: "id",
      },
      {
        name: "search engines",
        content:
          "Aeiwi, Alexa, AllTheWeb, AltaVista, AOL Netfind, Anzwers, Canada, DirectHit, EuroSeek, Excite, Overture, Go, Google, HotBot, InfoMak, Kanoodle, Lycos, MasterSite, National Directory, Northern Light, SearchIt, SimpleSearch, WebsMostLinked, WebTop, What-U-Seek, AOL, Yahoo, WebCrawler, Infoseek, Excite, Magellan, LookSmart, CNET, Googlebot",
      },
      {
        name: "description",
        content: import.meta.env.VITE_APP_DESCRIPTION,
      },
      {
        name: "keywords",
        content:
          "tanstack, tanstack start, tanstack start starter, tanstack router, tanstack query, react, solid, ai, artificial intelligence, next generation ai applications, full-stack framework, server functions, streaming, type safety",
      },
      {
        property: "og:type",
        content: "website",
      },
      {
        property: "og:description",
        content: import.meta.env.VITE_APP_DESCRIPTION,
      },
      {
        property: "og:image",
        content:
          "https://cdn.jsdelivr.net/gh/orz14/orzcode@main/aisystem-landing/assets/logos/aisystem-landing-1200x630.png",
      },
      {
        property: "og:image:width",
        content: "1200",
      },
      {
        property: "og:image:height",
        content: "630",
      },
      {
        property: "og:logo",
        content:
          "https://cdn.jsdelivr.net/gh/orz14/orzcode@main/aisystem-landing/assets/logos/aisystem-landing-512.png",
      },
      {
        property: "og:logo:type",
        content: "image/png",
      },
      {
        property: "og:logo:width",
        content: "512",
      },
      {
        property: "og:logo:height",
        content: "512",
      },
      {
        name: "twitter:card",
        content: "summary_large_image",
      },
      {
        name: "twitter:domain",
        content: "domain.com",
      },
      {
        name: "twitter:description",
        content: import.meta.env.VITE_APP_DESCRIPTION,
      },
      {
        name: "twitter:image",
        content:
          "https://cdn.jsdelivr.net/gh/orz14/orzcode@main/aisystem-landing/assets/logos/aisystem-landing-1200x630.png",
      },
      {
        name: "mobile-web-app-capable",
        content: "yes",
      },
      {
        name: "apple-mobile-web-app-capable",
        content: "yes",
      },
      {
        name: "apple-mobile-web-app-title",
        content: import.meta.env.VITE_APP_TITLE,
      },
      {
        name: "theme-color",
        content: "#5664d6",
      },
      {
        name: "msapplication-navbutton-color",
        content: "#5664d6",
      },
      {
        name: "msapplication-TileColor",
        content: "#5664d6",
      },
      {
        name: "apple-mobile-web-app-status-bar-style",
        content: "#5664d6",
      },
    ],
    links: [
      {
        rel: "icon",
        type: "image/x-icon",
        href: "https://cdn.jsdelivr.net/gh/orz14/orzcode@main/aisystem-landing/assets/logos/aisystem-landing-favicon-64.ico",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "https://cdn.jsdelivr.net/gh/orz14/orzcode@main/aisystem-landing/assets/logos/aisystem-landing-48.png",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "64x64",
        href: "https://cdn.jsdelivr.net/gh/orz14/orzcode@main/aisystem-landing/assets/logos/aisystem-landing-64.png",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "192x192",
        href: "https://cdn.jsdelivr.net/gh/orz14/orzcode@main/aisystem-landing/assets/logos/aisystem-landing-192.png",
      },
      {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "https://cdn.jsdelivr.net/gh/orz14/orzcode@main/aisystem-landing/assets/logos/aisystem-landing-180.png",
      },
      {
        rel: "mask-icon",
        href: "https://cdn.jsdelivr.net/gh/orz14/orzcode@main/aisystem-landing/assets/logos/aisystem-landing-32.svg",
        color: "#5664d6",
      },
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
      },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "dns-prefetch",
        href: "//fonts.googleapis.com",
      },
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
  }),

  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className="scroll-smooth">
      <head>
        <HeadContent />
      </head>
      <body className="antialiased">
        <Header />
        {children}
        <TanStackDevtools
          config={{
            position: "bottom-right",
          }}
          plugins={[
            {
              name: "Tanstack Router",
              render: <TanStackRouterDevtoolsPanel />,
            },
            TanStackQueryDevtools,
          ]}
        />
        <Scripts />
      </body>
    </html>
  )
}
