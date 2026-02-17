export function Keywords() {
  const content = [
    "SixGreen",
    "Grupo Six",
    "suplemento natural",
    "superfoods",
    "adaptógenos",
    "qualidade de vida",
  ];

  return <meta name="keywords" content={content.join(", ")} />;
}
