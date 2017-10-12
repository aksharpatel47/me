import Typography from "typography"
import kirkhamTheme from "typography-theme-kirkham"

kirkhamTheme.overrideStyles = ({ rhythm }, options) => ({
  a: {
    color: "#3f51b5",
    textDecoration: "none",
  },
})

const typography = new Typography(kirkhamTheme)

export default typography
