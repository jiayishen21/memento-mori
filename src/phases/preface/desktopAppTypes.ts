export type Position = {
	x: number
	y: number
}

export enum DesktopAppType {
	File = 'file',
	Photo = 'photo'
}

export type FileApp = {
	appType: DesktopAppType.File
	label?: string
	content: string
	position: Position
}

export type PhotoApp = {
	appType: DesktopAppType.Photo
	label?: string
	src: string
	position: Position
}

export type DesktopApp = FileApp | PhotoApp