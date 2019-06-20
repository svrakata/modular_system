import { SET_PAGES, SET_CURRENT_PAGE } from "./types"
import store from "../../redux/store";

export const setPages = (pages) => ({
    type: SET_PAGES,
    pages,
})

export const setCurrentPage = (current) => ({
    type: SET_CURRENT_PAGE,
    current,
})

export const boundSetPages = (pages) => store.dispatch(setPages(pages))
export const boundSetCurrentPage = (current) => store.dispatch(setCurrentPage(current))