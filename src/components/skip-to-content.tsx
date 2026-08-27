export function SkipToContent() {
  return (
    <a
      href="#main-content"
      className="focus-ring sr-only fixed top-[12px] left-[12px] z-[110] rounded-[10px] bg-foreground px-[12px] py-[8px] text-[13px] font-medium text-background focus:not-sr-only"
    >
      Pular para o conteúdo
    </a>
  );
}
