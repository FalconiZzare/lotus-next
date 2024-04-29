import "@/style/globals.css";
import "@/style/index.css";
import Header from "@/components/layouts/Header/Header";
import Footer from "@/components/layouts/Footer/Footer";
import Providers from "@/app/providers";
import { siteConfig } from "@/constants/SiteConfig";

export const metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`
  },
  description: siteConfig.description,
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    type: "website",
    siteName: siteConfig.name,
    images: [
      {
        url: "/opengraph-image.png",
        width: 1280,
        height: 720,
        alt: "Lotus"
      },
      {
        url: "https://falconizzare.github.io/lotus-next/opengraph-image.png",
        width: 1280,
        height: 720,
        alt: "Lotus"
      }
    ]
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>
          <div className={"relative flex min-h-screen flex-col pt-14 sm:pt-20"}>
            <Header />
            <div className={"flex flex-grow items-center justify-center"}>{children}</div>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
