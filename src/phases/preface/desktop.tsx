import styles from '@/phases/preface/styles.module.css'
import { FileAppComponent, PhotoAppComponent } from '@/phases/preface/desktopApp'
import { DesktopAppType, DesktopApp } from '@/phases/preface/desktopAppTypes'
import { useRef } from 'react'

const desktopApps: DesktopApp[] = [
	{
		appType: DesktopAppType.File,
		label: 'creation',
		content: 'I created this while listening to "Never See me Again" by Kanye West',
		position: { x: 100, y: 24 }
	}
]

export const Desktop = () => {
	const desktopRef = useRef<HTMLDivElement>(null)

	return (
		<div ref={desktopRef} className={styles.desktop}>
			{desktopApps.map((desktopApp, index) => (
				desktopApp.appType === DesktopAppType.File ? (
					<FileAppComponent
						key={index}
						label={desktopApp.label}
						content={desktopApp.content}
						position={desktopApp.position}
						desktopRef={desktopRef}
					/>
				) : (
					<PhotoAppComponent
						key={index}
					/>
				)
			))}
		</div>
	)
}