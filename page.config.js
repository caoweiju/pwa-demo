/*
 * @Author: caoweiju
 * @Date: 2019-09-28 19:18:17
 * @Last Modified by: caoweiju
 * @Last Modified time: 2020-06-16 18:41:32
 */

// 页面相关配置
module.exports = {
    home: {
        entry: './src/page/index.js',
        options: {
            hash: true,
            template: './template/index.html',
            title: '首页',
            filename: 'home.html'
        }
    }
};
