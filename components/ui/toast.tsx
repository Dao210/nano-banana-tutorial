import type { ReactNode, ReactElement } from "react"

export type ToastActionElement = ReactElement

export interface ToastProps {
  id?: string
  title?: ReactNode
  description?: ReactNode
  action?: ToastActionElement
  variant?: "default" | "destructive"
  open?: boolean
  onOpenChange?: (open: boolean) => void
  duration?: number
}

export function Toast(_: ToastProps) {
  return null
}

export function ToastAction(_: ToastProps) {
  return null
}
