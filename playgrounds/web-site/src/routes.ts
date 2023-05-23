import { IRouterConfig, lazy } from 'ice'

// import Layout from '@/layouts/Layout'
import BasicLayout from '@/layouts/BasicLayout'

const Homepage = lazy(() => import('@/pages/Homepage'))

const TCPAsyncPolling = lazy(() => import('@/pages/TCP.async.polling'))
const TCPAsyncSleep = lazy(() => import('@/pages/TCP.async.sleep'))

const TCPNetFetchGet = lazy(() => import('@/pages/TCP.net.fetch.get'))

const TCClipboardPasteImage = lazy(() => import('@/pages/TCP.clipboard.paste.image'))

const routerConfig: IRouterConfig[] = [
  {
    path: '/',
    component: BasicLayout,
    children: [
      {
        path: '/',
        exact: true,
        component: Homepage,
      },
      {
        path: '/tc-async',
        children: [
          {
            path: '/tc-async-polling',
            component: TCPAsyncPolling,
          },
          {
            path: '/tc-async-sleep',
            component: TCPAsyncSleep,
          },
        ],
      },
      {
        path: '/tc-net',
        children: [
          {
            path: '/tc-net-fetch-get',
            component: TCPNetFetchGet,
          },
        ],
      },
      {
        path: '/tc-clipboard',
        children: [
          {
            path: '/tc-clipboard-paste-image',
            component: TCClipboardPasteImage,
          },
        ],
      },
    ],
  },
]
export default routerConfig
