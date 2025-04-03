interface RouteConfig {
    path: string;
    label: string;
  }
  
  interface RouteMap {
    [key: string]: {
      prev: RouteConfig | null;
      next: RouteConfig | null;
    };
  }
  
  export const routeMap: RouteMap = {
    '/home': {
      prev: null,
      next: { path: '/work', label: 'Work History' }
    },
    '/work': {
      prev: { path: '/home', label: 'Overview' },
      next: { path: '/education', label: 'Education' }
    },
    '/education': {
      prev: { path: '/work', label: 'Work History' },
      next: null
    }
  };