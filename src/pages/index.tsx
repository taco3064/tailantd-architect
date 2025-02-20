import { Link, Outlet, type RouteObject } from 'react-router-dom';
import { List, Typography } from 'antd';
import { lazy } from 'react';

import { App } from '~ata/containers';
import { DemoContainer } from '~ata/components';

export default [
  {
    path: '/',
    element: (
      <App>
        <Outlet />
      </App>
    ),
    children: verifyPages([
      {
        path: '/button',
        Component: lazy(() => import('./Button')),
      },
      {
        path: '/',
        element: (
          <DemoContainer disableBackButton title="Antd + Tailwind Demo">
            <List>
              {import.meta.env.VITE_DEMO_COMPONENTS.map((component) => (
                <List.Item key={component}>
                  <Link className="w-full" to={`/${component}`}>
                    <Typography.Title
                      className="text-center capitalize text-info-dark"
                      level={4}
                    >
                      {component}
                    </Typography.Title>
                  </Link>
                </List.Item>
              ))}
            </List>
          </DemoContainer>
        ),
      },
    ]),
  },
] satisfies RouteObject[];

function verifyPages(pages: RouteObject[]) {
  const components = import.meta.env.VITE_DEMO_COMPONENTS;

  return pages.map((page) => {
    const { path } = page;
    const component = path?.replace(/^\//, '');

    if (path === '/' || (component && components.includes(component))) {
      return page;
    }

    return {
      path,
      element: (
        <DemoContainer title="Invalid Demo Component Setting">
          <Typography.Title level={4} className="text-gray text-center mt-8">
            "{component}" Is Not A Valid Demo Component.
            <br />
            Please Check "vite.config.ts".
          </Typography.Title>
        </DemoContainer>
      ),
    };
  });
}
