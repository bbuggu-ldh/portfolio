// Centralized design tokens — light theme.
// Import from anywhere: import { C } from '../theme'

export const C = {
  text:       '#18181b',
  textSub:    '#52525b',
  textMuted:  '#a1a1aa',
  border:     '#e5e5e5',
  borderSoft: '#f0f0f0',
  bg:         '#ffffff',
  bgAlt:      '#fafafa',
  bgGray:     '#f4f4f5',
  bgHover:    '#f5f5f5',
  accent:     '#2563eb',
  accentSoft: '#eff6ff',
}

export const PAGE = { maxWidth: 1180, marginLeft: 'auto', marginRight: 'auto' }

export const NARROW = { maxWidth: 800, marginLeft: 'auto', marginRight: 'auto' }

export function thumbGradient(badge) {
  const map = {
    PLUGIN:    'linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%)',
    '3DGS':    'linear-gradient(135deg, #faf5ff 0%, #ede9fe 100%)',
    DMX:       'linear-gradient(135deg, #fef2f2 0%, #fecaca 100%)',
    AUTOMATION:'linear-gradient(135deg, #f0fdf4 0%, #d1fae5 100%)',
    SHADERS:   'linear-gradient(135deg, #fefce8 0%, #fef3c7 100%)',
  }
  return map[badge] || 'linear-gradient(135deg, #fafafa 0%, #f0f0f0 100%)'
}
