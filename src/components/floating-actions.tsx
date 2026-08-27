import { BackToTopButton } from "@/components/back-to-top";
import { WhatsAppButton } from "@/components/whatsapp-button";

export function FloatingActions() {
  return (
    <div className="fixed right-[20px] bottom-[max(20px,env(safe-area-inset-bottom,0px))] z-[90] flex flex-col items-end gap-[8px]">
      <BackToTopButton />
      <WhatsAppButton />
    </div>
  );
}
