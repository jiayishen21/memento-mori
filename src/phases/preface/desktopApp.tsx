import styles from '@/phases/preface/styles.module.css'
import { Position } from '@/phases/preface/desktopAppTypes'
import { ReactSVG } from 'react-svg'
import fileIcon from '@/assets/preface/file.svg'
import { useEffect, useRef, useState } from 'react'

interface FileAppProps {
	label?: string
	content: string
	position: Position
	desktopRef: React.RefObject<HTMLDivElement>
}

export const FileAppComponent = (props: FileAppProps) => {
	const { label, content, position, desktopRef } = props
	const [dragging, setDragging] = useState(false)
	const [dragPosition, setDragPosition] = useState<Position>(position)
	const dragOffset = useRef<Position>({ x: 0, y: 0 })

	const handleMouseDown = (e: React.MouseEvent<HTMLElement>) => {
		setDragging(true)
		dragOffset.current = {
			x: e.clientX - dragPosition.x,
			y: e.clientY - dragPosition.y,
		}

		e.currentTarget.style.cursor = 'grabbing'
	}

	const handleMouseMove = (e: MouseEvent) => {
		if (dragging && desktopRef.current) {
			const desktopRect = desktopRef.current.getBoundingClientRect()

			const newX = Math.min(
				Math.max(e.clientX - dragOffset.current.x, 0),
				desktopRect.width - 80
			)
			const newY = Math.min(
				Math.max(e.clientY - dragOffset.current.y, 0),
				desktopRect.height - 80
			)

			setDragPosition({ x: newX, y: newY })
		}
	}

	const handleMouseUp = (e: MouseEvent) => {
		setDragging(false)

		if (e.currentTarget instanceof HTMLElement) {
			e.currentTarget.style.cursor = 'grab'
		}
	}

	useEffect(() => {
		if (dragging) {
			document.addEventListener('mousemove', handleMouseMove);
			document.addEventListener('mouseup', handleMouseUp);
		} else {
			document.removeEventListener('mousemove', handleMouseMove);
			document.removeEventListener('mouseup', handleMouseUp);
		}

		return () => {
			document.removeEventListener('mousemove', handleMouseMove);
			document.removeEventListener('mouseup', handleMouseUp);
		};
	}, [dragging])

	return (
		<div
			className={styles.fileApp}
			style={{
				top: dragPosition.y,
				left: dragPosition.x,
				cursor: 'grab',
			}}
			onMouseDown={handleMouseDown}
		>
			<ReactSVG src={fileIcon} />
			{label && (
				<p className={styles.fileName}>
					{label}
				</p>
			)}
		</div>
	)
}

export const PhotoAppComponent = () => {

	return (
		<div>

		</div>
	)
}
