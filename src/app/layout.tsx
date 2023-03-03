import 'bootstrap/dist/css/bootstrap.css'
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head />
      <body className='text-center'>
        <main className='form-signin w-100 m-auto'>
          {children}

        </main>
      </body>
    </html>
  )
}
