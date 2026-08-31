import { BackToTopButton } from "@/components/back-to-top";
import { WhatsAppButton } from "@/components/whatsapp-button";

export function FloatingActions() {
  return (
    <div className="fixed right-[16px] bottom-[max(16px,env(safe-area-inset-bottom,0px))] z-[110] flex flex-col items-end gap-[10px] sm:right-[20px] sm:bottom-[max(20px,env(safe-area-inset-bottom,0px))]">
      <BackToTopButton />
      <WhatsAppButton />
    </div>
  );
}
