import { useState } from 'react'

function Toggle({ id, label, onToggle }) {
  const [on, setOn] = useState(false)
  const handle = (e) => {
    setOn(e.target.checked)
    onToggle?.(e.target.checked)
  }
  return (
    <div
      style={{
        display: 'flex', alignItems: 'center',
        justifyContent: 'space-between',
        padding: '10px 0', borderBottom: '1px dashed #b0b090',
      }}
    >
      <span className="font-mono" style={{ fontSize: 12, color: '#2a3a20', display: 'flex', alignItems: 'center', gap: 7 }}>
        {label}
      </span>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <label className="toggle-slider">
          <input type="checkbox" id={id} checked={on} onChange={handle} style={{ display: 'none' }} />
          <div
            className="toggle-track"
            
            style={{
              position: 'relative',
              display: 'inline-block',
              width: 44, height: 22,
              background: on ? '#3a7d32' : '#b0b090',
              border: '2px solid #2d5a27',
              cursor: 'pointer',
              transition: 'background 0.2s',
            }}
          >
            <div
              style={{
                position: 'absolute', left: 2, top: 2,
                width: 14, height: 14,
                background: '#F5F5DC',
                transform: on ? 'translateX(20px)' : 'none',
                transition: 'transform 0.2s',
              }}
            />
          </div>
        </label>
        <span className="font-mono" style={{ fontSize: 11, color: '#3a5a30', minWidth: 24 }}>
          {on ? 'ON' : 'OFF'}
        </span>
      </div>
    </div>
  )
}

function InfoRow({ label, value, last }) {
  return (
    <div
      style={{
        display: 'flex', alignItems: 'center',
        justifyContent: 'space-between',
        padding: '10px 0',
        borderBottom: last ? 'none' : '1px dashed #b0b090',
      }}
    >
      <span className="font-mono" style={{ fontSize: 12, color: '#2a3a20', display: 'flex', alignItems: 'center', gap: 7 }}>
        {label}
      </span>
      <span style={{ fontSize: 12, color: '#4a5a40' }}>{value}</span>
    </div>
  )
}

function SectionHeader({ children }) {
  return (
    <div
      className="font-mono"
      style={{
        fontSize: 11, color: '#3a5a30',
        letterSpacing: '0.8px', textTransform: 'uppercase',
        marginBottom: 14, paddingBottom: 5,
        borderBottom: '2px solid #2d5a27',
        display: 'flex', alignItems: 'center', gap: 7,
      }}
    >
      {children}
    </div>
  )
}

export default function ContactWindow({ onCrtToggle }) {
  return (
    <div>
      <SectionHeader><span>📡</span> Contact Information</SectionHeader>

      <InfoRow label="📧 Email" value={<a href="mailto:supisa.wo@gmail.com" style={{ color: '#1a5c4a' }}>supisa.wo@gmail.com</a>} />
      <InfoRow label="📞 Phone" value={<a href="tel:+66826196949" style={{ color: '#1a5c4a' }}>+66 82-619-6949</a>} />
      <InfoRow label="📍 Location" value="Bangkok, Thailand 🇹🇭" last />

      <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', margin: '14px 0 18px' }}>
        <a className="contact-btn" href="mailto:supisa.wo@gmail.com">📧 Send Email</a>
        <a className="contact-btn" href="tel:+66826196949">📞 Call Me</a>
      </div>

      <SectionHeader><span>🛠️</span> System Preferences</SectionHeader>

      <Toggle id="crt" label="📺 CRT Filter Effect" onToggle={onCrtToggle} />
      <Toggle id="sound" label="🔊 Boot Sound" onToggle={(on) => {
        if (on) {
          try {
            const ctx = new (window.AudioContext || window.webkitAudioContext)()
            const osc = ctx.createOscillator()
            const g = ctx.createGain()
            osc.connect(g); g.connect(ctx.destination)
            osc.frequency.value = 880; osc.type = 'square'
            g.gain.setValueAtTime(0.05, ctx.currentTime)
            g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.3)
            osc.start(); osc.stop(ctx.currentTime + 0.3)
          } catch (e) {}
        }
      }} />

      <InfoRow label="🐈‍ GitHub" value={
    <a 
      href="https://github.com/kydenSp" 
      target="_blank" 
      rel="noopener noreferrer" 
      style={{ color: '#1a5c4a' }}
    >
      github.com/kydenSp
    </a>
  }/>
  <InfoRow label="🌐 LinkedIn" value={
    <a 
      href="https://www.linkedin.com/in/supisara-wong/?skipRedirect=true" 
      target="_blank" 
      rel="noopener noreferrer" 
      style={{ color: '#1a5c4a' }}
    >
      linkedin.com/supisara-wong
    </a>
  }/>

      <InfoRow label="💾 OS Version" value="Supisara_OS v1.0.0" last />
    </div>
  )
}
