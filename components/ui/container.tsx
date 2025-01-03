import type { ReactNode } from 'react'
import { View } from 'react-native'
import { twMerge } from 'tailwind-merge'

export const Container = ({ className, children }: { className?: string; children: ReactNode }) => {
  return (
    <View
      className={twMerge(
        'px-3 py-2 border dark:border-stone-700 dark:bg-stone-900 bg-stone-100 border-stone-200 rounded-xl',
        className,
      )}
    >
      {children}
    </View>
  )
}
