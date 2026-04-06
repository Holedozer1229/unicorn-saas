import { ImageResponse } from "@vercel/og";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);

  const score = searchParams.get("score") || "0";
  const idea = searchParams.get("idea") || "";

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          height: "100%",
          background: "black",
          color: "white",
          padding: 60,
          fontSize: 40,
          justifyContent: "center",
        }}
      >
        <div style={{ color: "#22d3ee", fontSize: 28 }}>
          Unicorn OS Prediction
        </div>

        <div style={{ marginTop: 20, fontSize: 52, fontWeight: 700 }}>
          {score}/100
        </div>

        <div style={{ marginTop: 30, fontSize: 28, opacity: 0.7 }}>
          {idea}
        </div>

        <div style={{ marginTop: 60, fontSize: 22, opacity: 0.5 }}>
          unicorn-os.vercel.app
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
