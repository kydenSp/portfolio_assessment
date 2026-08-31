import myImage from "../assets/Supisa.jpg"

export default function AboutWindow() {
  return (
    <div>
      {/* Section header */}
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
        <span>📁</span> C:\SUPISARA\ABOUT\whoami.txt
      </div>

      <div style={{ display: 'flex', gap: 18, alignItems: 'flex-start', flexWrap: 'wrap' }}>
        {/* Portrait */}
        <div
          style={{
            width: 104, height: 126, flexShrink: 0,
            border: '3px solid #2d5a27',
            background: 'linear-gradient(135deg, #c8d8c0 0%, #a0b898 100%)',
            display: 'flex', flexDirection: 'column',
            alignItems: 'center', justifyContent: 'center',
            boxShadow: '2px 2px 0 #1a3a18',
            position: 'relative', overflow: 'hidden',
          }}
        >
          <div style={{
            position: 'absolute', inset: 0,
            background: 'repeating-linear-gradient(0deg, rgba(0,0,0,0.04) 0px, rgba(0,0,0,0.04) 1px, transparent 1px, transparent 4px)',
          }} />
          <img src={myImage} alt="Supisara_wongrueang Profile" style={{ width: '200px', borderRadius: '1px' }}/>
          <span className="font-vt" style={{ fontSize: 9, color: '#3a5a32', marginTop: 4, opacity: 0.7, textAlign: 'center' }}>
          </span>
        </div>

        {/* Text */}
        <div style={{ flex: 1, minWidth: 170 }}>
          <h1
            className="font-serif"
            style={{
              fontSize: 'clamp(17px,2.5vw,24px)',
              color: '#1a3a18', lineHeight: 1.25, marginBottom: 12,
            }}
          >
            I build modern<br />web applications.
          </h1>
          <p style={{ fontSize: 13, color: '#3a3a2a', lineHeight: 1.7, marginBottom: 13 }}>
            Hi, I'm <strong>Supisara Wongrueang</strong>. A detail-oriented
            Full-Stack Web Developer with a solid foundation in building
            modern web applications. Skilled in core software development
            technologies. Bilingual in Thai and English with strong
            problem-solving capabilities.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
            {['🌍 Bangkok, Thailand', '⚙️ Full-Stack Dev', '🌐 MERN Stack', '🗣️ TH / EN'].map(tag => (
              <span
                key={tag}
                className="font-mono"
                style={{
                  fontSize: 10, background: '#3a7d32', color: '#F5F5DC',
                  padding: '3px 8px', borderRadius: 2, border: '1px solid #1a5c25',
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
