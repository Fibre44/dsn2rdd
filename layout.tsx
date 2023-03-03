import 'bootstrap/dist/css/bootstrap.css'
import Link from 'next/link'
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head />
      <body>
        <div style={{
          display: 'flex',
          flexWrap: 'nowrap',
          height: '100vh',
          maxHeight: '100vh',
        }}>
          <div className='d-flex flex-column flex-shrink-0 p-3 text-white bg-dark' style={{
            width: '280px'
          }}>
            <ul className='nav nav-pills flex-column mb-auto'>
              <li className='nav-item'>
                <Link href={'/'} className='nav-link text-white  active'>Configuration</Link>
              </li>
              <li className='nav-item'>
                <Link href={'/'} className='nav-link text-white'>Export</Link>
              </li>
              <li className='nav-item'>
                <Link href={'/'} className='nav-link text-white'>Fichier</Link>
              </li>
            </ul>
          </div>
          <div className='container'>
            {children}

          </div>

        </div>

      </body>
    </html>
  )
}
