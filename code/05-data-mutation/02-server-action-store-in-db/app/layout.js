import Header from '@/components/header';
import './globals.css';

export const metadata = {
  title: 'NextPosts',
  description: 'Browse and share amazing posts.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
