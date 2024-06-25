import { ReactNode } from "react"

export interface IPageWrapper {
    children: ReactNode
}

export interface ILogo {
    width?: string,
    height?: string
}

export interface IContentHeader {
    size: string,
    title: string,
    fontWeight: string
}

export interface ItitleText {
    text?: string,
    size?: string,
    fontWeight?: string
}

export interface IFixedText extends ItitleText {
    position?: string
}

export interface IGlitchText {
    text: string
}

export interface INextScreenText {
    text: string,
    link: string
}

export interface ITimeLine {
    id: string,
    title: string,
    link: string,
    icon?: string,
    linkText: string,
    text?:string,
    desc: string
}

export interface IAboutTimeLine {
    data: Array<ITimeLine>
}