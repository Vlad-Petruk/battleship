(() => {
  "use strict";
  const e = (e) => {
      let o = 0;
      return {
        hit: function () {
          o += 1;
        },
        isSunk: function () {
          return e <= o;
        },
        length: e,
        getHits: () => o,
      };
    },
    o = e(4),
    t = e(2),
    n = e(4),
    l = (() => {
      const e = (function () {
          const e = [];
          for (let o = 0; o <= 9; o++) {
            e[o] = [];
            for (let t = 0; t <= 9; t++) e[o][t] = "";
          }
          return e;
        })(),
        o = [];
      function t(e) {
        return !(e < 0 || e > 9);
      }
      return (
        console.log(o),
        {
          gameboard: e,
          placeShip: function (n, l, i, c) {
            if (!t(n) || !t(l) || "" !== e[n][l])
              return console.log("Index out of board");
            if ("vertical" === c && t(n + i.length - 1))
              for (let t = n; t < n + i.length; t++) {
                if ("" !== e[t][l]) return console.log("Invalid spot");
                (e[t][l] = {
                  type: `${i.length}ship`,
                  ship: i,
                  value: "O",
                  isSunk: !1,
                }),
                  o.push(e[t][l]);
              }
            if ("horizontal" === c && t(l + i.length - 1))
              for (let t = l; t < l + i.length; t++) {
                if ("" !== e[n][t]) return console.log("Invalid spot");
                (e[n][t] = {
                  type: `${i.length}ship`,
                  ship: i,
                  value: "O",
                  isSunk: !1,
                }),
                  o.push(e[n][t]);
              }
            return e;
          },
          receiveAttack: function (o, n) {
            if (!t(o) || !t(n)) return console.log("Attack out of board");
            {
              let t = e[o][n];
              if ("·" === t) return;
              "" === t
                ? ((e[o][n] = "·"), console.log("Miss"))
                : "O" === t.value &&
                  (t.ship.hit(),
                  (t.value = "X"),
                  t.ship.isSunk() &&
                    ((t.isSunk = !0),
                    (function (o, t) {
                      const n = [
                        e[o + 1]?.[t],
                        e[o - 1]?.[t],
                        e[o]?.[t + 1],
                        e[o]?.[t - 1],
                        e[o + 1]?.[t + 1],
                        e[o - 1]?.[t - 1],
                        e[o - 1]?.[t + 1],
                        e[o + 1]?.[t - 1],
                      ];
                      for (let l = 0; l < n.length; l++)
                        if (
                          void 0 !== n[l] &&
                          "O" !== n[l].value &&
                          "X" !== n[l].value
                        )
                          switch (((n[l] = "·"), l)) {
                            case 0:
                              e[o + 1][t] = "·";
                              break;
                            case 1:
                              e[o - 1][t] = "·";
                              break;
                            case 2:
                              e[o][t + 1] = "·";
                              break;
                            case 3:
                              e[o][t - 1] = "·";
                              break;
                            case 4:
                              e[o + 1][t + 1] = "·";
                              break;
                            case 5:
                              e[o - 1][t - 1] = "·";
                              break;
                            case 6:
                              e[o - 1][t + 1] = "·";
                              break;
                            case 7:
                              e[o + 1][t - 1] = "·";
                          }
                    })(o, n),
                    console.log("Sunk")),
                  console.log(t.isSunk));
            }
          },
          checkEndGame: function () {
            let e = 0;
            for (let t of o) !0 === t.isSunk && e++;
            console.log(e), e >= 10 && console.log("End game");
          },
        }
      );
    })();
  l.placeShip(0, 0, o, "vertical"),
    l.placeShip(2, 2, t, "horizontal"),
    l.placeShip(9, 6, n, "horizontal"),
    l.receiveAttack(2, 2),
    l.receiveAttack(2, 3),
    l.receiveAttack(9, 7),
    console.log(l.gameboard);
})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YyxFQUFFLEdBR3pCVixRQUFRQyxJQUFJVixFQUFTQyxVIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9nYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zaGlwLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU2hpcCB9IGZyb20gXCIuL3NoaXBcIjtcclxuXHJcbmNvbnN0IEdhbWVib2FyZCA9ICgpID0+IHtcclxuICAgIGZ1bmN0aW9uIGNyZWF0ZUdhbWVCb2FyZCAoKSB7XHJcbiAgICAgICAgY29uc3QgZ2FtZUJvYXJkID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPD0gOTsgaSsrKSB7XHJcbiAgICAgICAgICBnYW1lQm9hcmRbaV0gPSBbXTtcclxuICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDw9IDk7IGorKykge1xyXG4gICAgICAgICAgICBnYW1lQm9hcmRbaV1bal0gPSAnJztcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGdhbWVCb2FyZDtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgZ2FtZWJvYXJkID0gY3JlYXRlR2FtZUJvYXJkKCk7XHJcbiAgICBjb25zdCBzaGlwcyA9IFtdO1xyXG5cclxuICAgIGZ1bmN0aW9uIF9pc1dpdGhpbkJvdW5kcyAoaW5kZXgpIHtcclxuICAgICAgICBpZiAoaW5kZXggPCAwIHx8IGluZGV4ID4gOSkge1xyXG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgIH07XHJcblxyXG4gICAgLy9zdGFydCBhbmQgZW5kIGhlcmUgLSBpbmRleGVzIG9mIHRoZSBib3JkJ3MgY2VsbHMgd2hlcmUgaSB3YW50IHRvIHBsYWNlIHNoaXBcclxuICAgIC8vIHRoZSBjb29yZGluYXRlIG9iamVjdCBzaG91bGQgaGF2ZSBhIHJlZmVyZW5jZSB0byB0aGUgc2hpcCBpbiBpdHMgbG9jYXRpb24uXHJcbiAgICBmdW5jdGlvbiBwbGFjZVNoaXAoY29sLCByb3csIHNoaXAsIGRpcmVjdGlvbikge1xyXG4gICAgICAgIGlmIChfaXNXaXRoaW5Cb3VuZHMoY29sKSYmX2lzV2l0aGluQm91bmRzKHJvdykmJmdhbWVib2FyZFtjb2xdW3Jvd10gPT09ICcnKSB7XHJcbiAgICAgICAgICAgIGlmIChkaXJlY3Rpb24gPT09ICd2ZXJ0aWNhbCcmJl9pc1dpdGhpbkJvdW5kcyhjb2wrc2hpcC5sZW5ndGgtMSkpIHtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSBjb2w7IGkgPCBjb2wrc2hpcC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKGdhbWVib2FyZFtpXVtyb3ddID09PSAnJykge1xyXG4gICAgICAgICAgICAgICAgICAgIGdhbWVib2FyZFtpXVtyb3ddID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBgJHtzaGlwLmxlbmd0aH1zaGlwYCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2hpcDogc2hpcCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6ICdPJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXNTdW5rOiBmYWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgc2hpcHMucHVzaChnYW1lYm9hcmRbaV1bcm93XSlcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgcmV0dXJuIGNvbnNvbGUubG9nKCdJbnZhbGlkIHNwb3QnKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoZGlyZWN0aW9uID09PSAnaG9yaXpvbnRhbCcmJl9pc1dpdGhpbkJvdW5kcyhyb3crc2hpcC5sZW5ndGgtMSkpIHtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSByb3c7IGkgPCByb3crc2hpcC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKGdhbWVib2FyZFtjb2xdW2ldID09PSAnJykge1xyXG4gICAgICAgICAgICAgICAgICAgIGdhbWVib2FyZFtjb2xdW2ldID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBgJHtzaGlwLmxlbmd0aH1zaGlwYCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2hpcDogc2hpcCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6ICdPJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXNTdW5rOiBmYWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgc2hpcHMucHVzaChnYW1lYm9hcmRbY29sXVtpXSlcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgcmV0dXJuIGNvbnNvbGUubG9nKCdJbnZhbGlkIHNwb3QnKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHsgcmV0dXJuIGNvbnNvbGUubG9nKCdJbmRleCBvdXQgb2YgYm9hcmQnKX1cclxuXHJcbiAgICAgICAgcmV0dXJuIGdhbWVib2FyZDtcclxuICAgIH0gXHJcblxyXG4gICAgLy9DdXJyZW50bHkgdGVzdGluZyB0aGlzIGluIGluZGV4LmpzXHJcbiAgICBmdW5jdGlvbiByZWNlaXZlQXR0YWNrIChjb2wsIHJvdykge1xyXG4gICAgICAgIGlmIChfaXNXaXRoaW5Cb3VuZHMoY29sKSYmX2lzV2l0aGluQm91bmRzKHJvdykpIHtcclxuICAgICAgICAgICAgbGV0IGJvYXJkQ2VsbCA9IGdhbWVib2FyZFtjb2xdW3Jvd107XHJcbiAgICAgICAgICAgIGlmIChib2FyZENlbGwgPT09ICfCtycpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfSBlbHNlIGlmKGJvYXJkQ2VsbCA9PT0gJycpIHtcclxuICAgICAgICAgICAgICAgIGdhbWVib2FyZFtjb2xdW3Jvd10gPSAnwrcnO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ01pc3MnKVxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGJvYXJkQ2VsbC52YWx1ZSA9PT0gJ08nKSB7XHJcbiAgICAgICAgICAgICAgICBib2FyZENlbGwuc2hpcC5oaXQoKTtcclxuICAgICAgICAgICAgICAgIGJvYXJkQ2VsbC52YWx1ZSA9ICdYJztcclxuICAgICAgICAgICAgICAgIGlmIChib2FyZENlbGwuc2hpcC5pc1N1bmsoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGJvYXJkQ2VsbC5pc1N1bmsgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIF9tYXJrQ2VsbHNBcm91bmRTdWNjc2Vzc2Z1bGxIaXQoY29sLCByb3cpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdTdW5rJylcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGJvYXJkQ2VsbC5pc1N1bmspO1xyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICB9IGVsc2UgeyByZXR1cm4gY29uc29sZS5sb2coJ0F0dGFjayBvdXQgb2YgYm9hcmQnKX1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBfbWFya0NlbGxzQXJvdW5kU3VjY3Nlc3NmdWxsSGl0KGNvbCwgcm93KSB7XHJcbiAgICAgICAgY29uc3QgbmVpZ2hib3VycyA9IFtcclxuICAgICAgICAgICAgZ2FtZWJvYXJkW2NvbCArIDFdPy5bcm93XSwgXHJcbiAgICAgICAgICAgIGdhbWVib2FyZFtjb2wgLSAxXT8uW3Jvd10sXHJcbiAgICAgICAgICAgIGdhbWVib2FyZFtjb2xdPy5bcm93ICsgMV0sXHJcbiAgICAgICAgICAgIGdhbWVib2FyZFtjb2xdPy5bcm93IC0gMV0sXHJcbiAgICAgICAgICAgIGdhbWVib2FyZFtjb2wgKyAxXT8uW3JvdyArIDFdLFxyXG4gICAgICAgICAgICBnYW1lYm9hcmRbY29sIC0gMV0/Lltyb3cgLSAxXSxcclxuICAgICAgICAgICAgZ2FtZWJvYXJkW2NvbCAtIDFdPy5bcm93ICsgMV0sXHJcbiAgICAgICAgICAgIGdhbWVib2FyZFtjb2wgKyAxXT8uW3JvdyAtIDFdXHJcbiAgICAgICAgXTtcclxuICAgICAgICBcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG5laWdoYm91cnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKG5laWdoYm91cnNbaV0gIT09IHVuZGVmaW5lZCYmbmVpZ2hib3Vyc1tpXS52YWx1ZSAhPT0gJ08nJiZuZWlnaGJvdXJzW2ldLnZhbHVlICE9PSAnWCcpIHtcclxuICAgICAgICAgICAgICAgIG5laWdoYm91cnNbaV0gPSAnwrcnO1xyXG4gICAgICAgICAgICAgICAgLy8gVXBkYXRlIGNvcnJlc3BvbmRpbmcgdmFsdWUgaW4gZ2FtZWJvYXJkIGFycmF5XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKGkpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBnYW1lYm9hcmRbY29sICsgMV1bcm93XSA9ICfCtyc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTogXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdhbWVib2FyZFtjb2wgLSAxXVtyb3ddID0gJ8K3JztcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgZ2FtZWJvYXJkW2NvbF1bcm93ICsgMV0gPSAnwrcnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDM6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdhbWVib2FyZFtjb2xdW3JvdyAtIDFdID0gJ8K3JztcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA0OiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgZ2FtZWJvYXJkW2NvbCArIDFdW3JvdyArIDFdID0gJ8K3JztcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA1OiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgZ2FtZWJvYXJkW2NvbCAtIDFdW3JvdyAtIDFdID0gJ8K3JztcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA2OiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgZ2FtZWJvYXJkW2NvbCAtIDFdW3JvdyArIDFdID0gJ8K3JztcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA3OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBnYW1lYm9hcmRbY29sICsgMV1bcm93IC0gMV0gPSAnwrcnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBjaGVja0VuZEdhbWUoKSB7XHJcbiAgICAgICAgbGV0IGNvdW50ZXIgPSAwO1xyXG4gICAgICAgIGZvciAobGV0IHNoaXAgb2Ygc2hpcHMpIHtcclxuICAgICAgICAgICAgaWYoc2hpcC5pc1N1bmsgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgIGNvdW50ZXIrKztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zb2xlLmxvZyhjb3VudGVyKVxyXG4gICAgICAgIGlmKGNvdW50ZXI+PTEwKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFbmQgZ2FtZScpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnNvbGUubG9nKHNoaXBzKVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgZ2FtZWJvYXJkLFxyXG4gICAgICAgIHBsYWNlU2hpcCxcclxuICAgICAgICByZWNlaXZlQXR0YWNrLFxyXG4gICAgICAgIGNoZWNrRW5kR2FtZVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQge0dhbWVib2FyZH0iLCJjb25zdCBTaGlwID0gKHNoaXBMZW5ndGgpID0+IHtcclxuICAgIGNvbnN0IGxlbmd0aCA9IHNoaXBMZW5ndGg7XHJcbiAgICBsZXQgaGl0cyA9IDA7XHJcblxyXG4gICAgZnVuY3Rpb24gaGl0KCkge1xyXG4gICAgICAgIGhpdHMrPTE7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaXNTdW5rKCkge1xyXG4gICAgICAgIGlmKHNoaXBMZW5ndGggPD0gaGl0cykge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9IGVsc2UgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgaGl0LFxyXG4gICAgICAgIGlzU3VuayxcclxuICAgICAgICBsZW5ndGgsXHJcbiAgICAgICAgZ2V0SGl0czogKCkgPT4gaGl0c1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQge1NoaXB9IiwiaW1wb3J0IHsgR2FtZWJvYXJkIH0gZnJvbSBcIi4vZ2FtZWJvYXJkXCI7XG5pbXBvcnQgeyBTaGlwIH0gZnJvbSBcIi4vc2hpcFwiO1xuXG5jb25zdCBteVNoaXAgPSBTaGlwKDQpO1xuY29uc3QgYW5vdGhlclNoaXAgPSBTaGlwKDIpXG5jb25zdCBiaWdTaGlwID0gU2hpcCg0KVxuY29uc3QgbmV3Qm9hcmQgPSBHYW1lYm9hcmQoKVxubmV3Qm9hcmQucGxhY2VTaGlwKDAsMCwgbXlTaGlwLCAndmVydGljYWwnKTtcbm5ld0JvYXJkLnBsYWNlU2hpcCgyLDIsIGFub3RoZXJTaGlwLCAnaG9yaXpvbnRhbCcpO1xubmV3Qm9hcmQucGxhY2VTaGlwKDksNiwgYmlnU2hpcCwgJ2hvcml6b250YWwnKVxuXG5cbi8vIG5ld0JvYXJkLnJlY2VpdmVBdHRhY2soMCwwKVxuLy8gbmV3Qm9hcmQucmVjZWl2ZUF0dGFjaygxLDApXG4vLyBuZXdCb2FyZC5yZWNlaXZlQXR0YWNrKDIsMClcblxubmV3Qm9hcmQucmVjZWl2ZUF0dGFjaygyLDIpO1xubmV3Qm9hcmQucmVjZWl2ZUF0dGFjaygyLDMpO1xuXG5uZXdCb2FyZC5yZWNlaXZlQXR0YWNrKDksNylcblxuXG5jb25zb2xlLmxvZyhuZXdCb2FyZC5nYW1lYm9hcmQpIl0sIm5hbWVzIjpbIlNoaXAiLCJzaGlwTGVuZ3RoIiwiaGl0cyIsImhpdCIsImlzU3VuayIsImxlbmd0aCIsImdldEhpdHMiLCJteVNoaXAiLCJhbm90aGVyU2hpcCIsImJpZ1NoaXAiLCJuZXdCb2FyZCIsImdhbWVib2FyZCIsImdhbWVCb2FyZCIsImkiLCJqIiwiY3JlYXRlR2FtZUJvYXJkIiwic2hpcHMiLCJfaXNXaXRoaW5Cb3VuZHMiLCJpbmRleCIsImNvbnNvbGUiLCJsb2ciLCJwbGFjZVNoaXAiLCJjb2wiLCJyb3ciLCJzaGlwIiwiZGlyZWN0aW9uIiwidHlwZSIsInZhbHVlIiwicHVzaCIsInJlY2VpdmVBdHRhY2siLCJib2FyZENlbGwiLCJuZWlnaGJvdXJzIiwidW5kZWZpbmVkIiwiX21hcmtDZWxsc0Fyb3VuZFN1Y2NzZXNzZnVsbEhpdCIsImNoZWNrRW5kR2FtZSIsImNvdW50ZXIiLCJHYW1lYm9hcmQiXSwic291cmNlUm9vdCI6IiJ9
