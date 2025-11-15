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
    join(process.cwd(), "assets/Inter-Black.ttf")
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
          background: "#FFFFFF",
          borderRadius: "22%",
          border: "4px solid #000000",
          position: "relative",
        }}
      >
        <div
          style={{
            fontSize: 20,
            color: "#000000",
            letterSpacing: "-0.02em",
          }}
        >
          S
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
