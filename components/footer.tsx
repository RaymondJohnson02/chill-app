import { Film, Globe, Share2, AtSign } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border bg-card py-12">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 grid grid-cols-1 gap-12 md:grid-cols-4">
          {/* Brand */}
          <div className="col-span-1">
            <div className="mb-6 flex items-center gap-2">
              <Film className="size-7 text-red-500" />
              <h1 className="text-xl font-bold tracking-tight">CinemaGo</h1>
            </div>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Your ultimate destination for cinematic experiences. Book tickets,
              explore trailers, and stay updated with latest releases.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h5 className="mb-6 font-bold">Quick Links</h5>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li>
                <a className="transition-colors hover:text-red-500" href="#">
                  Now Showing
                </a>
              </li>
              <li>
                <a className="transition-colors hover:text-red-500" href="#">
                  Coming Soon
                </a>
              </li>
              <li>
                <a className="transition-colors hover:text-red-500" href="#">
                  Cinemas
                </a>
              </li>
              <li>
                <a className="transition-colors hover:text-red-500" href="#">
                  Promotions
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h5 className="mb-6 font-bold">Support</h5>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li>
                <a className="transition-colors hover:text-red-500" href="#">
                  Help Center
                </a>
              </li>
              <li>
                <a className="transition-colors hover:text-red-500" href="#">
                  Terms of Service
                </a>
              </li>
              <li>
                <a className="transition-colors hover:text-red-500" href="#">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a className="transition-colors hover:text-red-500" href="#">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h5 className="mb-6 font-bold">Connect</h5>
            <div className="mb-6 flex gap-4">
              <a
                className="flex size-10 items-center justify-center rounded-lg bg-muted text-muted-foreground transition-all hover:bg-red-500 hover:text-white"
                href="#"
              >
                <Globe className="size-5" />
              </a>
              <a
                className="flex size-10 items-center justify-center rounded-lg bg-muted text-muted-foreground transition-all hover:bg-red-500 hover:text-white"
                href="#"
              >
                <Share2 className="size-5" />
              </a>
              <a
                className="flex size-10 items-center justify-center rounded-lg bg-muted text-muted-foreground transition-all hover:bg-red-500 hover:text-white"
                href="#"
              >
                <AtSign className="size-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-border pt-8 md:flex-row">
          <p className="text-xs text-muted-foreground">
            © 2024 CinemaGo Booking App. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <img
              className="h-8"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAnqzr-vD4C2JwbT3QvY3yPxbsSfhphI5TnsWp2FmMCCxKVDH0RkUPCOGUK3m5T4PphfdIhBbZOq8qIfc9xTosqRCEPeqSsciyOf9r4Ub_SrOZQWCkgZvkNZ0wvSy0DPJ93ew36iIxQ-yVO0ourF-k1Cey5x75UjDUZqN3IyZE8Zp5p2YDBD9loq_bbd_o8Qj7QB0A8YAm_7dcrplLsI5Pmg2U3nDTNj453GelI1kBTBAumWD8lkSmjYTEBFlSZwErrrH1GsoLR53I"
              alt="App Store"
            />
            <img
              className="h-8"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuClvVe1m00Ctyp605Rxj0QUojLRclsx2XwfSJaBwrX7EumXPJ-hZpTLLdtJTjoMwS7pzhyr87o4Tuqa094dBbIyCqrm6nLCIg-CO9LW6BnyJkqWyfZYt1MXyqjuGpqNwA3a8gtzcisqXdGmxTajbc7h6iNvS_1sOlMjhhuVDnbyJhnoQQ9weHIHdV9ZmrgIIXshmAvo4qGHYT2kEXn9JZTlzLx57iJLn7Hdo2qm-0juVFabYJ_nR6AvJ-VAsYo1CDyNF5P59nHCMBA"
              alt="Play Store"
            />
          </div>
        </div>
      </div>
    </footer>
  )
}
