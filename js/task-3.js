function getElementWidth(content, padding, border) {
  cont = Number.parseFloat(content);
  pad = Number.parseFloat(padding);
  bor = Number.parseFloat(border);
  const getElemWid = `${cont + pad * 2 + bor * 2}`;
  return getElemWid;
}

console.log(getElementWidth('50px', '8px', '4px')); // 74
console.log(getElementWidth('60px', '12px', '8.5px')); // 101
console.log(getElementWidth('200px', '0px', '0px')); // 200
