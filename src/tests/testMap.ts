let map = new Map<string,number>();
map.set('aa',1);
map.set('bb',2)

for(let e of map.keys()){
    console.log(e,map.get(e));
    
}