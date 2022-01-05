

export interface LayoutAppProps{
    children?:React.ReactNode,
    pageTitle:string
}
export interface userLogin{
    user:object | null
}
export interface theCurrentUser{
    displayName?:string|null,
    photoURL?:string|null,
    email?:string|null,
    uid?:string,
    like?:object[] | [],
    dislike?:object[] | [],
    mode?:string
}
export interface callback{
    function:()=>boolean| null| Promise<any>,
    text?:string
}
export interface ColorTheme{
    theme:string,
    themeColor:object
}

export interface Colors{
    textColorPrimary?:string,   
    textColorSecondary?:string,   
    backgroundColorPrimary?:string,
    backgroundColorSecondary?:string,
    activeLinkColor?:string
}
export interface theme{
    dark:Colors,
    light:Colors
}
export interface alertMessageObject{
    color?:string,
    info?:(string|boolean)[]
}
export interface providers{
   google?:boolean,
    googleText?:string
}
export interface alertProps{
    message?:string,
    color?:string
}
export interface newUser{
    email:string,
    password:string
}
