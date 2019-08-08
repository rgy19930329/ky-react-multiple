/**
 * 转驼峰命名
 * @param {*} name 
 */
const camelCase = (name) => {
  return name.charAt(0).toUpperCase() + 
    name.slice(1).replace(/-(\w)/g, (m, n) => n.toUpperCase());
}

export {
  camelCase,
}