import React from 'react'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  layout: 'centered',
  controls: { expanded: true },
}

export const decorators = [
  Story => (
      <div data-theme='light'>
        <Story />
      </div>
  ),
]