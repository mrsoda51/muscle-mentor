import "./globals.css";

export const metadata = {
  title: "Muscle Mentor",
  description: "Personalized training that adapts to you.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      {/* make the whole app dark */}
      <body className="bg-black text-white antialiased">
        {/* HEADER */}
        <header className="sticky top-0 z-50 border-b border-gray-800 bg-black/80 backdrop-blur">
          <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
            <a href="/" className="font-semibold text-white">
              Muscle Mentor
            </a>
            <div className="flex items-center gap-4">
              <a href="/intake" className="text-sm text-gray-300 hover:text-orange-500 transition">
                Get Started
              </a>
              <a href="/dashboard" className="text-sm text-gray-300 hover:text-orange-500 transition">
                Dashboard
              </a>
            </div>
          </nav>
        </header>

        {/* MAIN */}
        <main className="min-h-screen">{children}</main>

        {/* FOOTER */}
        <footer className="border-t border-gray-800 bg-black text-gray-500">
          <div className="mx-auto max-w-7xl px-6 py-8 text-sm text-center">
            © {new Date().getFullYear()} Muscle Mentor. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}
