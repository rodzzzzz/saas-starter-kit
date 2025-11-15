import { readFile } from "fs/promises";
import { ImageResponse } from "next/og";
import { join } from "path";

// Image metadata
export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

// Image generation
export default async function Icon() {
  const interBold = await readFile(
    join(process.cwd(), "assets/Inter-Bold.ttf")
  );

  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #000000 0%, #404040 100%)",
          borderRadius: "22%",
          border: "2px solid #5c5c5c",
          position: "relative",
        }}
      >
        <div
          style={{
            fontSize: 14,
            color: "white",
            letterSpacing: "-0.02em",
          }}
        >
          SK
        </div>
      </div>
    ),
    {
      fonts: [
        {
          name: "Inter",
          data: interBold,
        },
      ],
      ...size,
    }
  );
}
