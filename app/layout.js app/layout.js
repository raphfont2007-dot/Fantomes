export const metadata = {
  title: "Fantômes — Débusquez les abonnements que vous payez sans vous en servir",
  description:
    "Envoyez votre relevé bancaire, recevez sous 24 h la liste de vos abonnements oubliés, classés par coût annuel.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body
        style={{
          margin: 0,
          fontFamily: "Georgia, 'Times New Roman', serif",
          background: "#faf7f2",
          color: "#1c1b19",
        }}
      >
        {children}
      </body>
    </html>
  );
}
