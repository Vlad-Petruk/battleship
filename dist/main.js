(()=>{"use strict";const e=e=>{let a=0;return{hit:function(){a+=1},isSunk:function(){return e<=a},length:e,getHits:()=>a}},a=e=>{const a=function(){const e=[];for(let a=0;a<=9;a++){e[a]=[];for(let o=0;o<=9;o++)e[a][o]=""}return e}(),o=[];function r(e){return!(e<0||e>9)}function t(){let a=0;for(let e of o)!0===e.isSunk&&a++;if(console.log(a),a>=10)return console.log(`${e} lose`),!0}return{gameboard:a,placeShip:function(e,t,n,l){if(!r(e)||!r(t)||""!==a[e][t])return console.log("Index out of board");if("vertical"===l&&r(e+n.length-1))for(let r=e;r<e+n.length;r++){if(""!==a[r][t])return console.log("Invalid spot");a[r][t]={type:`${n.length}ship`,ship:n,value:"O",isSunk:!1},o.push(a[r][t])}if("horizontal"===l&&r(t+n.length-1))for(let r=t;r<t+n.length;r++){if(""!==a[e][r])return console.log("Invalid spot");a[e][r]={type:`${n.length}ship`,ship:n,value:"O",isSunk:!1},o.push(a[e][r])}return a},receiveAttack:function(e,o){if(!r(e)||!r(o)||!0===t())return console.log("Attack out of board");{let r=a[e][o];if("●"===r)return;""===r?(a[e][o]="●",console.log("Miss")):"O"===r.value&&(r.ship.hit(),r.value="X",r.ship.isSunk()&&(r.isSunk=!0,function(e,o){const r=[a[e+1]?.[o],a[e-1]?.[o],a[e]?.[o+1],a[e]?.[o-1],a[e+1]?.[o+1],a[e-1]?.[o-1],a[e-1]?.[o+1],a[e+1]?.[o-1]];for(let t=0;t<r.length;t++)if(void 0!==r[t]&&"O"!==r[t].value&&"X"!==r[t].value)switch(r[t]="●",t){case 0:a[e+1][o]="●";break;case 1:a[e-1][o]="●";break;case 2:a[e][o+1]="●";break;case 3:a[e][o-1]="●";break;case 4:a[e+1][o+1]="●";break;case 5:a[e-1][o-1]="●";break;case 6:a[e-1][o+1]="●";break;case 7:a[e+1][o-1]="●"}}(e,o),console.log("Sunk")),console.log(r.isSunk),t())}},checkEndGame:t}},o=e=>({type:e,gameboard:a(e)});document.addEventListener("DOMContentLoaded",(()=>{const a=document.querySelector(".gameboard-one"),r=document.querySelector(".gameboard-two"),t=o("You"),n=o("Computer"),l=e(4),i=e(3),d=e(3),c=e(2),g=e(2),m=e(2),b=e(1),s=e(1),h=e(1),p=e(1);t.gameboard.placeShip(0,0,l,"horizontal"),t.gameboard.placeShip(9,6,i,"horizontal"),t.gameboard.placeShip(0,9,d,"vertical"),t.gameboard.placeShip(8,0,c,"horizontal"),t.gameboard.placeShip(5,4,g,"vertical"),t.gameboard.placeShip(2,6,m,"horizontal"),t.gameboard.placeShip(8,4,b,"horizontal"),t.gameboard.placeShip(2,2,s,"horizontal"),t.gameboard.placeShip(7,8,h,"horizontal"),t.gameboard.placeShip(5,0,p,"horizontal"),n.gameboard.placeShip(0,0,l,"horizontal"),n.gameboard.placeShip(9,6,i,"horizontal"),n.gameboard.placeShip(0,9,d,"vertical"),n.gameboard.placeShip(8,0,c,"horizontal"),n.gameboard.placeShip(5,4,g,"vertical"),n.gameboard.placeShip(2,6,m,"horizontal"),n.gameboard.placeShip(8,4,b,"horizontal"),n.gameboard.placeShip(2,2,s,"horizontal"),n.gameboard.placeShip(7,8,h,"horizontal"),n.gameboard.placeShip(5,0,p,"horizontal");const u=function(e,a){const o=document.createElement("div");function r(){o.textContent="";for(let a=0;a<e.gameboard.gameboard.length;a++)for(let r=0;r<e.gameboard.gameboard[a].length;r++){const t=document.createElement("div");"object"==typeof e.gameboard.gameboard[a][r]?(e.gameboard.gameboard[a][r].value="O")&&(t.innerHTML=e.gameboard.gameboard[a][r].value,t.classList.add("black")):"X"===e.gameboard.gameboard[a][r]?(t.innerHTML=e.gameboard.gameboard[a][r],t.classList.add("orange")):t.innerHTML=e.gameboard.gameboard[a][r],o.appendChild(t)}a.append(o)}return o.classList.add("container"),{render:r,attack:function(){let a=Math.floor(10*Math.random()),o=Math.floor(10*Math.random());"●"!==e.gameboard.gameboard[a][o]&&"X"!==e.gameboard.gameboard[a][o].value&&(e.gameboard.receiveAttack(a,o),"object"==typeof e.gameboard.gameboard[a][o]?(e.gameboard.gameboard[a][o]=e.gameboard.gameboard[a][o].value,r()):r())}}}(t,a);!function(e,a){const o=document.createElement("div");o.classList.add("container");for(let a=0;a<e.gameboard.gameboard.length;a++)for(let r=0;r<e.gameboard.gameboard[a].length;r++){const t=document.createElement("div");o.appendChild(t),t.addEventListener("click",(()=>{e.gameboard.receiveAttack([a],[r]),"object"==typeof e.gameboard.gameboard[a][r]?(t.innerHTML=e.gameboard.gameboard[a][r].value,t.classList.add("orange")):t.innerHTML=e.gameboard.gameboard[a][r]}))}a.append(o)}(n,r),u.render(),u.attack(),u.attack(),console.log(t.gameboard.gameboard)}))})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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ZXNoaXAvLi9zcmMvZ2FtZWJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvcGxheWVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9VSS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBTaGlwID0gKHNoaXBMZW5ndGgpID0+IHtcbiAgY29uc3QgbGVuZ3RoID0gc2hpcExlbmd0aDtcbiAgbGV0IGhpdHMgPSAwO1xuXG4gIGZ1bmN0aW9uIGhpdCgpIHtcbiAgICBoaXRzICs9IDE7XG4gIH1cblxuICBmdW5jdGlvbiBpc1N1bmsoKSB7XG4gICAgaWYgKHNoaXBMZW5ndGggPD0gaGl0cykge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBlbHNlIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgaGl0LFxuICAgIGlzU3VuayxcbiAgICBsZW5ndGgsXG4gICAgZ2V0SGl0czogKCkgPT4gaGl0cyxcbiAgfTtcbn07XG5cbmV4cG9ydCB7IFNoaXAgfTtcbiIsImltcG9ydCB7IFNoaXAgfSBmcm9tIFwiLi9zaGlwXCI7XG5cbmNvbnN0IEdhbWVib2FyZCA9IChwbGF5ZXIpID0+IHtcbiAgZnVuY3Rpb24gY3JlYXRlR2FtZUJvYXJkKCkge1xuICAgIGNvbnN0IGdhbWVCb2FyZCA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDw9IDk7IGkrKykge1xuICAgICAgZ2FtZUJvYXJkW2ldID0gW107XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8PSA5OyBqKyspIHtcbiAgICAgICAgZ2FtZUJvYXJkW2ldW2pdID0gXCJcIjtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGdhbWVCb2FyZDtcbiAgfVxuXG4gIGNvbnN0IGdhbWVib2FyZCA9IGNyZWF0ZUdhbWVCb2FyZCgpO1xuICBjb25zdCBzaGlwcyA9IFtdO1xuXG4gIGZ1bmN0aW9uIF9pc1dpdGhpbkJvdW5kcyhpbmRleCkge1xuICAgIGlmIChpbmRleCA8IDAgfHwgaW5kZXggPiA5KSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIC8vc3RhcnQgYW5kIGVuZCBoZXJlIC0gaW5kZXhlcyBvZiB0aGUgYm9yZCdzIGNlbGxzIHdoZXJlIGkgd2FudCB0byBwbGFjZSBzaGlwXG4gIC8vIHRoZSBjb29yZGluYXRlIG9iamVjdCBzaG91bGQgaGF2ZSBhIHJlZmVyZW5jZSB0byB0aGUgc2hpcCBpbiBpdHMgbG9jYXRpb24uXG4gIGZ1bmN0aW9uIHBsYWNlU2hpcChjb2wsIHJvdywgc2hpcCwgZGlyZWN0aW9uKSB7XG4gICAgaWYgKFxuICAgICAgX2lzV2l0aGluQm91bmRzKGNvbCkgJiZcbiAgICAgIF9pc1dpdGhpbkJvdW5kcyhyb3cpICYmXG4gICAgICBnYW1lYm9hcmRbY29sXVtyb3ddID09PSBcIlwiXG4gICAgKSB7XG4gICAgICBpZiAoZGlyZWN0aW9uID09PSBcInZlcnRpY2FsXCIgJiYgX2lzV2l0aGluQm91bmRzKGNvbCArIHNoaXAubGVuZ3RoIC0gMSkpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IGNvbDsgaSA8IGNvbCArIHNoaXAubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBpZiAoZ2FtZWJvYXJkW2ldW3Jvd10gPT09IFwiXCIpIHtcbiAgICAgICAgICAgIGdhbWVib2FyZFtpXVtyb3ddID0ge1xuICAgICAgICAgICAgICB0eXBlOiBgJHtzaGlwLmxlbmd0aH1zaGlwYCxcbiAgICAgICAgICAgICAgc2hpcDogc2hpcCxcbiAgICAgICAgICAgICAgdmFsdWU6IFwiT1wiLFxuICAgICAgICAgICAgICBpc1N1bms6IGZhbHNlLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHNoaXBzLnB1c2goZ2FtZWJvYXJkW2ldW3Jvd10pO1xuICAgICAgICAgIH0gZWxzZSByZXR1cm4gY29uc29sZS5sb2coXCJJbnZhbGlkIHNwb3RcIik7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKFxuICAgICAgICBkaXJlY3Rpb24gPT09IFwiaG9yaXpvbnRhbFwiICYmXG4gICAgICAgIF9pc1dpdGhpbkJvdW5kcyhyb3cgKyBzaGlwLmxlbmd0aCAtIDEpXG4gICAgICApIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IHJvdzsgaSA8IHJvdyArIHNoaXAubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBpZiAoZ2FtZWJvYXJkW2NvbF1baV0gPT09IFwiXCIpIHtcbiAgICAgICAgICAgIGdhbWVib2FyZFtjb2xdW2ldID0ge1xuICAgICAgICAgICAgICB0eXBlOiBgJHtzaGlwLmxlbmd0aH1zaGlwYCxcbiAgICAgICAgICAgICAgc2hpcDogc2hpcCxcbiAgICAgICAgICAgICAgdmFsdWU6IFwiT1wiLFxuICAgICAgICAgICAgICBpc1N1bms6IGZhbHNlLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHNoaXBzLnB1c2goZ2FtZWJvYXJkW2NvbF1baV0pO1xuICAgICAgICAgIH0gZWxzZSByZXR1cm4gY29uc29sZS5sb2coXCJJbnZhbGlkIHNwb3RcIik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGNvbnNvbGUubG9nKFwiSW5kZXggb3V0IG9mIGJvYXJkXCIpO1xuICAgIH1cblxuICAgIHJldHVybiBnYW1lYm9hcmQ7XG4gIH1cbiAgXG5cbiAgLy9DdXJyZW50bHkgdGVzdGluZyB0aGlzIGluIGluZGV4LmpzXG4gIGZ1bmN0aW9uIHJlY2VpdmVBdHRhY2soY29sLCByb3cpIHtcbiAgICBpZiAoX2lzV2l0aGluQm91bmRzKGNvbCkgJiYgX2lzV2l0aGluQm91bmRzKHJvdykmJmNoZWNrRW5kR2FtZSgpICE9PSB0cnVlKSB7XG4gICAgICBsZXQgYm9hcmRDZWxsID0gZ2FtZWJvYXJkW2NvbF1bcm93XTtcbiAgICAgIGlmIChib2FyZENlbGwgPT09ICdcXHUyNUNGJykge1xuICAgICAgICByZXR1cm47XG4gICAgICB9IGVsc2UgaWYgKGJvYXJkQ2VsbCA9PT0gXCJcIikge1xuICAgICAgICBnYW1lYm9hcmRbY29sXVtyb3ddID0gJ1xcdTI1Q0YnO1xuICAgICAgICBjb25zb2xlLmxvZyhcIk1pc3NcIik7XG4gICAgICB9IGVsc2UgaWYgKGJvYXJkQ2VsbC52YWx1ZSA9PT0gXCJPXCIpIHtcbiAgICAgICAgYm9hcmRDZWxsLnNoaXAuaGl0KCk7XG4gICAgICAgIGJvYXJkQ2VsbC52YWx1ZSA9IFwiWFwiO1xuICAgICAgICBpZiAoYm9hcmRDZWxsLnNoaXAuaXNTdW5rKCkpIHtcbiAgICAgICAgICBib2FyZENlbGwuaXNTdW5rID0gdHJ1ZTtcbiAgICAgICAgICBfbWFya0NlbGxzQXJvdW5kU3VjY3Nlc3NmdWxsSGl0KGNvbCwgcm93KTtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIlN1bmtcIik7XG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2coYm9hcmRDZWxsLmlzU3Vuayk7XG4gICAgICAgIGNoZWNrRW5kR2FtZSgpXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBjb25zb2xlLmxvZyhcIkF0dGFjayBvdXQgb2YgYm9hcmRcIik7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gX21hcmtDZWxsc0Fyb3VuZFN1Y2NzZXNzZnVsbEhpdChjb2wsIHJvdykge1xuICAgIGNvbnN0IG5laWdoYm91cnMgPSBbXG4gICAgICBnYW1lYm9hcmRbY29sICsgMV0/Lltyb3ddLFxuICAgICAgZ2FtZWJvYXJkW2NvbCAtIDFdPy5bcm93XSxcbiAgICAgIGdhbWVib2FyZFtjb2xdPy5bcm93ICsgMV0sXG4gICAgICBnYW1lYm9hcmRbY29sXT8uW3JvdyAtIDFdLFxuICAgICAgZ2FtZWJvYXJkW2NvbCArIDFdPy5bcm93ICsgMV0sXG4gICAgICBnYW1lYm9hcmRbY29sIC0gMV0/Lltyb3cgLSAxXSxcbiAgICAgIGdhbWVib2FyZFtjb2wgLSAxXT8uW3JvdyArIDFdLFxuICAgICAgZ2FtZWJvYXJkW2NvbCArIDFdPy5bcm93IC0gMV0sXG4gICAgXTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbmVpZ2hib3Vycy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKFxuICAgICAgICBuZWlnaGJvdXJzW2ldICE9PSB1bmRlZmluZWQgJiZcbiAgICAgICAgbmVpZ2hib3Vyc1tpXS52YWx1ZSAhPT0gXCJPXCIgJiZcbiAgICAgICAgbmVpZ2hib3Vyc1tpXS52YWx1ZSAhPT0gXCJYXCJcbiAgICAgICkge1xuICAgICAgICBuZWlnaGJvdXJzW2ldID0gJ1xcdTI1Q0YnO1xuICAgICAgICAvLyBVcGRhdGUgY29ycmVzcG9uZGluZyB2YWx1ZSBpbiBnYW1lYm9hcmQgYXJyYXlcbiAgICAgICAgc3dpdGNoIChpKSB7XG4gICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgZ2FtZWJvYXJkW2NvbCArIDFdW3Jvd10gPSAnXFx1MjVDRic7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICBnYW1lYm9hcmRbY29sIC0gMV1bcm93XSA9ICdcXHUyNUNGJztcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgIGdhbWVib2FyZFtjb2xdW3JvdyArIDFdID0gJ1xcdTI1Q0YnO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgZ2FtZWJvYXJkW2NvbF1bcm93IC0gMV0gPSAnXFx1MjVDRic7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICBnYW1lYm9hcmRbY29sICsgMV1bcm93ICsgMV0gPSAnXFx1MjVDRic7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgICBnYW1lYm9hcmRbY29sIC0gMV1bcm93IC0gMV0gPSAnXFx1MjVDRic7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIDY6XG4gICAgICAgICAgICBnYW1lYm9hcmRbY29sIC0gMV1bcm93ICsgMV0gPSAnXFx1MjVDRic7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIDc6XG4gICAgICAgICAgICBnYW1lYm9hcmRbY29sICsgMV1bcm93IC0gMV0gPSAnXFx1MjVDRic7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBjaGVja0VuZEdhbWUoKSB7XG4gICAgbGV0IGNvdW50ZXIgPSAwO1xuICAgIGZvciAobGV0IHNoaXAgb2Ygc2hpcHMpIHtcbiAgICAgIGlmIChzaGlwLmlzU3VuayA9PT0gdHJ1ZSkge1xuICAgICAgICBjb3VudGVyKys7XG4gICAgICB9XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKGNvdW50ZXIpO1xuICAgIGlmIChjb3VudGVyID49IDEwKSB7XG4gICAgICBjb25zb2xlLmxvZyhgJHtwbGF5ZXJ9IGxvc2VgKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgZ2FtZWJvYXJkLFxuICAgIHBsYWNlU2hpcCxcbiAgICByZWNlaXZlQXR0YWNrLFxuICAgIGNoZWNrRW5kR2FtZSxcbiAgfTtcbn07XG5cbmV4cG9ydCB7IEdhbWVib2FyZCB9O1xuIiwiaW1wb3J0IHsgR2FtZWJvYXJkIH0gZnJvbSBcIi4vZ2FtZWJvYXJkXCJcclxuXHJcbmNvbnN0IFBsYXllciA9IChwbGF5ZXJ0eXBlKSA9PiB7XHJcbiAgICBjb25zdCB0eXBlID0gcGxheWVydHlwZTtcclxuXHJcbiAgICBjb25zdCBnYW1lYm9hcmQgPSBHYW1lYm9hcmQocGxheWVydHlwZSk7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB0eXBlLFxyXG4gICAgICAgIGdhbWVib2FyZFxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQge1BsYXllcn0iLCJpbXBvcnQgeyBHYW1lYm9hcmQgfSBmcm9tIFwiLi9nYW1lYm9hcmRcIjtcbmltcG9ydCB7IFNoaXAgfSBmcm9tIFwiLi9zaGlwXCI7XG5pbXBvcnQgeyBQbGF5ZXIgfSBmcm9tIFwiLi9wbGF5ZXJcIjtcbmltcG9ydCB7IHJlbmRlclBsYXllckdhbWVib2FyZCwgcmVuZGVyQ29tcEdhbWVib2FyZCB9IGZyb20gXCIuL1VJXCI7XG5cblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgICBjb25zdCBwbGF5ZXJCb2FyZEJveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYW1lYm9hcmQtb25lJyk7XG4gICAgY29uc3QgY29tcHV0ZXJCb2FyZEJveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYW1lYm9hcmQtdHdvJyk7XG5cbiAgICBjb25zdCByZWFsUGxheWVyID0gUGxheWVyKCdZb3UnKTtcbiAgICBjb25zdCBjb21wUGxheWVyID0gUGxheWVyKCdDb21wdXRlcicpO1xuXG4gICAgY29uc3QgZm91clNoaXAgPSBTaGlwKDQpXG4gICAgY29uc3QgdGhyZWVTaGlwT25lID0gU2hpcCgzKTtcbiAgICBjb25zdCB0aHJlZVNoaXBUd28gPSBTaGlwKDMpO1xuICAgIGNvbnN0IHR3b1NoaXBPbmUgPSBTaGlwKDIpO1xuICAgIGNvbnN0IHR3b1NoaXBUd28gPSBTaGlwKDIpO1xuICAgIGNvbnN0IHR3b1NoaXBUaHJlZSA9IFNoaXAoMik7XG4gICAgY29uc3Qgb25lU2hpcE9uZSA9IFNoaXAoMSk7XG4gICAgY29uc3Qgb25lU2hpcFR3byA9IFNoaXAoMSk7XG4gICAgY29uc3Qgb25lU2hpcFRocmVlID0gU2hpcCgxKTtcbiAgICBjb25zdCBvbmVTaGlwRm91ciA9IFNoaXAoMSk7XG5cblxuICAgIHJlYWxQbGF5ZXIuZ2FtZWJvYXJkLnBsYWNlU2hpcCgwLDAsIGZvdXJTaGlwLCAnaG9yaXpvbnRhbCcpO1xuICAgIHJlYWxQbGF5ZXIuZ2FtZWJvYXJkLnBsYWNlU2hpcCg5LDYsIHRocmVlU2hpcE9uZSwgJ2hvcml6b250YWwnKTtcbiAgICByZWFsUGxheWVyLmdhbWVib2FyZC5wbGFjZVNoaXAoMCw5LCB0aHJlZVNoaXBUd28sICd2ZXJ0aWNhbCcpO1xuICAgIHJlYWxQbGF5ZXIuZ2FtZWJvYXJkLnBsYWNlU2hpcCg4LDAsIHR3b1NoaXBPbmUsICdob3Jpem9udGFsJyk7XG4gICAgcmVhbFBsYXllci5nYW1lYm9hcmQucGxhY2VTaGlwKDUsNCwgdHdvU2hpcFR3bywgJ3ZlcnRpY2FsJyk7XG4gICAgcmVhbFBsYXllci5nYW1lYm9hcmQucGxhY2VTaGlwKDIsNiwgdHdvU2hpcFRocmVlLCAnaG9yaXpvbnRhbCcpO1xuICAgIHJlYWxQbGF5ZXIuZ2FtZWJvYXJkLnBsYWNlU2hpcCg4LDQsIG9uZVNoaXBPbmUsICdob3Jpem9udGFsJyk7XG4gICAgcmVhbFBsYXllci5nYW1lYm9hcmQucGxhY2VTaGlwKDIsMiwgb25lU2hpcFR3bywgJ2hvcml6b250YWwnKTtcbiAgICByZWFsUGxheWVyLmdhbWVib2FyZC5wbGFjZVNoaXAoNyw4LCBvbmVTaGlwVGhyZWUsICdob3Jpem9udGFsJyk7XG4gICAgcmVhbFBsYXllci5nYW1lYm9hcmQucGxhY2VTaGlwKDUsMCwgb25lU2hpcEZvdXIsICdob3Jpem9udGFsJyk7XG5cbiAgICBjb21wUGxheWVyLmdhbWVib2FyZC5wbGFjZVNoaXAoMCwwLCBmb3VyU2hpcCwgJ2hvcml6b250YWwnKTtcbiAgICBjb21wUGxheWVyLmdhbWVib2FyZC5wbGFjZVNoaXAoOSw2LCB0aHJlZVNoaXBPbmUsICdob3Jpem9udGFsJyk7XG4gICAgY29tcFBsYXllci5nYW1lYm9hcmQucGxhY2VTaGlwKDAsOSwgdGhyZWVTaGlwVHdvLCAndmVydGljYWwnKTtcbiAgICBjb21wUGxheWVyLmdhbWVib2FyZC5wbGFjZVNoaXAoOCwwLCB0d29TaGlwT25lLCAnaG9yaXpvbnRhbCcpO1xuICAgIGNvbXBQbGF5ZXIuZ2FtZWJvYXJkLnBsYWNlU2hpcCg1LDQsIHR3b1NoaXBUd28sICd2ZXJ0aWNhbCcpO1xuICAgIGNvbXBQbGF5ZXIuZ2FtZWJvYXJkLnBsYWNlU2hpcCgyLDYsIHR3b1NoaXBUaHJlZSwgJ2hvcml6b250YWwnKTtcbiAgICBjb21wUGxheWVyLmdhbWVib2FyZC5wbGFjZVNoaXAoOCw0LCBvbmVTaGlwT25lLCAnaG9yaXpvbnRhbCcpO1xuICAgIGNvbXBQbGF5ZXIuZ2FtZWJvYXJkLnBsYWNlU2hpcCgyLDIsIG9uZVNoaXBUd28sICdob3Jpem9udGFsJyk7XG4gICAgY29tcFBsYXllci5nYW1lYm9hcmQucGxhY2VTaGlwKDcsOCwgb25lU2hpcFRocmVlLCAnaG9yaXpvbnRhbCcpO1xuICAgIGNvbXBQbGF5ZXIuZ2FtZWJvYXJkLnBsYWNlU2hpcCg1LDAsIG9uZVNoaXBGb3VyLCAnaG9yaXpvbnRhbCcpO1xuXG4gICAgXG4gICAgY29uc3QgcGxheWVyR2FtZWJvYXJkID0gcmVuZGVyUGxheWVyR2FtZWJvYXJkKHJlYWxQbGF5ZXIsIHBsYXllckJvYXJkQm94KTtcbiAgICByZW5kZXJDb21wR2FtZWJvYXJkKGNvbXBQbGF5ZXIsIGNvbXB1dGVyQm9hcmRCb3gpXG5cbiAgICBwbGF5ZXJHYW1lYm9hcmQucmVuZGVyKCk7XG4gICAgcGxheWVyR2FtZWJvYXJkLmF0dGFjaygpXG4gICAgcGxheWVyR2FtZWJvYXJkLmF0dGFjaygpXG5cbiAgICAvLyBjb21wR2FtZWJvYXJkLnJlbmRlckNvbXBHYW1lYm9hcmQoKVxuICAgIFxuXG5cbiAgICBjb25zb2xlLmxvZyhyZWFsUGxheWVyLmdhbWVib2FyZC5nYW1lYm9hcmQpXG59KTtcblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuLy8gY29uc3QgbXlTaGlwID0gU2hpcCg0KTtcbi8vIGNvbnN0IGFub3RoZXJTaGlwID0gU2hpcCgyKTtcbi8vIGNvbnN0IGJpZ1NoaXAgPSBTaGlwKDQpO1xuLy8gY29uc3QgbmV3Qm9hcmQgPSBHYW1lYm9hcmQoKTtcbi8vIG5ld0JvYXJkLnBsYWNlU2hpcCgwLCAwLCBteVNoaXAsIFwidmVydGljYWxcIik7XG4vLyBuZXdCb2FyZC5wbGFjZVNoaXAoMiwgMiwgYW5vdGhlclNoaXAsIFwiaG9yaXpvbnRhbFwiKTtcbi8vIG5ld0JvYXJkLnBsYWNlU2hpcCg5LCA2LCBiaWdTaGlwLCBcImhvcml6b250YWxcIik7XG5cbi8vIC8vIG5ld0JvYXJkLnJlY2VpdmVBdHRhY2soMCwwKVxuLy8gLy8gbmV3Qm9hcmQucmVjZWl2ZUF0dGFjaygxLDApXG4vLyAvLyBuZXdCb2FyZC5yZWNlaXZlQXR0YWNrKDIsMClcblxuLy8gbmV3Qm9hcmQucmVjZWl2ZUF0dGFjaygyLCAyKTtcbi8vIG5ld0JvYXJkLnJlY2VpdmVBdHRhY2soMiwgMyk7XG5cbi8vIG5ld0JvYXJkLnJlY2VpdmVBdHRhY2soOSwgNyk7XG5cbi8vIGNvbnNvbGUubG9nKG5ld0JvYXJkLmdhbWVib2FyZCk7XG4iLCJpbXBvcnQgeyBHYW1lYm9hcmQgfSBmcm9tIFwiLi9nYW1lYm9hcmRcIjtcclxuaW1wb3J0IHsgUGxheWVyIH0gZnJvbSBcIi4vcGxheWVyXCI7XHJcbmltcG9ydCB7IFNoaXAgfSBmcm9tIFwiLi9zaGlwXCI7XHJcblxyXG5cclxuZnVuY3Rpb24gcmVuZGVyUGxheWVyR2FtZWJvYXJkKHBsYXllciwgYm94KSB7XHJcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjb250YWluZXInKVxyXG4gICAgZnVuY3Rpb24gcmVuZGVyKCkgeyAgIFxyXG4gICAgICAgIGNvbnRhaW5lci50ZXh0Q29udGVudCA9ICcnOyBcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBsYXllci5nYW1lYm9hcmQuZ2FtZWJvYXJkLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgcGxheWVyLmdhbWVib2FyZC5nYW1lYm9hcmRbaV0ubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHNxdWFyZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICAgICAgaWYodHlwZW9mKHBsYXllci5nYW1lYm9hcmQuZ2FtZWJvYXJkW2ldW2pdKSA9PT0gJ29iamVjdCcpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZihwbGF5ZXIuZ2FtZWJvYXJkLmdhbWVib2FyZFtpXVtqXS52YWx1ZSA9ICdPJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcXVhcmUuaW5uZXJIVE1MID0gcGxheWVyLmdhbWVib2FyZC5nYW1lYm9hcmRbaV1bal0udmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNxdWFyZS5jbGFzc0xpc3QuYWRkKCdibGFjaycpXHJcbiAgICAgICAgICAgICAgICAgICAgfSBcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocGxheWVyLmdhbWVib2FyZC5nYW1lYm9hcmRbaV1bal0gPT09IFwiWFwiKXtcclxuICAgICAgICAgICAgICAgICAgICBzcXVhcmUuaW5uZXJIVE1MID0gcGxheWVyLmdhbWVib2FyZC5nYW1lYm9hcmRbaV1bal07IFxyXG4gICAgICAgICAgICAgICAgICAgIHNxdWFyZS5jbGFzc0xpc3QuYWRkKCdvcmFuZ2UnKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3F1YXJlLmlubmVySFRNTCA9IHBsYXllci5nYW1lYm9hcmQuZ2FtZWJvYXJkW2ldW2pdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHNxdWFyZSk7XHJcbiAgICAgICAgICAgIH0gICBcclxuICAgICAgICB9XHJcbiAgICAgICAgYm94LmFwcGVuZChjb250YWluZXIpXHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBhdHRhY2sgKCkge1xyXG4gICAgICAgIGxldCBjb2xSYW5kb20gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XHJcbiAgICAgICAgbGV0IHJvd1JhbmRvbSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcclxuICAgICAgICBpZihwbGF5ZXIuZ2FtZWJvYXJkLmdhbWVib2FyZFtjb2xSYW5kb21dW3Jvd1JhbmRvbV0gIT09ICdcXHUyNUNGJyYmcGxheWVyLmdhbWVib2FyZC5nYW1lYm9hcmRbY29sUmFuZG9tXVtyb3dSYW5kb21dLnZhbHVlICE9PSAnWCcpIHtcclxuICAgICAgICAgICAgcGxheWVyLmdhbWVib2FyZC5yZWNlaXZlQXR0YWNrKGNvbFJhbmRvbSxyb3dSYW5kb20pO1xyXG4gICAgICAgICAgICBpZih0eXBlb2YocGxheWVyLmdhbWVib2FyZC5nYW1lYm9hcmRbY29sUmFuZG9tXVtyb3dSYW5kb21dKSA9PT0gJ29iamVjdCcpIHtcclxuICAgICAgICAgICAgICAgIHBsYXllci5nYW1lYm9hcmQuZ2FtZWJvYXJkW2NvbFJhbmRvbV1bcm93UmFuZG9tXSA9IHBsYXllci5nYW1lYm9hcmQuZ2FtZWJvYXJkW2NvbFJhbmRvbV1bcm93UmFuZG9tXS52YWx1ZTtcclxuICAgICAgICAgICAgICAgIHJlbmRlcigpXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZW5kZXIoKSBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHJlbmRlcixcclxuICAgICAgICBhdHRhY2tcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gcmVuZGVyQ29tcEdhbWVib2FyZCAocGxheWVyLCBib3gpIHtcclxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NvbnRhaW5lcicpXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBsYXllci5nYW1lYm9hcmQuZ2FtZWJvYXJkLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBwbGF5ZXIuZ2FtZWJvYXJkLmdhbWVib2FyZFtpXS5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICBjb25zdCBzcXVhcmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHNxdWFyZSk7XHJcbiAgICAgICAgICAgIHNxdWFyZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHBsYXllci5nYW1lYm9hcmQucmVjZWl2ZUF0dGFjayhbaV0sW2pdKVxyXG4gICAgICAgICAgICAgICAgaWYodHlwZW9mKHBsYXllci5nYW1lYm9hcmQuZ2FtZWJvYXJkW2ldW2pdKSA9PT0gJ29iamVjdCcpIHtcclxuICAgICAgICAgICAgICAgICAgICBzcXVhcmUuaW5uZXJIVE1MID0gcGxheWVyLmdhbWVib2FyZC5nYW1lYm9hcmRbaV1bal0udmFsdWU7XHJcbiAgICBcclxuICAgICAgICAgICAgICAgICAgICBzcXVhcmUuY2xhc3NMaXN0LmFkZCgnb3JhbmdlJylcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3F1YXJlLmlubmVySFRNTCA9IHBsYXllci5nYW1lYm9hcmQuZ2FtZWJvYXJkW2ldW2pdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGJveC5hcHBlbmQoY29udGFpbmVyKTtcclxufVxyXG4gICBcclxuXHJcbmV4cG9ydCB7XHJcbiAgICByZW5kZXJQbGF5ZXJHYW1lYm9hcmQsXHJcbiAgICByZW5kZXJDb21wR2FtZWJvYXJkXHJcbn0iXSwibmFtZXMiOlsiU2hpcCIsInNoaXBMZW5ndGgiLCJoaXRzIiwiaGl0IiwiaXNTdW5rIiwibGVuZ3RoIiwiZ2V0SGl0cyIsIkdhbWVib2FyZCIsInBsYXllciIsImdhbWVib2FyZCIsImdhbWVCb2FyZCIsImkiLCJqIiwiY3JlYXRlR2FtZUJvYXJkIiwic2hpcHMiLCJfaXNXaXRoaW5Cb3VuZHMiLCJpbmRleCIsImNoZWNrRW5kR2FtZSIsImNvdW50ZXIiLCJzaGlwIiwiY29uc29sZSIsImxvZyIsInBsYWNlU2hpcCIsImNvbCIsInJvdyIsImRpcmVjdGlvbiIsInR5cGUiLCJ2YWx1ZSIsInB1c2giLCJyZWNlaXZlQXR0YWNrIiwiYm9hcmRDZWxsIiwibmVpZ2hib3VycyIsInVuZGVmaW5lZCIsIl9tYXJrQ2VsbHNBcm91bmRTdWNjc2Vzc2Z1bGxIaXQiLCJQbGF5ZXIiLCJwbGF5ZXJ0eXBlIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwicGxheWVyQm9hcmRCb3giLCJxdWVyeVNlbGVjdG9yIiwiY29tcHV0ZXJCb2FyZEJveCIsInJlYWxQbGF5ZXIiLCJjb21wUGxheWVyIiwiZm91clNoaXAiLCJ0aHJlZVNoaXBPbmUiLCJ0aHJlZVNoaXBUd28iLCJ0d29TaGlwT25lIiwidHdvU2hpcFR3byIsInR3b1NoaXBUaHJlZSIsIm9uZVNoaXBPbmUiLCJvbmVTaGlwVHdvIiwib25lU2hpcFRocmVlIiwib25lU2hpcEZvdXIiLCJwbGF5ZXJHYW1lYm9hcmQiLCJib3giLCJjb250YWluZXIiLCJjcmVhdGVFbGVtZW50IiwicmVuZGVyIiwidGV4dENvbnRlbnQiLCJzcXVhcmUiLCJpbm5lckhUTUwiLCJjbGFzc0xpc3QiLCJhZGQiLCJhcHBlbmRDaGlsZCIsImFwcGVuZCIsImF0dGFjayIsImNvbFJhbmRvbSIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsInJvd1JhbmRvbSIsInJlbmRlclBsYXllckdhbWVib2FyZCIsInJlbmRlckNvbXBHYW1lYm9hcmQiXSwic291cmNlUm9vdCI6IiJ9