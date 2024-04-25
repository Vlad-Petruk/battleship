(()=>{"use strict";var e={d:(a,o)=>{for(var r in o)e.o(o,r)&&!e.o(a,r)&&Object.defineProperty(a,r,{enumerable:!0,get:o[r]})},o:(e,a)=>Object.prototype.hasOwnProperty.call(e,a)};e.d({},{c:()=>r});const a=e=>{let a=0;return{hit:function(){a+=1},isSunk:function(){return e<=a},length:e,getHits:()=>a}},o=e=>({type:e,gameboard:(e=>{const a=function(){const e=[];for(let a=0;a<=9;a++){e[a]=[];for(let o=0;o<=9;o++)e[a][o]=""}return e}(),o=[];function r(e){return!(e<0||e>9)}function t(){let a=0;for(let e of o)!0===e.isSunk&&a++;if(console.log(a),a>=10)return console.log(`${e} lose`),!0}return{gameboard:a,placeShip:function(e,t,n,l){if(!r(e)||!r(t)||""!==a[e][t])return console.log("Index out of board");if("vertical"===l&&r(e+n.length-1))for(let r=e;r<e+n.length;r++){if(""!==a[r][t])return console.log("Invalid spot");a[r][t]={type:`${n.length}ship`,ship:n,value:"O",isSunk:!1},o.push(a[r][t])}if("horizontal"===l&&r(t+n.length-1))for(let r=t;r<t+n.length;r++){if(""!==a[e][r])return console.log("Invalid spot");a[e][r]={type:`${n.length}ship`,ship:n,value:"O",isSunk:!1},o.push(a[e][r])}return a},receiveAttack:function(e,o){if(!r(e)||!r(o)||!0===t())return console.log("Attack out of board");{let r=a[e][o];if("●"===r)return;""===r?(a[e][o]="●",console.log("Miss")):"O"===r.value&&(r.ship.hit(),r.value="X",r.ship.isSunk()&&(r.isSunk=!0,console.log("Sunk")),console.log(r.isSunk),t())}},checkEndGame:t}})(e)});let r;document.addEventListener("DOMContentLoaded",(()=>{const e=document.querySelector(".gameboard-one"),t=document.querySelector(".gameboard-two"),n=o("You"),l=o("Computer"),i=a(4),d=a(3),c=a(3),g=a(2),m=a(2),b=a(2),p=a(1),h=a(1),s=a(1),u=a(1);n.gameboard.placeShip(0,0,i,"horizontal"),n.gameboard.placeShip(9,6,d,"horizontal"),n.gameboard.placeShip(0,9,c,"vertical"),n.gameboard.placeShip(8,0,g,"horizontal"),n.gameboard.placeShip(5,4,m,"vertical"),n.gameboard.placeShip(2,6,b,"horizontal"),n.gameboard.placeShip(8,4,p,"horizontal"),n.gameboard.placeShip(2,2,h,"horizontal"),n.gameboard.placeShip(6,8,s,"horizontal"),n.gameboard.placeShip(5,0,u,"horizontal"),l.gameboard.placeShip(0,0,i,"horizontal"),l.gameboard.placeShip(9,6,d,"horizontal"),l.gameboard.placeShip(0,9,c,"vertical"),l.gameboard.placeShip(8,0,g,"horizontal"),l.gameboard.placeShip(5,4,m,"vertical"),l.gameboard.placeShip(2,6,b,"horizontal"),l.gameboard.placeShip(8,4,p,"horizontal"),l.gameboard.placeShip(2,2,h,"horizontal"),l.gameboard.placeShip(7,8,s,"horizontal"),l.gameboard.placeShip(5,0,u,"horizontal"),r=function(e,a){const o=document.createElement("div");function r(){o.textContent="";for(let a=0;a<e.gameboard.gameboard.length;a++)for(let r=0;r<e.gameboard.gameboard[a].length;r++){const t=document.createElement("div");"object"==typeof e.gameboard.gameboard[a][r]?(e.gameboard.gameboard[a][r].value="O")&&(t.innerHTML=e.gameboard.gameboard[a][r].value,t.classList.add("black")):"X"===e.gameboard.gameboard[a][r]?(t.innerHTML=e.gameboard.gameboard[a][r],t.classList.add("orange")):t.innerHTML=e.gameboard.gameboard[a][r],o.appendChild(t)}a.append(o)}return o.classList.add("container"),{render:r,attack:function a(o=0){if(o>=99)return void console.log("Maximum attempts reached. Exiting attack function.");let t=Math.floor(10*Math.random()),n=Math.floor(10*Math.random());if("●"!==e.gameboard.gameboard[t][n]&&"X"!==e.gameboard.gameboard[t][n].value&&"X"!==e.gameboard.gameboard[t][n])return e.gameboard.receiveAttack(t,n),"object"==typeof e.gameboard.gameboard[t][n]?(e.gameboard.gameboard[t][n]=e.gameboard.gameboard[t][n].value,setTimeout(a,1e3),void r()):void r();a(o+1)}}}(n,e),function(e,a){const o=document.createElement("div");o.classList.add("container");for(let a=0;a<e.gameboard.gameboard.length;a++)for(let t=0;t<e.gameboard.gameboard[a].length;t++){const n=document.createElement("div");o.appendChild(n),n.addEventListener("click",(()=>{e.gameboard.receiveAttack([a],[t]),"object"==typeof e.gameboard.gameboard[a][t]?(n.innerHTML=e.gameboard.gameboard[a][t].value,n.classList.add("orange")):(n.innerHTML=e.gameboard.gameboard[a][t],setTimeout(r.attack,1e3),r.render())}))}a.append(o)}(l,t),r.render(),console.log("dgsdg")}))})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QU9ELFVBQVVBLFVBQVVHLEdBQUdSLE9BQVFTLElBQUssQ0FDM0QsTUFBTTBDLEVBQVN0QixTQUFTbUIsY0FBYyxPQUN0Q0QsRUFBVVEsWUFBWUosR0FDdEJBLEVBQU9yQixpQkFBaUIsU0FBUyxLQUM3QnhCLEVBQU9ELFVBQVVvQixjQUFjLENBQUNqQixHQUFHLENBQUNDLElBQ1ksaUJBQXRDSCxFQUFPRCxVQUFVQSxVQUFVRyxHQUFHQyxJQUNwQzBDLEVBQU9DLFVBQVk5QyxFQUFPRCxVQUFVQSxVQUFVRyxHQUFHQyxHQUFHYyxNQUNwRDRCLEVBQU9FLFVBQVVDLElBQUksWUFFckJILEVBQU9DLFVBQVk5QyxFQUFPRCxVQUFVQSxVQUFVRyxHQUFHQyxHQUNqRHVELFdBQVdwQyxFQUFnQjZCLE9BQU8sS0FDbEM3QixFQUFnQnFCLFNBQ3BCLEdBRVIsQ0FFSkgsRUFBSVUsT0FBT1QsRUFDZixDRHRDSW1CLENBQW9CL0IsRUFBWUYsR0FFaENMLEVBQWdCcUIsU0FPaEJoQyxRQUFRQyxJQUFJLFFBQU8sRyIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc2hpcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3BsYXllci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvVUkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCJjb25zdCBTaGlwID0gKHNoaXBMZW5ndGgpID0+IHtcbiAgY29uc3QgbGVuZ3RoID0gc2hpcExlbmd0aDtcbiAgbGV0IGhpdHMgPSAwO1xuXG4gIGZ1bmN0aW9uIGhpdCgpIHtcbiAgICBoaXRzICs9IDE7XG4gIH1cblxuICBmdW5jdGlvbiBpc1N1bmsoKSB7XG4gICAgaWYgKHNoaXBMZW5ndGggPD0gaGl0cykge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBlbHNlIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgaGl0LFxuICAgIGlzU3VuayxcbiAgICBsZW5ndGgsXG4gICAgZ2V0SGl0czogKCkgPT4gaGl0cyxcbiAgfTtcbn07XG5cbmV4cG9ydCB7IFNoaXAgfTtcbiIsImltcG9ydCB7IEdhbWVib2FyZCB9IGZyb20gXCIuL2dhbWVib2FyZFwiXHJcblxyXG5jb25zdCBQbGF5ZXIgPSAocGxheWVydHlwZSkgPT4ge1xyXG4gICAgY29uc3QgdHlwZSA9IHBsYXllcnR5cGU7XHJcblxyXG4gICAgY29uc3QgZ2FtZWJvYXJkID0gR2FtZWJvYXJkKHBsYXllcnR5cGUpO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdHlwZSxcclxuICAgICAgICBnYW1lYm9hcmRcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IHtQbGF5ZXJ9XHJcbiIsImltcG9ydCB7IFNoaXAgfSBmcm9tIFwiLi9zaGlwXCI7XG5cbmNvbnN0IEdhbWVib2FyZCA9IChwbGF5ZXIpID0+IHtcbiAgZnVuY3Rpb24gY3JlYXRlR2FtZUJvYXJkKCkge1xuICAgIGNvbnN0IGdhbWVCb2FyZCA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDw9IDk7IGkrKykge1xuICAgICAgZ2FtZUJvYXJkW2ldID0gW107XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8PSA5OyBqKyspIHtcbiAgICAgICAgZ2FtZUJvYXJkW2ldW2pdID0gXCJcIjtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGdhbWVCb2FyZDtcbiAgfVxuXG4gIGNvbnN0IGdhbWVib2FyZCA9IGNyZWF0ZUdhbWVCb2FyZCgpO1xuICBjb25zdCBzaGlwcyA9IFtdO1xuXG4gIGZ1bmN0aW9uIF9pc1dpdGhpbkJvdW5kcyhpbmRleCkge1xuICAgIGlmIChpbmRleCA8IDAgfHwgaW5kZXggPiA5KSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIC8vc3RhcnQgYW5kIGVuZCBoZXJlIC0gaW5kZXhlcyBvZiB0aGUgYm9yZCdzIGNlbGxzIHdoZXJlIGkgd2FudCB0byBwbGFjZSBzaGlwXG4gIC8vIHRoZSBjb29yZGluYXRlIG9iamVjdCBzaG91bGQgaGF2ZSBhIHJlZmVyZW5jZSB0byB0aGUgc2hpcCBpbiBpdHMgbG9jYXRpb24uXG4gIGZ1bmN0aW9uIHBsYWNlU2hpcChjb2wsIHJvdywgc2hpcCwgZGlyZWN0aW9uKSB7XG4gICAgaWYgKFxuICAgICAgX2lzV2l0aGluQm91bmRzKGNvbCkgJiZcbiAgICAgIF9pc1dpdGhpbkJvdW5kcyhyb3cpICYmXG4gICAgICBnYW1lYm9hcmRbY29sXVtyb3ddID09PSBcIlwiXG4gICAgKSB7XG4gICAgICBpZiAoZGlyZWN0aW9uID09PSBcInZlcnRpY2FsXCIgJiYgX2lzV2l0aGluQm91bmRzKGNvbCArIHNoaXAubGVuZ3RoIC0gMSkpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IGNvbDsgaSA8IGNvbCArIHNoaXAubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBpZiAoZ2FtZWJvYXJkW2ldW3Jvd10gPT09IFwiXCIpIHtcbiAgICAgICAgICAgIGdhbWVib2FyZFtpXVtyb3ddID0ge1xuICAgICAgICAgICAgICB0eXBlOiBgJHtzaGlwLmxlbmd0aH1zaGlwYCxcbiAgICAgICAgICAgICAgc2hpcDogc2hpcCxcbiAgICAgICAgICAgICAgdmFsdWU6IFwiT1wiLFxuICAgICAgICAgICAgICBpc1N1bms6IGZhbHNlLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHNoaXBzLnB1c2goZ2FtZWJvYXJkW2ldW3Jvd10pO1xuICAgICAgICAgIH0gZWxzZSByZXR1cm4gY29uc29sZS5sb2coXCJJbnZhbGlkIHNwb3RcIik7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKFxuICAgICAgICBkaXJlY3Rpb24gPT09IFwiaG9yaXpvbnRhbFwiICYmXG4gICAgICAgIF9pc1dpdGhpbkJvdW5kcyhyb3cgKyBzaGlwLmxlbmd0aCAtIDEpXG4gICAgICApIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IHJvdzsgaSA8IHJvdyArIHNoaXAubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBpZiAoZ2FtZWJvYXJkW2NvbF1baV0gPT09IFwiXCIpIHtcbiAgICAgICAgICAgIGdhbWVib2FyZFtjb2xdW2ldID0ge1xuICAgICAgICAgICAgICB0eXBlOiBgJHtzaGlwLmxlbmd0aH1zaGlwYCxcbiAgICAgICAgICAgICAgc2hpcDogc2hpcCxcbiAgICAgICAgICAgICAgdmFsdWU6IFwiT1wiLFxuICAgICAgICAgICAgICBpc1N1bms6IGZhbHNlLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHNoaXBzLnB1c2goZ2FtZWJvYXJkW2NvbF1baV0pO1xuICAgICAgICAgIH0gZWxzZSByZXR1cm4gY29uc29sZS5sb2coXCJJbnZhbGlkIHNwb3RcIik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGNvbnNvbGUubG9nKFwiSW5kZXggb3V0IG9mIGJvYXJkXCIpO1xuICAgIH1cblxuICAgIHJldHVybiBnYW1lYm9hcmQ7XG4gIH1cbiAgXG5cbiAgLy9DdXJyZW50bHkgdGVzdGluZyB0aGlzIGluIGluZGV4LmpzXG4gIGZ1bmN0aW9uIHJlY2VpdmVBdHRhY2soY29sLCByb3cpIHtcbiAgICBpZiAoX2lzV2l0aGluQm91bmRzKGNvbCkgJiYgX2lzV2l0aGluQm91bmRzKHJvdykmJmNoZWNrRW5kR2FtZSgpICE9PSB0cnVlKSB7XG4gICAgICBsZXQgYm9hcmRDZWxsID0gZ2FtZWJvYXJkW2NvbF1bcm93XTtcbiAgICAgIGlmIChib2FyZENlbGwgPT09ICdcXHUyNUNGJykge1xuICAgICAgICByZXR1cm47XG4gICAgICB9IGVsc2UgaWYgKGJvYXJkQ2VsbCA9PT0gXCJcIikge1xuICAgICAgICBnYW1lYm9hcmRbY29sXVtyb3ddID0gJ1xcdTI1Q0YnO1xuICAgICAgICBjb25zb2xlLmxvZyhcIk1pc3NcIik7XG4gICAgICB9IGVsc2UgaWYgKGJvYXJkQ2VsbC52YWx1ZSA9PT0gXCJPXCIpIHtcbiAgICAgICAgYm9hcmRDZWxsLnNoaXAuaGl0KCk7XG4gICAgICAgIGJvYXJkQ2VsbC52YWx1ZSA9IFwiWFwiO1xuICAgICAgICBpZiAoYm9hcmRDZWxsLnNoaXAuaXNTdW5rKCkpIHtcbiAgICAgICAgICBib2FyZENlbGwuaXNTdW5rID0gdHJ1ZTtcbiAgICAgICAgICAvLyBfbWFya0NlbGxzQXJvdW5kU3VjY3Nlc3NmdWxsSGl0KGNvbCwgcm93KTtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIlN1bmtcIik7XG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2coYm9hcmRDZWxsLmlzU3Vuayk7XG4gICAgICAgIGNoZWNrRW5kR2FtZSgpXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBjb25zb2xlLmxvZyhcIkF0dGFjayBvdXQgb2YgYm9hcmRcIik7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gX21hcmtDZWxsc0Fyb3VuZFN1Y2NzZXNzZnVsbEhpdChjb2wsIHJvdykge1xuICAgIGNvbnN0IG5laWdoYm91cnMgPSBbXG4gICAgICBnYW1lYm9hcmRbY29sICsgMV0/Lltyb3ddLFxuICAgICAgZ2FtZWJvYXJkW2NvbCAtIDFdPy5bcm93XSxcbiAgICAgIGdhbWVib2FyZFtjb2xdPy5bcm93ICsgMV0sXG4gICAgICBnYW1lYm9hcmRbY29sXT8uW3JvdyAtIDFdLFxuICAgICAgZ2FtZWJvYXJkW2NvbCArIDFdPy5bcm93ICsgMV0sXG4gICAgICBnYW1lYm9hcmRbY29sIC0gMV0/Lltyb3cgLSAxXSxcbiAgICAgIGdhbWVib2FyZFtjb2wgLSAxXT8uW3JvdyArIDFdLFxuICAgICAgZ2FtZWJvYXJkW2NvbCArIDFdPy5bcm93IC0gMV0sXG4gICAgXTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbmVpZ2hib3Vycy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKFxuICAgICAgICBuZWlnaGJvdXJzW2ldICE9PSB1bmRlZmluZWQgJiZcbiAgICAgICAgbmVpZ2hib3Vyc1tpXS52YWx1ZSAhPT0gXCJPXCIgJiZcbiAgICAgICAgbmVpZ2hib3Vyc1tpXS52YWx1ZSAhPT0gXCJYXCJcbiAgICAgICkge1xuICAgICAgICBuZWlnaGJvdXJzW2ldID0gJ1xcdTI1Q0YnO1xuICAgICAgICAvLyBVcGRhdGUgY29ycmVzcG9uZGluZyB2YWx1ZSBpbiBnYW1lYm9hcmQgYXJyYXlcbiAgICAgICAgc3dpdGNoIChpKSB7XG4gICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgZ2FtZWJvYXJkW2NvbCArIDFdW3Jvd10gPSAnXFx1MjVDRic7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICBnYW1lYm9hcmRbY29sIC0gMV1bcm93XSA9ICdcXHUyNUNGJztcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgIGdhbWVib2FyZFtjb2xdW3JvdyArIDFdID0gJ1xcdTI1Q0YnO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgZ2FtZWJvYXJkW2NvbF1bcm93IC0gMV0gPSAnXFx1MjVDRic7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICBnYW1lYm9hcmRbY29sICsgMV1bcm93ICsgMV0gPSAnXFx1MjVDRic7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgICBnYW1lYm9hcmRbY29sIC0gMV1bcm93IC0gMV0gPSAnXFx1MjVDRic7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIDY6XG4gICAgICAgICAgICBnYW1lYm9hcmRbY29sIC0gMV1bcm93ICsgMV0gPSAnXFx1MjVDRic7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIDc6XG4gICAgICAgICAgICBnYW1lYm9hcmRbY29sICsgMV1bcm93IC0gMV0gPSAnXFx1MjVDRic7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBjaGVja0VuZEdhbWUoKSB7XG4gICAgbGV0IGNvdW50ZXIgPSAwO1xuICAgIGZvciAobGV0IHNoaXAgb2Ygc2hpcHMpIHtcbiAgICAgIGlmIChzaGlwLmlzU3VuayA9PT0gdHJ1ZSkge1xuICAgICAgICBjb3VudGVyKys7XG4gICAgICB9XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKGNvdW50ZXIpO1xuICAgIGlmIChjb3VudGVyID49IDEwKSB7XG4gICAgICBjb25zb2xlLmxvZyhgJHtwbGF5ZXJ9IGxvc2VgKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgZ2FtZWJvYXJkLFxuICAgIHBsYWNlU2hpcCxcbiAgICByZWNlaXZlQXR0YWNrLFxuICAgIGNoZWNrRW5kR2FtZSxcbiAgfTtcbn07XG5cbmV4cG9ydCB7IEdhbWVib2FyZCB9O1xuIiwiaW1wb3J0IHsgR2FtZWJvYXJkIH0gZnJvbSBcIi4vZ2FtZWJvYXJkXCI7XG5pbXBvcnQgeyBTaGlwIH0gZnJvbSBcIi4vc2hpcFwiO1xuaW1wb3J0IHsgUGxheWVyIH0gZnJvbSBcIi4vcGxheWVyXCI7XG5pbXBvcnQgeyByZW5kZXJQbGF5ZXJHYW1lYm9hcmQsIHJlbmRlckNvbXBHYW1lYm9hcmQgfSBmcm9tIFwiLi9VSVwiO1xuXG5sZXQgcGxheWVyR2FtZWJvYXJkXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICAgIFxuICAgIGNvbnN0IHBsYXllckJvYXJkQm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdhbWVib2FyZC1vbmUnKTtcbiAgICBjb25zdCBjb21wdXRlckJvYXJkQm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdhbWVib2FyZC10d28nKTtcblxuICAgIGNvbnN0IHJlYWxQbGF5ZXIgPSBQbGF5ZXIoJ1lvdScpO1xuICAgIGNvbnN0IGNvbXBQbGF5ZXIgPSBQbGF5ZXIoJ0NvbXB1dGVyJyk7XG5cbiAgICBjb25zdCBmb3VyU2hpcCA9IFNoaXAoNClcbiAgICBjb25zdCB0aHJlZVNoaXBPbmUgPSBTaGlwKDMpO1xuICAgIGNvbnN0IHRocmVlU2hpcFR3byA9IFNoaXAoMyk7XG4gICAgY29uc3QgdHdvU2hpcE9uZSA9IFNoaXAoMik7XG4gICAgY29uc3QgdHdvU2hpcFR3byA9IFNoaXAoMik7XG4gICAgY29uc3QgdHdvU2hpcFRocmVlID0gU2hpcCgyKTtcbiAgICBjb25zdCBvbmVTaGlwT25lID0gU2hpcCgxKTtcbiAgICBjb25zdCBvbmVTaGlwVHdvID0gU2hpcCgxKTtcbiAgICBjb25zdCBvbmVTaGlwVGhyZWUgPSBTaGlwKDEpO1xuICAgIGNvbnN0IG9uZVNoaXBGb3VyID0gU2hpcCgxKTtcblxuXG4gICAgcmVhbFBsYXllci5nYW1lYm9hcmQucGxhY2VTaGlwKDAsMCwgZm91clNoaXAsICdob3Jpem9udGFsJyk7XG4gICAgcmVhbFBsYXllci5nYW1lYm9hcmQucGxhY2VTaGlwKDksNiwgdGhyZWVTaGlwT25lLCAnaG9yaXpvbnRhbCcpO1xuICAgIHJlYWxQbGF5ZXIuZ2FtZWJvYXJkLnBsYWNlU2hpcCgwLDksIHRocmVlU2hpcFR3bywgJ3ZlcnRpY2FsJyk7XG4gICAgcmVhbFBsYXllci5nYW1lYm9hcmQucGxhY2VTaGlwKDgsMCwgdHdvU2hpcE9uZSwgJ2hvcml6b250YWwnKTtcbiAgICByZWFsUGxheWVyLmdhbWVib2FyZC5wbGFjZVNoaXAoNSw0LCB0d29TaGlwVHdvLCAndmVydGljYWwnKTtcbiAgICByZWFsUGxheWVyLmdhbWVib2FyZC5wbGFjZVNoaXAoMiw2LCB0d29TaGlwVGhyZWUsICdob3Jpem9udGFsJyk7XG4gICAgcmVhbFBsYXllci5nYW1lYm9hcmQucGxhY2VTaGlwKDgsNCwgb25lU2hpcE9uZSwgJ2hvcml6b250YWwnKTtcbiAgICByZWFsUGxheWVyLmdhbWVib2FyZC5wbGFjZVNoaXAoMiwyLCBvbmVTaGlwVHdvLCAnaG9yaXpvbnRhbCcpO1xuICAgIHJlYWxQbGF5ZXIuZ2FtZWJvYXJkLnBsYWNlU2hpcCg2LDgsIG9uZVNoaXBUaHJlZSwgJ2hvcml6b250YWwnKTtcbiAgICByZWFsUGxheWVyLmdhbWVib2FyZC5wbGFjZVNoaXAoNSwwLCBvbmVTaGlwRm91ciwgJ2hvcml6b250YWwnKTtcblxuICAgIGNvbXBQbGF5ZXIuZ2FtZWJvYXJkLnBsYWNlU2hpcCgwLDAsIGZvdXJTaGlwLCAnaG9yaXpvbnRhbCcpO1xuICAgIGNvbXBQbGF5ZXIuZ2FtZWJvYXJkLnBsYWNlU2hpcCg5LDYsIHRocmVlU2hpcE9uZSwgJ2hvcml6b250YWwnKTtcbiAgICBjb21wUGxheWVyLmdhbWVib2FyZC5wbGFjZVNoaXAoMCw5LCB0aHJlZVNoaXBUd28sICd2ZXJ0aWNhbCcpO1xuICAgIGNvbXBQbGF5ZXIuZ2FtZWJvYXJkLnBsYWNlU2hpcCg4LDAsIHR3b1NoaXBPbmUsICdob3Jpem9udGFsJyk7XG4gICAgY29tcFBsYXllci5nYW1lYm9hcmQucGxhY2VTaGlwKDUsNCwgdHdvU2hpcFR3bywgJ3ZlcnRpY2FsJyk7XG4gICAgY29tcFBsYXllci5nYW1lYm9hcmQucGxhY2VTaGlwKDIsNiwgdHdvU2hpcFRocmVlLCAnaG9yaXpvbnRhbCcpO1xuICAgIGNvbXBQbGF5ZXIuZ2FtZWJvYXJkLnBsYWNlU2hpcCg4LDQsIG9uZVNoaXBPbmUsICdob3Jpem9udGFsJyk7XG4gICAgY29tcFBsYXllci5nYW1lYm9hcmQucGxhY2VTaGlwKDIsMiwgb25lU2hpcFR3bywgJ2hvcml6b250YWwnKTtcbiAgICBjb21wUGxheWVyLmdhbWVib2FyZC5wbGFjZVNoaXAoNyw4LCBvbmVTaGlwVGhyZWUsICdob3Jpem9udGFsJyk7XG4gICAgY29tcFBsYXllci5nYW1lYm9hcmQucGxhY2VTaGlwKDUsMCwgb25lU2hpcEZvdXIsICdob3Jpem9udGFsJyk7XG5cbiAgICBcbiAgICBwbGF5ZXJHYW1lYm9hcmQgPSByZW5kZXJQbGF5ZXJHYW1lYm9hcmQocmVhbFBsYXllciwgcGxheWVyQm9hcmRCb3gpO1xuICAgIHJlbmRlckNvbXBHYW1lYm9hcmQoY29tcFBsYXllciwgY29tcHV0ZXJCb2FyZEJveClcblxuICAgIHBsYXllckdhbWVib2FyZC5yZW5kZXIoKTtcbiAgICAvLyBwbGF5ZXJHYW1lYm9hcmQuYXR0YWNrKClcbiAgICAvLyBwbGF5ZXJHYW1lYm9hcmQuYXR0YWNrKClcblxuICAgIC8vIGNvbXBHYW1lYm9hcmQucmVuZGVyQ29tcEdhbWVib2FyZCgpXG4gICAgXG5cbiAgICBjb25zb2xlLmxvZygnZGdzZGcnKVxuICAgIFxufSk7XG5cbmV4cG9ydCB7cGxheWVyR2FtZWJvYXJkfVxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG4vLyBjb25zdCBteVNoaXAgPSBTaGlwKDQpO1xuLy8gY29uc3QgYW5vdGhlclNoaXAgPSBTaGlwKDIpO1xuLy8gY29uc3QgYmlnU2hpcCA9IFNoaXAoNCk7XG4vLyBjb25zdCBuZXdCb2FyZCA9IEdhbWVib2FyZCgpO1xuLy8gbmV3Qm9hcmQucGxhY2VTaGlwKDAsIDAsIG15U2hpcCwgXCJ2ZXJ0aWNhbFwiKTtcbi8vIG5ld0JvYXJkLnBsYWNlU2hpcCgyLCAyLCBhbm90aGVyU2hpcCwgXCJob3Jpem9udGFsXCIpO1xuLy8gbmV3Qm9hcmQucGxhY2VTaGlwKDksIDYsIGJpZ1NoaXAsIFwiaG9yaXpvbnRhbFwiKTtcblxuLy8gLy8gbmV3Qm9hcmQucmVjZWl2ZUF0dGFjaygwLDApXG4vLyAvLyBuZXdCb2FyZC5yZWNlaXZlQXR0YWNrKDEsMClcbi8vIC8vIG5ld0JvYXJkLnJlY2VpdmVBdHRhY2soMiwwKVxuXG4vLyBuZXdCb2FyZC5yZWNlaXZlQXR0YWNrKDIsIDIpO1xuLy8gbmV3Qm9hcmQucmVjZWl2ZUF0dGFjaygyLCAzKTtcblxuLy8gbmV3Qm9hcmQucmVjZWl2ZUF0dGFjayg5LCA3KTtcblxuLy8gY29uc29sZS5sb2cobmV3Qm9hcmQuZ2FtZWJvYXJkKTtcbiIsImltcG9ydCB7IHBsYXllckdhbWVib2FyZCB9IGZyb20gXCIuXCI7XHJcblxyXG4vL05lZWQgdG8gd3JpdGUgZW5kIGdhbWUgbWFzc2FnZSwgc3RvcCBwb3NzaWJpbGl0eSBvZiBjbGlja3MgaWYgZW5kR2FtZSwgYWRkIGZ1bmN0aW9uYWwgdG8gYXR0YWNrIGFnYWluIGlmIGNvbXB1dGVyIGhpdHMgc2hpcFxyXG5mdW5jdGlvbiByZW5kZXJQbGF5ZXJHYW1lYm9hcmQocGxheWVyLCBib3gpIHtcclxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NvbnRhaW5lcicpXHJcbiAgICBmdW5jdGlvbiByZW5kZXIoKSB7ICAgXHJcbiAgICAgICAgY29udGFpbmVyLnRleHRDb250ZW50ID0gJyc7IFxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGxheWVyLmdhbWVib2FyZC5nYW1lYm9hcmQubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBwbGF5ZXIuZ2FtZWJvYXJkLmdhbWVib2FyZFtpXS5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc3F1YXJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgICAgICBpZih0eXBlb2YocGxheWVyLmdhbWVib2FyZC5nYW1lYm9hcmRbaV1bal0pID09PSAnb2JqZWN0Jykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKHBsYXllci5nYW1lYm9hcmQuZ2FtZWJvYXJkW2ldW2pdLnZhbHVlID0gJ08nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNxdWFyZS5pbm5lckhUTUwgPSBwbGF5ZXIuZ2FtZWJvYXJkLmdhbWVib2FyZFtpXVtqXS52YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3F1YXJlLmNsYXNzTGlzdC5hZGQoJ2JsYWNrJylcclxuICAgICAgICAgICAgICAgICAgICB9IFxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChwbGF5ZXIuZ2FtZWJvYXJkLmdhbWVib2FyZFtpXVtqXSA9PT0gXCJYXCIpe1xyXG4gICAgICAgICAgICAgICAgICAgIHNxdWFyZS5pbm5lckhUTUwgPSBwbGF5ZXIuZ2FtZWJvYXJkLmdhbWVib2FyZFtpXVtqXTsgXHJcbiAgICAgICAgICAgICAgICAgICAgc3F1YXJlLmNsYXNzTGlzdC5hZGQoJ29yYW5nZScpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBzcXVhcmUuaW5uZXJIVE1MID0gcGxheWVyLmdhbWVib2FyZC5nYW1lYm9hcmRbaV1bal07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoc3F1YXJlKTtcclxuICAgICAgICAgICAgfSAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICBib3guYXBwZW5kKGNvbnRhaW5lcilcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBNQVhfQVRURU1QVFMgPSA5OTtcclxuXHJcbiAgICBmdW5jdGlvbiBhdHRhY2soYXR0ZW1wdCA9IDApIHtcclxuICAgICAgICBpZiAoYXR0ZW1wdCA+PSBNQVhfQVRURU1QVFMpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJNYXhpbXVtIGF0dGVtcHRzIHJlYWNoZWQuIEV4aXRpbmcgYXR0YWNrIGZ1bmN0aW9uLlwiKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBsZXQgY29sUmFuZG9tID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xyXG4gICAgICAgIGxldCByb3dSYW5kb20gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XHJcbiAgICBcclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgIHBsYXllci5nYW1lYm9hcmQuZ2FtZWJvYXJkW2NvbFJhbmRvbV1bcm93UmFuZG9tXSAhPT0gJ1xcdTI1Q0YnICYmXHJcbiAgICAgICAgICAgIHBsYXllci5nYW1lYm9hcmQuZ2FtZWJvYXJkW2NvbFJhbmRvbV1bcm93UmFuZG9tXS52YWx1ZSAhPT0gJ1gnICYmXHJcbiAgICAgICAgICAgIHBsYXllci5nYW1lYm9hcmQuZ2FtZWJvYXJkW2NvbFJhbmRvbV1bcm93UmFuZG9tXSAhPT0gJ1gnXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIHBsYXllci5nYW1lYm9hcmQucmVjZWl2ZUF0dGFjayhjb2xSYW5kb20sIHJvd1JhbmRvbSk7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgcGxheWVyLmdhbWVib2FyZC5nYW1lYm9hcmRbY29sUmFuZG9tXVtyb3dSYW5kb21dID09PSAnb2JqZWN0Jykge1xyXG4gICAgICAgICAgICAgICAgcGxheWVyLmdhbWVib2FyZC5nYW1lYm9hcmRbY29sUmFuZG9tXVtyb3dSYW5kb21dID0gcGxheWVyLmdhbWVib2FyZC5nYW1lYm9hcmRbY29sUmFuZG9tXVtyb3dSYW5kb21dLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dChhdHRhY2ssMTAwMClcclxuICAgICAgICAgICAgICAgIHJlbmRlcigpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmVuZGVyKCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBhdHRhY2soYXR0ZW1wdCArIDEpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICByZW5kZXIsXHJcbiAgICAgICAgYXR0YWNrXHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbmRlckNvbXBHYW1lYm9hcmQgKHBsYXllciwgYm94KSB7XHJcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjb250YWluZXInKVxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwbGF5ZXIuZ2FtZWJvYXJkLmdhbWVib2FyZC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgcGxheWVyLmdhbWVib2FyZC5nYW1lYm9hcmRbaV0ubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgICAgY29uc3Qgc3F1YXJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChzcXVhcmUpO1xyXG4gICAgICAgICAgICBzcXVhcmUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBwbGF5ZXIuZ2FtZWJvYXJkLnJlY2VpdmVBdHRhY2soW2ldLFtqXSlcclxuICAgICAgICAgICAgICAgIGlmKHR5cGVvZihwbGF5ZXIuZ2FtZWJvYXJkLmdhbWVib2FyZFtpXVtqXSkgPT09ICdvYmplY3QnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3F1YXJlLmlubmVySFRNTCA9IHBsYXllci5nYW1lYm9hcmQuZ2FtZWJvYXJkW2ldW2pdLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHNxdWFyZS5jbGFzc0xpc3QuYWRkKCdvcmFuZ2UnKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3F1YXJlLmlubmVySFRNTCA9IHBsYXllci5nYW1lYm9hcmQuZ2FtZWJvYXJkW2ldW2pdO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQocGxheWVyR2FtZWJvYXJkLmF0dGFjaywxMDAwKTtcclxuICAgICAgICAgICAgICAgICAgICBwbGF5ZXJHYW1lYm9hcmQucmVuZGVyKClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBib3guYXBwZW5kKGNvbnRhaW5lcik7XHJcbn1cclxuICAgXHJcblxyXG5leHBvcnQge1xyXG4gICAgcmVuZGVyUGxheWVyR2FtZWJvYXJkLFxyXG4gICAgcmVuZGVyQ29tcEdhbWVib2FyZFxyXG59Il0sIm5hbWVzIjpbIl9fd2VicGFja19yZXF1aXJlX18iLCJleHBvcnRzIiwiZGVmaW5pdGlvbiIsImtleSIsIm8iLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImVudW1lcmFibGUiLCJnZXQiLCJvYmoiLCJwcm9wIiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwiU2hpcCIsInNoaXBMZW5ndGgiLCJoaXRzIiwiaGl0IiwiaXNTdW5rIiwibGVuZ3RoIiwiZ2V0SGl0cyIsIlBsYXllciIsInBsYXllcnR5cGUiLCJ0eXBlIiwiZ2FtZWJvYXJkIiwicGxheWVyIiwiZ2FtZUJvYXJkIiwiaSIsImoiLCJjcmVhdGVHYW1lQm9hcmQiLCJzaGlwcyIsIl9pc1dpdGhpbkJvdW5kcyIsImluZGV4IiwiY2hlY2tFbmRHYW1lIiwiY291bnRlciIsInNoaXAiLCJjb25zb2xlIiwibG9nIiwicGxhY2VTaGlwIiwiY29sIiwicm93IiwiZGlyZWN0aW9uIiwidmFsdWUiLCJwdXNoIiwicmVjZWl2ZUF0dGFjayIsImJvYXJkQ2VsbCIsIkdhbWVib2FyZCIsInBsYXllckdhbWVib2FyZCIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsInBsYXllckJvYXJkQm94IiwicXVlcnlTZWxlY3RvciIsImNvbXB1dGVyQm9hcmRCb3giLCJyZWFsUGxheWVyIiwiY29tcFBsYXllciIsImZvdXJTaGlwIiwidGhyZWVTaGlwT25lIiwidGhyZWVTaGlwVHdvIiwidHdvU2hpcE9uZSIsInR3b1NoaXBUd28iLCJ0d29TaGlwVGhyZWUiLCJvbmVTaGlwT25lIiwib25lU2hpcFR3byIsIm9uZVNoaXBUaHJlZSIsIm9uZVNoaXBGb3VyIiwiYm94IiwiY29udGFpbmVyIiwiY3JlYXRlRWxlbWVudCIsInJlbmRlciIsInRleHRDb250ZW50Iiwic3F1YXJlIiwiaW5uZXJIVE1MIiwiY2xhc3NMaXN0IiwiYWRkIiwiYXBwZW5kQ2hpbGQiLCJhcHBlbmQiLCJhdHRhY2siLCJhdHRlbXB0IiwiY29sUmFuZG9tIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwicm93UmFuZG9tIiwic2V0VGltZW91dCIsInJlbmRlclBsYXllckdhbWVib2FyZCIsInJlbmRlckNvbXBHYW1lYm9hcmQiXSwic291cmNlUm9vdCI6IiJ9