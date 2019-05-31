export const SET_PAGES = 'SET_PAGES'
export const SET_CURRENT = 'SET_CURRENT'

interface SetPagesAction {
    type: typeof SET_PAGES
    pages: string[]
}

interface SetCurrentAction {
    type: typeof SET_CURRENT
    current: string
}

export interface PagesState {
    pages: string[]
    current: string
}

export type SetPagesTypes = SetPagesAction | SetCurrentAction