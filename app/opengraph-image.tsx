import { ImageResponse } from "next/og";

export const alt =
  "Keith Merrill — Senior Software Engineer, visionOS and 3D graphics";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          background: "#000000",
          backgroundImage:
            "radial-gradient(circle at 78% 22%, rgba(110,231,183,0.18), transparent 55%)",
          padding: "72px 80px",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 24,
            letterSpacing: 4,
            textTransform: "uppercase",
            color: "rgba(110,231,183,0.7)",
          }}
        >
          Sr. Software Engineer · visionOS · 3D Graphics
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 20,
            fontSize: 104,
            fontWeight: 600,
            letterSpacing: -2,
            color: "#ffffff",
          }}
        >
          Keith Merrill
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 24,
            maxWidth: 900,
            fontSize: 32,
            lineHeight: 1.4,
            color: "#d4d4d8",
          }}
        >
          Twenty years building GPU-intensive apps and games — Apple graphics,
          games, and machine learning frameworks.
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 48,
            fontSize: 26,
            letterSpacing: 2,
            color: "#71717a",
          }}
        >
          keithmerrill.com
        </div>
      </div>
    ),
    { ...size },
  );
}
