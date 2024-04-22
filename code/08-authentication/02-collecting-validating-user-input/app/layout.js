import './globals.css';

export const metadata = {
  title: 'Next Auth',
  description: 'Next.js Authentication',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
