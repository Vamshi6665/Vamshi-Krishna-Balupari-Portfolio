'use client'
import { createContext, useContext } from 'react'
import { LENSES } from '../data/content'

export const LensContext = createContext({ lens: 'all', setLens: () => {} })
export const useLens = () => useContext(LensContext)

const find = (id) => LENSES.find((l) => l.id === id) || LENSES[0]
export const lensColor = (id) => find(id).color
export const lensDark = (id) => find(id).onDark
export const lensLabel = (id) => find(id).label
export const lensShort = (id) => find(id).short
