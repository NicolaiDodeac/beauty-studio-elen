"use client"

import * as React from "react"
import { Button, type ButtonProps } from "@/components/ui/button"
import { openBooksyBookingWidget, waitAndOpenBooksyBookingWidget } from "@/lib/booksy"

export type BooksyBookButtonProps = Omit<ButtonProps, "asChild">

export const BooksyBookButton = React.forwardRef<HTMLButtonElement, BooksyBookButtonProps>(
  function BooksyBookButton({ onClick, type = "button", ...props }, ref) {
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      onClick?.(e)
      if (e.defaultPrevented) return
      if (!openBooksyBookingWidget()) {
        waitAndOpenBooksyBookingWidget()
      }
    }
    return <Button ref={ref} type={type} {...props} onClick={handleClick} />
  },
)
BooksyBookButton.displayName = "BooksyBookButton"
