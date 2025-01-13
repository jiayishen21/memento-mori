import styles from '@/phases/preface/styles.module.css'
import { Desktop } from '@/phases/preface/desktop'

export const Preface = () => {
	return (
		<section className={styles.preface}>
			<div className={styles.split}>
				<div>
					<h1 className={styles.title}>Preface</h1>
					<p className={styles.date}>01/12/2025</p>
				</div>
				<div>
					<p className={styles.explanation}>
						This is not blog.
					</p>
					<p className={styles.explanation}>
						This experience is not built to be viewed by other people, but rather a document for a future me to see, so some creative choices may be confusing.
					</p>
				</div>
			</div>

			<div className={styles.splitFullHeight}>
				<div className={styles.reflectionContainer}>
					<p className={styles.reflection}>
						When looking back on life, I tend to think that:
					</p>
					<p className={styles.reflection}>
						Yesterday's me was so foolish.
					</p>
					<p className={styles.reflection}>
						The me from several years ago was even more foolish,
					</p>
					<p className={styles.reflection}>
						but a part of me wishes I could be taken back there.
					</p>
				</div>

				<Desktop />
			</div>
		</section>
	)
}
