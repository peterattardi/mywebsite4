export const debounce = (func: (...args: any[]) => void, ms: number = 500) => {
  let timer: number
  return (...args: any[]) => {
    const context = this
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => {
      func.apply(context, args)
    }, ms)
  }
}

export const dom = (selector: string) => {
  const element = document.querySelector(selector)
  if (!element) throw new Error(`No selector ${selector} found`)
  return element as HTMLElement
}
