import { BASE_URL as url } from "@app/config/config";
import type { Metadata } from "next";
import "./globals.scss";
import { Providers } from "./providers";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

export const metadata: Metadata = {
  metadataBase: new URL(url),
  title: "BrainNet. GL JS",
  description:
    "BrainNet. GL JS is a Networking library for vector networking on  the Web. Its performance, real-time styling, and interactivity features set the bar for anyone building fast, immersive tech on the web.",
  openGraph: {
    title: "BrainNet. GL JS",
    description:
      "BrainNet. GL JS is a Networking library for vector networking on  the Web. Its performance, real-time styling, and interactivity features set the bar for anyone building fast, immersive tech on the web..",
    url: url,
    images: [
      {
        url: `${url}/aws-platform.png`,
        width: 800,
        height: 600,
        alt: "BrainNet. GL JS",
      },
    ],
  },
};
