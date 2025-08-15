// eslint-disable-next-line import/prefer-default-export

interface CloudinaryLoaderParams {
  src: string;
  width?: number;
  quality?: number | string;
  blur?: boolean;
  blurAmount?: number;
}

export function cloudinaryLoader({
  src,
  width,
  quality,
  blur = false,
  blurAmount = 1800,
}: CloudinaryLoaderParams): string {
  const root = `https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_NAME}/`;
  const cleanSrc = src.replace(root, '');
  const params = ['c_limit', `w_${width || 'auto'}`, `q_${quality || 'auto'}`];
  if (blur) {
    params.push(`e_blur:${blurAmount || 500}`);
  }
  const paramsString = `${params.join(',')}/`;
  return `${root}${paramsString}${cleanSrc}`;
}
