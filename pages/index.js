import Link from 'next/link';

export default function Home() {
  return (
    <Link href="/about">
      <a>Navegar About</a>
    </Link>
  );
}
