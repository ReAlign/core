import R from '@/routes'

const getAsideMenuConfig = () => {
  return R[0].children?.map(({ path, children = [] }) => {
    return {
      name: path === '/' ? 'Home' : path?.substring(1).replace(/-/g, '.'),
      path,
      children: children.length
        ? children.map(({ path: ph }) => ({
          name: ph?.substring(1).replace(/-/g, '.'),
          path: `${path}${ph}`,
        }))
        : [],
    }
  }) || []
}

export {
  getAsideMenuConfig,
}
