(() => {
  "use strict";
  const e = (e) => {
      let a = 0;
      return {
        hit: function () {
          a += 1;
        },
        isSunk: function () {
          return e <= a;
        },
        length: e,
        getHits: () => a,
      };
    },
    a = (e) => {
      const a = (function () {
          const e = [];
          for (let a = 0; a <= 9; a++) {
            e[a] = [];
            for (let t = 0; t <= 9; t++) e[a][t] = "";
          }
          return e;
        })(),
        t = [];
      function o(e) {
        return !(e < 0 || e > 9);
      }
      function n(e, t) {
        const o = [
          a[e + 1]?.[t],
          a[e - 1]?.[t],
          a[e]?.[t + 1],
          a[e]?.[t - 1],
          a[e + 1]?.[t + 1],
          a[e - 1]?.[t - 1],
          a[e - 1]?.[t + 1],
          a[e + 1]?.[t - 1],
        ];
        for (let e = 0; e < o.length; e++)
          if (o[e] && "O" === o[e].value) return !0;
        return !1;
      }
      function r() {
        let a = 0;
        for (let e = t.length - 1; e >= 0; e--)
          !0 === t[e].ship.isSunk() && a++;
        if ((console.log(a), a >= 20))
          return (
            ((e) => {
              const a = document.querySelector(".modal"),
                t = document.querySelector(".overlay");
              return (
                document.querySelector(".btn").addEventListener("click", () => {
                  a.classList.add("hidden"),
                    t.classList.add("hidden"),
                    location.reload();
                }),
                {
                  openModal: function () {
                    (document.querySelector(".win").textContent = `${e} lost!`),
                      a.classList.remove("hidden"),
                      t.classList.remove("hidden");
                  },
                }
              );
            })(`${e}`).openModal(),
            console.log(`${e} lose`),
            !0
          );
      }
      return {
        gameboard: a,
        placeShip: function (r, d, i, c) {
          if (!o(r) || !o(d) || n(r, d)) return 2;
          if (
            "vertical" === c &&
            o(r + i.length - 1) &&
            !n(r + i.length - 1, d)
          )
            for (let o = r; o < r + i.length; o++) {
              if ("" !== a[o][d]) return 2;
              (a[o][d] = {
                type: `${e}${i.length}ship`,
                ship: i,
                value: "O",
                isSunk: !1,
              }),
                t.push(a[o][d]);
            }
          else {
            if (
              "horizontal" !== c ||
              !o(d + i.length - 1) ||
              n(r, d + i.length - 1)
            )
              return 2;
            for (let o = d; o < d + i.length; o++) {
              if ("" !== a[r][o]) return 2;
              (a[r][o] = {
                type: `${e}${i.length}ship`,
                ship: i,
                value: "O",
                isSunk: !1,
              }),
                t.push(a[r][o]);
            }
          }
          return a;
        },
        receiveAttack: function (e, t) {
          if (!o(e) || !o(t)) return console.log("Attack out of board");
          {
            let o = a[e][t];
            "" === o
              ? (a[e][t] = "●")
              : "O" === o.value &&
                (o.ship.hit(),
                (o.value = "X"),
                o.ship.isSunk() &&
                  ((o.isSunk = !0),
                  (function (e, t) {
                    const o = [
                      a[e + 1]?.[t],
                      a[e - 1]?.[t],
                      a[e]?.[t + 1],
                      a[e]?.[t - 1],
                      a[e + 1]?.[t + 1],
                      a[e - 1]?.[t - 1],
                      a[e - 1]?.[t + 1],
                      a[e + 1]?.[t - 1],
                    ];
                    for (let n = 0; n < o.length; n++)
                      if (void 0 !== o[n] && "O" !== o[n].value)
                        switch (((o[n] = "●"), n)) {
                          case 0:
                            void 0 !== a[e + 1] &&
                              "X" !== a[e + 1][t] &&
                              (a[e + 1][t] = "●");
                            break;
                          case 1:
                            void 0 !== a[e - 1] &&
                              "X" !== a[e - 1][t] &&
                              (a[e - 1][t] = "●");
                            break;
                          case 2:
                            void 0 !== a[e][t + 1] &&
                              "X" !== a[e][t + 1] &&
                              (a[e][t + 1] = "●");
                            break;
                          case 3:
                            void 0 !== a[e][t - 1] &&
                              "X" !== a[e][t - 1] &&
                              (a[e][t - 1] = "●");
                            break;
                          case 4:
                            void 0 !== a[e + 1] &&
                              "X" !== a[e + 1][t + 1] &&
                              (a[e + 1][t + 1] = "●");
                            break;
                          case 5:
                            void 0 !== a[e - 1] &&
                              "X" !== a[e - 1][t - 1] &&
                              (a[e - 1][t - 1] = "●");
                            break;
                          case 6:
                            void 0 !== a[e - 1] &&
                              "X" !== a[e - 1][t + 1] &&
                              (a[e - 1][t + 1] = "●");
                            break;
                          case 7:
                            void 0 !== a[e + 1] &&
                              "X" !== a[e + 1][t - 1] &&
                              (a[e + 1][t - 1] = "●");
                        }
                      else console.log("asfasf");
                  })(e, t),
                  console.log("Sunk")),
                console.log(o.isSunk),
                r());
          }
        },
        checkEndGame: r,
      };
    },
    t = (e) => ({ type: e, gameboard: a(e) });
  let o;
  document.addEventListener("DOMContentLoaded", () => {
    !(function () {
      const a = document.querySelector(".gameboard-one"),
        n = document.querySelector(".gameboard-two"),
        r = t("You"),
        d = t("Computer"),
        i = e(4),
        c = e(3),
        l = e(3),
        s = e(2),
        m = e(2),
        g = e(2),
        u = e(1),
        b = e(1),
        f = e(1),
        h = e(1),
        v = [e(4), e(3), e(3), e(2), e(2), e(2), e(1), e(1), e(1), e(1)];
      function p(e, a) {
        a.forEach((a) => {
          let t = !1;
          for (; !t; ) {
            let o = Math.random() < 0.5 ? "horizontal" : "vertical",
              n = Math.floor(10 * Math.random()),
              r = Math.floor(10 * Math.random());
            2 !== e.gameboard.placeShip(n, r, a, o) && (t = !0);
          }
        });
      }
      p(r, [i, c, l, s, m, g, u, b, f, h]),
        p(d, v),
        (o = (function (e, a) {
          const t = document.createElement("div");
          function o() {
            t.textContent = "";
            for (let a = 0; a < e.gameboard.gameboard.length; a++)
              for (let o = 0; o < e.gameboard.gameboard[a].length; o++) {
                const n = document.createElement("div");
                "object" == typeof e.gameboard.gameboard[a][o]
                  ? "O" === e.gameboard.gameboard[a][o].value &&
                    ((n.innerHTML = e.gameboard.gameboard[a][o].value),
                    n.classList.add("black"))
                  : "X" === e.gameboard.gameboard[a][o]
                    ? ((n.innerHTML = e.gameboard.gameboard[a][o]),
                      n.classList.add("orange"))
                    : (n.innerHTML = e.gameboard.gameboard[a][o]),
                  t.appendChild(n);
              }
            a.append(t);
          }
          return (
            t.classList.add("container"),
            {
              render: o,
              attack: function a(t = 0) {
                if (t >= 99)
                  return void console.log(
                    "Maximum attempts reached. Exiting attack function.",
                  );
                let n = Math.floor(10 * Math.random()),
                  r = Math.floor(10 * Math.random());
                if (
                  "●" !== e.gameboard.gameboard[n][r] &&
                  "X" !== e.gameboard.gameboard[n][r].value &&
                  "X" !== e.gameboard.gameboard[n][r]
                )
                  return (
                    e.gameboard.receiveAttack(n, r),
                    "object" == typeof e.gameboard.gameboard[n][r]
                      ? ((e.gameboard.gameboard[n][r] =
                          e.gameboard.gameboard[n][r].value),
                        setTimeout(a, 1e3),
                        void o())
                      : void o()
                  );
                a(t + 1);
              },
            }
          );
        })(r, a)),
        (function (e, a) {
          const t = document.createElement("div");
          t.classList.add("container"),
            (function n() {
              t.textContent = "";
              for (let a = 0; a < e.gameboard.gameboard.length; a++)
                for (let r = 0; r < e.gameboard.gameboard[a].length; r++) {
                  const d = document.createElement("div");
                  "object" == typeof e.gameboard.gameboard[a][r]
                    ? "X" === e.gameboard.gameboard[a][r].value &&
                      ((e.gameboard.gameboard[a][r] = "X"),
                      (d.innerHTML = "X"),
                      d.classList.add("orange"))
                    : "X" === e.gameboard.gameboard[a][r]
                      ? ((d.innerHTML = e.gameboard.gameboard[a][r]),
                        d.classList.add("orange"))
                      : (d.innerHTML = e.gameboard.gameboard[a][r]),
                    d.addEventListener("click", () => {
                      "●" !== d.textContent &&
                        "X" !== d.textContent &&
                        (e.gameboard.receiveAttack(a, r),
                        "object" == typeof e.gameboard.gameboard[a][r]
                          ? n()
                          : (n(), setTimeout(o.attack, 1e3), o.render()));
                    }),
                    t.appendChild(d);
                }
              a.append(t);
            })();
        })(d, n),
        o.render();
    })();
  });
})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q2pEaUUsRUFBTzVDLFVBQVVDLElBQUksV0FHckIyQyxFQUFPQyxVQUFZdEUsRUFBT0MsVUFBVUEsVUFBVUUsR0FBR0MsR0FFckRpRSxFQUFPN0MsaUJBQWlCLFNBQVMsS0FDSixNQUF0QjZDLEVBQU92QyxhQUErQyxNQUF0QnVDLEVBQU92QyxjQUN0QzlCLEVBQU9DLFVBQVVtQyxjQUFjakMsRUFBRUMsR0FDZSxpQkFBdENKLEVBQU9DLFVBQVVBLFVBQVVFLEdBQUdDLEdBQ3BDZ0UsS0FFQUEsSUFDQVMsV0FBV25DLEVBQWdCK0IsT0FBTyxLQUNsQy9CLEVBQWdCMEIsVUFFeEIsSUFFSkYsRUFBVUssWUFBWUYsRUFDMUIsQ0FDRkosRUFBSU8sT0FBT04sRUFDakIsQ0FDQUUsRUFDSixDRW5CSVcsQ0FBb0JqQyxFQUFZRixHQUVoQ0YsRUFBZ0IwQixRQUVwQixDQzNGSVksRUFBUyxHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zaGlwLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZ2FtZWJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvVUkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9nYW1lLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgU2hpcCA9IChzaGlwTGVuZ3RoKSA9PiB7XG4gIGNvbnN0IGxlbmd0aCA9IHNoaXBMZW5ndGg7XG4gIGxldCBoaXRzID0gMDtcblxuICBmdW5jdGlvbiBoaXQoKSB7XG4gICAgaGl0cyArPSAxO1xuICB9XG5cbiAgZnVuY3Rpb24gaXNTdW5rKCkge1xuICAgIGlmIChzaGlwTGVuZ3RoIDw9IGhpdHMpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGhpdCxcbiAgICBpc1N1bmssXG4gICAgbGVuZ3RoLFxuICAgIGdldEhpdHM6ICgpID0+IGhpdHMsXG4gIH07XG59O1xuXG5leHBvcnQgeyBTaGlwIH07XG4iLCJpbXBvcnQgeyBtb2RhbCB9IGZyb20gXCIuL1VJXCI7XG5cbmNvbnN0IEdhbWVib2FyZCA9IChwbGF5ZXIpID0+IHtcbiAgZnVuY3Rpb24gY3JlYXRlR2FtZUJvYXJkKCkge1xuICAgIGNvbnN0IGdhbWVCb2FyZCA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDw9IDk7IGkrKykge1xuICAgICAgZ2FtZUJvYXJkW2ldID0gW107XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8PSA5OyBqKyspIHtcbiAgICAgICAgZ2FtZUJvYXJkW2ldW2pdID0gXCJcIjtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGdhbWVCb2FyZDtcbiAgfVxuXG4gIGNvbnN0IGdhbWVib2FyZCA9IGNyZWF0ZUdhbWVCb2FyZCgpO1xuICBjb25zdCBzaGlwcyA9IFtdO1xuXG4gIGZ1bmN0aW9uIF9pc1dpdGhpbkJvdW5kcyhpbmRleCkge1xuICAgIGlmIChpbmRleCA8IDAgfHwgaW5kZXggPiA5KSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIC8vc3RhcnQgYW5kIGVuZCBoZXJlIC0gaW5kZXhlcyBvZiB0aGUgYm9yZCdzIGNlbGxzIHdoZXJlIGkgd2FudCB0byBwbGFjZSBzaGlwXG4gIGZ1bmN0aW9uIHBsYWNlU2hpcChjb2wsIHJvdywgc2hpcCwgZGlyZWN0aW9uKSB7XG4gICAgaWYgKF9pc1dpdGhpbkJvdW5kcyhjb2wpICYmIF9pc1dpdGhpbkJvdW5kcyhyb3cpICYmICFfY2hlY2tDZWxsc0Fyb3VuZChjb2wsIHJvdykpIHtcbiAgICAgICAgaWYgKGRpcmVjdGlvbiA9PT0gXCJ2ZXJ0aWNhbFwiICYmIF9pc1dpdGhpbkJvdW5kcyhjb2wgKyBzaGlwLmxlbmd0aCAtIDEpJiYhX2NoZWNrQ2VsbHNBcm91bmQoY29sICsgc2hpcC5sZW5ndGggLSAxLCByb3cpKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gY29sOyBpIDwgY29sICsgc2hpcC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmIChnYW1lYm9hcmRbaV1bcm93XSA9PT0gXCJcIiApIHtcbiAgICAgICAgICAgICAgICAgICAgZ2FtZWJvYXJkW2ldW3Jvd10gPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBgJHtwbGF5ZXJ9JHtzaGlwLmxlbmd0aH1zaGlwYCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNoaXA6IHNoaXAsXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogXCJPXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBpc1N1bms6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICBzaGlwcy5wdXNoKGdhbWVib2FyZFtpXVtyb3ddKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgcmV0dXJuIDI7IFxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKGRpcmVjdGlvbiA9PT0gXCJob3Jpem9udGFsXCIgJiYgX2lzV2l0aGluQm91bmRzKHJvdyArIHNoaXAubGVuZ3RoIC0gMSkmJiFfY2hlY2tDZWxsc0Fyb3VuZChjb2wsIHJvdyArIHNoaXAubGVuZ3RoIC0gMSkpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSByb3c7IGkgPCByb3cgKyBzaGlwLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKGdhbWVib2FyZFtjb2xdW2ldID09PSBcIlwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGdhbWVib2FyZFtjb2xdW2ldID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogYCR7cGxheWVyfSR7c2hpcC5sZW5ndGh9c2hpcGAsXG4gICAgICAgICAgICAgICAgICAgICAgICBzaGlwOiBzaGlwLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IFwiT1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgaXNTdW5rOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgc2hpcHMucHVzaChnYW1lYm9hcmRbY29sXVtpXSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHJldHVybiAyOyBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHJldHVybiAyOyBcbiAgICB9IGVsc2UgcmV0dXJuIDI7IFxuXG4gICAgcmV0dXJuIGdhbWVib2FyZDtcbn1cblxuICBcblxuICAvL0N1cnJlbnRseSB0ZXN0aW5nIHRoaXMgaW4gaW5kZXguanNcbiAgZnVuY3Rpb24gcmVjZWl2ZUF0dGFjayhjb2wsIHJvdykge1xuICAgIGlmIChfaXNXaXRoaW5Cb3VuZHMoY29sKSAmJiBfaXNXaXRoaW5Cb3VuZHMocm93KSkge1xuICAgICAgbGV0IGJvYXJkQ2VsbCA9IGdhbWVib2FyZFtjb2xdW3Jvd107XG4gICAgICAgIGlmIChib2FyZENlbGwgPT09IFwiXCIpIHtcbiAgICAgICAgZ2FtZWJvYXJkW2NvbF1bcm93XSA9ICdcXHUyNUNGJztcbiAgICAgIH0gZWxzZSBpZiAoYm9hcmRDZWxsLnZhbHVlID09PSBcIk9cIikge1xuICAgICAgICBib2FyZENlbGwuc2hpcC5oaXQoKTtcbiAgICAgICAgYm9hcmRDZWxsLnZhbHVlID0gXCJYXCI7XG4gICAgICAgIGlmIChib2FyZENlbGwuc2hpcC5pc1N1bmsoKSkge1xuICAgICAgICAgIGJvYXJkQ2VsbC5pc1N1bmsgPSB0cnVlO1xuICAgICAgICAgIF9tYXJrQ2VsbHNBcm91bmRTdWNjc2Vzc2Z1bGxIaXQoY29sLCByb3cpO1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwiU3Vua1wiKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZyhib2FyZENlbGwuaXNTdW5rKTtcbiAgICAgICAgY2hlY2tFbmRHYW1lKClcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGNvbnNvbGUubG9nKFwiQXR0YWNrIG91dCBvZiBib2FyZFwiKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBfY2hlY2tDZWxsc0Fyb3VuZChjb2wsIHJvdykge1xuICAgIGNvbnN0IG5laWdoYm91cnMgPSBbXG4gICAgICBnYW1lYm9hcmRbY29sICsgMV0/Lltyb3ddLFxuICAgICAgZ2FtZWJvYXJkW2NvbCAtIDFdPy5bcm93XSxcbiAgICAgIGdhbWVib2FyZFtjb2xdPy5bcm93ICsgMV0sXG4gICAgICBnYW1lYm9hcmRbY29sXT8uW3JvdyAtIDFdLFxuICAgICAgZ2FtZWJvYXJkW2NvbCArIDFdPy5bcm93ICsgMV0sXG4gICAgICBnYW1lYm9hcmRbY29sIC0gMV0/Lltyb3cgLSAxXSxcbiAgICAgIGdhbWVib2FyZFtjb2wgLSAxXT8uW3JvdyArIDFdLFxuICAgICAgZ2FtZWJvYXJkW2NvbCArIDFdPy5bcm93IC0gMV0sXG4gICAgXTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbmVpZ2hib3Vycy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKG5laWdoYm91cnNbaV0gJiYgbmVpZ2hib3Vyc1tpXS52YWx1ZSA9PT0gXCJPXCIpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9IFxuICByZXR1cm4gZmFsc2Vcbn1cblxuLy9OZWVkIHRvIG1hcmsgbm90IG9ubHkgYXJvdW5kIG9uZSBjZWxsXG5mdW5jdGlvbiBfbWFya0NlbGxzQXJvdW5kU3VjY3Nlc3NmdWxsSGl0KGNvbCwgcm93KSB7XG4gIGNvbnN0IG5laWdoYm91cnMgPSBbXG4gICAgZ2FtZWJvYXJkW2NvbCArIDFdPy5bcm93XSxcbiAgICBnYW1lYm9hcmRbY29sIC0gMV0/Lltyb3ddLFxuICAgIGdhbWVib2FyZFtjb2xdPy5bcm93ICsgMV0sXG4gICAgZ2FtZWJvYXJkW2NvbF0/Lltyb3cgLSAxXSxcbiAgICBnYW1lYm9hcmRbY29sICsgMV0/Lltyb3cgKyAxXSxcbiAgICBnYW1lYm9hcmRbY29sIC0gMV0/Lltyb3cgLSAxXSxcbiAgICBnYW1lYm9hcmRbY29sIC0gMV0/Lltyb3cgKyAxXSxcbiAgICBnYW1lYm9hcmRbY29sICsgMV0/Lltyb3cgLSAxXSxcbiAgXTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IG5laWdoYm91cnMubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoXG4gICAgICBuZWlnaGJvdXJzW2ldICE9PSB1bmRlZmluZWQgJiZcbiAgICAgIG5laWdoYm91cnNbaV0udmFsdWUgIT09IFwiT1wiKSB7XG4gICAgICBuZWlnaGJvdXJzW2ldID0gJ1xcdTI1Q0YnO1xuICAgICAgICAvLyBVcGRhdGUgY29ycmVzcG9uZGluZyB2YWx1ZSBpbiBnYW1lYm9hcmQgYXJyYXlcbiAgICAgIHN3aXRjaCAoaSkge1xuICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgaWYgKGdhbWVib2FyZFtjb2wgKyAxXSAhPT0gdW5kZWZpbmVkICYmIGdhbWVib2FyZFtjb2wgKyAxXVtyb3ddICE9PSAnWCcpIHtcbiAgICAgICAgICAgIGdhbWVib2FyZFtjb2wgKyAxXVtyb3ddID0gJ1xcdTI1Q0YnO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIGlmIChnYW1lYm9hcmRbY29sIC0gMV0gIT09IHVuZGVmaW5lZCAmJiBnYW1lYm9hcmRbY29sIC0gMV1bcm93XSAhPT0gJ1gnKSB7XG4gICAgICAgICAgICBnYW1lYm9hcmRbY29sIC0gMV1bcm93XSA9ICdcXHUyNUNGJztcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICBpZiAoZ2FtZWJvYXJkW2NvbF1bcm93ICsgMV0gIT09IHVuZGVmaW5lZCAmJiBnYW1lYm9hcmRbY29sXVtyb3cgKyAxXSAhPT0gJ1gnKSB7XG4gICAgICAgICAgICBnYW1lYm9hcmRbY29sXVtyb3cgKyAxXSA9ICdcXHUyNUNGJztcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICBpZiAoZ2FtZWJvYXJkW2NvbF1bcm93IC0gMV0gIT09IHVuZGVmaW5lZCAmJiBnYW1lYm9hcmRbY29sXVtyb3cgLSAxXSAhPT0gJ1gnKSB7XG4gICAgICAgICAgICBnYW1lYm9hcmRbY29sXVtyb3cgLSAxXSA9ICdcXHUyNUNGJztcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNDpcbiAgICAgICAgICBpZiAoZ2FtZWJvYXJkW2NvbCArIDFdICE9PSB1bmRlZmluZWQgJiYgZ2FtZWJvYXJkW2NvbCArIDFdW3JvdyArIDFdICE9PSAnWCcpIHtcbiAgICAgICAgICAgIGdhbWVib2FyZFtjb2wgKyAxXVtyb3cgKyAxXSA9ICdcXHUyNUNGJztcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNTpcbiAgICAgICAgICBpZiAoZ2FtZWJvYXJkW2NvbCAtIDFdICE9PSB1bmRlZmluZWQgJiYgZ2FtZWJvYXJkW2NvbCAtIDFdW3JvdyAtIDFdICE9PSAnWCcpIHtcbiAgICAgICAgICAgIGdhbWVib2FyZFtjb2wgLSAxXVtyb3cgLSAxXSA9ICdcXHUyNUNGJztcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNjpcbiAgICAgICAgICBpZiAoZ2FtZWJvYXJkW2NvbCAtIDFdICE9PSB1bmRlZmluZWQgJiYgZ2FtZWJvYXJkW2NvbCAtIDFdW3JvdyArIDFdICE9PSAnWCcpIHtcbiAgICAgICAgICAgIGdhbWVib2FyZFtjb2wgLSAxXVtyb3cgKyAxXSA9ICdcXHUyNUNGJztcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNzpcbiAgICAgICAgICBpZiAoZ2FtZWJvYXJkW2NvbCArIDFdICE9PSB1bmRlZmluZWQgJiYgZ2FtZWJvYXJkW2NvbCArIDFdW3JvdyAtIDFdICE9PSAnWCcpIHtcbiAgICAgICAgICAgIGdhbWVib2FyZFtjb2wgKyAxXVtyb3cgLSAxXSA9ICdcXHUyNUNGJztcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBcbiAgICB9IGVsc2UgY29uc29sZS5sb2coJ2FzZmFzZicpXG4gIH1cbn1cblxuICBmdW5jdGlvbiBjaGVja0VuZEdhbWUoKSB7XG4gICAgbGV0IGNvdW50ZXIgPSAwO1xuICAgIGZvciAobGV0IGkgPSBzaGlwcy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgaWYgKHNoaXBzW2ldLnNoaXAuaXNTdW5rKCkgPT09IHRydWUpIHtcbiAgICAgICAgY291bnRlcisrIDtcbiAgICAgICAgLy8gY29uc29sZS5sb2coYCR7cGxheWVyfSAtIFNoaXAgJHtpfSBpcyBzdW5rYCk7XG4gICAgfVxuICAgfVxuICAvLyAgY29uc29sZS5sb2coc2hpcHMpXG4gICAgY29uc29sZS5sb2coY291bnRlcik7XG4gICAgaWYgKGNvdW50ZXIgPj0gMjApIHtcbiAgICAgIGxldCBuZXdzPSBtb2RhbChgJHtwbGF5ZXJ9YCk7XG4gICAgICBuZXdzLm9wZW5Nb2RhbCgpXG4gICAgICBjb25zb2xlLmxvZyhgJHtwbGF5ZXJ9IGxvc2VgKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgZ2FtZWJvYXJkLFxuICAgIHBsYWNlU2hpcCxcbiAgICByZWNlaXZlQXR0YWNrLFxuICAgIGNoZWNrRW5kR2FtZSxcbiAgfTtcbn07XG5cbmV4cG9ydCB7IEdhbWVib2FyZCB9XG4iLCJpbXBvcnQgeyBwbGF5ZXJHYW1lYm9hcmQgfSBmcm9tIFwiLi9nYW1lXCI7XHJcblxyXG5mdW5jdGlvbiByZW5kZXJQbGF5ZXJHYW1lYm9hcmQocGxheWVyLCBib3gpIHtcclxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NvbnRhaW5lcicpXHJcbiAgICBmdW5jdGlvbiByZW5kZXIoKSB7ICAgXHJcbiAgICAgICAgY29udGFpbmVyLnRleHRDb250ZW50ID0gJyc7IFxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGxheWVyLmdhbWVib2FyZC5nYW1lYm9hcmQubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBwbGF5ZXIuZ2FtZWJvYXJkLmdhbWVib2FyZFtpXS5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc3F1YXJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgICAgICBpZih0eXBlb2YocGxheWVyLmdhbWVib2FyZC5nYW1lYm9hcmRbaV1bal0pID09PSAnb2JqZWN0Jykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKHBsYXllci5nYW1lYm9hcmQuZ2FtZWJvYXJkW2ldW2pdLnZhbHVlID09PSAnTycpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3F1YXJlLmlubmVySFRNTCA9IHBsYXllci5nYW1lYm9hcmQuZ2FtZWJvYXJkW2ldW2pdLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcXVhcmUuY2xhc3NMaXN0LmFkZCgnYmxhY2snKVxyXG4gICAgICAgICAgICAgICAgICAgIH0gXHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHBsYXllci5nYW1lYm9hcmQuZ2FtZWJvYXJkW2ldW2pdID09PSBcIlhcIil7XHJcbiAgICAgICAgICAgICAgICAgICAgc3F1YXJlLmlubmVySFRNTCA9IHBsYXllci5nYW1lYm9hcmQuZ2FtZWJvYXJkW2ldW2pdOyBcclxuICAgICAgICAgICAgICAgICAgICBzcXVhcmUuY2xhc3NMaXN0LmFkZCgnb3JhbmdlJylcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHNxdWFyZS5pbm5lckhUTUwgPSBwbGF5ZXIuZ2FtZWJvYXJkLmdhbWVib2FyZFtpXVtqXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChzcXVhcmUpO1xyXG4gICAgICAgICAgICB9ICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJveC5hcHBlbmQoY29udGFpbmVyKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IE1BWF9BVFRFTVBUUyA9IDk5O1xyXG5cclxuICAgIGZ1bmN0aW9uIGF0dGFjayhhdHRlbXB0ID0gMCkge1xyXG4gICAgICAgIGlmIChhdHRlbXB0ID49IE1BWF9BVFRFTVBUUykge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIk1heGltdW0gYXR0ZW1wdHMgcmVhY2hlZC4gRXhpdGluZyBhdHRhY2sgZnVuY3Rpb24uXCIpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGxldCBjb2xSYW5kb20gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XHJcbiAgICAgICAgbGV0IHJvd1JhbmRvbSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcclxuICAgIFxyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgICAgcGxheWVyLmdhbWVib2FyZC5nYW1lYm9hcmRbY29sUmFuZG9tXVtyb3dSYW5kb21dICE9PSAnXFx1MjVDRicgJiZcclxuICAgICAgICAgICAgcGxheWVyLmdhbWVib2FyZC5nYW1lYm9hcmRbY29sUmFuZG9tXVtyb3dSYW5kb21dLnZhbHVlICE9PSAnWCcgJiZcclxuICAgICAgICAgICAgcGxheWVyLmdhbWVib2FyZC5nYW1lYm9hcmRbY29sUmFuZG9tXVtyb3dSYW5kb21dICE9PSAnWCdcclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgcGxheWVyLmdhbWVib2FyZC5yZWNlaXZlQXR0YWNrKGNvbFJhbmRvbSwgcm93UmFuZG9tKTtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBwbGF5ZXIuZ2FtZWJvYXJkLmdhbWVib2FyZFtjb2xSYW5kb21dW3Jvd1JhbmRvbV0gPT09ICdvYmplY3QnKSB7XHJcbiAgICAgICAgICAgICAgICBwbGF5ZXIuZ2FtZWJvYXJkLmdhbWVib2FyZFtjb2xSYW5kb21dW3Jvd1JhbmRvbV0gPSBwbGF5ZXIuZ2FtZWJvYXJkLmdhbWVib2FyZFtjb2xSYW5kb21dW3Jvd1JhbmRvbV0udmFsdWU7XHJcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGF0dGFjaywxMDAwKVxyXG4gICAgICAgICAgICAgICAgcmVuZGVyKCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZW5kZXIoKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGF0dGFjayhhdHRlbXB0ICsgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHJlbmRlcixcclxuICAgICAgICBhdHRhY2tcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gcmVuZGVyQ29tcEdhbWVib2FyZCAocGxheWVyLCBib3gpIHtcclxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjb250YWluZXInKVxyXG4gICAgZnVuY3Rpb24gcmVuZGVyICgpIHtcclxuICAgICAgICBjb250YWluZXIudGV4dENvbnRlbnQgPSAnJztcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBsYXllci5nYW1lYm9hcmQuZ2FtZWJvYXJkLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgcGxheWVyLmdhbWVib2FyZC5nYW1lYm9hcmRbaV0ubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHNxdWFyZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICAgICAgLy9Db21lbnRlZCBmb3IgY2hlY2tpbmcgcmFuZG9tIHNoaXAgcGxhY2VtZW50IG9uIGNvbXAgYm9hcmRcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgaWYodHlwZW9mKHBsYXllci5nYW1lYm9hcmQuZ2FtZWJvYXJkW2ldW2pdKSA9PT0gJ29iamVjdCcpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBpZihwbGF5ZXIuZ2FtZWJvYXJkLmdhbWVib2FyZFtpXVtqXS52YWx1ZSA9PT0gJ08nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIHNxdWFyZS5pbm5lckhUTUwgPSBwbGF5ZXIuZ2FtZWJvYXJkLmdhbWVib2FyZFtpXVtqXS52YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgc3F1YXJlLmNsYXNzTGlzdC5hZGQoJ2JsYWNrJylcclxuICAgICAgICAgICAgICAgICAgICAgaWYocGxheWVyLmdhbWVib2FyZC5nYW1lYm9hcmRbaV1bal0udmFsdWUgPT09ICdYJyl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYXllci5nYW1lYm9hcmQuZ2FtZWJvYXJkW2ldW2pdID0gJ1gnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNxdWFyZS5pbm5lckhUTUwgID0gJ1gnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcXVhcmUuY2xhc3NMaXN0LmFkZCgnb3JhbmdlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChwbGF5ZXIuZ2FtZWJvYXJkLmdhbWVib2FyZFtpXVtqXSA9PT0gJ1gnKXtcclxuICAgICAgICAgICAgICAgICAgICBzcXVhcmUuaW5uZXJIVE1MID0gcGxheWVyLmdhbWVib2FyZC5nYW1lYm9hcmRbaV1bal07XHJcbiAgICAgICAgICAgICAgICAgICAgc3F1YXJlLmNsYXNzTGlzdC5hZGQoJ29yYW5nZScpOztcclxuICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICAgICAgICAgIHNxdWFyZS5pbm5lckhUTUwgPSBwbGF5ZXIuZ2FtZWJvYXJkLmdhbWVib2FyZFtpXVtqXTsgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBzcXVhcmUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoc3F1YXJlLnRleHRDb250ZW50ICE9PSdcXHUyNUNGJyYmc3F1YXJlLnRleHRDb250ZW50ICE9PVwiWFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYXllci5nYW1lYm9hcmQucmVjZWl2ZUF0dGFjayhpLGopXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHR5cGVvZihwbGF5ZXIuZ2FtZWJvYXJkLmdhbWVib2FyZFtpXVtqXSkgPT09ICdvYmplY3QnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZW5kZXIoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVuZGVyKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQocGxheWVyR2FtZWJvYXJkLmF0dGFjaywxMDAwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYXllckdhbWVib2FyZC5yZW5kZXIoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChzcXVhcmUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBib3guYXBwZW5kKGNvbnRhaW5lcik7XHJcbiAgICB9XHJcbiAgICByZW5kZXIoKVxyXG59XHJcblxyXG5jb25zdCBtb2RhbCA9IChsb3NlcikgPT4ge1xyXG4gICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsXCIpO1xyXG4gICAgY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub3ZlcmxheVwiKTtcclxuICAgIGNvbnN0IG5ld0dhbWVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ0blwiKTtcclxuICAgIG5ld0dhbWVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgY2xvc2VNb2RhbCgpXHJcbiAgICB9KVxyXG5cclxuXHJcbiAgICBmdW5jdGlvbiBvcGVuTW9kYWwoKSB7XHJcbiAgICAgICAgY29uc3Qgd2luTWFzc2FnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53aW4nKTtcclxuICAgICAgICB3aW5NYXNzYWdlLnRleHRDb250ZW50ID0gYCR7bG9zZXJ9IGxvc3QhYFxyXG4gICAgICAgIG1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XHJcbiAgICAgICAgb3ZlcmxheS5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xyXG4gICAgfTtcclxuICAgIFxyXG4gICAgZnVuY3Rpb24gY2xvc2VNb2RhbCgpIHtcclxuICAgICAgICBtb2RhbC5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xyXG4gICAgICAgIG92ZXJsYXkuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcclxuICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKVxyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4ge29wZW5Nb2RhbH1cclxufVxyXG5cclxuXHJcblxyXG5cclxuZXhwb3J0IHtcclxuICAgIHJlbmRlclBsYXllckdhbWVib2FyZCxcclxuICAgIHJlbmRlckNvbXBHYW1lYm9hcmQsXHJcbiAgICBtb2RhbFxyXG59IiwiaW1wb3J0IHsgR2FtZWJvYXJkIH0gZnJvbSBcIi4vZ2FtZWJvYXJkXCJcclxuXHJcbmNvbnN0IFBsYXllciA9IChwbGF5ZXJ0eXBlKSA9PiB7XHJcbiAgICBjb25zdCB0eXBlID0gcGxheWVydHlwZTtcclxuXHJcbiAgICBjb25zdCBnYW1lYm9hcmQgPSBHYW1lYm9hcmQocGxheWVydHlwZSk7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB0eXBlLFxyXG4gICAgICAgIGdhbWVib2FyZFxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQge1BsYXllcn1cclxuIiwiaW1wb3J0IHsgU2hpcCB9IGZyb20gXCIuL3NoaXBcIjtcclxuaW1wb3J0IHsgUGxheWVyIH0gZnJvbSBcIi4vcGxheWVyXCI7XHJcbmltcG9ydCB7IHJlbmRlclBsYXllckdhbWVib2FyZCwgcmVuZGVyQ29tcEdhbWVib2FyZCB9IGZyb20gXCIuL1VJXCI7XHJcblxyXG5sZXQgcGxheWVyR2FtZWJvYXJkXHJcbmZ1bmN0aW9uIHBsYXlHYW1lICgpIHsgXHJcbiAgICBjb25zdCBwbGF5ZXJCb2FyZEJveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYW1lYm9hcmQtb25lJyk7XHJcbiAgICBjb25zdCBjb21wdXRlckJvYXJkQm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdhbWVib2FyZC10d28nKTtcclxuXHJcbiAgICBjb25zdCByZWFsUGxheWVyID0gUGxheWVyKCdZb3UnKTtcclxuICAgIGNvbnN0IGNvbXBQbGF5ZXIgPSBQbGF5ZXIoJ0NvbXB1dGVyJyk7XHJcblxyXG4gICAgY29uc3QgZm91clNoaXAgPSBTaGlwKDQpXHJcbiAgICBjb25zdCB0aHJlZVNoaXBPbmUgPSBTaGlwKDMpO1xyXG4gICAgY29uc3QgdGhyZWVTaGlwVHdvID0gU2hpcCgzKTtcclxuICAgIGNvbnN0IHR3b1NoaXBPbmUgPSBTaGlwKDIpO1xyXG4gICAgY29uc3QgdHdvU2hpcFR3byA9IFNoaXAoMik7XHJcbiAgICBjb25zdCB0d29TaGlwVGhyZWUgPSBTaGlwKDIpO1xyXG4gICAgY29uc3Qgb25lU2hpcE9uZSA9IFNoaXAoMSk7XHJcbiAgICBjb25zdCBvbmVTaGlwVHdvID0gU2hpcCgxKTtcclxuICAgIGNvbnN0IG9uZVNoaXBUaHJlZSA9IFNoaXAoMSk7XHJcbiAgICBjb25zdCBvbmVTaGlwRm91ciA9IFNoaXAoMSk7XHJcblxyXG4gICAgY29uc3QgZm91clNoaXBDb21wID0gU2hpcCg0KVxyXG4gICAgY29uc3QgdGhyZWVTaGlwT25lQ29tcCA9IFNoaXAoMyk7XHJcbiAgICBjb25zdCB0aHJlZVNoaXBUd29Db21wID0gU2hpcCgzKTtcclxuICAgIGNvbnN0IHR3b1NoaXBPbmVDb21wID0gU2hpcCgyKTtcclxuICAgIGNvbnN0IHR3b1NoaXBUd29Db21wID0gU2hpcCgyKTtcclxuICAgIGNvbnN0IHR3b1NoaXBUaHJlZUNvbXAgPSBTaGlwKDIpO1xyXG4gICAgY29uc3Qgb25lU2hpcE9uZUNvbXAgPSBTaGlwKDEpO1xyXG4gICAgY29uc3Qgb25lU2hpcFR3b0NvbXAgPSBTaGlwKDEpO1xyXG4gICAgY29uc3Qgb25lU2hpcFRocmVlQ29tcCA9IFNoaXAoMSk7XHJcbiAgICBjb25zdCBvbmVTaGlwRm91ckNvbXAgPSBTaGlwKDEpO1xyXG5cclxuICAgIGNvbnN0IHNoaXBzID0gW2ZvdXJTaGlwLCB0aHJlZVNoaXBPbmUsIHRocmVlU2hpcFR3bywgdHdvU2hpcE9uZSx0d29TaGlwVHdvLCB0d29TaGlwVGhyZWUsIG9uZVNoaXBPbmUsIG9uZVNoaXBUd28sIG9uZVNoaXBUaHJlZSwgb25lU2hpcEZvdXJdXHJcblxyXG4gICAgY29uc3Qgc2hpcHNDb21wID0gW2ZvdXJTaGlwQ29tcCwgdGhyZWVTaGlwT25lQ29tcCwgdGhyZWVTaGlwVHdvQ29tcCwgdHdvU2hpcE9uZUNvbXAsdHdvU2hpcFR3b0NvbXAsIHR3b1NoaXBUaHJlZUNvbXAsIG9uZVNoaXBPbmVDb21wLCBvbmVTaGlwVHdvQ29tcCwgb25lU2hpcFRocmVlQ29tcCwgb25lU2hpcEZvdXJDb21wXVxyXG5cclxuICAgIGZ1bmN0aW9uIGdldFJhbmRvbVN0cmluZyhzdHJpbmcxLCBzdHJpbmcyKSB7XHJcbiAgICAgICAgcmV0dXJuIE1hdGgucmFuZG9tKCkgPCAwLjUgPyBzdHJpbmcxIDogc3RyaW5nMjtcclxuICAgIH1cclxuXHJcbiAgICAvL1JlbmRlcnMgYWxsIHNoaXBzIGJ1dCB0aGUgc2hpcHMgdG91Y2ggZWFjaCBvdGhlciBvbiB0aGUgYm9hcmQgXHJcbiAgICAvL05lZWQgdG8gdXBkYXRlIHBsYWNlU2hpcFxyXG4gICAgZnVuY3Rpb24gcmVuZGVyU2hpcChnYW1lYm9hcmQsc2hpcHMpIHtcclxuICAgICAgICBjb25zdCBob3Jpem9udGFsID0gJ2hvcml6b250YWwnO1xyXG4gICAgICAgIGNvbnN0IHZlcnRpY2FsID0gJ3ZlcnRpY2FsJztcclxuICAgICAgICBcclxuICAgIFxyXG4gICAgICAgIHNoaXBzLmZvckVhY2goKHNoaXApID0+IHtcclxuICAgICAgICAgICAgbGV0IHNoaXBQbGFjZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgd2hpbGUgKCFzaGlwUGxhY2VkKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgb3JpZW50YXRpb24gPSBnZXRSYW5kb21TdHJpbmcoaG9yaXpvbnRhbCwgdmVydGljYWwpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGNvbCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTsgXHJcbiAgICAgICAgICAgICAgICBsZXQgcm93ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApOyBcclxuICAgICAgICAgICAgICAgIGxldCByZXN1bHQgPSBnYW1lYm9hcmQuZ2FtZWJvYXJkLnBsYWNlU2hpcChjb2wsIHJvdywgc2hpcCwgb3JpZW50YXRpb24pO1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdCAhPT0gMikge1xyXG4gICAgICAgICAgICAgICAgICAgIHNoaXBQbGFjZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBcclxuXHJcbiAgICByZW5kZXJTaGlwKHJlYWxQbGF5ZXIsc2hpcHMpO1xyXG4gICAgcmVuZGVyU2hpcChjb21wUGxheWVyLCBzaGlwc0NvbXApXHJcbiAgICAvLyByZWFsUGxheWVyLmdhbWVib2FyZC5wbGFjZVNoaXAoMCwwLCBmb3VyU2hpcCwgJ2hvcml6b250YWwnKTtcclxuICAgIC8vIHJlYWxQbGF5ZXIuZ2FtZWJvYXJkLnBsYWNlU2hpcCg5LDYsIHRocmVlU2hpcE9uZSwgJ2hvcml6b250YWwnKTtcclxuICAgIC8vIHJlYWxQbGF5ZXIuZ2FtZWJvYXJkLnBsYWNlU2hpcCgwLDksIHRocmVlU2hpcFR3bywgJ3ZlcnRpY2FsJyk7XHJcbiAgICAvLyByZWFsUGxheWVyLmdhbWVib2FyZC5wbGFjZVNoaXAoOCwwLCB0d29TaGlwT25lLCAnaG9yaXpvbnRhbCcpO1xyXG4gICAgLy8gcmVhbFBsYXllci5nYW1lYm9hcmQucGxhY2VTaGlwKDUsNCwgdHdvU2hpcFR3bywgJ3ZlcnRpY2FsJyk7XHJcbiAgICAvLyByZWFsUGxheWVyLmdhbWVib2FyZC5wbGFjZVNoaXAoMiw2LCB0d29TaGlwVGhyZWUsICdob3Jpem9udGFsJyk7XHJcbiAgICAvLyByZWFsUGxheWVyLmdhbWVib2FyZC5wbGFjZVNoaXAoOCw0LCBvbmVTaGlwT25lLCAnaG9yaXpvbnRhbCcpO1xyXG4gICAgLy8gcmVhbFBsYXllci5nYW1lYm9hcmQucGxhY2VTaGlwKDIsMiwgb25lU2hpcFR3bywgJ2hvcml6b250YWwnKTtcclxuICAgIC8vIHJlYWxQbGF5ZXIuZ2FtZWJvYXJkLnBsYWNlU2hpcCg2LDgsIG9uZVNoaXBUaHJlZSwgJ2hvcml6b250YWwnKTtcclxuICAgIC8vIHJlYWxQbGF5ZXIuZ2FtZWJvYXJkLnBsYWNlU2hpcCg1LDAsIG9uZVNoaXBGb3VyLCAnaG9yaXpvbnRhbCcpO1xyXG5cclxuICAgIC8vIGNvbXBQbGF5ZXIuZ2FtZWJvYXJkLnBsYWNlU2hpcCgwLDAsIGZvdXJTaGlwLCAnaG9yaXpvbnRhbCcpO1xyXG4gICAgLy8gY29tcFBsYXllci5nYW1lYm9hcmQucGxhY2VTaGlwKDksNiwgdGhyZWVTaGlwT25lLCAnaG9yaXpvbnRhbCcpO1xyXG4gICAgLy8gY29tcFBsYXllci5nYW1lYm9hcmQucGxhY2VTaGlwKDAsOSwgdGhyZWVTaGlwVHdvLCAndmVydGljYWwnKTtcclxuICAgIC8vIGNvbXBQbGF5ZXIuZ2FtZWJvYXJkLnBsYWNlU2hpcCg4LDAsIHR3b1NoaXBPbmUsICdob3Jpem9udGFsJyk7XHJcbiAgICAvLyBjb21wUGxheWVyLmdhbWVib2FyZC5wbGFjZVNoaXAoNSw0LCB0d29TaGlwVHdvLCAndmVydGljYWwnKTtcclxuICAgIC8vIGNvbXBQbGF5ZXIuZ2FtZWJvYXJkLnBsYWNlU2hpcCgyLDYsIHR3b1NoaXBUaHJlZSwgJ2hvcml6b250YWwnKTtcclxuICAgIC8vIGNvbXBQbGF5ZXIuZ2FtZWJvYXJkLnBsYWNlU2hpcCg4LDQsIG9uZVNoaXBPbmUsICdob3Jpem9udGFsJyk7XHJcbiAgICAvLyBjb21wUGxheWVyLmdhbWVib2FyZC5wbGFjZVNoaXAoMiwyLCBvbmVTaGlwVHdvLCAnaG9yaXpvbnRhbCcpO1xyXG4gICAgLy8gY29tcFBsYXllci5nYW1lYm9hcmQucGxhY2VTaGlwKDcsOCwgb25lU2hpcFRocmVlLCAnaG9yaXpvbnRhbCcpO1xyXG4gICAgLy8gY29tcFBsYXllci5nYW1lYm9hcmQucGxhY2VTaGlwKDUsMCwgb25lU2hpcEZvdXIsICdob3Jpem9udGFsJyk7XHJcblxyXG5cclxuICAgIHBsYXllckdhbWVib2FyZCA9IHJlbmRlclBsYXllckdhbWVib2FyZChyZWFsUGxheWVyLCBwbGF5ZXJCb2FyZEJveCk7XHJcbiAgICByZW5kZXJDb21wR2FtZWJvYXJkKGNvbXBQbGF5ZXIsIGNvbXB1dGVyQm9hcmRCb3gpXHJcblxyXG4gICAgcGxheWVyR2FtZWJvYXJkLnJlbmRlcigpO1xyXG5cclxufVxyXG5cclxuXHJcbmV4cG9ydCB7XHJcbiAgICBwbGF5ZXJHYW1lYm9hcmQsXHJcbiAgICBwbGF5R2FtZVxyXG59XHJcbiIsImltcG9ydCB7IHBsYXlHYW1lIH0gZnJvbSBcIi4vZ2FtZVwiO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICAgIHBsYXlHYW1lKClcbn0pIl0sIm5hbWVzIjpbIlNoaXAiLCJzaGlwTGVuZ3RoIiwiaGl0cyIsImhpdCIsImlzU3VuayIsImxlbmd0aCIsImdldEhpdHMiLCJHYW1lYm9hcmQiLCJwbGF5ZXIiLCJnYW1lYm9hcmQiLCJnYW1lQm9hcmQiLCJpIiwiaiIsImNyZWF0ZUdhbWVCb2FyZCIsInNoaXBzIiwiX2lzV2l0aGluQm91bmRzIiwiaW5kZXgiLCJfY2hlY2tDZWxsc0Fyb3VuZCIsImNvbCIsInJvdyIsIm5laWdoYm91cnMiLCJ2YWx1ZSIsImNoZWNrRW5kR2FtZSIsImNvdW50ZXIiLCJzaGlwIiwiY29uc29sZSIsImxvZyIsImxvc2VyIiwibW9kYWwiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJvdmVybGF5IiwiYWRkRXZlbnRMaXN0ZW5lciIsImNsYXNzTGlzdCIsImFkZCIsImxvY2F0aW9uIiwicmVsb2FkIiwib3Blbk1vZGFsIiwidGV4dENvbnRlbnQiLCJyZW1vdmUiLCJwbGFjZVNoaXAiLCJkaXJlY3Rpb24iLCJ0eXBlIiwicHVzaCIsInJlY2VpdmVBdHRhY2siLCJib2FyZENlbGwiLCJ1bmRlZmluZWQiLCJfbWFya0NlbGxzQXJvdW5kU3VjY3Nlc3NmdWxsSGl0IiwiUGxheWVyIiwicGxheWVydHlwZSIsInBsYXllckdhbWVib2FyZCIsInBsYXllckJvYXJkQm94IiwiY29tcHV0ZXJCb2FyZEJveCIsInJlYWxQbGF5ZXIiLCJjb21wUGxheWVyIiwiZm91clNoaXAiLCJ0aHJlZVNoaXBPbmUiLCJ0aHJlZVNoaXBUd28iLCJ0d29TaGlwT25lIiwidHdvU2hpcFR3byIsInR3b1NoaXBUaHJlZSIsIm9uZVNoaXBPbmUiLCJvbmVTaGlwVHdvIiwib25lU2hpcFRocmVlIiwib25lU2hpcEZvdXIiLCJzaGlwc0NvbXAiLCJyZW5kZXJTaGlwIiwiZm9yRWFjaCIsInNoaXBQbGFjZWQiLCJvcmllbnRhdGlvbiIsIk1hdGgiLCJyYW5kb20iLCJmbG9vciIsImJveCIsImNvbnRhaW5lciIsImNyZWF0ZUVsZW1lbnQiLCJyZW5kZXIiLCJzcXVhcmUiLCJpbm5lckhUTUwiLCJhcHBlbmRDaGlsZCIsImFwcGVuZCIsImF0dGFjayIsImF0dGVtcHQiLCJjb2xSYW5kb20iLCJyb3dSYW5kb20iLCJzZXRUaW1lb3V0IiwicmVuZGVyUGxheWVyR2FtZWJvYXJkIiwicmVuZGVyQ29tcEdhbWVib2FyZCIsInBsYXlHYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==
