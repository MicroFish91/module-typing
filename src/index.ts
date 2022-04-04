import _ from "lodash";

console.log(_.partition([1, 2, 3, 4], (n) => n % 2 === 0));
