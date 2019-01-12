import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';

ReactDOM.render(<App />, document.getElementById('root'));












































// var a = (num) => {
//     return new Promise((resolve, reject) => {
//         let p;
//         for (let i = 0; i < num; i++) {
//             p = i;
//         }

//         p ? resolve(p) : reject('Fail');
//     });
// }

// a(777777).then((res)=> console.log(res)).catch(e => console.log('qwe ' + e));




// const g = async function() {
//     try {
//         let s = await a(888888);
//         let res = s + 'AAA';
//         console.log(res);
//     } catch (error) {
//         console.log(error);
//     }
// }
// g();