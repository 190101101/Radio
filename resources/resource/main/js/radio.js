const elements = [
  {
    title: "90 LAR",
    url: "http://37.247.98.8/stream/166/",
  },
  {
    title: "103.6 Radyo Light",
    url: "https://yayin.radiolight.net:8005/live",
  },
  {
    title: "ABUZER FM",
    url: "http://live.radyotvonline.com:9030/;",
  },
  {
    title: "ADA FM Sakarya",
    url: "http://adafm.net:6262/;",
  },
  {
    title: "ADANA SÜPER FM",
    url: "http://yayin2.yayindakiler.com:4002/;",
  },
  {
    title: "ADIYAMAN ASR FM",
    url: "http://yayin2.yayindakiler.com:4072/;",
  },
  {
    title: "AHISKA FM",
    url: "http://radyo.ahiska.net:8063/;stream.nsv",
  },
  {
    title: "AKDAĞ FM",
    url: "http://radyovetv.com:7051/;stream.mp3",
  },
  {
    title: "ALANYA FM",
    url: "https://alanyafm.80.yayin.com.tr/;",
  },
  {
    title: "ALPARSLAN FM",
    url: "https://ssl123.ozelip.com/8022/;",
  },
  {
    title: "ALTIN ŞARKILAR",
    url: "http://37.247.98.8/stream/25/",
  },
  {
    title: "ANKARA HAVALARI",
    url: "http://37.247.98.8/stream/30/",
  },
  {
    title: "ANKARA ÜNİVERSİTESİ",
    url: "http://radyo.cc.ankara.edu.tr:8089/;stream/1",
  },
  {
    title: "ANTAKYA RADYO RENK",
    url: "http://yayin1.yayindakiler.com:3016/renk",
  },
  {
    title: "ARABESK ALEMİ",
    url: "http://arabeskalemi.net:9300/stream?icy=http",
  },
  {
    title: "ARABESK FM",
    url: "http://anadolu.liderhost.com.tr:6688/;",
  },
  {
    title: "ARABESK FM",
    url: "https://anadolu.liderhost.com.tr:10949/;",
  },
  {
    title: "ARABESK FM BİZ",
    url: "https://yayin.arabeskfm.biz:8042/stream?icy=http",
  },
  {
    title: "ARABESK MELODİ FM",
    url: "http://arabeskmelodi.kesintisizyayin.com:8888/;",
  },
  {
    title: "ARABESK RADYO BİZ",
    url: "https://dinle.arabeskradyo.biz//mp3/1/?icy=http",
  },
  {
    title: "ARKADAŞ FM",
    url: "http://yayin.yayindakiler.com:4134/;stream.mp3;/;type=mp3",
  },
  {
    title: "ARNAVUTKÖY FM",
    url: "https://arnavut2.80.yayin.com.tr/;",
  },
  {
    title: "ART FM Antalya",
    url: "http://yayin.liderhost.net:9338/;",
  },
  {
    title: "AŞK FM",
    url: "http://yayin.asymedya.com:8020/1;",
  },
  {
    title: "ATLANTİS FM",
    url: "http://live4.radyotvonline.com:9400/;",
  },
  {
    title: "BABA RADYO",
    url: "http://46.20.7.116/babaradyoaac",
  },
  {
    title: "BABA RADYO",
    url: "http://37.247.98.7/babaradyomp3",
  },
  {
    title: "BABA RADYO",
    url: "http://46.20.7.116:80/;stream.mp3",
  },
  {
    title: "BABYJOY",
    url: "https://17753.live.streamtheworld.com/BABYJOY128AAC.aac",
  },
  {
    title: "BABYLAND",
    url: "https://moondigitaledge.radyotvonline.net/babyland/playlist.m3u8",
  },
  {
    title: "BAL 10 FM",
    url: "https://anadolu.liderhost.com.tr:10928/;",
  },
  {
    title: "BARIŞ RADYO",
    url: "http://yayin2.canliyayin.org:9350/;",
  },
];

const radio = document.querySelector("#radio");
const player = document.querySelector("#player");
const spinner = document.querySelector('.spinner-border');

elements.map((element, index) => {
  index += 1;
  radio.innerHTML += `<div class="col-lg-3 col-md-4 col-sm-6">
  <a class="card" data-src="${element.url}">${index} - ${element.title}</a>
  </div>`;
});

radio.addEventListener("click", async (e) => {
  if (!e.target.classList.contains("card")) return;

  spinner.classList.remove('spinner-status');

  // add and remove active class
  radio
    .querySelectorAll(".card")
    .forEach((card) => card.classList.remove("active"));
  e.target.classList.add("active");

  document.querySelector('.spinner-status')
  // Waiting for new audio file to be uploaded
  await new Promise((resolve, reject) => {
    player.setAttribute("src", e.target.getAttribute("data-src"));
    player.oncanplay = resolve; // waiting sound for resolve
    player.onerror = reject; // after error reject
    setTimeout(() => {
      spinner.classList.add('spinner-status');
    }, 500)
  });

  // Automatically start playing after audio file is loaded
  player.play();
});
