type RouteInfo = {
  label: string;
  path: string;
}

export const routes: RouteInfo[] = [
  {
    label: 'Home',
    path: '/'
  },
  {
    label: 'Admin',
    path: '/admin'
  },
];

export const isActive = (asPath: string, href: string) => href === '/' ? asPath === href : asPath.includes(href);
