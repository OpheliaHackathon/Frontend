/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as LayoutImport } from './routes/_layout'

// Create Virtual Routes

const RegisterLazyImport = createFileRoute('/register')()
const LoginLazyImport = createFileRoute('/login')()
const LayoutLeaderboardLazyImport = createFileRoute('/_layout/leaderboard')()
const LayoutDashboardLazyImport = createFileRoute('/_layout/dashboard')()
const LayoutAccountLazyImport = createFileRoute('/_layout/account')()

// Create/Update Routes

const RegisterLazyRoute = RegisterLazyImport.update({
  id: '/register',
  path: '/register',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/register.lazy').then((d) => d.Route))

const LoginLazyRoute = LoginLazyImport.update({
  id: '/login',
  path: '/login',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/login.lazy').then((d) => d.Route))

const LayoutRoute = LayoutImport.update({
  id: '/_layout',
  getParentRoute: () => rootRoute,
} as any)

const LayoutLeaderboardLazyRoute = LayoutLeaderboardLazyImport.update({
  id: '/leaderboard',
  path: '/leaderboard',
  getParentRoute: () => LayoutRoute,
} as any).lazy(() =>
  import('./routes/_layout/leaderboard.lazy').then((d) => d.Route),
)

const LayoutDashboardLazyRoute = LayoutDashboardLazyImport.update({
  id: '/dashboard',
  path: '/dashboard',
  getParentRoute: () => LayoutRoute,
} as any).lazy(() =>
  import('./routes/_layout/dashboard.lazy').then((d) => d.Route),
)

const LayoutAccountLazyRoute = LayoutAccountLazyImport.update({
  id: '/account',
  path: '/account',
  getParentRoute: () => LayoutRoute,
} as any).lazy(() =>
  import('./routes/_layout/account.lazy').then((d) => d.Route),
)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/_layout': {
      id: '/_layout'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof LayoutImport
      parentRoute: typeof rootRoute
    }
    '/login': {
      id: '/login'
      path: '/login'
      fullPath: '/login'
      preLoaderRoute: typeof LoginLazyImport
      parentRoute: typeof rootRoute
    }
    '/register': {
      id: '/register'
      path: '/register'
      fullPath: '/register'
      preLoaderRoute: typeof RegisterLazyImport
      parentRoute: typeof rootRoute
    }
    '/_layout/account': {
      id: '/_layout/account'
      path: '/account'
      fullPath: '/account'
      preLoaderRoute: typeof LayoutAccountLazyImport
      parentRoute: typeof LayoutImport
    }
    '/_layout/dashboard': {
      id: '/_layout/dashboard'
      path: '/dashboard'
      fullPath: '/dashboard'
      preLoaderRoute: typeof LayoutDashboardLazyImport
      parentRoute: typeof LayoutImport
    }
    '/_layout/leaderboard': {
      id: '/_layout/leaderboard'
      path: '/leaderboard'
      fullPath: '/leaderboard'
      preLoaderRoute: typeof LayoutLeaderboardLazyImport
      parentRoute: typeof LayoutImport
    }
  }
}

// Create and export the route tree

interface LayoutRouteChildren {
  LayoutAccountLazyRoute: typeof LayoutAccountLazyRoute
  LayoutDashboardLazyRoute: typeof LayoutDashboardLazyRoute
  LayoutLeaderboardLazyRoute: typeof LayoutLeaderboardLazyRoute
}

const LayoutRouteChildren: LayoutRouteChildren = {
  LayoutAccountLazyRoute: LayoutAccountLazyRoute,
  LayoutDashboardLazyRoute: LayoutDashboardLazyRoute,
  LayoutLeaderboardLazyRoute: LayoutLeaderboardLazyRoute,
}

const LayoutRouteWithChildren =
  LayoutRoute._addFileChildren(LayoutRouteChildren)

export interface FileRoutesByFullPath {
  '': typeof LayoutRouteWithChildren
  '/login': typeof LoginLazyRoute
  '/register': typeof RegisterLazyRoute
  '/account': typeof LayoutAccountLazyRoute
  '/dashboard': typeof LayoutDashboardLazyRoute
  '/leaderboard': typeof LayoutLeaderboardLazyRoute
}

export interface FileRoutesByTo {
  '': typeof LayoutRouteWithChildren
  '/login': typeof LoginLazyRoute
  '/register': typeof RegisterLazyRoute
  '/account': typeof LayoutAccountLazyRoute
  '/dashboard': typeof LayoutDashboardLazyRoute
  '/leaderboard': typeof LayoutLeaderboardLazyRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/_layout': typeof LayoutRouteWithChildren
  '/login': typeof LoginLazyRoute
  '/register': typeof RegisterLazyRoute
  '/_layout/account': typeof LayoutAccountLazyRoute
  '/_layout/dashboard': typeof LayoutDashboardLazyRoute
  '/_layout/leaderboard': typeof LayoutLeaderboardLazyRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | ''
    | '/login'
    | '/register'
    | '/account'
    | '/dashboard'
    | '/leaderboard'
  fileRoutesByTo: FileRoutesByTo
  to: '' | '/login' | '/register' | '/account' | '/dashboard' | '/leaderboard'
  id:
    | '__root__'
    | '/_layout'
    | '/login'
    | '/register'
    | '/_layout/account'
    | '/_layout/dashboard'
    | '/_layout/leaderboard'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  LayoutRoute: typeof LayoutRouteWithChildren
  LoginLazyRoute: typeof LoginLazyRoute
  RegisterLazyRoute: typeof RegisterLazyRoute
}

const rootRouteChildren: RootRouteChildren = {
  LayoutRoute: LayoutRouteWithChildren,
  LoginLazyRoute: LoginLazyRoute,
  RegisterLazyRoute: RegisterLazyRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/_layout",
        "/login",
        "/register"
      ]
    },
    "/_layout": {
      "filePath": "_layout.tsx",
      "children": [
        "/_layout/account",
        "/_layout/dashboard",
        "/_layout/leaderboard"
      ]
    },
    "/login": {
      "filePath": "login.lazy.tsx"
    },
    "/register": {
      "filePath": "register.lazy.tsx"
    },
    "/_layout/account": {
      "filePath": "_layout/account.lazy.tsx",
      "parent": "/_layout"
    },
    "/_layout/dashboard": {
      "filePath": "_layout/dashboard.lazy.tsx",
      "parent": "/_layout"
    },
    "/_layout/leaderboard": {
      "filePath": "_layout/leaderboard.lazy.tsx",
      "parent": "/_layout"
    }
  }
}
ROUTE_MANIFEST_END */
