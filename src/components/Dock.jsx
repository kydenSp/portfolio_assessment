import { motion } from 'framer-motion'

const DOCK_ITEMS = [
  {
    id: 'about', label: 'About',
    svg: (
      <svg viewBox="0 0 32 32" fill="none" width="30" height="30">
        <circle cx="16" cy="16" r="14" fill="#3a7d32" stroke="#1a3a18" strokeWidth="1.5" />
        <circle cx="16" cy="11" r="4" fill="#F5F5DC" />
        <path d="M6 28c0-5.523 4.477-10 10-10s10 4.477 10 10" stroke="#F5F5DC" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 'skills', label: 'Skills',
    svg: (
      <svg viewBox="0 0 32 32" fill="none" width="30" height="30">
        <rect x="2" y="2" width="28" height="28" rx="2" fill="#0000AA" stroke="#4444CC" strokeWidth="1.5" />
        <text x="16" y="22" fontFamily="monospace" fontSize="13" fill="#39ff14" textAnchor="middle">BIOS</text>
      </svg>
    ),
  },
  {
    id: 'exp', label: 'Exp',
    svg: (
      <svg viewBox="0 0 32 32" fill="none" width="30" height="30">
        <rect x="2" y="8" width="28" height="22" rx="2" fill="#c8b400" stroke="#3a7d32" strokeWidth="1.5" />
        <path d="M2 14 h28" stroke="#3a7d32" strokeWidth="1.5" />
        <rect x="10" y="2" width="12" height="10" rx="1" fill="#c8b400" stroke="#3a7d32" strokeWidth="1.5" />
      </svg>
    ),
  },
  { id: 'sep1', label: '', sep: true },
  {
    id: 'terminal', label: 'Projects',
    svg: (
      <svg viewBox="0 0 32 32" fill="none" width="30" height="30">
        <rect x="2" y="4" width="28" height="24" rx="2" fill="#0a0a0a" stroke="#39ff14" strokeWidth="1.5" />
        <path d="M7 12 l5 5-5 5" stroke="#39ff14" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M15 22 h10" stroke="#39ff14" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  { id: 'sep2', label: '', sep: true },
  {
    id: 'contact', label: 'Contact',
    svg: (
      <svg viewBox="0 0 32 32" fill="none" width="30" height="30">
        <circle cx="16" cy="16" r="14" fill="#3a7d32" stroke="#1a3a18" strokeWidth="1.5" />
        <rect x="7" y="11" width="18" height="12" rx="2" fill="none" stroke="#F5F5DC" strokeWidth="1.5" />
        <path d="M7 13 l9 7 9-7" stroke="#F5F5DC" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
]

export default function Dock({ openWindows, onOpen }) {
  return (
    <div
      style={{
        position: 'fixed', bottom: 16,
        left: '50%', transform: 'translateX(-50%)',
        background: 'rgba(245,245,220,0.92)',
        border: '2px solid #3a7d32',
        borderRadius: 14, padding: '7px 14px',
        display: 'flex', alignItems: 'center', gap: 2,
        zIndex: 5000,
        boxShadow: '0 4px 24px rgba(0,0,0,0.4), 0 2px 0 rgba(255,255,255,0.3) inset',
        backdropFilter: 'blur(8px)',
      }}
    >
      {DOCK_ITEMS.map(({ id, label, svg, sep }) => {
        if (sep) return (
          <div key={id} style={{ width: 1, height: 38, background: 'rgba(58,125,50,0.3)', margin: '0 3px' }} />
        )
        const active = openWindows.has(id)
        return (
          <motion.div
            key={id}
            onClick={() => onOpen(id)}
            whileHover={{ y: -6, scale: 1.12 }}
            whileTap={{ scale: 0.95 }}
            style={{
              display: 'flex', flexDirection: 'column', alignItems: 'center',
              gap: 2, padding: '5px 9px', borderRadius: 8,
              cursor: 'pointer', userSelect: 'none', minWidth: 52,
              position: 'relative',
              background: active ? 'rgba(58,125,50,0.2)' : 'transparent',
            }}
            title={label}
          >
            {svg}
            <span className="font-mono" style={{ fontSize: 8, color: '#3a5a30', letterSpacing: '0.5px' }}>
              {label}
            </span>
            {active && (
              <div
                style={{
                  position: 'absolute', bottom: -8,
                  width: 4, height: 4,
                  background: '#3a7d32', borderRadius: '50%',
                }}
              />
            )}
          </motion.div>
        )
      })}
    </div>
  )
}
