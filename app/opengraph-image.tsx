import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "LifeCompass AI — Your AI Thinking Partner for Life's Big Decisions";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #1c1917 0%, #292524 50%, #1c1917 100%)",
          fontFamily: "sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Gold top bar */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "1200px",
            height: "6px",
            background: "#f59e0b",
          }}
        />
        {/* Decorative circles */}
        <div
          style={{
            position: "absolute",
            top: "-80px",
            right: "-80px",
            width: "320px",
            height: "320px",
            borderRadius: "50%",
            background: "rgba(245,158,11,0.08)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-60px",
            left: "-60px",
            width: "280px",
            height: "280px",
            borderRadius: "50%",
            background: "rgba(245,158,11,0.06)",
          }}
        />

        {/* Badge */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            background: "rgba(245,158,11,0.15)",
            border: "1px solid rgba(245,158,11,0.4)",
            borderRadius: "100px",
            padding: "8px 24px",
            marginBottom: "28px",
          }}
        >
          <span style={{ color: "#fbbf24", fontSize: "16px", fontWeight: 600, letterSpacing: "0.1em" }}>
            AI THINKING PARTNER
          </span>
        </div>

        {/* Title */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginBottom: "24px",
          }}
        >
          <span
            style={{
              fontSize: "64px",
              fontWeight: 800,
              color: "#f5f5f4",
              lineHeight: 1.15,
              textAlign: "center",
            }}
          >
            LifeCompass AI
          </span>
          <span
            style={{
              fontSize: "28px",
              fontWeight: 400,
              color: "#fbbf24",
              marginTop: "12px",
              textAlign: "center",
            }}
          >
            You already know the answer.
          </span>
          <span
            style={{
              fontSize: "28px",
              fontWeight: 400,
              color: "#a8a29e",
              marginTop: "6px",
              textAlign: "center",
            }}
          >
            You just can&apos;t hear yourself.
          </span>
        </div>

        {/* Feature pills */}
        <div style={{ display: "flex", gap: "16px", marginTop: "8px" }}>
          {["Career", "Relationships", "Life Direction"].map((item) => (
            <div
              key={item}
              style={{
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.12)",
                borderRadius: "8px",
                padding: "10px 20px",
                color: "#d6d3d1",
                fontSize: "18px",
              }}
            >
              {item}
            </div>
          ))}
        </div>

        {/* URL */}
        <div
          style={{
            position: "absolute",
            bottom: "28px",
            color: "rgba(168,162,158,0.7)",
            fontSize: "18px",
          }}
        >
          lifecompass-ai.vercel.app
        </div>
      </div>
    ),
    { ...size }
  );
}
