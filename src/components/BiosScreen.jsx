import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const BIOS_LINES = [
  { text: 'Award Modular BIOS v4.51PG, An Energy Star Ally', color: '#fff', delay: 0 },
  { text: 'Detecting Primary Master ... Supisara_HDD 512GB', color: '#ccc', delay: 130 },
  { text: 'Detecting Primary Slave  ... None', color: '#ccc', delay: 240 },
  { text: 'Memory Test : 524288K OK', color: '#ccc', delay: 360 },
  { text: '', color: '', delay: 470 },
  { text: '██ Initializing Supisara_OS v1.0 ...', color: '#fff', delay: 540 },
  { text: '', color: '', delay: 610 },
  { text: 'Loading React.js ................ [  OK  ]', color: '#39ff14', delay: 680 },
  { text: 'Loading Node.js ................. [  OK  ]', color: '#39ff14', delay: 810 },
  { text: 'Loading Express.js .............. [  OK  ]', color: '#39ff14', delay: 940 },
  { text: 'Loading MongoDB ................. [  OK  ]', color: '#39ff14', delay: 1050 },
  { text: 'Loading Git ..................... [  OK  ]', color: '#39ff14', delay: 1150 },
  { text: 'Loading AI_Tools ................ [  OK  ]', color: '#39ff14', delay: 1240 },
  { text: '', color: '', delay: 1310 },
  { text: 'System Health Check ............. [ OK ]', color: '#FFB000', delay: 1380 },
  { text: 'Language Pack TH/EN ............. [LOADED]', color: '#FFB000', delay: 1450 },
  { text: '', color: '', delay: 1510 },
  { text: '████ SUPISARA_OS v1.0 — BOOT COMPLETE ████', color: '#39ff14', delay: 1580 },
]

export default function BiosScreen({ onDone }) {
  const [visibleLines, setVisibleLines] = useState([])
  const [progress, setProgress] = useState(0)
  const [showBar, setShowBar] = useState(false)

  useEffect(() => {
    BIOS_LINES.forEach(({ text, color, delay }) => {
      setTimeout(() => {
        setVisibleLines(prev => [...prev, { text, color }])
      }, delay)
    })

    // Show progress bar
    setTimeout(() => setShowBar(true), 1660)

    // Animate progress
    let pct = 0
    const iv = setInterval(() => {
      pct += 4
      setProgress(pct)
      if (pct >= 100) clearInterval(iv)
    }, 22)

    // Transition to desktop
    const done = setTimeout(onDone, 2700)
    return () => { clearInterval(iv); clearTimeout(done) }
  }, [onDone])

  return (
    <div
      style={{
        position: 'fixed', inset: 0, background: '#000', zIndex: 10000,
        fontFamily: "'Share Tech Mono', 'Courier New', monospace",
        color: '#ccc', fontSize: 'clamp(11px,1.4vw,14px)',
        lineHeight: 1.7, padding: '24px 32px', overflowY: 'auto',
      }}
    >
      <div style={{ color: '#888', fontSize: 'clamp(10px,1.2vw,12px)', marginBottom: 18 }}>
        Copyright (C) 1984-1999, Award Software, Inc.
      </div>
      {visibleLines.map((line, i) => (
        <div key={i} style={{ color: line.color || '#ccc', margin: '1px 0' }}>
          {line.text}&nbsp;
        </div>
      ))}
      {showBar && (
        <div style={{ marginTop: 22 }}>
          <div style={{ background: '#222', border: '1px solid #555', height: 18, width: 'min(400px,80%)' }}>
            <div className="bios-progress-bar" style={{ width: `${progress}%` }} />
          </div>
        </div>
      )}
    </div>
  )
}
