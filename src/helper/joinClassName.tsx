function joinClassName(...classes) {
  return classes.filter(Boolean).join(" ");
}
export default joinClassName;
