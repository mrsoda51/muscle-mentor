import "./globals.css";

export const metadata = {
  title: "Muscle Mentor",
  description: "Personalized training that adapts to you.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full bg-black">
      <body className="h-full bg-black text-white overflow-x-hidden antialiased">
        {/* FIXED HEADER */}
        <header className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur border-b border-gray-800">
          <nav className="flex items-center justify-between px-8 py-4 max-w-7xl mx-auto">
            <a
              href="/"
              className="font-semibold text-white hover:text-orange-500 transition"
            >
              Muscle Mentor
            </a>
            <div className="flex items-center gap-6">
              <a
                href="/intake"
                className="text-sm text-gray-300 hover:text-orange-500 transition"
              >
                Get Started
              </a>
              <a
                href="/dashboard"
                className="text-sm text-gray-300 hover:text-orange-500 transition"
              >
                Dashboard
              </a>
            </div>
          </nav>
        </header>

        {/* MAIN CONTENT */}
        <main className="pt-[100px] min-h-screen w-full overflow-x-hidden">
          {children}
        </main>

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
