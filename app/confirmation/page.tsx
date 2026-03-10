"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Ticket,
  X,
  CheckCircle2,
  Download,
  Printer,
  HelpCircle,
} from "lucide-react"

const TXN_ID = "99281-XC-2023"

export default function ConfirmationPage() {
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-background">

      {/* ── Header ── */}
      <header className="sticky top-0 z-50 flex items-center justify-between border-b border-border bg-card/80 px-6 py-4 backdrop-blur-md lg:px-40">
        <div className="flex items-center gap-3">
          <div className="flex size-10 items-center justify-center rounded-xl bg-red-500/10 text-red-500">
            <Ticket className="size-5" />
          </div>
          <h2 className="text-lg font-bold tracking-tight">CinemaPass</h2>
        </div>
        <Button
          variant="ghost"
          size="icon"
          className="size-10 rounded-full bg-muted text-muted-foreground hover:bg-muted/80"
          asChild
        >
          <Link href="/">
            <X className="size-5" />
          </Link>
        </Button>
      </header>

      {/* ── Main ── */}
      <main className="flex flex-1 justify-center px-4 py-10 lg:px-40">
        <div className="flex w-full max-w-[480px] flex-col gap-8">

          {/* ── Success message ── */}
          <div className="flex flex-col items-center gap-3 text-center">
            <div className="mb-2 flex size-16 items-center justify-center rounded-full bg-green-100 text-green-600 dark:bg-green-900/30">
              <CheckCircle2 className="size-9" strokeWidth={2} />
            </div>
            <h1 className="text-3xl font-bold leading-tight">
              Booking Successful
            </h1>
            <p className="text-base text-muted-foreground">
              Your digital ticket is ready. Show this at the entrance.
            </p>
          </div>

          {/* ── Ticket card ── */}
          <div className="relative">
            {/* Side notches */}
            <div className="absolute -left-3 top-1/2 z-10 size-6 -translate-y-1/2 rounded-full bg-background shadow-inner" />
            <div className="absolute -right-3 top-1/2 z-10 size-6 -translate-y-1/2 rounded-full bg-background shadow-inner" />

            <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-xl">

              {/* Movie backdrop */}
              <div className="relative h-48 w-full overflow-hidden bg-muted">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuAElh1-zSTYTUViMrq-vmsEOKpHeOl1a5yWSS5CAl4n33JLDWIK2dCiNiVsBOIDZplI1S6NmYDPJksmU8QCTAMP1BrWGwGyr5_ddgFGMuBHV5gfCMysYQbOdKwtCYq5Y5RqOSBNHdsfz7fX6XwxqwQocuzznUEhNj1Eu91MV_X4maja7F03ocB7E4pDAg7Mhad69ZlzrnNAfkkVtGVVcXzNPSDFRGgR2BImtYsQlkkR-KQFMKHF6U-u9EmIX1PpvleX2sfW57RCf0g')`,
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-4 left-6">
                  <span className="mb-2 inline-block rounded bg-red-500 px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest text-white">
                    Now Showing
                  </span>
                  <h3 className="text-2xl font-bold text-white">Inception</h3>
                </div>
              </div>

              {/* Ticket body */}
              <div className="space-y-6 p-6">

                {/* Details grid */}
                <div className="grid grid-cols-2 gap-y-5">
                  <div className="space-y-1">
                    <p className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                      Date &amp; Time
                    </p>
                    <p className="font-semibold">Fri, Oct 27 • 7:30 PM</p>
                  </div>
                  <div className="space-y-1 text-right">
                    <p className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                      Cinema Hall
                    </p>
                    <p className="font-semibold">Hall 04</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                      Location
                    </p>
                    <p className="font-semibold">Grand Cinema City</p>
                  </div>
                  <div className="space-y-1 text-right">
                    <p className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                      Seats
                    </p>
                    <p className="font-semibold">G12, G13</p>
                  </div>
                </div>

                {/* Dashed divider */}
                <div className="border-t border-dashed border-border" />

                {/* QR code */}
                <div className="flex flex-col items-center justify-center py-2">
                  <div className="rounded-xl border border-border bg-white p-3 shadow-sm">
                    {/* QR code via public API */}
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={`https://api.qrserver.com/v1/create-qr-code/?size=160x160&data=TXN-${TXN_ID}&bgcolor=ffffff&color=0f172a&margin=0`}
                      alt="QR Code for ticket entry"
                      width={160}
                      height={160}
                      className="size-40 rounded-lg"
                    />
                  </div>
                  <p className="mt-4 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                    TXN-ID: {TXN_ID}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ── Actions ── */}
          <div className="flex flex-col gap-3 px-1">
            <Button className="h-14 w-full gap-2 rounded-xl bg-red-500 text-base font-bold text-white shadow-lg shadow-red-500/20 hover:bg-red-600 active:scale-[0.98]">
              <Download className="size-5" />
              Save to Device
            </Button>
            <Button
              variant="outline"
              className="h-14 w-full gap-2 rounded-xl border-border text-base font-bold hover:bg-muted"
              onClick={() => typeof window !== "undefined" && window.print()}
            >
              <Printer className="size-5" />
              Print Ticket
            </Button>
          </div>

          {/* ── Footer info ── */}
          <div className="flex flex-col items-center gap-2 pb-10">
            <p className="text-center text-sm text-muted-foreground">
              A confirmation email has been sent to your inbox.
            </p>
            <Link
              href="#"
              className="flex items-center gap-1 text-sm font-semibold text-red-500 hover:underline"
            >
              <HelpCircle className="size-4" />
              Need help?
            </Link>
          </div>

        </div>
      </main>
    </div>
  )
}
