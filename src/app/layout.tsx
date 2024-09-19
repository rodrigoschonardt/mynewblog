import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import { env } from "~/env";

export const metadata: Metadata = {
  title: env.NEXT_PUBLIC_BLOG_NAME,
  description: env.NEXT_PUBLIC_BLOG_NAME,
  icons: [{ rel: "icon", url: env.NEXT_PUBLIC_BLOG_FAVICON }],
};

function TopNaV(){
  return (
    <nav className="flex justify-between p-3 w-full border-b-2 border-b-gray-300 items-center">
      <a href="/" className="w-52">
        <img src={env.NEXT_PUBLIC_BLOG_IMAGE} alt="Blog image" />
      </a>
      <div className="font-bold">Login</div>
  </nav>
  );
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html className={`${GeistSans.variable} text-gray-700`}>
      <body>
        <header>
          <TopNaV/>
        </header>
        {children}
      </body>
    </html>
  );
}
