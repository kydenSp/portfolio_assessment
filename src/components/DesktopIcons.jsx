import { motion } from 'framer-motion'

const ICONS = [
  {
    id: 'about', label: 'WHOAMI.exe',
    svg: (
      <svg viewBox="0 0 40 40" fill="none" width="38" height="38">
        <rect x="4" y="4" width="32" height="32" rx="2" fill="#3a7d32" stroke="#F5F5DC" strokeWidth="1.5" />
        <circle cx="20" cy="14" r="5" fill="#F5F5DC" />
        <path d="M8 34c0-6.627 5.373-12 12-12s12 5.373 12 12" stroke="#F5F5DC" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 'skills', label: 'SKILLS.sys',
    svg: (
      <svg viewBox="0 0 40 40" fill="none" width="38" height="38">
        <rect x="2" y="2" width="36" height="36" rx="2" fill="#0000AA" stroke="#AAAAAA" strokeWidth="1.5" />
        <text x="20" y="27" fontFamily="monospace" fontSize="18" fill="#39ff14" textAnchor="middle">BIOS</text>
      </svg>
    ),
  },
  {
    id: 'exp', label: 'EXP.dir',
    svg: (
      <svg viewBox="0 0 40 40" fill="none" width="38" height="38">
        <rect x="2" y="8" width="36" height="28" rx="2" fill="#c8b400" stroke="#3a7d32" strokeWidth="1.5" />
        <path d="M2 14 h36" stroke="#3a7d32" strokeWidth="1.5" />
        <rect x="12" y="2" width="16" height="10" rx="1" fill="#c8b400" stroke="#3a7d32" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    id: 'terminal', label: 'PROJECTS.sh',
    svg: (
      <svg viewBox="0 0 40 40" fill="none" width="38" height="38">
        <rect x="2" y="4" width="36" height="30" rx="2" fill="#0a0a0a" stroke="#39ff14" strokeWidth="1.5" />
        <path d="M8 14 l6 6-6 6" stroke="#39ff14" strokeWidth="2" strokeLinecap="round" />
        <path d="M18 28 h14" stroke="#39ff14" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 'contact', label: 'CONTACT.cfg',
    svg: (
      <svg viewBox="0 0 40 40" fill="none" width="38" height="38">
        <circle cx="20" cy="20" r="17" fill="#3a7d32" stroke="#F5F5DC" strokeWidth="1.5" />
        <rect x="8" y="13" width="24" height="16" rx="2" fill="none" stroke="#F5F5DC" strokeWidth="1.5" />
        <path d="M8 15 l12 9 12-9" stroke="#F5F5DC" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
]

export default function DesktopIcons({ openWindows, onOpen }) {
  return (
    <div
      id="desktop-icons"
      style={{
        position: 'absolute', top: 90, left: 24,
        display: 'flex', flexDirection: 'column', gap: 14,
      }}
    >
      {ICONS.map(({ id, label, svg }) => (
        <motion.div
          key={id}
          onClick={() => onOpen(id)}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          style={{
            display: 'flex', flexDirection: 'column', alignItems: 'center',
            gap: 5, cursor: 'pointer', width: 74, padding: 5,
            borderRadius: 4,
            border: `2px solid ${openWindows.has(id) ? 'rgba(255,255,255,0.4)' : 'transparent'}`,
            background: openWindows.has(id) ? 'rgba(255,255,255,0.18)' : 'transparent',
            userSelect: 'none',
          }}
        >
          <div style={{ filter: 'drop-shadow(0 0 6px rgba(57,255,20,0.35))' }}>{svg}</div>
          <span
            className="font-mono"
            style={{
              fontSize: 9, color: '#F5F5DC',
              textAlign: 'center', lineHeight: 1.2,
              textShadow: '1px 1px 2px rgba(0,0,0,0.8)',
            }}
          >
            {label}
          </span>
        </motion.div>
      ))}
    </div>
  )
}
