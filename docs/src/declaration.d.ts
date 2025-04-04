declare module '*.module.css' {
  const classes: { [key: string]: string };
  export default classes;
}

declare module '@docusaurus/useDocusaurusContext' {
  const useDocusaurusContext: any;
  export default useDocusaurusContext;
}

declare module '@docusaurus/Link' {
  import type{FC} from 'react';
  const Link: React.FC<any>;
  export default Link;
}
declare module '@theme/Layout' {
  import type{ FC, ReactNode } from 'react';
  interface LayoutProps {
    children?: ReactNode;
    title?: string;  
    description?: string;
  }
  const Layout: FC<LayoutProps>;
  export default Layout;
}