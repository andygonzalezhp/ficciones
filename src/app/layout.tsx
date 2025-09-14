import "./globals.css";

export const metadata = {
  title: "ficciones.net",
  description: "notes & images",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <main className="mx-auto w-full max-w-5xl px-6 sm:px-10 py-8">
          {children}
        </main>
      </body>
    </html>
  );
}
