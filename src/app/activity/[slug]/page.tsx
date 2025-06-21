import ActivityHero from "@/components/ActivityHero";
import ActivityPageClient from "@/components/ActivityPageClient";
import Footer from "@/components/Footer";
import { activities } from "@/lib/activities";
import { notFound } from "next/navigation";

// Karting Components
import CircuitSection from "@/components/karting/CircuitSection";
import InfoBox from "@/components/karting/InfoBox";
import KartingPricing from "@/components/karting/KartingPricing";
import VipLigueSection from "@/components/karting/VipLigueSection";

// Paintball Components
import PaintballInfoBox from "@/components/paintball/PaintballInfoBox";
import PaintballPricing from "@/components/paintball/PaintballPricing";
import TerrainGrid from "@/components/paintball/TerrainGrid";

// VR Components
import VrPageContent from "@/components/vr/VrPageContent";

export function generateStaticParams() {
  return activities.map((activity) => ({
    slug: activity.slug,
  }));
}

interface PageProps {
  params: { slug: string };
}

export default function ActivityPage({ params }: PageProps) {
  const activity = activities.find((a) => a.slug === params.slug);

  if (!activity) {
    notFound();
  }

  // Define the custom title for the Karting hero
  const kartingTitle = (
    <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter text-white">
      KARTING
      <br />
      <span className="text-red-500">CIRCUIT ROUTIER</span>
    </h1>
  );

  const kartingInfo =
    "SPK vous offre un circuit routier asphalté de 900 mètres par 7.5 mètres de largeur et des karts pouvant aller jusqu'à 75 KM/h ! Services de bar, atelier mécanique, achat, réparation et vente de karts et accessoires neufs et usagés.";

  const paintballInfo1 = (
    <>
      <p>
        Un dépôt de 55$ vous sera demander afin pour réserver vos parties de
        paintball a l&apos;avance. Politique d&apos;annulation: 48h avant sinon
        non remboursable.
      </p>
      <p>
        SPK vous offre une activité de paintball exceptionnelle sur les plus
        gros et magnifiques terrains de la région. Assisté d&apos;un moniteur,
        vous vivrez l&apos;expérience de votre été avec votre groupe
        d&apos;amis. Communiquez avec nous pour toute demandes
        d&apos;information ou pour réserver !
      </p>
    </>
  );

  const paintballInfo2 = (
    <>
      <h3 className="text-2xl font-bold uppercase tracking-wider mb-4">
        Recommandation
      </h3>
      <p>
        Nous vous recommandons de porter des vêtements confortables et
        résistants, tels que des pantalons longs et des manches longues, ainsi
        que des chaussures de sport robustes. Votre centre fournira les billes
        de peinture, mais apportez de l&apos;argent supplémentaire au cas où
        vous auriez besoin de recharger. Il est également conseillé d&apos;avoir
        deux chargeurs supplémentaires pour une expérience de jeu ffluide.
      </p>
    </>
  );

  return (
    <div className="bg-black">
      <ActivityHero
        activity={activity}
        customTitle={activity.slug === "karting" ? kartingTitle : undefined}
      />

      {activity.slug === "karting" ? (
        <>
          <InfoBox text={kartingInfo} />
          <CircuitSection />
          <KartingPricing />
          <VipLigueSection />
        </>
      ) : activity.slug === "paintball" ? (
        <>
          <PaintballInfoBox>{paintballInfo1}</PaintballInfoBox>
          <TerrainGrid />
          <PaintballPricing />
          <PaintballInfoBox>{paintballInfo2}</PaintballInfoBox>
        </>
      ) : activity.slug === "realite-virtuelle" ? (
        <VrPageContent />
      ) : (
        <ActivityPageClient activity={activity} />
      )}

      <Footer />
    </div>
  );
}
