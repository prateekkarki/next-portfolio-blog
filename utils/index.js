// eslint-disable-next-line import/prefer-default-export
export function cloudinaryLoader({ src, width, quality, blur = false }) {
  const root = `https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_NAME}/`;
  const params = ['c_limit', `w_${width}`, `q_${quality || 'auto'}`];
  if (blur) {
    params.push('e_blur:1800');
  }
  const paramsString = `${params.join(',')}/`;
  return `${root}${paramsString}${src}`;
}
