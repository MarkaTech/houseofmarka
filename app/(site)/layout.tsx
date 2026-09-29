import SiteEffects from '@/components/Effects';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SiteEffects />
      <Nav />
      <main id="main">{children}</main>
      <Footer />
    </>
  );
}
