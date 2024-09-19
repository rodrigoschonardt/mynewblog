import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import { env } from "~/env";

export const metadata: Metadata = {
  title: env.NEXT_PUBLIC_BLOG_NAME,
  description: env.NEXT_PUBLIC_BLOG_NAME,
  icons: [{ rel: "icon", url: env.NEXT_PUBLIC_BLOG_FAVICON }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body>
        <header>
          <nav className="justify-between p-2 w-full border-b-2 border-b-gray-300">
            <img className="w-52" src={env.NEXT_PUBLIC_BLOG_IMAGE} alt="Blog image" />
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
