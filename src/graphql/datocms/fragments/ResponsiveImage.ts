export default `
  responsiveImage(imgixParams: { fit: crop, w: 500, h: 300, auto: format }) {
    srcSet
    webpSrcSet
    sizes
    src
    width
    height
    aspectRatio
    alt
    title
    base64
  }
`
