// function longestPalindrome(s: string): string {
//   const len = Math.floor(s.length / 2)
//   let isEven = !!(s.length % 2)
//   let left = len
//   let right = len
//   if (isEven) {
//     right = ++right
//   }
// }
function intersect(nums1, nums2) {
    let map1 = new Map();
    let map2 = new Map();
     let res = []
    var setMap = function (list, map) {
        list.forEach(function (item) {
            if (map.has(item)) {
                map.set(item, map.get(item) + 1);
            }
            else {
                map.set(item, 1);
            }
        });
    };
    setMap(nums1, map1);
    setMap(nums2, map2);
    map1.forEach(function (item) {
        console.log(item);
        // map2.get(item)
    });
}
intersect([1,2,2,1],[2,2])