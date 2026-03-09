import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="site-footer">
            <div className="container">
                <div style={{ display: 'flex', justifyContent: 'center', gap: 'var(--spacing-md)', marginBottom: 'var(--spacing-md)' }}>
                    <Link href="https://www.facebook.com/groups/LehiMTB/" target="_blank" className="nav-link">Facebook</Link>
                    <Link href="https://www.instagram.com/lehimtb" target="_blank" className="nav-link">Instagram</Link>
                    <Link href="http://smile.amazon.com/ch/47-3565347" target="_blank" className="nav-link">Support us on Amazon Smile</Link>
                </div>
                <p className="text-muted">
                    &copy; {new Date().getFullYear()} Lehi Mountain Bike Hub. Designed for the adventurous.
                </p>
            </div>
        </footer>
    );
}
