"use client"

import { useState, useMemo } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Film, Share2, Info, User } from "lucide-react"
import { cn } from "@/lib/utils"

// ─── Seat map definition ───────────────────────────────────────────────────
// Each row: array of seat ids (null = aisle gap)
const PRICE_PER_SEAT = 14

type SeatStatus = "available" | "occupied" | "selected"

interface SeatDef {
  id: string
  status: SeatStatus
}

type SeatOrGap = SeatDef | null

function buildRow(
  rowLetter: string,
  count: number,
  aisleAfter: number,
  occupied: number[]
): SeatOrGap[] {
  const left: SeatOrGap[] = []
  const right: SeatOrGap[] = []
  let seatNum = 1
  for (let i = 1; i <= count; i++) {
    const id = `${rowLetter}${i}`
    const status: SeatStatus = occupied.includes(i) ? "occupied" : "available"
    if (i <= aisleAfter) left.push({ id, status })
    else right.push({ id, status })
    seatNum++
  }
  return [...left, null, null, ...right] // two aisle gaps
}

const initialRows: { row: string; seats: SeatOrGap[] }[] = [
  { row: "A", seats: buildRow("A", 8, 4, []) },
  { row: "B", seats: buildRow("B", 8, 4, [1, 2, 7, 8]) },
  { row: "C", seats: buildRow("C", 8, 4, [3]) },
  { row: "D", seats: buildRow("D", 8, 4, []) },
  { row: "E", seats: buildRow("E", 8, 4, [5, 6]) },
  { row: "F", seats: buildRow("F", 8, 4, [1, 8]) },
  { row: "G", seats: buildRow("G", 8, 4, [4, 5]) },
  { row: "H", seats: buildRow("H", 8, 4, [2, 7]) },
]

// ─── Component ────────────────────────────────────────────────────────────
export default function SeatSelectionPage() {
  const [selected, setSelected] = useState<Set<string>>(new Set())

  function toggleSeat(id: string, status: SeatStatus) {
    if (status === "occupied") return
    setSelected((prev) => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })
  }

  const selectedList = useMemo(
    () => [...selected].sort(),
    [selected]
  )
  const total = selectedList.length * PRICE_PER_SEAT

  return (
    <div className="relative flex min-h-screen flex-col overflow-x-hidden">
      {/* ── Header ── */}
      <header className="sticky top-0 z-50 flex items-center justify-between border-b border-border bg-background/80 px-6 py-4 backdrop-blur-md lg:px-40">
        <div className="flex items-center gap-3">
          <Film className="size-7 text-red-500" />
          <h2 className="text-lg font-bold tracking-tight">Cinema Booking</h2>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="icon" className="size-10 rounded-lg">
            <Share2 className="size-4" />
          </Button>
          <Button variant="outline" size="icon" className="size-10 rounded-lg">
            <Info className="size-4" />
          </Button>
        </div>
      </header>

      <main className="flex flex-1 justify-center px-4 py-8 lg:px-40">
        <div className="flex w-full max-w-[960px] flex-col">

          {/* ── Movie info ── */}
          <div className="mb-10 text-center lg:text-left">
            <h1 className="text-3xl font-bold">Inception</h1>
            <p className="mt-1 text-base font-medium text-muted-foreground">
              Sat, 24 May 2024 • 18:30 • Hall 4 (IMAX)
            </p>
          </div>

          {/* ── Screen indicator ── */}
          <div className="mb-12 flex flex-col items-center">
            <div className="mb-3 h-2 w-full max-w-2xl rounded-full bg-gradient-to-b from-red-500/50 to-transparent shadow-[0_-8px_24px_-4px_rgba(236,19,55,0.4)]" />
            <p className="text-xs font-bold uppercase tracking-[0.35em] text-muted-foreground">
              Screen This Way
            </p>
          </div>

          {/* ── Seat grid ── */}
          <div className="mb-10 overflow-x-auto pb-4">
            <div className="flex min-w-fit flex-col items-center gap-3">

              {/* Column labels */}
              <div className="flex gap-3">
                {/* left half labels */}
                {[1, 2, 3, 4].map((n) => (
                  <div key={n} className="flex size-8 items-center justify-center text-[10px] font-semibold text-muted-foreground/50">
                    {n}
                  </div>
                ))}
                {/* aisle */}
                <div className="size-8" />
                <div className="size-8" />
                {/* right half labels */}
                {[5, 6, 7, 8].map((n) => (
                  <div key={n} className="flex size-8 items-center justify-center text-[10px] font-semibold text-muted-foreground/50">
                    {n}
                  </div>
                ))}
              </div>

              {initialRows.map(({ row, seats }) => (
                <div key={row} className="flex items-center gap-3">
                  {/* row label */}
                  <div className="w-4 text-center text-[10px] font-bold text-muted-foreground/60">
                    {row}
                  </div>

                  {seats.map((seat, idx) => {
                    if (!seat) {
                      // aisle gap
                      return <div key={`gap-${row}-${idx}`} className="size-8" />
                    }

                    const isSelected = selected.has(seat.id)
                    const status: SeatStatus = isSelected ? "selected" : seat.status

                    return (
                      <button
                        key={seat.id}
                        onClick={() => toggleSeat(seat.id, seat.status)}
                        title={seat.id}
                        disabled={seat.status === "occupied"}
                        className={cn(
                          "size-8 rounded-lg text-[9px] font-bold transition-all duration-150",
                          "flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                          status === "available" &&
                          "bg-muted text-muted-foreground hover:bg-muted/70 hover:scale-110 cursor-pointer",
                          status === "selected" &&
                          "bg-red-500 text-white ring-2 ring-red-500/30 ring-offset-2 ring-offset-background scale-110 cursor-pointer",
                          status === "occupied" &&
                          "bg-slate-400 dark:bg-slate-600 text-white cursor-not-allowed"
                        )}
                      >
                        {status === "occupied" ? (
                          <User className="size-3.5" />
                        ) : (
                          seat.id
                        )}
                      </button>
                    )
                  })}

                  {/* row label right */}
                  <div className="w-4 text-center text-[10px] font-bold text-muted-foreground/60">
                    {row}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Legend ── */}
          <div className="mb-12 flex flex-wrap justify-center gap-6">
            <div className="flex items-center gap-2">
              <div className="size-4 rounded bg-muted" />
              <span className="text-sm font-medium text-muted-foreground">Available</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="size-4 rounded bg-red-500" />
              <span className="text-sm font-medium text-muted-foreground">Selected</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="size-4 rounded bg-slate-400 dark:bg-slate-600" />
              <span className="text-sm font-medium text-muted-foreground">Occupied</span>
            </div>
          </div>

          {/* ── Booking summary bar ── */}
          <div className="mt-auto rounded-xl border border-border bg-card p-6 shadow-sm">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div className="flex flex-col gap-1.5">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-sm text-muted-foreground">Selected Seats:</span>
                  {selectedList.length === 0 ? (
                    <span className="text-sm text-muted-foreground italic">None</span>
                  ) : (
                    <div className="flex flex-wrap gap-1">
                      {selectedList.map((id) => (
                        <Badge
                          key={id}
                          className="border-none bg-red-500/10 text-xs font-bold text-red-500"
                        >
                          {id}
                        </Badge>
                      ))}
                    </div>
                  )}
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-sm text-muted-foreground">Total Price:</span>
                  <span className="text-2xl font-bold text-red-500">
                    ${total.toFixed(2)}
                  </span>
                  {selectedList.length > 0 && (
                    <span className="text-xs text-muted-foreground">
                      ({selectedList.length} × ${PRICE_PER_SEAT})
                    </span>
                  )}
                </div>
              </div>

              <Button
                asChild={selectedList.length > 0}
                disabled={selectedList.length === 0}
                className={cn(
                  "w-full px-8 py-6 text-base font-bold md:w-auto",
                  selectedList.length > 0
                    ? "bg-red-500 text-white shadow-lg shadow-red-500/30 hover:bg-red-600 active:scale-95"
                    : "cursor-not-allowed opacity-50"
                )}
              >
                {selectedList.length > 0 ? (
                  <Link href="/payment">Proceed to Payment</Link>
                ) : (
                  "Select a Seat to Continue"
                )}
              </Button>
            </div>
          </div>
        </div>
      </main>

      {/* ── Footer ── */}
      <footer className="px-6 py-8 text-center lg:px-40">
        <p className="text-xs text-muted-foreground">
          © 2024 Cinema Booking App. All rights reserved.
        </p>
      </footer>
    </div>
  )
}
