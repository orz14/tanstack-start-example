type Ctx = any

export type BuildSeoHeadOptions = {
  ctx: Ctx
  title?: string
  robots?: string
  description?: string
  image?: string
  canonical?: string
  extraMeta?: Array<Record<string, string>>
  extraLinks?: Array<Record<string, string>>
}

type SeoDefaults = {
  appUrl: string
  defaultTitle: string
  defaultRobots: string
  defaultDescription: string
  defaultImage: string
}

const defaults: SeoDefaults = {
  appUrl: import.meta.env.VITE_APP_URL || "http://localhost:3000",
  defaultTitle: "",
  defaultRobots:
    "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
  defaultDescription: import.meta.env.VITE_APP_DESCRIPTION || "",
  defaultImage:
    "https://cdn.jsdelivr.net/gh/orz14/orzcode@main/aisystem-landing/assets/logos/aisystem-landing-1200x630.png",
}

function buildFullUrl(ctx: Ctx, appUrl: string): string {
  const pathname = ctx.match?.pathname as string | undefined
  const search = ctx.match?.search as Record<string, string> | undefined
  const params =
    search && Object.keys(search).length !== 0
      ? new URLSearchParams(search).toString()
      : ""
  const normalizedBase = appUrl.endsWith("/") ? appUrl.slice(0, -1) : appUrl

  if (!pathname || pathname === "/") {
    return `${normalizedBase}${params ? `/?${params}` : ""}`
  }
  return `${normalizedBase}${pathname.startsWith("/") ? "" : "/"}${pathname}${params ? `?${params}` : ""}`
}

export function buildSeoHead(options: BuildSeoHeadOptions) {
  const appTitle = import.meta.env.VITE_APP_TITLE || "TanStack Start Starter"
  const {
    ctx,
    title,
    robots,
    description,
    image,
    canonical,
    extraMeta = [],
    extraLinks = [],
  } = options

  const fullUrl = canonical || buildFullUrl(ctx, defaults.appUrl)
  const finalTitle = (title ? title + " · " : defaults.defaultTitle) + appTitle
  const finalRobots = robots || defaults.defaultRobots
  const finalDescription = description || defaults.defaultDescription
  const finalImage = image || defaults.defaultImage

  const meta: Array<Record<string, string>> = [
    {
      name: "robots",
      content: finalRobots,
    },
    {
      title: finalTitle,
    },
    {
      name: "title",
      content: finalTitle,
    },
    {
      name: "description",
      content: finalDescription,
    },
    {
      property: "og:url",
      content: fullUrl,
    },
    {
      property: "og:title",
      content: finalTitle,
    },
    {
      property: "og:description",
      content: finalDescription,
    },
    {
      property: "og:image",
      content: finalImage,
    },
    {
      name: "twitter:url",
      content: fullUrl,
    },
    {
      name: "twitter:title",
      content: finalTitle,
    },
    {
      name: "twitter:description",
      content: finalDescription,
    },
    {
      name: "twitter:image",
      content: finalImage,
    },
    ...extraMeta,
  ]

  const links: Array<Record<string, string>> = [
    {
      rel: "canonical",
      href: fullUrl,
    },
    ...extraLinks,
  ]

  return {
    meta,
    links,
  }
}
