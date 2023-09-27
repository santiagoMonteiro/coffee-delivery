import { useState } from 'react'
import styles from './styles.module.scss'
import { Minus, Plus } from '@phosphor-icons/react'

export function  AmountSelector() {
  const [value, setValue] = useState(0)

  function updateValue(valueToAdd: number) {
    const isValidValue = value + valueToAdd >= 0

    if (isValidValue) {
      setValue(value + valueToAdd)
    }
  }

  return (
    <div className={styles.container}>
      <button onClick={() => updateValue(-1)}>
        <Minus weight='bold'/>
      </button>
      <span className={styles.value}>{value}</span>
      <button onClick={() => updateValue(1)}>
        <Plus weight='bold'/>
      </button>
    </div>
  )
}
