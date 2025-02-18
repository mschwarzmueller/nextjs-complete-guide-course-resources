import Link from 'next/link';
export default function Home() {
  return (
    <main>
      <h1 style={{ color: 'white', textAlign: 'center' }}>
        Time to get started!
      </h1>
      <p><Link href="/community">Community</Link></p>
      <p styles={{color:"white", textAlign:"center"}} ><Link href="/meals">Meals</Link></p>
    </main>
  );
}
