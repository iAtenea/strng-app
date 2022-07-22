import '../styles/globals.css';
import Link from 'next/link';

function MyApp({ Component, pageProps }) {
  return (
    <main className="h-screen w-full bg-gray-700 text-white flex flex-col  items-center">
      <ul className="w-full flex max-w-screen-lg justify-between px-8">
        <Link href="/">
          <a>Inicio</a>
        </Link>
        <Link href="/about">
          <a>SOBRE Nosotros</a>
        </Link>
        <li>Iniciar Sesión</li>
        <li>Crear Cuenta</li>
      </ul>
      <Component {...pageProps} />
    </main>
  );
}

export default MyApp;
