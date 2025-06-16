import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "./provider/Providers";


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          {children}
          <Analytics/>
        </ThemeProvider>
      </body>
    </html>
  );
}