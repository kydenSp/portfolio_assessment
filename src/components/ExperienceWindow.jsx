const FOLDERS = [
  {
    tab: '📁 JSD13_BOOTCAMP/',
    badge: 'Bootcamp', badgeColor: '#1a5c4a', badgeText: '#F5F5DC',
    icon: '⚙️',
    title: 'Junior Software Developer Bootcamp #13',
    sub: 'Generation Thailand • 2024',
    desc: 'Built full-stack applications using MERN stack. Real-world projects & agile workflow.',
  },
  {
    tab: '📁 DS_MINI_GEMINI/',
    badge: 'Bootcamp', badgeColor: '#1a5c4a', badgeText: '#F5F5DC',
    icon: '🤖',
    title: 'Data Science Mini Gemini',
    sub: 'Data Rockie • 2024',
    desc: 'Prompt Engineering & Database fundamentals with AI-powered tools.',
  },
  {
    tab: '📁 KASETSART_UNI/',
    badge: 'Education', badgeColor: '#3a2d7d', badgeText: '#E0E0FF',
    icon: '🎓',
    title: 'Kasetsart University',
    sub: 'Business Chinese Major • GPA 3.17',
    desc: "Bachelor's degree. Bilingual TH/EN/Chinese. Strong analytical & communication skills.",
  },
  {
    tab: '📁 CSG_GLOBAL/',
    badge: 'Work', badgeColor: '#7d3a2d', badgeText: '#FFE0D0',
    icon: '📋',
    title: 'Educational Resource Officer',
    sub: 'CSG Global Education',
    desc: 'Managed educational resources & coordinated international programs.',
  },
  {
    tab: '📁 PROPERTYSCOUT/',
    badge: 'Work', badgeColor: '#7d3a2d', badgeText: '#FFE0D0',
    icon: '🏠',
    title: 'Property Consultant',
    sub: 'PropertyScout',
    desc: 'Client consultation, property matching, negotiation & CRM.',
  },
]

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

export default function ExperienceWindow() {
  return (
    <div>
      <SectionHeader>
        <span>📁</span> C:\SUPISARA\EXPERIENCE\ — 5 objects
      </SectionHeader>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(190px, 1fr))',
          gap: 11,
        }}
      >
        {FOLDERS.map((f) => (
          <div key={f.title} className="folder-card">
            <div
              className="font-mono"
              style={{
                background: '#3a7d32', padding: '4px 10px',
                fontSize: 9, color: '#F5F5DC',
                display: 'flex', alignItems: 'center', gap: 5,
                borderBottom: '2px solid #2d5a27',
              }}
            >
              {f.tab}
            </div>
            <div style={{ padding: '9px 11px 11px' }}>
              <span
                className="font-mono"
                style={{
                  display: 'inline-block', fontSize: 8,
                  padding: '2px 6px', borderRadius: 2, marginBottom: 5,
                  textTransform: 'uppercase', letterSpacing: '0.5px',
                  background: f.badgeColor, color: f.badgeText,
                }}
              >
                {f.badge}
              </span>
              <div style={{ fontSize: 26, display: 'block', marginBottom: 5 }}>{f.icon}</div>
              <div
                className="font-serif"
                style={{ fontSize: 13, color: '#1a3a18', fontWeight: 700, lineHeight: 1.3, marginBottom: 3 }}
              >
                {f.title}
              </div>
              <div
                className="font-mono"
                style={{ fontSize: 9, color: '#5a6a50', marginBottom: 5 }}
              >
                {f.sub}
              </div>
              <div style={{ fontSize: 11, color: '#3a3a2a', lineHeight: 1.5 }}>{f.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
