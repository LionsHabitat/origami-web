import { XMarkIcon } from '@heroicons/react/24/outline'
import type { ReactNode } from 'react'

export type ModalProps = {
  title: string
  onClose: () => void
  children: ReactNode
  className?: string
  containerClassName?: string
}
const Modal = ({
  title,
  onClose,
  children,
  className = '',
  containerClassName = '',
}: ModalProps): ReactNode => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <button
        type="button"
        aria-label="Close modal"
        className="absolute inset-0 z-10 bg-gray-500/50 backdrop-blur"
        onClick={onClose}
      />
      <div className="relative z-20">
        <div
          className={`bg-surface flex min-h-[30vh] max-w-lg flex-col rounded-lg bg-white shadow-lg ${className}`}
        >
          <div className="bg-primary text-on-primary-hover flex items-center justify-between rounded-t-lg p-5 font-serif text-lg font-medium">
            {title}
            <button
              type="button"
              onClick={onClose}
              className="transition-smooth hover:bg-primary-hover hover:text-on-primary-hover rounded p-1"
            >
              <XMarkIcon className="w-5" />
            </button>
          </div>
          <div className={`p-5 ${containerClassName}`}>{children}</div>
        </div>
      </div>
    </div>
  )
}

export default Modal
