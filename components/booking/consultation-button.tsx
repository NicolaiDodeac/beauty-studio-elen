"use client"

import { Suspense, type ReactNode } from "react"
import { usePathname, useSearchParams } from "next/navigation"

import { BooksyBookButton } from "@/components/booking/booksy-book-button"
import { Button, type ButtonProps } from "@/components/ui/button"
import { POWDER_BROWS_PATH, powderBrowsConsultationUrl } from "@/lib/marketing/powder-brows-consultation"

type ConsultationButtonProps = Pick<ButtonProps, "className" | "size" | "variant"> & {
  children: ReactNode
  onActivate?: () => void
}

function WhatsAppConsultationButton({
  href,
  onActivate,
  ...buttonProps
}: Omit<ConsultationButtonProps, "children"> & { href: string }) {
  return (
    <Button asChild {...buttonProps}>
      <a href={href} target="_blank" rel="noopener noreferrer" onClick={onActivate}>
        Book Free Consultation
      </a>
    </Button>
  )
}

function CampaignConsultationButton(props: Omit<ConsultationButtonProps, "children">) {
  const params = useSearchParams()
  return <WhatsAppConsultationButton {...props} href={powderBrowsConsultationUrl(params)} />
}

export function ConsultationButton({ children, onActivate, ...buttonProps }: ConsultationButtonProps) {
  const pathname = usePathname()
  if (pathname !== POWDER_BROWS_PATH) {
    return (
      <BooksyBookButton {...buttonProps} onClick={onActivate}>
        {children}
      </BooksyBookButton>
    )
  }

  const whatsAppProps = { ...buttonProps, onActivate }
  return (
    <Suspense fallback={<WhatsAppConsultationButton {...whatsAppProps} href={powderBrowsConsultationUrl()} />}>
      <CampaignConsultationButton {...whatsAppProps} />
    </Suspense>
  )
}
