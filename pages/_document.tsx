import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <title>SAMURAI</title>
      <link rel="icon" type="image/png" href="https://cdn2.steamgriddb.com/file/sgdb-cdn/icon/b3e3e393c77e35a4a3f3cbd1e429b5dc/32/64x64.png" />
      <body className=''>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
