(function () {
  var setting = {
    "height": 647,
    "width": 1980,
    "zoom": 16,
    "queryString": "Saint-Patrick, Porcheux, France",
    "place_id": "ChIJ2XIKH3rT3UcRuAHtl5FBuY4",
    "satellite": false,
    "centerCoord": [50.63242826935531,1.581940399999997],
    "cid": "0x8eb9419197ed01b8",
    "lang": "en",
    "cityUrl": "/france/le-touquet-9652",
    "id": "map-9cd199b9cc5410cd3b1ad21cab2e54d3",
    "embed_id": "259702"
  };
  var d = document;
  var s = d.createElement('script');
  s.src = 'https://1map.com/js/script-for-user.js?embed_id=259702';
  s.async = true;
  s.onload = function (e) {
    window.OneMap.initMap(setting)
  };
  var to = d.getElementsByTagName('script')[0];
  to.parentNode.insertBefore(s, to);
})();
