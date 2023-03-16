import { type store } from './index'

declare type RootState = ReturnType<typeof store.getState>
