import { useState, useEffect } from 'react'

const DAYS = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']

export default function Clock() {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const iv = setInterval(() => setTime(new Date()), 1000)
    return () => clearInterval(iv)
  }, [])

  const h = String(time.getHours()).padStart(2, '0')
  const m = String(time.getMinutes()).padStart(2, '0')
  const s = String(time.getSeconds()).padStart(2, '0')
  const dd = String(time.getDate()).padStart(2, '0')
  const mo = String(time.getMonth() + 1).padStart(2, '0')
  const yr = time.getFullYear()
  const day = DAYS[time.getDay()]

  return (
    <div
      style={{ position: 'absolute', top: 16, left: 20, userSelect: 'none' }}
      className="font-vt"
    >
      <div
        style={{
          fontSize: 'clamp(26px,3vw,38px)',
          color: '#39ff14',
          textShadow: '0 0 10px rgba(57,255,20,0.5)',
          letterSpacing: 2,
          lineHeight: 1,
        }}
      >
        {h}:{m}:{s}
      </div>
      <div
        className="font-mono"
        style={{
          fontSize: 'clamp(11px,1.4vw,14px)',
          color: 'rgba(57,255,20,0.65)',
          marginTop: 2,
          letterSpacing: 1,
        }}
      >
        {day} {dd}/{mo}/{yr}
      </div>
    </div>
  )
}
