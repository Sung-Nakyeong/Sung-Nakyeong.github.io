// 오프라인 실행용 캐시. 게임을 수정해서 다시 올릴 때는 VERSION 숫자를 올려주세요.
const VERSION = 'ppojjak-v5';
const FILES = ['./', './index.html', './manifest.webmanifest', './icon-192.png', './icon-512.png', './icon-maskable-512.png',
  ...["L01.mp3", "L02.mp3", "L03.mp3", "L04.mp3", "L05.mp3", "L06.mp3", "L07.mp3", "L08.mp3", "L09.mp3", "L10.mp3", "L11.mp3", "L12.mp3", "L13.mp3", "L14.mp3", "V01.mp3", "V02.mp3", "V03.mp3", "V04.mp3", "V05.mp3", "V06.mp3", "V07.mp3", "V08.mp3", "V09.mp3", "V10.mp3", "W01.mp3", "W02.mp3", "W03.mp3", "W04.mp3", "W05.mp3", "W06.mp3", "W07.mp3", "W08.mp3", "W09.mp3", "W10.mp3", "W11.mp3", "W12.mp3", "W13.mp3", "W14.mp3", "W15.mp3", "W16.mp3", "W17.mp3", "W18.mp3", "W19.mp3", "W20.mp3", "W21.mp3", "W22.mp3", "W23.mp3", "W24.mp3", "W25.mp3", "W26.mp3", "W27.mp3", "W28.mp3", "W29.mp3", "W30.mp3", "W31.mp3", "W32.mp3", "W33.mp3", "W34.mp3", "W35.mp3", "W36.mp3", "W37.mp3", "W38.mp3", "W39.mp3", "W40.mp3", "W41.mp3", "W42.mp3", "W43.mp3", "W44.mp3", "W45.mp3", "W46.mp3", "W47.mp3", "W48.mp3", "W49.mp3", "W50.mp3", "W51.mp3", "W52.mp3", "W53.mp3", "W54.mp3", "W55.mp3", "W56.mp3", "W57.mp3"].map(f => './audio/' + f)];
self.addEventListener('install', e => {
  e.waitUntil(caches.open(VERSION).then(c => c.addAll(FILES)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== VERSION).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  e.respondWith(
    fetch(e.request, { cache: 'no-cache' }).then(r => {
      const copy = r.clone();
      caches.open(VERSION).then(c => c.put(e.request, copy));
      return r;
    }).catch(() => caches.match(e.request).then(m => m || caches.match('./index.html')))
  );
});
