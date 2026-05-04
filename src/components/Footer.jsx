export default function Footer() {
  return (
    <footer className="w-full py-6 px-8 flex flex-col md:flex-row justify-between items-center border-t border-[#353534]/10 bg-[#131313] gap-4">
      <div className="font-headline text-xs font-medium text-[#BAC9CD] tracking-widest">
        © 2024 DOHAN.TA — ALL RIGHTS RESERVED.
      </div>
      <div className="flex space-x-8">
        {[
          { label: 'SYSTEM STATUS: OPTIMAL', href: '#', highlight: true },
          { label: 'ARTSTATION', href: '#' },
          { label: 'LINKEDIN', href: '#' },
          { label: 'GITHUB', href: '#' },
        ].map(({ label, href, highlight }) => (
          <a key={label} href={href}
            className={`font-label text-[10px] uppercase tracking-widest transition-colors duration-200 hover:text-[#A4E6FF] ${
              highlight ? 'text-[#00D1FF]' : 'text-[#BAC9CD]'
            }`}>
            {label}
          </a>
        ))}
      </div>
    </footer>
  )
}
