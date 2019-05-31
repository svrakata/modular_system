import { SET_PAGES, SetPagesTypes, SET_CURRENT } from "./types"
import store from "../../redux/store";

export const setPages = (pages: string[]): SetPagesTypes => ({
    type: SET_PAGES,
    pages,
})

export const setCurrent = (current: string): SetPagesTypes => ({
    type: SET_CURRENT,
    current,
})

export const boundSetPages = (pages: string[]) => store.dispatch(setPages(pages))

