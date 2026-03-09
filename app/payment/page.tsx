"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ArrowLeft, CreditCard, Wallet } from "lucide-react"
import { cn } from "@/lib/utils"

type PaymentMethod = "card" | "applepay"

export default function PaymentPage() {
  const [method, setMethod] = useState<PaymentMethod>("card")

  return (
    <div className="min-h-screen bg-muted/30">
      {/* Mobile-card container */}
      <div className="mx-auto flex min-h-screen max-w-[480px] flex-col bg-card shadow-2xl">

        {/* ── Header ── */}
        <header className="flex items-center justify-between border-b border-border px-6 py-5">
          <Button
            variant="ghost"
            size="icon"
            className="size-10 rounded-full bg-muted text-muted-foreground"
            asChild
          >
            <Link href="/seats">
              <ArrowLeft className="size-5" />
            </Link>
          </Button>
          <h1 className="text-lg font-bold">Payment</h1>
          <div className="size-10" /> {/* symmetry spacer */}
        </header>

        {/* ── Main scroll area ── */}
        <main className="flex-1 overflow-y-auto px-6 py-8">

          {/* ── Booking summary ── */}
          <div className="mb-8">
            <div className="mb-5 flex items-start gap-4">
              {/* Movie poster */}
              <div
                className="h-32 w-24 flex-shrink-0 rounded-xl bg-cover bg-center shadow-md"
                style={{
                  backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuCHj67RL59XMqSW2kQ94pfy6t1TzclX4PJw7TrUTOOfeIcXsXwvMxdOuHUxW4uh_N2uoqT3gtTb7F75lVj9oDAfWHQq5oWfYgPNwLIMDclD-s0pniZp8A1oHdUY7J04Ex8UhrwFayP6XeJBRbbd2mexVwvNVL5gHwHt3DMzhu45h6GHD7ohOtxnPLlbqbHwnnJkGAro4oqzWeaOxVNnk98wc8j9DHBrrpaLbMwn_NywnN1nfd5a4WnX-LQsW242NGn5NNMqrg-PGCI')`,
                }}
              />
              <div className="flex flex-col gap-1 pt-1">
                <span className="text-[11px] font-bold uppercase tracking-widest text-red-500">
                  Now Booking
                </span>
                <h2 className="text-2xl font-bold leading-tight">Inception</h2>
                <p className="text-sm text-muted-foreground">AMC Century City 15</p>
              </div>
            </div>

            {/* Date / Seats grid */}
            <div className="grid grid-cols-2 gap-4 rounded-xl bg-muted/60 p-4">
              <div className="flex flex-col gap-0.5">
                <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                  Date &amp; Time
                </span>
                <p className="text-sm font-semibold">Sat, 24 May • 19:30</p>
              </div>
              <div className="flex flex-col gap-0.5">
                <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                  Seats
                </span>
                <p className="text-sm font-semibold">G12, G13</p>
              </div>
            </div>
          </div>

          {/* ── Payment method ── */}
          <div className="mb-8">
            <h3 className="mb-4 text-[11px] font-bold uppercase tracking-widest text-muted-foreground">
              Payment Method
            </h3>
            <div className="flex flex-col gap-3">

              {/* Credit / Debit Card */}
              <button
                onClick={() => setMethod("card")}
                className={cn(
                  "flex items-center justify-between rounded-xl border-2 p-4 transition-all",
                  method === "card"
                    ? "border-red-500 bg-red-500/5"
                    : "border-border bg-transparent hover:bg-muted/50"
                )}
              >
                <div className="flex items-center gap-3">
                  <CreditCard
                    className={cn(
                      "size-5 transition-colors",
                      method === "card" ? "text-red-500" : "text-muted-foreground"
                    )}
                  />
                  <span
                    className={cn(
                      "font-semibold",
                      method !== "card" && "text-muted-foreground"
                    )}
                  >
                    Credit / Debit Card
                  </span>
                </div>
                {/* radio indicator */}
                <div
                  className={cn(
                    "size-5 rounded-full border-2 transition-all",
                    method === "card"
                      ? "border-red-500 bg-red-500 ring-2 ring-red-500/20"
                      : "border-border bg-background"
                  )}
                />
              </button>

              {/* Apple Pay */}
              <button
                onClick={() => setMethod("applepay")}
                className={cn(
                  "flex items-center justify-between rounded-xl border-2 p-4 transition-all",
                  method === "applepay"
                    ? "border-red-500 bg-red-500/5"
                    : "border-border bg-transparent hover:bg-muted/50"
                )}
              >
                <div className="flex items-center gap-3">
                  <Wallet
                    className={cn(
                      "size-5 transition-colors",
                      method === "applepay" ? "text-red-500" : "text-muted-foreground"
                    )}
                  />
                  <span
                    className={cn(
                      "font-semibold",
                      method !== "applepay" && "text-muted-foreground"
                    )}
                  >
                    Apple Pay
                  </span>
                </div>
                <div
                  className={cn(
                    "size-5 rounded-full border-2 transition-all",
                    method === "applepay"
                      ? "border-red-500 bg-red-500 ring-2 ring-red-500/20"
                      : "border-border bg-background"
                  )}
                />
              </button>
            </div>
          </div>

          {/* ── Card details form (only when card is selected) ── */}
          {method === "card" && (
            <div className="mb-8 space-y-4">
              {/* Cardholder Name */}
              <div className="flex flex-col gap-2">
                <Label className="ml-1 text-xs font-bold text-muted-foreground">
                  Cardholder Name
                </Label>
                <Input
                  placeholder="John Doe"
                  className="rounded-xl border-border bg-transparent px-4 py-3 focus-visible:ring-red-500"
                />
              </div>

              {/* Card Number */}
              <div className="flex flex-col gap-2">
                <Label className="ml-1 text-xs font-bold text-muted-foreground">
                  Card Number
                </Label>
                <div className="relative">
                  <Input
                    placeholder="**** **** **** 4421"
                    className="rounded-xl border-border bg-transparent px-4 py-3 pr-14 focus-visible:ring-red-500"
                  />
                  {/* Visa badge placeholder */}
                  <div className="absolute right-3 top-1/2 -translate-y-1/2">
                    <div className="h-5 w-10 rounded bg-gradient-to-r from-blue-600 to-blue-400 flex items-center justify-center">
                      <span className="text-[8px] font-black italic text-white">VISA</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Expiry + CVV */}
              <div className="flex gap-4">
                <div className="flex flex-1 flex-col gap-2">
                  <Label className="ml-1 text-xs font-bold text-muted-foreground">
                    Expiry Date
                  </Label>
                  <Input
                    placeholder="MM/YY"
                    className="rounded-xl border-border bg-transparent px-4 py-3 focus-visible:ring-red-500"
                  />
                </div>
                <div className="flex flex-1 flex-col gap-2">
                  <Label className="ml-1 text-xs font-bold text-muted-foreground">
                    CVV
                  </Label>
                  <Input
                    type="password"
                    placeholder="•••"
                    className="rounded-xl border-border bg-transparent px-4 py-3 focus-visible:ring-red-500"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Apple Pay placeholder */}
          {method === "applepay" && (
            <div className="mb-8 flex items-center justify-center rounded-xl border border-dashed border-border py-10 text-sm text-muted-foreground">
              Apple Pay authentication will appear at checkout
            </div>
          )}

          {/* ── Order summary ── */}
          <div className="border-t border-dashed border-border pt-6">
            <div className="mb-2 flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Tickets (2)</span>
              <span className="font-medium">$28.00</span>
            </div>
            <div className="mb-2 flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Booking Fee</span>
              <span className="font-medium">$0.00</span>
            </div>
            <div className="mt-5 flex items-center justify-between">
              <span className="text-lg font-bold">Total Amount</span>
              <span className="text-2xl font-bold text-red-500">$28.00</span>
            </div>
          </div>
        </main>

        {/* ── Footer / CTA ── */}
        <footer className="border-t border-border bg-card px-6 py-6">
          <Button className="h-14 w-full rounded-xl bg-red-500 text-lg font-bold text-white shadow-lg shadow-red-500/30 hover:bg-red-600 active:scale-[0.98]">
            Pay Now
          </Button>
          <p className="mt-4 px-4 text-center text-[10px] leading-relaxed text-muted-foreground">
            By clicking &quot;Pay Now&quot;, you agree to our{" "}
            <span className="underline">Terms of Service</span> and{" "}
            <span className="underline">Privacy Policy</span>. Your payment
            info is encrypted and secure.
          </p>
        </footer>
      </div>
    </div>
  )
}
