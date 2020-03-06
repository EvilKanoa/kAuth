const a: string = "Kanoa";

/**
 * Does stuff?
 */
interface MyInter {
  a: number;
  b: number | Array<(a: number, b: MyInter) => void>;
};

const x = (y: any): MyInter => {
  return { a: 1, b: y ? 2 : 3 };
};

module.exports = { a };
