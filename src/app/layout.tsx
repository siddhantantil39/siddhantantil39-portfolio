import { Providers } from "./provider/Providers";
import { Analytics } from "@vercel/analytics/next"


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          {children}
          <Analytics/>
        </Providers>
      </body>
    </html>
  );
}