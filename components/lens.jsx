'use client'
import { createContext, useContext } from 'react'
import { LENSES } from '../data/content'

export const LensContext = createContext({ lens: 'all', setLens: () => {} })
export const useLens = () => useContext(LensContext)

export const lensColor = (id) => (LENSES.find((l) => l.id === id) || LENSES[0]).color
export const lensLabel = (id) => (LENSES.find((l) => l.id === id) || LENSES[0]).label
