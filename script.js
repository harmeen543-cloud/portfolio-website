let images = [
  {src: "https://images.unsplash.com/photo-1717964134799-a98f497172a5?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", text: "Beautiful Nature View"},
  {src: "https://images.unsplash.com/photo-1634712901426-5f7a7443c703?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", text: "Peaceful Mountains"},
  {src: "https://images.unsplash.com/photo-1757852058331-742b60863dd8?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", text: "Golden Sunset"},
  {src: "https://plus.unsplash.com/premium_photo-1723532544658-306b119dd467?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", text: "Calm Ocean Waves"}
];

let index = 0;

function show() {
  document.getElementById("img").src = images[index].src;
  document.getElementById("caption").innerText = images[index].text;
}

function changeImage(step) {
  index += step;

  if (index >= images.length) index = 0;
  if (index < 0) index = images.length - 1;

  show();
}