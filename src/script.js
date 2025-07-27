const options = {
    type: "loop", // ループさせる
    arrows: false, // 矢印ボタンを非表示
    pagination: false, // ページネーションを非表示
    drag: "free", // フリードラッグモード
    gap: 40, // スライド間の余白（スマートフォン）
    perPage: 3, // 表示するスライドの枚数
    breakpoints: {
      768: {
        perPage: 1,
        gap: 10, // 画面幅768px以上でスライド間の余白40px
      },
    },
    autoScroll: {
      speed: 0.5, // スクロール速度
      pauseOnHover: true, // カーソルが乗ってもスクロールを停止させない
    },
  };
  const splide = new Splide(".splide", options);
  splide.mount(window.splide.Extensions);