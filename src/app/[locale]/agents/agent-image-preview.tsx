"use client";

import Image from "next/image";
import { createPortal } from "react-dom";
import { useEffect, useRef, useState, type PointerEvent as ReactPointerEvent } from "react";
import { X, ZoomIn } from "lucide-react";

type AgentImagePreviewProps = {
  src: string;
  alt: string;
  className: string;
  sizes: string;
  openLabel: string;
  closeLabel: string;
  priority?: boolean;
};

export function AgentImagePreview({
  src,
  alt,
  className,
  sizes,
  openLabel,
  closeLabel,
  priority = false,
}: AgentImagePreviewProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isPinned, setIsPinned] = useState(false);
  const closeTimer = useRef<number | null>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const suppressHover = useRef(false);

  useEffect(() => {
    if (!isOpen) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        suppressHover.current = true;
        setIsOpen(false);
        setIsPinned(false);
      }
    };

    window.addEventListener("keydown", closeOnEscape);
    if (isPinned) {
      const previousOverflow = document.body.style.overflow;
      const trigger = triggerRef.current;
      document.body.style.overflow = "hidden";
      closeButtonRef.current?.focus();
      return () => {
        window.removeEventListener("keydown", closeOnEscape);
        document.body.style.overflow = previousOverflow;
        trigger?.focus();
      };
    }

    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [isOpen, isPinned]);

  useEffect(
    () => () => {
      if (closeTimer.current !== null) window.clearTimeout(closeTimer.current);
    },
    [],
  );

  const clearCloseTimer = () => {
    if (closeTimer.current !== null) {
      window.clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  };

  const closePreview = () => {
    clearCloseTimer();
    suppressHover.current = true;
    setIsOpen(false);
    setIsPinned(false);
  };

  const handlePointerEnter = (event: ReactPointerEvent<HTMLButtonElement>) => {
    if (event.pointerType !== "mouse" || suppressHover.current) return;
    clearCloseTimer();
    setIsPinned(false);
    setIsOpen(true);
  };

  const handlePointerLeave = () => {
    if (suppressHover.current) {
      suppressHover.current = false;
      return;
    }
    if (isPinned) return;
    clearCloseTimer();
    closeTimer.current = window.setTimeout(() => {
      setIsOpen(false);
      suppressHover.current = true;
      closeTimer.current = null;
    }, 350);
  };

  const lightbox = isOpen && typeof document !== "undefined"
    ? createPortal(
        <div
          className="agents-image-lightbox"
          data-pinned={isPinned}
          onPointerEnter={clearCloseTimer}
          onClick={(event) => {
            if (isPinned && event.target === event.currentTarget) closePreview();
          }}
        >
          <div
            className="agents-image-lightbox-content"
            role="dialog"
            aria-modal={isPinned}
            aria-label={alt}
            onPointerEnter={clearCloseTimer}
            onPointerLeave={handlePointerLeave}
            onClick={() => setIsPinned(true)}
          >
            <Image src={src} alt={alt} fill sizes="100vw" priority />
            <button
              ref={closeButtonRef}
              type="button"
              className="agents-image-lightbox-close"
              aria-label={closeLabel}
              onClick={(event) => {
                event.stopPropagation();
                closePreview();
              }}
            >
              <X size={22} aria-hidden="true" />
            </button>
          </div>
        </div>,
        document.body,
      )
    : null;

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        className={`agents-image-trigger ${className}`}
        aria-label={`${alt}. ${openLabel}`}
        aria-haspopup="dialog"
        aria-expanded={isOpen}
        onPointerEnter={handlePointerEnter}
        onPointerLeave={handlePointerLeave}
        onClick={() => {
          clearCloseTimer();
          setIsPinned(true);
          setIsOpen(true);
        }}
      >
        <Image src={src} alt={alt} fill sizes={sizes} priority={priority} />
        <span className="agents-image-zoom-hint" aria-hidden="true">
          <ZoomIn size={17} />
          {openLabel}
        </span>
      </button>
      {lightbox}
    </>
  );
}
