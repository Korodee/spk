import { notFound } from "next/navigation";
import ActivityHero from "@/components/ActivityHero";
import ActivityPageClient from "@/components/ActivityPageClient";
import Footer from "@/components/Footer";
import { activities } from "@/lib/activities";
import AnimatedTitle from "@/components/AnimatedTitle";

// Karting Components
import CircuitSection from "@/components/karting/CircuitSection";
import InfoBox from "@/components/karting/InfoBox";
import KartingPricing from "@/components/karting/KartingPricing";
import VipLigueSection from "@/components/karting/VipLigueSection";
import KartGallery from "@/components/karting/KartGallery";

// Paintball Components
import PaintballInfoBox from "@/components/paintball/PaintballInfoBox";
import PaintballPricing from "@/components/paintball/PaintballPricing";
import TerrainGrid from "@/components/paintball/TerrainGrid";
import PaintballGallery from "@/components/paintball/PaintballGallery";

// VR Components
import VrPageContent from "@/components/vr/VrPageContent";
import VrGallery from "@/components/vr/VrGallery";

// Labyrinth Components
import LabyrinthPageContent from "@/components/labyrinth/LabyrinthPageContent";

// Laser Tag Components
import LaserTagIntro from "@/components/laser/LaserTagIntro";
import GameInfoSection from "@/components/laser/GameInfoSection";
import Recommendations from "@/components/laser/Recommendations";
import PricingSection from "@/components/laser/PricingSection";
import LaserGallery from "@/components/laser/LaserGallery";

// Minigolf Components
import MinigolfPageContent from "@/components/minigolf/MinigolfPageContent";

// Salle VIP Components
import SalleVipPageContent from "@/components/salle-vip/SalleVipPageContent";

// ✅ Define props locally (no import from .next/types!)
type LocalPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  return activities.map((activity) => ({
    slug: activity.slug,
  }));
}

export default async function ActivityPage({ params }: LocalPageProps) {
  const { slug } = await params;
  const activity = activities.find((a) => a.slug === slug);

  if (!activity) {
    notFound();
  }

  const kartingTitle = (
    <div>
      <AnimatedTitle text="KARTING" />
      <AnimatedTitle text="CIRCUIT ROUTIER" className="text-red-500" />
    </div>
  );

  const kartingInfo =
    "SPK vous offre un circuit routier asphalté de 900 mètres par 7.5 mètres de largeur et des karts pouvant aller jusqu'à 75 KM/h !";

  const paintballInfo1 = (
    <>
      <p className="mb-2">
        SPK vous offre une activité de paintball exceptionnelle sur les plus
        gros et magnifiques terrains de la région. Assisté d&apos;un moniteur,
        vous vivrez l&apos;expérience de votre été avec votre groupe
        d&apos;amis. Communiquez avec nous pour toute demande d&apos;information
        ou pour réserver !
      </p>
      <p>
        <strong>Un dépôt de 55$</strong> vous sera demandé afin pour réserver
        vos parties de paintball à l&apos;avance.
        <br />
        <strong>Politique d&apos;annulation :</strong> 48h avant sinon non
        remboursable.
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
        deux chargeurs supplémentaires et du chasse-moustique pour une
        expérience de jeu fluide.
      </p>
    </>
  );

  return (
    <div className="bg-black">
      {activity.slug !== "salle-arcade-vip" &&
        activity.slug !== "labyrinth" && (
          <ActivityHero
            activity={activity}
            customTitle={activity.slug === "karting" ? kartingTitle : undefined}
          />
        )}

      {activity.slug === "jeu-laser" ? (
        <>
          <LaserTagIntro />
          <GameInfoSection />
          <Recommendations />
          <PricingSection />
          <LaserGallery />
        </>
      ) : activity.slug === "karting" ? (
        <>
          <InfoBox text={kartingInfo} />
          <CircuitSection />
          <KartingPricing />
          <VipLigueSection />
          <KartGallery />
        </>
      ) : activity.slug === "paintball" ? (
        <>
          <PaintballInfoBox>{paintballInfo1}</PaintballInfoBox>
          <TerrainGrid />
          <PaintballPricing />
          <PaintballGallery />
          <PaintballInfoBox>{paintballInfo2}</PaintballInfoBox>
        </>
      ) : activity.slug === "realite-virtuelle" ? (
        <>
          <VrPageContent />
          <VrGallery />
        </>
      ) : activity.slug === "labyrinth" ? (
        <LabyrinthPageContent />
      ) : activity.slug === "minigolf" ? (
        <MinigolfPageContent />
      ) : activity.slug === "salle-arcade-vip" ? (
        <SalleVipPageContent />
      ) : (
        <ActivityPageClient activity={activity} />
      )}

      <Footer />
    </div>
  );
}
