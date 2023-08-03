import styles from './styles.module.scss'

interface TagsProps {
  tagList: string[]
}

export function CoffeeTags({ tagList }: TagsProps) {
  return (
    <div className={styles.tagContainer}>
      {tagList.map((tag) => {
        return <span className={styles.tag}>{tag}</span>
      })}
    </div>
  )
}
