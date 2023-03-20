import Header from '@/components/Header';
import './globals.css';

export const metadata = {
  title: 'Instagram App',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
