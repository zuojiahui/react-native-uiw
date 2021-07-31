import { Fragment } from 'react';
import Header from '../Header';
import SubMenus, { MenuData } from '../SubMenus';
import styles from './index.module.less';

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  data: MenuData[]
}

export default function Container(props: ContainerProps) {
  const { data, children } = props;
  return (
    <Fragment>
      <Header />
      <div className={styles.warpper}>
        <SubMenus data={data} />
        <div style={{ flex: 1, overflow: 'hidden' }}>
          {children}
        </div>
      </div>
    </Fragment>
  )
}