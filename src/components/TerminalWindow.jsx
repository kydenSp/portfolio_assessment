const PROJECTS = [
  {
    title: '⬛ JSD13 Final Project — "That-tae" Full-Stack Web App',
    stack: 'Stack: MongoDB · Express.js · React.js · Node.js',
    desc: 'A full-stack MERN application built during Generation Thailand JSD Bootcamp #13. Features user authentication, RESTful API, and responsive UI.',
    tags: ['React', 'Node.js', 'MongoDB', 'Express', 'JWT Auth'],
  },
  {
    title: '⬛ Build day — Flappy boss Game',
    stack: 'Stack:React.js · Node.js',
    desc: 'Developed a responsive weapon combat system focusing on accurate damage logic and hit detection.',
    tags: ['React', 'Tailwind CSS','Prompt Eng'],
    Gameplay: (
    <>
      <a href="https://group4-build-day.vercel.app/">Link to Game</a>
    </>
  ),  
  },
   {
    title: '⬛ DOM — Web-Shooter-Tycoon',
    stack: 'Html · CSS · JavaScript',
    desc: 'Spider LAB: An interactive idle clicker game built with JavaScript to showcase dynamic DOM manipulation, game logic implementation, and real-time UI updates.',
    tags: ['DOM', 'Click'],
    Gameplay: (
    <>
      <a href="https://web-shooter-tycoon-clicker.vercel.app/">Link to Game</a>
    </>
  ),
  },
  {
    title: '⬛ Portfolio OS — Retro Desktop UI',
    stack: 'Stack: HTML · CSS · JavaScript · React',
    desc: 'Retro 90s OS-themed personal portfolio. Features a BIOS boot screen, draggable windows, CRT filter toggle, and a pixelated bottom dock.',
    tags: ['React', 'Framer Motion', 'Tailwind CSS', 'Retro UI'],
  },
  {
    title: '⬛ Data Science Mini — AI Prompt Project',
    stack: 'Stack: Python · SQL · Gemini API',
    desc: 'Data analysis mini project from Data Rockie bootcamp focusing on prompt engineering and database fundamentals with AI-powered queries.',
    tags: ['Python', 'SQL', 'Gemini API', 'Prompt Eng'],
  },
]

export default function TerminalWindow() {
  return (
    <div
      className="scanline-wrap"
      style={{
        fontFamily: "'Share Tech Mono', 'Courier New', monospace",
        color: '#39ff14', fontSize: 12, lineHeight: 1.8,
      }}
    >
      <div style={{ color: '#555' }}># Supisara_OS Terminal v1.0 | bash-5.0</div>
      <br />
      <div>
        <span style={{ color: '#FFB000' }}>supisara@jsd13:~$</span>{' '}
        <span style={{ color: '#fff' }}>ls -la ./projects/</span>
      </div>
      <br />
      <div style={{ paddingLeft: 12 }}>total {PROJECTS.length}</div>
      {PROJECTS.map((p) => (
        <div key={p.title} style={{ paddingLeft: 12 }}>
          drwxr-xr-x &nbsp;supisara &nbsp;{p.title.replace('⬛ ', '').split('—')[0].trim().replace(/ /g, '-').toUpperCase()}/
        </div>
      ))}
      <br />

      {PROJECTS.map((p) => (
        <div
          key={p.title}
          style={{
            border: '1px solid #2a2a2a', padding: '9px 13px',
            margin: '10px 0', background: '#0d0d0d',
            borderLeft: '3px solid #39ff14',
          }}
        >
          <div style={{ color: '#39ff14', fontSize: 13, marginBottom: 4 }}>{p.title}</div>
          <div style={{ color: '#FFB000', fontSize: 10, marginBottom: 5 }}>{p.stack}</div>
          <div style={{ color: '#aaa', fontSize: 11, lineHeight: 1.5, marginBottom: 7 }}>{p.desc}</div>
          {p.Gameplay && (
            <div style={{ fontSize: 11, marginBottom: 7, color: '#39ff14', textDecoration: 'underline' }}>
              Gameplay: {p.Gameplay}
            </div>
          )}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 3 }}>
            {p.tags.map(tag => (
              <span
                key={tag}
                style={{
                  color: '#39ff14', background: '#001800',
                  border: '1px solid #1a4a1a', fontSize: 9, padding: '1px 6px',
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      ))}

      <br />
      <div>
        <span style={{ color: '#FFB000' }}>supisara@jsd13:~$</span>{' '}
        <span
          style={{
            display: 'inline-block', width: 8, height: '1em',
            background: '#39ff14', verticalAlign: 'text-bottom',
            animation: 'blink 0.7s step-end infinite',
          }}
        />
      </div>
    </div>
  )
}
