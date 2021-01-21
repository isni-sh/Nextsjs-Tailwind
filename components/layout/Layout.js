import Head from 'next/head'

export default function Layout({ children, title = null }) {
  const dev = process.env.NODE_ENV === 'development'

  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicons/favicon.ico" sizes="32x32" />
        <link rel="icon" href="/favicons/favicon.ico" sizes="57x57" />
        <link rel="icon" href="/favicons/favicon.ico" sizes="76x76" />
        <link rel="icon" href="/favicons/favicon.ico" sizes="96x96" />
        <link rel="icon" href="/favicons/favicon.ico" sizes="128x128" />
        <link rel="icon" href="/favicons/favicon.ico" sizes="192x192" />
        <link rel="icon" href="/favicons/favicon.ico" sizes="228x228" />
      </Head>
      <div className={`font-sans antialiased flex flex-col ${dev ? 'debug-screens' : null}`}>
        {children}
      </div>
    </>
  )
}
