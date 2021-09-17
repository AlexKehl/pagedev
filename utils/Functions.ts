const tryCatch = async <T extends Error, U>(
  fn: () => Promise<U>
): Promise<[T, null] | [null, U]> => {
  try {
    const res = await fn()
    return [null, res]
  } catch (e: any) {
    return [e, null]
  }
}

const asyncTimeout =
  (timeInMs: number) =>
  <T>(val: T): Promise<T> => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(val), timeInMs)
    })
  }

const log = <T>(val: T): T => {
  console.log(val)
  return val
}

export { tryCatch, log, asyncTimeout }
