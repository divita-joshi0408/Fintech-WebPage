import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {
  return (
    <nav
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '20px 40px',
        background: '#9abd2d',
        borderBottom: '1px solid #1E3A8A',
        color: 'white',
      }}
    >
      {/* Logo */}
      <Image
        src="/rksWealth-logo-image.png"
        alt="RksWealth Logo"
        width={170}
        height={170}
        style={{borderRadius: '60px'}}
        loading="eager"
      />

      {/* Links */}
      <div style={{ display: 'flex', gap: '20px' }}>
        <Link href="/">Home</Link>
      </div>
    </nav>
  )
}