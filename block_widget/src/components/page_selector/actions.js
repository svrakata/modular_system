import { SET_PAGES, SET_CURRENT_PAGE, SET_PAGES_LOADED, SET_PAGES_ERROR, SET_BLOCKS_LIST } from "./types"
import store from "../../redux/store";

export const setPages = (pages) => ({
    type: SET_PAGES,
    pages,
})

export const setCurrentPage = (current) => ({
    type: SET_CURRENT_PAGE,
    current,
})

export const setPagesLoaded = (loaded) => ({
    type: SET_PAGES_LOADED,
    loaded,
})

export const setPagesError = (error) => ({
    type: SET_PAGES_ERROR,
    error,
})

export const setBlocksList = (blocksList) => ({
    type: SET_BLOCKS_LIST,
    blocksList,
})
 
export const boundSetPages = (pages) => store.dispatch(setPages(pages))
export const boundSetCurrentPage = (current) => store.dispatch(setCurrentPage(current))
export const boundSetPagesLoaded = (loaded) => store.dispatch(setPagesLoaded(loaded))
export const boundSetPagesError = (error) => store.dispatch(setPagesError(error))
export const boundingSetBlocksList = (blocksList) => store.dispatch(setBlocksList(blocksList))