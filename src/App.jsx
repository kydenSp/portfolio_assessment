import { useState, useEffect, useCallback, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import BiosScreen from './components/BiosScreen'
import Clock from './components/Clock'
import DesktopIcons from './components/DesktopIcons'
import Dock from './components/Dock'
import OsWindow from './components/OsWindow'
import AboutWindow from './components/AboutWindow'
import SkillsWindow from './components/SkillsWindow'
import ExperienceWindow from './components/ExperienceWindow'
import TerminalWindow from './components/TerminalWindow'
import ContactWindow from './components/ContactWindow'

// Window configurations
const WINDOWS = {
  about: {
    title: 'WHOAMI.exe — About Supisara',
    icon: '👤',
    statusBar: 'Ready | WHOAMI v1.0 | C:\\SUPISARA>_',
    dark: false,
    wide: true,
    getPos: () => ({ x: Math.max(20, window.innerWidth / 2 - 280), y: Math.max(60, window.innerHeight * 0.11) }),
  },
  skills: {
    title: 'CMOS Setup Utility — SKILLS.sys',
    icon: '⚙',
    statusBar: 'CMOS Utility v2.4 | All skills loaded OK | F1: Help',
    dark: false,
    wide: false,
    titleDark: true,
    bios: true,
    getPos: () => ({ x: Math.max(20, window.innerWidth / 2 - 250), y: Math.max(60, window.innerHeight * 0.09) }),
  },
  exp: {
    title: 'EXP.dir — Experience & Education',
    icon: '📂',
    statusBar: '5 item(s) | C:\\SUPISARA\\EXPERIENCE>_',
    dark: false,
    wide: true,
    getPos: () => ({ x: Math.max(20, window.innerWidth / 2 - 280), y: Math.max(60, window.innerHeight * 0.08) }),
  },
  terminal: {
    title: 'PROJECTS.sh — Terminal v1.0',
    icon: '▶',
    statusBar: 'bash-5.0 | exit status 0 | ~/projects',
    dark: true,
    wide: true,
    getPos: () => ({ x: Math.max(20, window.innerWidth / 2 - 260), y: Math.max(60, window.innerHeight * 0.1) }),
  },
  contact: {
    title: 'CONTACT.cfg — System Settings',
    icon: '⚙️',
    statusBar: 'Settings OK | Last modified: 2026 | Apply: F10',
    dark: false,
    wide: false,
    getPos: () => ({ x: Math.max(20, window.innerWidth / 2 - 210), y: Math.max(60, window.innerHeight * 0.14) }),
  },
}

export default function App() {
  const [biosOver, setBiosOver] = useState(false)
  const [desktopVisible, setDesktopVisible] = useState(false)
  const [crtOn, setCrtOn] = useState(false)
  const [openWindows, setOpenWindows] = useState(new Set())
  const [zMap, setZMap] = useState({})
  const zCounter = useRef(200)

  const handleBiosDone = useCallback(() => {
    setBiosOver(true)
    setTimeout(() => {
      setDesktopVisible(true)
      setTimeout(() => openWindow('about'), 600)
    }, 800)
  }, [])

  function openWindow(id) {
    setOpenWindows(prev => {
      if (prev.has(id)) {
        focusWindow(id)
        return prev
      }
      const next = new Set(prev)
      next.add(id)
      return next
    })
    focusWindow(id)
  }

  function focusWindow(id) {
    zCounter.current++
    setZMap(prev => ({ ...prev, [id]: zCounter.current }))
  }

  function closeWindow(id) {
    setOpenWindows(prev => {
      const next = new Set(prev)
      next.delete(id)
      return next
    })
  }

  // ESC closes all windows
  useEffect(() => {
    const handler = (e) => {
      if (e.key === 'Escape') setOpenWindows(new Set())
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [])

  // CRT body class
  useEffect(() => {
    document.body.classList.toggle('crt-on', crtOn)
  }, [crtOn])

  return (
    <div style={{ width: '100vw', height: '100vh', overflow: 'hidden', position: 'relative' }}>

      {/* BIOS Screen */}
      <AnimatePresence>
        {!biosOver && (
          <motion.div
            key="bios"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.8 } }}
            style={{ position: 'fixed', inset: 0, zIndex: 10000 }}
          >
            <BiosScreen onDone={handleBiosDone} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Desktop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: desktopVisible ? 1 : 0 }}
        transition={{ duration: 0.8 }}
        style={{
          position: 'fixed', inset: 0,
          background: 'linear-gradient(135deg, #1a5c4a 0%, #0d3d2f 50%, #163328 100%)',
        }}
      >
        {/* Dot grid */}
        <div
          className="desktop-dots"
          style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}
        />

        {/* Radial highlights */}
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          background: 'radial-gradient(ellipse at 20% 30%, rgba(26,92,74,0.6) 0%, transparent 60%), radial-gradient(ellipse at 80% 70%, rgba(13,61,47,0.6) 0%, transparent 60%)',
        }} />

        {/* Clock */}
        <Clock />

        {/* OS Label */}
        <div
          className="font-vt glitch"
          style={{
            position: 'absolute', top: 16, right: 20,
            fontSize: 'clamp(15px,2vw,22px)',
            color: 'rgba(245,245,220,0.5)',
            letterSpacing: 3, userSelect: 'none',
          }}
        >
          SUPISARA_OS v1.0
        </div>

        {/* Desktop icons */}
        <DesktopIcons openWindows={openWindows} onOpen={openWindow} />

        {/* Windows */}
        {Object.entries(WINDOWS).map(([id, cfg]) => (
          <OsWindow
            key={id}
            id={id}
            title={cfg.title}
            icon={cfg.icon}
            statusBar={cfg.statusBar}
            isOpen={openWindows.has(id)}
            onClose={() => closeWindow(id)}
            onFocus={() => focusWindow(id)}
            zIndex={zMap[id] || 100}
            initialPos={cfg.getPos()}
            dark={cfg.dark}
            wide={cfg.wide}
            bios={cfg.bios}
          >
            {id === 'about'    && <AboutWindow />}
            {id === 'skills'   && <SkillsWindow />}
            {id === 'exp'      && <ExperienceWindow />}
            {id === 'terminal' && <TerminalWindow />}
            {id === 'contact'  && <ContactWindow onCrtToggle={setCrtOn} />}
          </OsWindow>
        ))}

        {/* Dock */}
        <Dock openWindows={openWindows} onOpen={openWindow} />
      </motion.div>
    </div>
  )
}
