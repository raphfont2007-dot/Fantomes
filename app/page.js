const LIEN_PAIEMENT = "#"; // on le remplacera par le lien Stripe à l'action suivante

export default function Page() {
  return (
    <main style={{ maxWidth: 560, margin: "0 auto", padding: "40px 20px 64px" }}>
      <p style={{ fontSize: 14, letterSpacing: 2, textTransform: "uppercase", color: "#b4412b" }}>
        Fantômes
      </p>
      <h1 style={{ fontSize: 36, lineHeight: 1.15, margin: "8px 0 16px" }}>
        Vous payez des abonnements dont vous ne vous servez plus.
        Je les retrouve pour vous.
      </h1>
      <p style={{ fontSize: 19, lineHeight: 1.5 }}>
        Un abonnement oublié à 9 € par mois, c'est 108 € par an. Il suffit
        d'en avoir quelques-uns pour perdre plusieurs centaines d'euros sans
        jamais le voir sur un relevé.
      </p>

      <ul style={{ fontSize: 18, lineHeight: 1.6, paddingLeft: 20, margin: "24px 0" }}>
        <li>Vous m'envoyez votre relevé bancaire.</li>
        <li>Sous 24 h, vous recevez la liste de vos prélèvements réguliers, classés par coût annuel.</li>
        <li>Pour chacun, une lettre de résiliation prête à envoyer.</li>
      </ul>

      <a
        href={LIEN_PAIEMENT}
        style={{
          display: "block",
          textAlign: "center",
          background: "#b4412b",
          color: "#fff",
          fontSize: 20,
          padding: "18px 16px",
          borderRadius: 10,
          textDecoration: "none",
        }}
      >
        Faire mon audit — 19 €
      </a>
      <p style={{ fontSize: 15, textAlign: "center", color: "#55524c" }}>
        Paiement unique, sans abonnement.
      </p>

      <p style={{ fontSize: 16, lineHeight: 1.5, borderTop: "1px solid #ddd6c8", paddingTop: 20 }}>
        <strong>Satisfait ou remboursé.</strong> Si l'audit ne trouve aucun
        abonnement à résilier, écrivez-moi dans les 14 jours et je vous
        rembourse intégralement sous 5 jours.
      </p>
    </main>
  );
}
