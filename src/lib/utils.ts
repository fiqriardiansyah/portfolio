import { Power4, TweenMax } from 'gsap'
import { type MutableRefObject, type RefCallback } from 'react'

export const easeDefault = [0.79, 0.14, 0.15, 0.86]

export const routes = {
  index: '/',
  about: '/about',
  works: '/works'
}

type MutableRefList<T> = Array<RefCallback<T> | MutableRefObject<T> | undefined | null>

export function mergeRefs<T>(...refs: MutableRefList<T>): RefCallback<T> {
  return (val: T) => {
    setRef(val, ...refs)
  }
}

export function setRef<T>(val: T, ...refs: MutableRefList<T>): void {
  refs.forEach((ref) => {
    if (typeof ref === 'function') {
      ref(val)
    } else if (ref != null) {
      ref.current = val
    }
  })
}

export function cleanObject(obj: any) {
  for (const propName in obj) {
    if (obj[propName] === null || obj[propName] === undefined || !obj[propName]) {
      delete obj[propName]
    }
  }
  return obj
}

export function moveMagnet(event: any, strength: number) {
  const magnetButton = event.currentTarget
  const bounding = magnetButton.getBoundingClientRect()

  TweenMax.to(magnetButton, 1, {
    x: ((event.clientX - bounding.left) / magnetButton.offsetWidth - 0.5) * strength,
    y: ((event.clientY - bounding.top) / magnetButton.offsetHeight - 0.5) * strength,
    ease: Power4.easeOut
  })
}

export function randomNum(max: number) {
  return Math.floor(Math.random() * max)
}
