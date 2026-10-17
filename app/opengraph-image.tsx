import { ImageResponse } from "next/og";

export const alt = "Damalla Yathin — AI Content Engineer & Short-Form Video Producer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "radial-gradient(circle at 80% 20%, rgba(235,94,40,0.35), #121212 60%)",
          color: "#FFFCF2",
        }}
      >
        <div style={{ fontSize: 28, color: "#EB5E28", fontWeight: 700, letterSpacing: 4 }}>
          AI CONTENT ENGINEER · SHORT-FORM VIDEO
        </div>
        <div style={{ fontSize: 96, fontWeight: 800, marginTop: 24 }}>Damalla Yathin</div>
        <div style={{ fontSize: 36, color: "rgba(255,252,242,0.7)", marginTop: 24, maxWidth: 900 }}>
          60+ AI healthcare videos · 30K+ organic community · Higgsfield, HeyGen & Claude pipelines
        </div>
      </div>
    ),
    size
  );
}
