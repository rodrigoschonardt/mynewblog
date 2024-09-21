import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import { env } from "~/env";
import Link from "next/link";
import { ClerkProvider, SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { ptBR } from '@clerk/localizations'

export const metadata: Metadata = {
  title: env.NEXT_PUBLIC_BLOG_NAME,
  description: env.NEXT_PUBLIC_BLOG_NAME,
  icons: [{ rel: "icon", url: env.NEXT_PUBLIC_BLOG_FAVICON }],
};

function TopNaV(){
  return (
    <nav className="h-[10vh] flex justify-between p-3 w-full border-b-2 border-b-gray-300 items-center">
      <Link href="/" className="w-52">
        <img src={env.NEXT_PUBLIC_BLOG_IMAGE} alt="Blog image" />
      </Link>
      <SignedOut >
        <SignInButton>
          Logar
        </SignInButton>
      </SignedOut>
      <SignedIn>
          <UserButton/>
      </SignedIn>
  </nav>
  );
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <ClerkProvider localization={ptBR}>
      <html className={`${GeistSans.variable} text-gray-700`}>
        <body className="overflow-hidden">
          <header>
            <TopNaV/>
          </header>
          <main className="h-[90vh] overflow-auto">
            {children}
          </main>
        </body>
      </html>
    </ClerkProvider>
  );
}
