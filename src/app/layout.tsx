import type { Metadata } from "next";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { rootContent } from "@/data/root/content";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: rootContent.meta.title,
    template: `%s | ${rootContent.meta.title}`,
  },
  description: rootContent.meta.description,
  authors: [{ name: rootContent.meta.author }],
  openGraph: {
    title: rootContent.meta.ogTitle,
    description: rootContent.meta.ogDescription,
    type: "website",
    siteName: rootContent.meta.ogSiteName,
  },
  twitter: {
    card: "summary_large_image",
    title: rootContent.meta.twitterTitle,
    description: rootContent.meta.twitterDescription,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang={rootContent.lang}>
      <body>
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                function toggleMenu(forceClose) {
                  const btn = document.querySelector('[data-mobile-menu-button]');
                  const menu = document.getElementById('mobile-menu');
                  if (!btn || !menu) return;

                  const isOpen = btn.getAttribute('data-state') === 'open';
                  const nextState = forceClose === true ? false : !isOpen;

                  if (nextState) {
                    btn.setAttribute('data-state', 'open');
                    menu.setAttribute('data-state', 'open');
                    menu.classList.remove('hidden');
                    // Trigger transition
                    setTimeout(() => {
                      menu.style.opacity = '1';
                      menu.style.transform = 'translateY(0)';
                    }, 10);
                  } else {
                    btn.setAttribute('data-state', 'closed');
                    menu.setAttribute('data-state', 'closed');
                    menu.style.opacity = '0';
                    menu.style.transform = 'translateY(-8px)';
                    setTimeout(() => {
                      if (menu.getAttribute('data-state') === 'closed') {
                        menu.classList.add('hidden');
                      }
                    }, 300);
                  }
                }

                document.addEventListener('click', (e) => {
                  if (e.target.closest('[data-mobile-menu-button]')) {
                    toggleMenu();
                  } else if (e.target.closest('[data-mobile-menu-links] a')) {
                    toggleMenu(true);
                  }
                });
              })();
            `,
          }}
        />
      </body>
    </html>
  );
}
