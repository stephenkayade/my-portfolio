import { ReactNode } from "react"

export interface IPageWrapper {
    children: ReactNode
}

export interface IModalProps {
    isShow: boolean;
    closeModal: any;
    children?: any;
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
    className?: string
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
    linkIcon?: boolean,
    text?: string,
    desc: string
}

export interface IAboutTimeLine {
    data: Array<ITimeLine>
}

export interface IProjectData {
    id?: string,
    title?: string,
    link?: string,
    headline?: string,
    img?: string,
    tags?: string[],
    desc?: string
}

export interface ISideNav extends IModalProps {
    data: IProjectData
}

export interface IStyle {
    backgroundImage: string
}

export interface IReveal {
    children: any,
    className?: string,
    delay?: number,
}

export interface ISkillsData {
    data: string[]
}

export interface IContactProps {
    id: string
    title?: string,
    text?: string,
    link?:string,
    iconPath?: string,
    fill?:string
}

export interface IContactList {
    data: Array<IContactProps>
}