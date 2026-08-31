import { useRef, useState, useCallback, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const windowVariants = {
  hidden: { scale: 0.85, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { type: 'spring', stiffness: 300, damping: 25 },
  },
  exit: {
    scale: 0.85,
    opacity: 0,
    transition: { duration: 0.18 },
  },
}

export default function OsWindow({
  id,
  title,
  icon,
  children,
  statusBar,
  isOpen,
  onClose,
  onFocus,
  zIndex,
  initialPos,
  dark = false,
  wide = false,
  bios = false,
}) {
  const winRef = useRef(null)
  const [pos, setPos] = useState(initialPos || { x: 0, y: 0 })
  const dragState = useRef(null)

  // Center on mount / window resize for mobile
  useEffect(() => {
    if (!winRef.current) return
    if (window.innerWidth <= 640) {
      setPos({ x: window.innerWidth * 0.02, y: 60 })
    } else if (initialPos) {
      setPos(initialPos)
    }
  }, [isOpen])

  const onMouseDown = useCallback((e) => {
    if (e.target.closest('[data-win-btn]')) return
    if (window.innerWidth <= 640) return
    onFocus?.()
    const rect = winRef.current.getBoundingClientRect()
    dragState.current = { startX: e.clientX, startY: e.clientY, initX: rect.left, initY: rect.top }

    const onMove = (e) => {
      const { startX, startY, initX, initY } = dragState.current
      setPos({
        x: Math.max(0, Math.min(window.innerWidth - 100, initX + e.clientX - startX)),
        y: Math.max(0, Math.min(window.innerHeight - 50, initY + e.clientY - startY)),
      })
    }
    const onUp = () => {
      dragState.current = null
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseup', onUp)
    }
    window.addEventListener('mousemove', onMove)
    window.addEventListener('mouseup', onUp)
    e.preventDefault()
  }, [onFocus])

  const tbBg = bios
    ? '#0000CC'
    : dark
      ? '#1a1a1a'
      : 'linear-gradient(90deg, #3a7d32 0%, #2d5a27 100%)'
  const tbBorder = bios ? '#4444CC' : dark ? '#333' : '#1a3a18'
  const winBorder = bios ? '#4444CC' : dark ? '#2a2a2a' : '#2d5a27'
  const winBg = bios ? '#0000AA' : dark ? '#0a0a0a' : '#F5F5DC'
  const sbBg = bios ? '#0000CC' : dark ? '#111' : '#e8e8d0'
  const sbBorder = bios ? '#4444CC' : dark ? '#333' : '#2d5a27'
  const sbColor = bios ? '#AAAAAA' : '#555'

  const maxW = wide
    ? 'min(680px, 96vw)'
    : 'min(500px, 96vw)'

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          ref={winRef}
          key={id}
          variants={windowVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          onMouseDown={() => onFocus?.()}
          style={{
            position: 'fixed',
            left: pos.x,
            top: pos.y,
            zIndex,
            background: winBg,
            border: `3px solid ${winBorder}`,
            borderRadius: 4,
            boxShadow: dark
              ? '4px 4px 0px #111, 0 8px 32px rgba(0,0,0,0.8)'
              : '4px 4px 0px #1a3a18, 0 8px 32px rgba(0,0,0,0.5)',
            display: 'flex',
            flexDirection: 'column',
            width: maxW,
            maxHeight: 'min(82vh, 700px)',
          }}
        >
          {/* Titlebar */}
          <div
            style={{
              background: tbBg,
              padding: '6px 10px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              cursor: 'move',
              flexShrink: 0,
              borderBottom: `2px solid ${tbBorder}`,
              userSelect: 'none',
            }}
            onMouseDown={onMouseDown}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <span style={{ fontSize: 15 }}>{icon}</span>
              <span
                className="font-mono"
                style={{
                  fontSize: 12,
                  color: bios ? '#FFFFFF' : dark ? '#39ff14' : '#F5F5DC',
                  letterSpacing: '0.8px',
                }}
              >
                {title}
              </span>
            </div>
            <div style={{ display: 'flex', gap: 4 }}>
              <button
                data-win-btn
                className={`win-btn ${(dark || bios) ? 'win-btn-dark' : ''}`}
                onClick={onClose}
                title="Minimize"
              >
                _
              </button>
              <button
                data-win-btn
                className={`win-btn close-btn ${(dark || bios) ? 'win-btn-dark' : ''}`}
                onClick={onClose}
                title="Close"
              >
                ✕
              </button>
            </div>
          </div>

          {/* Body */}
          <div
            style={{
              padding: 18,
              overflowY: 'auto',
              flex: 1,
            }}
          >
            {children}
          </div>

          {/* Status bar */}
          {statusBar && (
            <div
              className="font-mono"
              style={{
                background: sbBg,
                borderTop: `2px solid ${sbBorder}`,
                padding: '3px 10px',
                fontSize: 11,
                color: sbColor,
                flexShrink: 0,
              }}
            >
              {statusBar}
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  )
}
