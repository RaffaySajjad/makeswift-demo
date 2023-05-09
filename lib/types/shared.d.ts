import { ArgsStoryFn, StoryContext } from '@storybook/addons'
import {
  SupportedPlatform,
  PlatformApiType,
} from 'frontend-checkout/dist/types'

export type PropsOf<C> = React.ComponentPropsWithRef<C>

export interface Media {
  name: string
  src: string
  alt?: string
  width: number
  height: number
}

export interface MoneyInfo {
  amount: string
  currencyCode: string
}

export type Platform = SupportedPlatform
export type ApiType = PlatformApiType

export interface NormalizeHook<FROM, TO> {
  (model: FROM): TO
  (model: null | undefined): null
}

export type DecoratorFunction<StoryFnReturnType = unknown> = (
  fn: ArgsStoryFn<StoryFnReturnType>,
  c: StoryContext,
) => ReturnType<ArgsStoryFn<StoryFnReturnType>>

export interface Image {
  id: number
  created_at: string
  updated_at: string
  alt: string
  width: number
  height: number
  src: string
}

export enum Dimension {
  SIZE = 'Size',
  COLOR = 'Color',
}

export interface Microcopy {
  name: string
  key: string
  value: string
}

export interface Copy {
  name: string
  key: string
  value: string
}
