import { useState } from 'react'
import { useLang } from '../i18n/LanguageContext'
import { useT } from '../i18n/content'
import { cases } from '../data/cases'
import CaseCard from '../components/CaseCard'
import Footer from '../components/Footer'
import { C, PAGE } from '../theme'

export default function Cases() {
  const { lang } = useLang()
  const t = useT(lang)
  const [filter, setFilter] = useState('all')

  const filtered =
    filter === 'tier1' ? cases.filter(c => c.tier === 1) :
    filter === 'tier2' ? cases.filter(c => c.tier === 2) :
    cases

  return (
    <main style={{ overflowX: 'hidden', width: '100%', background: C.bg }}>

      {/* ───────── Page Header ───────── */}
      <section style={{ background: C.bg, borderBottom: `1px solid ${C.border}` }}>
        <div style={{ ...PAGE, padding: '160px 24px 80px' }}>
          <p style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 11,
            letterSpacing: '0.3em',
            textTransform: 'uppercase',
            color: C.accent,
            fontWeight: 700,
            marginBottom: 16,
          }}>
            / Cases
          </p>
          <h1 style={{
            fontFamily: 'var(--font-headline)',
            fontWeight: 800,
            fontSize: 'clamp(32px, 4.4vw, 56px)',
            letterSpacing: '-0.03em',
            color: C.text,
            marginBottom: 24,
          }}>
            {t.cases.title}
          </h1>
          <p style={{
            fontSize: 16,
            lineHeight: 1.7,
            color: C.textSub,
            maxWidth: 640,
          }}>
            {t.cases.intro}
          </p>
        </div>
      </section>

      {/* ───────── Filter + Grid ───────── */}
      <section style={{ background: C.bgGray }}>
        <div style={{ ...PAGE, padding: '40px 24px 120px' }}>

          {/* Filter chips */}
          <div style={{
            display: 'flex',
            gap: 8,
            marginBottom: 32,
            flexWrap: 'wrap',
          }}>
            <FilterChip active={filter === 'all'}    onClick={() => setFilter('all')}>
              {t.cases.filterAll} <span style={{ opacity: 0.6, marginLeft: 4 }}>{cases.length}</span>
            </FilterChip>
            <FilterChip active={filter === 'tier1'}  onClick={() => setFilter('tier1')}>
              {t.cases.filterTier1} <span style={{ opacity: 0.6, marginLeft: 4 }}>{cases.filter(c => c.tier === 1).length}</span>
            </FilterChip>
            <FilterChip active={filter === 'tier2'}  onClick={() => setFilter('tier2')}>
              {t.cases.filterTier2} <span style={{ opacity: 0.6, marginLeft: 4 }}>{cases.filter(c => c.tier === 2).length}</span>
            </FilterChip>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: 24,
          }}>
            {filtered.map(c => <CaseCard key={c.id} c={c} lang={lang} />)}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

function FilterChip({ active, onClick, children }) {
  return (
    <button
      type="button"
      onClick={onClick}
      style={{
        fontFamily: 'var(--font-headline)',
        fontSize: 13,
        fontWeight: 600,
        letterSpacing: '0.02em',
        padding: '9px 18px',
        cursor: 'pointer',
        border: `1px solid ${active ? C.text : C.border}`,
        background: active ? C.text : C.bg,
        color: active ? C.bg : C.text,
        transition: 'all 0.15s',
      }}
      onMouseEnter={e => {
        if (!active) e.currentTarget.style.borderColor = C.text
      }}
      onMouseLeave={e => {
        if (!active) e.currentTarget.style.borderColor = C.border
      }}
    >
      {children}
    </button>
  )
}
