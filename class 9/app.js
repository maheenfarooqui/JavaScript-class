// var arr = ["umra","zainab","fizza","hadia"]
// var copyArr = arr.slice(-3,-1)
// console.log(copyArr);

// arr.push("madiha")
// console.log(arr);

var str = "Umra Badar";
// str.push("Badar")
// var copyStr = str.slice(0,4)
// console.log(copyStr);
// str[7] ="s"// wrong
// console.log(str[3]);
// console.log(typeof arr);
// slice method also use in string and array both and length is also work in both array and string

// foor loops.

// var userName = "Maheen";
// var mypara = "hello this is bootstrap card";
// var mybtn = "Explore";

// for (var i = 0; i <= 4; i++) {
//   document.write(`<div class="card" style="width: 18rem;">
//   <img src="https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=704&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="card-img-top" alt="...">
//   <div class="card-body">
//     <h5 class="card-title">${userName}</h5>
//     <p class="card-text">${mypara}</p>
//     <a href="#" class="btn btn-primary">${mybtn}</a>
//   </div>
// </div>`);
// }

var products = ["Perfume", "Blush On", "lipstick"];
var para = [
  "Perfume: Long-lasting fragrance with a fresh floral scent. Price: Rs 3500",
  "Blush On: Smooth powder blush that gives a natural pink glow. Price: Rs 1800",
  "Lipstick: Matte finish lipstick with rich color and long-lasting wear. Price: Rs 2200"
];
var imgUrls = [
  "https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=704&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1625093525885-282384697917?q=80&w=1101&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1625093742435-6fa192b6fb10?q=80&w=1189&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];
var btn = "Buy Now"

for(i = 0 ; i<products.length ; i++){
  document.write(`<div class="mycard">
    <div class="card" style="width: 18rem;">
  <img src="${imgUrls[i]}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${products[i]}</h5>
    <p class="card-text">${para[i]}</p>
    <a href="#" class="btn btn-primary">${btn}</a>
  </div>
</div></div>`);
}
