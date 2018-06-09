const nakamotos = [{
  title: '蒙古タンメン中本 高田馬場店',
  latitude: 35.712861,
  longitude: 139.705204
}, {
  title: '蒙古タンメン中本 新宿店',
  latitude: 35.695727,
  longitude: 139.698149
}, {
  title: '蒙古タンメン中本 東池袋店',
  latitude: 35.729339,
  longitude: 139.714735
}, {
  title: '蒙古タンメン中本 西池袋店',
  latitude: 35.730513,
  longitude: 139.707501
}, {
  title: '蒙古タンメン中本 渋谷店',
  latitude: 35.659184,
  longitude: 139.699020
}, {
  title: '蒙古タンメン中本 御徒町店',
  latitude: 35.705916,
  longitude: 139.774379
}, {
  title: '蒙古タンメン中本 上板橋本店',
  latitude: 35.763994,
  longitude: 139.676471
}, {
  title: '蒙古タンメン中本 目黒店',
  latitude: 35.634900,
  longitude: 139.716892
}, {
  title: '蒙古タンメン中本 品川店',
  latitude: 35.626762,
  longitude: 139.737952
}, {
  title: '蒙古タンメン中本 亀戸店',
  latitude: 35.698119,
  longitude: 139.828993
}, {
  title: '蒙古タンメン中本 吉祥寺店',
  latitude: 35.701714,
  longitude: 139.582428
}, {
  title: '蒙古タンメン中本 川崎店',
  latitude: 35.529767,
  longitude: 139.700719
}, {
  title: '蒙古タンメン中本 草加店',
  latitude: 35.826424,
  longitude: 139.802536
}, {
  title: '蒙古タンメン中本 秋津店',
  latitude: 35.778379,
  longitude: 139.496116
}, {
  title: '蒙古タンメン中本 立川店',
  latitude: 35.695755,
  longitude: 139.416015
}, {
  title: '蒙古タンメン中本 大宮店',
  latitude: 35.905189,
  longitude: 139.625896
}];

const markers = nakamotos.map(nakamoto => {
  const marker = document.createElement('google-map-marker');
  marker.title = marker.title;
  marker.latitude = nakamoto.latitude;
  marker.longitude = nakamoto.longitude;
  return marker;
});

const googleMap = document.querySelector('google-map');
googleMap.fitToMarkers = true;

for (const marker of markers) {
  googleMap.appendChild(marker);
}

function onChange(position) {
  googleMap.latitude = position.coords.latitude;
  googleMap.longitude = position.coords.longitude;
}

function onError(error) {
  console.error(error);
}

navigator.geolocation.getCurrentPosition(onChange, onError);
navigator.geolocation.watchPosition(onChange, onError);
