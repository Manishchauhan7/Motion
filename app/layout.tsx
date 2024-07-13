import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { ConvexClientProvider } from "@/components/providers/convex-provider";
import { ModalProvider } from "@/components/providers/modal-provider";
import { EdgeStoreProvider } from "@/lib/edgestore";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Motion-NoteTaking",
  description: "It is advanced notetaking app",
  icons :{
    icon:[
      {
        media :"(prefers-color-scheme:light)",
        url:"/logo.svg",
        href:"/logo.svg"
      },
      {
        media :"(prefers-color-scheme:dark)",
        url:"/logoDark.svg",
        href:"/logoDark.svg"
      }
    ]
  }
  /* trunk-ignore(git-diff-check/error) */
  

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ConvexClientProvider>
          <EdgeStoreProvider>
        <ThemeProvider attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
        storageKey="motion-theme-2"
        >
          <Toaster position="bottom-center"/>
          <ModalProvider/>
        {children}
        </ThemeProvider>
        </EdgeStoreProvider>
        
        </ConvexClientProvider>
        
        </body>
    </html>
  );
}
