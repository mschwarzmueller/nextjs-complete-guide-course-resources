import Link from 'next/link' 
export default function MealsPage() {
  return <main>
    <h1 style={{color:"white", textAlign:"center"}}>Meals Page</h1>
    <p><Link href="/meals/share">Share</Link></p>
    <p><Link href="/meals/meals">Meals</Link></p>
  </main>;
}
