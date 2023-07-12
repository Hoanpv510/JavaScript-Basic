/** 
 * 1. Render songs
 * 2. Scroll top
 * 3.Play / pause / seek
 * 4. CD rotate
 * 5.Next / prev
 * 6. Random
 * 7. Next / Repeat when ended
 * 8. Active song
 * 9.Scroll active song click
 * 10. Play song when click

**/

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const app = {
  songs: [
    {
      name: "05 (Không Phai) (Masew Remix)",
      singer: "Tăng Duy Tân,Phong Max,Masew",
      path: "https://zingmp3.vn/album/Top-100-Nhac-EDM-Viet-Hay-Nhat-Masew-Phao-CM1X-DJ-Mie/Z6CZOIWU.html",
      image:
        "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp…over/5/b/6/1/5b61a30f04aee798909d6357c6a56eaf.jpg",
    },
    {
      name: "05 (Không Phai) (Masew Remix)",
      singer: "Tăng Duy Tân,Phong Max,Masew",
      path: "https://zingmp3.vn/album/Top-100-Nhac-EDM-Viet-Hay-Nhat-Masew-Phao-CM1X-DJ-Mie/Z6CZOIWU.html",
      image:
        "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp…over/5/b/6/1/5b61a30f04aee798909d6357c6a56eaf.jpg",
    },
    {
      name: "05 (Không Phai) (Masew Remix)",
      singer: "Tăng Duy Tân,Phong Max,Masew",
      path: "https://zingmp3.vn/album/Top-100-Nhac-EDM-Viet-Hay-Nhat-Masew-Phao-CM1X-DJ-Mie/Z6CZOIWU.html",
      image:
        "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp…over/5/b/6/1/5b61a30f04aee798909d6357c6a56eaf.jpg",
    },
    {
      name: "05 (Không Phai) (Masew Remix)",
      singer: "Tăng Duy Tân,Phong Max,Masew",
      path: "https://zingmp3.vn/album/Top-100-Nhac-EDM-Viet-Hay-Nhat-Masew-Phao-CM1X-DJ-Mie/Z6CZOIWU.html",
      image:
        "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp…over/5/b/6/1/5b61a30f04aee798909d6357c6a56eaf.jpg",
    },
    {
      name: "05 (Không Phai) (Masew Remix)",
      singer: "Tăng Duy Tân,Phong Max,Masew",
      path: "https://zingmp3.vn/album/Top-100-Nhac-EDM-Viet-Hay-Nhat-Masew-Phao-CM1X-DJ-Mie/Z6CZOIWU.html",
      image:
        "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp…over/5/b/6/1/5b61a30f04aee798909d6357c6a56eaf.jpg",
    },
    {
      name: "05 (Không Phai) (Masew Remix)",
      singer: "Tăng Duy Tân,Phong Max,Masew",
      path: "https://zingmp3.vn/album/Top-100-Nhac-EDM-Viet-Hay-Nhat-Masew-Phao-CM1X-DJ-Mie/Z6CZOIWU.html",
      image:
        "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp…over/5/b/6/1/5b61a30f04aee798909d6357c6a56eaf.jpg",
    },
    {
      name: "05 (Không Phai) (Masew Remix)",
      singer: "Tăng Duy Tân,Phong Max,Masew",
      path: "https://zingmp3.vn/album/Top-100-Nhac-EDM-Viet-Hay-Nhat-Masew-Phao-CM1X-DJ-Mie/Z6CZOIWU.html",
      image:
        "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp…over/5/b/6/1/5b61a30f04aee798909d6357c6a56eaf.jpg",
    },
    {
      name: "05 (Không Phai) (Masew Remix)",
      singer: "Tăng Duy Tân,Phong Max,Masew",
      path: "https://zingmp3.vn/album/Top-100-Nhac-EDM-Viet-Hay-Nhat-Masew-Phao-CM1X-DJ-Mie/Z6CZOIWU.html",
      image:
        "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp…over/5/b/6/1/5b61a30f04aee798909d6357c6a56eaf.jpg",
    },
    {
      name: "05 (Không Phai) (Masew Remix)",
      singer: "Tăng Duy Tân,Phong Max,Masew",
      path: "https://zingmp3.vn/album/Top-100-Nhac-EDM-Viet-Hay-Nhat-Masew-Phao-CM1X-DJ-Mie/Z6CZOIWU.html",
      image:
        "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp…over/5/b/6/1/5b61a30f04aee798909d6357c6a56eaf.jpg",
    },
    {
      name: "05 (Không Phai) (Masew Remix)",
      singer: "Tăng Duy Tân,Phong Max,Masew",
      path: "https://zingmp3.vn/album/Top-100-Nhac-EDM-Viet-Hay-Nhat-Masew-Phao-CM1X-DJ-Mie/Z6CZOIWU.html",
      image:
        "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp…over/5/b/6/1/5b61a30f04aee798909d6357c6a56eaf.jpg",
    },
    {
      name: "05 (Không Phai) (Masew Remix)",
      singer: "Tăng Duy Tân,Phong Max,Masew",
      path: "https://zingmp3.vn/album/Top-100-Nhac-EDM-Viet-Hay-Nhat-Masew-Phao-CM1X-DJ-Mie/Z6CZOIWU.html",
      image:
        "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp…over/5/b/6/1/5b61a30f04aee798909d6357c6a56eaf.jpg",
    },
  ],

  render: function () {
    const htmls = this.songs.map((song) => {
      return ``;
    });
  },
  start: function () {
    this.render();
  },
};

app.start();
