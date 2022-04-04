declare module "lodash" {
  function partition<T>(collection: T[], cb: (item: T) => boolean): T[][];
  function partition<T extends object>(
    collection: T,
    cb: (item) => boolean
  ): T[][];
}
