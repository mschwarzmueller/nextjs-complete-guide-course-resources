import Link from 'next/link';

export default function BlogPage() {
  return <main>
    <p >The Blog</p>
    <p><Link href="/blog/post-1" >Post 1</Link></p>
    <p><Link href="/blog/post-2">Post 02</Link></p>
  </main>;
}
