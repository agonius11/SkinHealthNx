import styles from './app.module.css';
import 'antd/dist/antd.css';
import React from 'react';
import { Card, Layout,ContentTop,ContentLeft,ContentRight,Button } from "@nx-app/components";


export function App() {
  return (
    <Layout>

    <div className={styles.app}>
         <Card />
    </div>

    </Layout>

  );
}
export default App;
