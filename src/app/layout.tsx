import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "./provider/Providers";
import "./globals.css"; 


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@300..700&display=swap" rel="stylesheet" />
      </head>
      <body>
        <ThemeProvider>
          {children}
          <Analytics/>
        </ThemeProvider>
      </body>
    </html>
  );
}
