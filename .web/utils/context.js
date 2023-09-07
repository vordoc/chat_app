import { createContext } from "react"
import { E } from "/utils/state.js"

export const initialState = {}
export const initialEvents = [E('default_state.hydrate', {})]
export const StateContext = createContext(null);
export const EventLoopContext = createContext(null);