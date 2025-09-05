export type YogaImage = { src: string };

const assetPrefix = process.env.NODE_ENV === "production" ? "/yogasoul" : "";

export const yogaImages: YogaImage[] = [
  { src: `${assetPrefix}/verticles/yoga1.jpg` },
  { src: `${assetPrefix}/verticles/yoga2.jpg` },
  { src: `${assetPrefix}/verticles/yoga3.jpg` },
  { src: `${assetPrefix}/verticles/yoga4.jpg` },
  { src: `${assetPrefix}/verticles/yoga5.jpeg` },
  { src: `${assetPrefix}/verticles/yoga6.jpeg` },
];
