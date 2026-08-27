import { ImageResponse } from "next/og";

export const alt =
  "Vortexa — marketing digital, tráfego pago e sites em Florianópolis";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#0B0B0B",
          padding: "72px 80px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 16,
              height: 16,
              backgroundColor: "#CFFF00",
            }}
          />
          <div
            style={{
              color: "#F5F3EE",
              fontSize: 28,
              fontWeight: 700,
              letterSpacing: -0.5,
            }}
          >
            Vortexa
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              color: "#F5F3EE",
              fontSize: 58,
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: -1.5,
              maxWidth: 980,
            }}
          >
            Seu negócio pronto para crescer no digital.
          </div>
          <div
            style={{
              color: "#CFFF00",
              fontSize: 26,
              fontWeight: 500,
            }}
          >
            Marketing · tráfego pago · sites · Florianópolis
          </div>
        </div>
      </div>
    ),
    size,
  );
}
