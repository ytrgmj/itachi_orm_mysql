"use strict";
let map = new Map();
map.set('aa', 1);
map.set('bb', 2);
for (let e of map.keys()) {
    console.log(e, map.get(e));
}
