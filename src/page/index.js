/*
 * @Author: caoweiju 
 * @Date: 2019-09-23 23:16:46 
 * @Last Modified by: caoweiju
 * @Last Modified time: 2020-06-16 18:40:47
 */

import {Component} from 'React';
import {render} from 'ReactDom';

import './index.scss';

class Welcome extends Component {
 render() {
   return <div className="app">
     <h1 className="tit">Hello, caoweiju is my name!</h1>
   </div>
 }
}

render(
   <Welcome />,
   document.getElementById('root')
);

// 支持热更新
if(process.env.NODE_ENV === 'development') {
 if (module.hot) {
   module.hot.accept();
 }
}
