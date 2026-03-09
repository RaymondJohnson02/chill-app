import { Button } from "@/components/ui/button"
import { Search, Film } from "lucide-react"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        {/* Brand */}
        <div className="flex items-center gap-2">
          <Film className="size-7 text-red-500" />
          <h1 className="text-xl font-bold tracking-tight">CinemaGo</h1>
        </div>

        {/* Nav */}
        <nav className="hidden items-center gap-8 md:flex">
          <a
            className="text-sm font-semibold text-red-500"
            href="#"
          >
            Home
          </a>
          <a
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-red-500"
            href="#"
          >
            Explore
          </a>
          <a
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-red-500"
            href="#"
          >
            Schedule
          </a>
          <a
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-red-500"
            href="#"
          >
            News
          </a>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="icon">
            <Search className="size-5" />
          </Button>
          <div className="size-9 overflow-hidden rounded-full border border-border bg-muted">
            <img
              className="h-full w-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDlW5lGZp1DlWAWLwcDW98XHUzCi6mR1KldWcroKsSUzSFsxCpKHP4NiA-qYN6EqaMZapyJJpK_VDtm58pKQKaac6K551Qt8R8fRDwntI0GxKcYqwFqrCY5D7V4RvgEXb4CdEV-NWRqy2oV_z6Osze9qo0Rm29dGGV9q1ib3F3pa3oA2iS43OqZd7T3bNuqD8NOOwCe_WEf4_M8lE7orAfzIpe_WvKKChujtnW4DGZlGheDjv5d1O2HQsfm57hc5SliAMyxyziyYy4"
              alt="User avatar"
            />
          </div>
        </div>
      </div>
    </header>
  )
}
