// eslint-disable-next-line import/prefer-default-export

interface CloudinaryLoaderParams {
  src: string;
  width: number;
  quality?: number | string;
  blur?: boolean;
}

export function cloudinaryLoader({
  src,
  width,
  quality,
  blur = false,
}: CloudinaryLoaderParams): string {
  const root = `https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_NAME}/`;
  const params = ['c_limit', `w_${width}`, `q_${quality || 'auto'}`];
  if (blur) {
    params.push('e_blur:1800');
  }
  const paramsString = `${params.join(',')}/`;
  return `${root}${paramsString}${src}`;
}
