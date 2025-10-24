import "./globals.css";

export const metadata = {
  title: "Muscle Mentor",
  description: "Personalized training that adapts to you.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900 antialiased">
        <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur">
          <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
            <a href="/" className="font-semibold">Muscle Mentor</a>
            <div className="flex items-center gap-4">
              <a href="/intake" className="text-sm">Get Started</a>
              <a href="/dashboard" className="text-sm">Dashboard</a>
            </div>
          </nav>
        </header>
        <main className="mx-auto max-w-6xl px-4">{children}</main>
        <footer className="mt-20 border-t">
          <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-gray-500">
            © {new Date().getFullYear()} Muscle Mentor. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}
