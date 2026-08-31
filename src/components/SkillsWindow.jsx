const SKILLS = {
  'Frontend': ['HTML5/CSS3', 'JavaScript', 'React.js', 'Responsive Design'],
  'Backend & Database': ['Node.js', 'Express.js', 'MongoDB', 'SQL'],
  'Tools & Workflow': ['Git', 'PowerShell', 'AI Tools', 'Vibe Coding'],
  'Soft Skills': ['Problem Solving', 'Adaptability', 'Teamwork', 'Communication'],
}

export default function SkillsWindow() {
  return (
    <div
      style={{
        fontFamily: "'Share Tech Mono', 'Courier New', monospace",
        color: '#FFFFFF',
      }}
    >
      <div className="cmos-outer" style={{ padding: 14 }}>
        <div style={{ textAlign: 'center', fontSize: 'clamp(13px,1.8vw,17px)', color: '#fff', marginBottom: 4, letterSpacing: 2 }}>
          █ CMOS SETUP UTILITY — SKILL CONFIGURATION █
        </div>
        <div style={{ textAlign: 'center', fontSize: 10, color: '#00AAAA', marginBottom: 14, letterSpacing: 1 }}>
          Use Arrow Keys to Navigate &bull; Enter to Select
        </div>
        <hr style={{ border: 'none', borderTop: '1px solid #AAAAAA', margin: '10px 0' }} />

        {Object.entries(SKILLS).map(([cat, skills]) => (
          <div key={cat} style={{ marginBottom: 14 }}>
            <div style={{ color: '#00AAAA', fontSize: 12, marginBottom: 6, textTransform: 'uppercase', letterSpacing: 1 }}>
              [ {cat} ]
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7 }}>
              {skills.map(skill => (
                <span key={skill} className="cmos-skill">{skill}</span>
              ))}
            </div>
          </div>
        ))}

        <hr style={{ border: 'none', borderTop: '1px solid #AAAAAA', margin: '10px 0' }} />
        <div style={{ textAlign: 'center', fontSize: 10, color: '#AAAAAA', marginTop: 12 }}>
          Esc: Exit &nbsp;|&nbsp; F10: Save &amp; Exit &nbsp;|&nbsp;{' '}
          <span style={{ color: '#00AAAA' }}>All Skills Loaded OK</span>
        </div>
      </div>
    </div>
  )
}
