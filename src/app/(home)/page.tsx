import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col justify-center text-center">
      <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-[#010318] text-gray-900 dark:text-slate-100">
        {/* Hero Section */}
        <main className="flex-1 flex items-center justify-center px-6 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <div className="space-y-8">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 dark:text-slate-100">
                UISO
              </h1>

              <div className="space-y-4">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium text-gray-700 dark:text-slate-300">
                  UI Component Libraries & Add-ons
                </h2>

                <p className="text-lg md:text-xl text-gray-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
                  A personal collection of open-source React and Tailwind UI
                  libraries, add-ons, and components, organized for quick
                  reference and easy access.
                </p>

                {/* CTA Buttons */}
                <div className="mt-6 flex justify-center gap-4 flex-wrap">
                  <Link
                    href="/docs/shadcn-add-ons/magicui"
                    className="px-6 py-3 rounded-md bg-fd-accent text-fd-primary hover:bg-fd-primary font-semibold hover:text-fd-primary-foreground transition"
                  >
                    Browse Libraries
                  </Link>

                 
                </div>
              </div>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="bg-[#403f85] text-white py-8">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <p className="text-sm md:text-base text-slate-200">
              © 2024 UISO. A curated collection of UI libraries and components.
            </p>
          </div>
        </footer>
      </div>
    </main>
  );
}
