
import { Toaster } from "@/components/ui/sonner";
import {
  Outlet,
  createRootRoute,
  HeadContent,
  Scripts,
} from "@tanstack/react-router"
import appCss from "./globals.css?url";
import { siteConfig } from "@/data";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { title: siteConfig.title },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      {
        name: "description",
        content: siteConfig.description,
      },
      {
        property: "og:title",
        content: siteConfig.title
      },
      {
        property: "og:description",
        content: siteConfig.description,
      },
      {
        property: "og:image",
        content: "https://agnlt64.xyz/opengraph-image.jpg"
      },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss
      },
      {
        rel: "icon",
        href: "/favicon.svg",
      }
    ]
  }),
  component: RootLayout,
});

function RootLayout() {
  return (
    <html lang="en" className="scroll-smooth" data-scroll-behavior="smooth">
      <head>
        <HeadContent />
      </head>
      <body>
          <Outlet />
          <Scripts />
          <Toaster />
      </body>
    </html>
  );
}
