(function(name,data){
 if(typeof onTileMapLoaded === 'undefined') {
  if(typeof TileMaps === 'undefined') TileMaps = {};
  TileMaps[name] = data;
 } else {
  onTileMapLoaded(name,data);
 }
 if(typeof module === 'object' && module && module.exports) {
  module.exports = data;
 }})("Coinbase Map 2",
{ "compressionlevel":-1,
 "height":32,
 "infinite":false,
 "layers":[
        {
         "data":[32, 56, 32, 32, 32, 32, 56, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
            32, 56, 56, 56, 56, 134, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
            32, 56, 56, 56, 56, 56, 56, 56, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
            32, 56, 56, 56, 56, 56, 58, 3221225530, 32, 32, 0, 0, 32, 106, 0, 0, 0, 0, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
            32, 58, 82, 56, 56, 56, 82, 3221225530, 56, 56, 56, 0, 0, 56, 0, 0, 56, 0, 0, 32, 32, 56, 56, 56, 32, 32, 32, 32, 32, 32, 32, 32,
            32, 56, 56, 56, 56, 56, 56, 56, 56, 56, 82, 56, 56, 56, 0, 0, 0, 0, 0, 32, 32, 56, 56, 56, 32, 32, 32, 32, 32, 32, 32, 32,
            32, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 0, 0, 0, 0, 0, 32, 32, 56, 56, 56, 32, 32, 32, 32, 32, 32, 32, 32,
            32, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 0, 0, 0, 0, 56, 32, 32, 56, 56, 56, 32, 32, 32, 32, 32, 32, 32, 32,
            32, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 32, 32, 56, 56, 56, 32, 32, 32, 32, 32, 32, 32, 32,
            32, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 32, 32, 56, 56, 56, 32, 32, 32, 32, 32, 32, 32, 32,
            32, 56, 56, 56, 56, 56, 56, 32, 32, 32, 56, 56, 56, 56, 56, 56, 56, 56, 56, 32, 32, 56, 56, 56, 32, 32, 32, 32, 32, 32, 32, 32,
            32, 256, 56, 56, 56, 56, 56, 32, 32, 32, 56, 56, 56, 56, 56, 56, 56, 56, 56, 32, 32, 56, 56, 56, 32, 32, 32, 32, 32, 32, 32, 32,
            32, 256, 56, 56, 56, 56, 56, 32, 32, 32, 56, 56, 56, 82, 56, 56, 58, 56, 56, 32, 32, 56, 56, 56, 32, 32, 32, 32, 32, 32, 32, 32,
            32, 282, 56, 56, 56, 56, 56, 32, 32, 32, 56, 56, 56, 56, 56, 56, 56, 58, 56, 32, 32, 56, 56, 56, 32, 32, 32, 32, 32, 32, 32, 32,
            32, 56, 56, 56, 56, 56, 56, 32, 32, 32, 56, 56, 56, 56, 56, 56, 56, 56, 56, 32, 32, 56, 56, 56, 32, 32, 32, 32, 32, 32, 32, 32,
            32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 56, 56, 56, 58, 56, 56, 56, 58, 32, 32, 32, 56, 56, 56, 32, 32, 32, 32, 32, 32, 32, 32,
            32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 56, 56, 56, 32, 32, 32, 32, 32, 32, 32, 32, 56, 56, 56, 32, 32, 32, 32, 32, 32, 32, 32,
            32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 56, 56, 56, 32, 32, 32, 32, 32, 32, 32, 32, 56, 56, 56, 32, 32, 32, 32, 32, 32, 32, 32,
            32, 32, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 1610612868, 32, 32, 32, 32, 32, 32, 32, 56, 56, 56, 32, 32, 32, 32, 32, 32, 32, 32,
            32, 32, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 1610612868, 106, 0, 32, 32, 32, 32, 32, 56, 56, 56, 32, 32, 32, 32, 32, 32, 32, 32,
            32, 32, 56, 56, 56, 56, 56, 240, 240, 56, 56, 56, 56, 1610612868, 0, 3221225604, 32, 32, 32, 32, 32, 56, 56, 56, 32, 32, 32, 32, 32, 32, 32, 32,
            32, 32, 56, 56, 56, 56, 56, 240, 240, 56, 56, 56, 56, 56, 0, 56, 32, 32, 32, 32, 32, 56, 56, 56, 32, 32, 32, 32, 32, 32, 32, 32,
            32, 32, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 32, 32, 32, 32, 32, 56, 56, 56, 32, 32, 32, 32, 32, 32, 32, 32,
            32, 32, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 32, 32, 32, 32, 32, 56, 56, 56, 32, 32, 32, 32, 32, 32, 32, 32,
            32, 32, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 32, 32, 32, 32, 32, 56, 56, 56, 32, 32, 32, 32, 32, 32, 32, 32,
            32, 32, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 32, 32, 32, 32, 32, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56,
            32, 32, 32, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 32, 32, 32, 32, 32, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56,
            32, 56, 56, 56, 56, 39, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56,
            32, 56, 56, 56, 56, 39, 56, 1610613036, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56,
            32, 32, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56,
            32, 32, 32, 56, 56, 56, 58, 58, 58, 58, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56,
            32, 32, 32, 32, 56, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32],
         "height":32,
         "id":1,
         "name":"Background",
         "opacity":1,
         "type":"tilelayer",
         "visible":true,
         "width":32,
         "x":0,
         "y":0
        }, 
        {
         "data":[29, 0, 0, 0, 0, 0, 0, 3758096411, 0, 0, 3221225474, 3221225474, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            1610612790, 0, 0, 0, 0, 0, 0, 0, 0, 0, 106, 2684354666, 3221225475, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            2684354562, 0, 0, 0, 106, 0, 0, 0, 2684354614, 1610612763, 80, 80, 80, 1610612737, 1610612763, 2684354589, 54, 1610612763, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            29, 0, 0, 58, 58, 0, 0, 0, 80, 0, 0, 0, 0, 0, 80, 79, 80, 105, 0, 5, 4, 1610612763, 1610612763, 1610612763, 5, 0, 0, 0, 0, 0, 0, 0,
            1610612790, 0, 0, 58, 58, 0, 0, 0, 106, 0, 80, 106, 106, 106, 3221225553, 80, 105, 80, 79, 1610612738, 2684354562, 80, 80, 80, 27, 0, 0, 0, 0, 0, 0, 0,
            2684354562, 0, 0, 0, 57, 0, 0, 0, 105, 0, 0, 0, 82, 106, 80, 79, 80, 105, 80, 1610612738, 29, 80, 0, 80, 3221225501, 0, 0, 0, 0, 0, 0, 0,
            29, 0, 0, 58, 0, 0, 0, 0, 0, 0, 0, 0, 58, 80, 105, 80, 79, 0, 105, 27, 3221225499, 80, 0, 80, 2684354614, 0, 0, 0, 0, 0, 0, 0,
            1610612790, 0, 0, 58, 58, 0, 0, 57, 0, 0, 58, 0, 0, 2684354640, 80, 105, 80, 0, 105, 1610612738, 1610612790, 0, 0, 58, 3221225501, 0, 0, 0, 0, 0, 0, 0,
            3221225499, 0, 0, 57, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 82, 0, 58, 82, 58, 1610612738, 2684354562, 0, 0, 58, 2684354614, 0, 0, 0, 0, 0, 0, 0,
            2684354562, 0, 58, 0, 0, 0, 0, 0, 0, 0, 0, 58, 0, 0, 0, 0, 0, 0, 0, 27, 29, 0, 0, 0, 27, 0, 0, 0, 0, 0, 0, 0,
            29, 3221225884, 0, 0, 0, 0, 58, 3221225526, 3221225526, 29, 0, 0, 57, 0, 0, 58, 0, 0, 0, 1610612738, 3221225499, 57, 0, 0, 27, 0, 0, 0, 0, 0, 0, 0,
            1610612790, 0, 0, 0, 0, 0, 58, 27, 0, 1610612790, 0, 0, 0, 0, 12, 13, 14, 0, 0, 27, 1610612790, 0, 0, 0, 3221225501, 0, 0, 0, 0, 0, 0, 0,
            2684354562, 0, 0, 0, 0, 0, 58, 2684354614, 0, 29, 0, 58, 0, 0, 38, 39, 40, 0, 0, 1610612738, 2684354562, 0, 0, 58, 27, 0, 0, 0, 0, 0, 0, 0,
            29, 0, 0, 0, 0, 0, 58, 3221225501, 0, 1610612790, 0, 0, 0, 0, 272, 273, 274, 0, 0, 1610612738, 29, 0, 0, 0, 27, 0, 0, 0, 0, 0, 0, 0,
            1610612790, 0, 0, 0, 0, 0, 58, 27, 0, 1610612790, 0, 0, 2147483706, 0, 0, 0, 58, 0, 0, 27, 3221225499, 0, 0, 0, 27, 0, 0, 0, 0, 0, 0, 0,
            0, 2684354587, 2684354587, 1610612765, 2684354587, 3221225526, 1610612765, 0, 0, 29, 0, 0, 0, 1610612763, 54, 1610612763, 54, 1610612763, 0, 0, 1610612790, 0, 0, 82, 3221225501, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 1610612790, 58, 0, 7, 2684354614, 0, 0, 0, 0, 0, 0, 2684354562, 0, 0, 0, 27, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 2684354589, 54, 2684354589, 1610612763, 3221225474, 2684354589, 54, 54, 0, 58, 57, 2684354614, 54, 2684354589, 0, 0, 0, 0, 29, 0, 0, 0, 27, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 132, 84, 84, 106, 106, 106, 0, 0, 0, 0, 3221225499, 0, 0, 0, 27, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 56, 110, 110, 2684354666, 1610612842, 1610612842, 0, 0, 0, 0, 1610612790, 0, 0, 57, 3221225501, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 106, 0, 0, 0, 0, 0, 0, 56, 136, 136, 0, 237, 1610612842, 0, 0, 0, 0, 2684354562, 0, 0, 0, 27, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 106, 106, 106, 106, 106, 106, 106, 106, 106, 0, 0, 106, 263, 106, 0, 0, 0, 0, 29, 0, 0, 58, 27, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 82, 82, 82, 82, 0, 0, 0, 0, 0, 0, 0, 0, 82, 0, 2684354614, 0, 0, 0, 3221225499, 82, 0, 0, 3221225501, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 58, 0, 0, 58, 0, 0, 58, 0, 0, 0, 0, 58, 0, 0, 27, 0, 0, 0, 1610612790, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 417, 418, 2147483706, 0, 58, 0, 0, 58, 58, 58, 0, 0, 0, 0, 0, 0, 0, 0, 2684354562, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 443, 444, 220, 351, 13, 351, 222, 0, 0, 0, 0, 58, 0, 0, 2684354614, 0, 0, 0, 1610612790, 58, 0, 0, 106, 80, 81, 106, 80, 81, 106, 80,
            0, 0, 0, 57, 376, 377, 377, 377, 378, 0, 0, 0, 57, 0, 0, 0, 2684354614, 1610612763, 54, 0, 1610612763, 0, 0, 0, 81, 80, 3221225578, 81, 80, 3221225578, 81, 80,
            32, 32, 32, 32, 38, 0, 247, 247, 248, 7, 82, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3221225554, 3221225552, 3221225578, 105, 3221225552, 3221225578, 105, 3221225552, 3221225578,
            32, 32, 32, 32, 246, 0, 247, 247, 274, 58, 58, 58, 0, 58, 0, 58, 58, 58, 0, 58, 0, 58, 58, 58, 0, 58, 58, 58, 58, 58, 58, 58,
            32, 32, 32, 32, 64, 65, 65, 66, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 32, 32, 32, 58, 0, 0, 0, 0, 58, 0, 58, 58, 0, 58, 58, 58, 58, 0, 58, 58, 58, 58, 58, 58, 58, 0, 57, 58, 58, 0,
            0, 0, 0, 32, 0, 2684354587, 2684354587, 3221225526, 1610612765, 2684354587, 3221225526, 1610612765, 2684354587, 3221225526, 1610612765, 2684354587, 3221225526, 1610612765, 2684354587, 3221225526, 1610612765, 2684354587, 3221225526, 1610612765, 2684354587, 3221225526, 1610612765, 2684354587, 3221225526, 1610612765, 2684354587, 3221225526],
         "height":32,
         "id":8,
         "name":"Background Two",
         "opacity":1,
         "type":"tilelayer",
         "visible":true,
         "width":32,
         "x":0,
         "y":0
        }, 
        {
         "data":[0, 0, 106, 106, 80, 80, 80, 0, 5, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 80, 80, 0, 80, 80, 80, 163, 2684354614, 1610612790, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 80, 80, 0, 579, 80, 80, 189, 54, 1610612790, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 605, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 256, 256, 256, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 256, 256, 256, 256, 257, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 1610612842, 3221225604, 1610612842, 3221225604, 2684354666, 1610612842, 3221225578, 3221225604, 3221225604, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 80, 80, 1610612816, 80, 80, 80, 2684354640, 80, 80, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 80, 521, 2684354640, 106, 2684354640, 80, 1610612816, 106, 106, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 547, 0, 0, 0, 573, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 29, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 1610612765, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
         "height":32,
         "id":3,
         "name":"Fill",
         "opacity":1,
         "type":"tilelayer",
         "visible":true,
         "width":32,
         "x":0,
         "y":0
        }, 
        {
         "data":[0, 1610612841, 287, 0, 288, 288, 290, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 1610612868, 313, 0, 0, 108, 316, 1610612843, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 1610612868, 339, 0, 0, 46, 342, 1610612816, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 254, 0, 0, 0, 1610612817, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 46, 0, 0, 0, 0, 0, 339, 342, 287, 288, 288, 289, 288, 290, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 254, 0, 0, 0, 0, 0, 0, 0, 313, 0, 0, 315, 0, 316, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 254, 0, 0, 0, 0, 0, 0, 0, 313, 237, 448, 315, 0, 316, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 46, 0, 0, 0, 0, 0, 0, 0, 339, 263, 474, 341, 0, 342, 0, 0, 58, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 254, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 395, 395, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 254, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 421, 421, 392, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 3221225754, 3221225754, 1610612993, 99, 365, 2684354614, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 256, 256, 256, 387, 522, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 256, 256, 256, 257, 548, 0, 0, 0, 574, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 256, 256, 256, 49, 522, 0, 0, 0, 600, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 548, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 31, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2684354565, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 5, 0, 0, 54, 0, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 3221225499, 132, 132, 132, 132, 132, 132, 132, 132, 0, 0, 0, 0, 0, 0, 2684354614, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 1610612790, 0, 0, 0, 0, 0, 0, 0, 265, 0, 0, 0, 0, 265, 0, 2684354614, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 29, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2684354692, 0, 0, 2684354614, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 3221225499, 0, 0, 0, 292, 0, 573, 0, 0, 0, 0, 0, 0, 0, 0, 2684354614, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 1610612790, 366, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 29, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 522, 0, 0, 0, 0, 0, 0, 0, 0, 27, 0, 0, 0, 0, 0, 0, 0,
            0, 3221225499, 0, 0, 0, 0, 0, 0, 0, 0, 343, 0, 0, 0, 0, 548, 2684354614, 0, 0, 0, 0, 0, 0, 0, 27, 1610612763, 54, 2684354589, 0, 54, 2684354589, 54,
            0, 1610612790, 0, 0, 0, 0, 0, 0, 0, 0, 369, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 287, 288, 288, 289, 288, 288, 289, 288,
            0, 1610612740, 2684354587, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 367, 368, 54, 0, 0, 2684354589, 29, 0, 0, 0, 313, 0, 0, 315, 0, 0, 315, 0,
            0, 32, 0, 2684354587, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 393, 394, 0, 0, 0, 0, 0, 0, 0, 0, 339, 0, 0, 341, 0, 0, 341, 0,
            0, 32, 0, 0, 0, 0, 0, 1610613036, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 3221225499, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 626,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 32, 32, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
         "height":32,
         "id":2,
         "name":"Collision",
         "opacity":1,
         "type":"tilelayer",
         "visible":true,
         "width":32,
         "x":0,
         "y":0
        }, 
        {
         "data":[0, 1610612841, 287, 288, 288, 288, 290, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 1610612868, 313, 0, 0, 108, 316, 163, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 339, 0, 0, 46, 342, 189, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 254, 0, 0, 163, 163, 0, 0, 0, 0, 0, 0, 0, 0, 3221225502, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 46, 0, 0, 189, 189, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 287, 288, 290, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 578, 0, 0, 0, 254, 0, 0, 0, 132, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 313, 0, 316, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 604, 0, 0, 0, 254, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 339, 0, 342, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 46, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 254, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 254, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 3221225754, 3221225754, 1610612993, 0, 0, 0, 0, 1610612765, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 256, 256, 256, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 367, 368, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 256, 256, 256, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 393, 394, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 256, 256, 256, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1610612739, 2684354565, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 29, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 132, 132, 132, 132, 132, 132, 132, 132, 0, 0, 0, 1610612868, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 521, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 547, 0, 0, 0, 573, 573, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 599, 599, 0, 0, 0, 0, 0, 0, 319, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2684354589, 0, 0, 0, 1610612763, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 344, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 1610612790, 0, 0, 0, 0, 0, 0, 0, 370, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 32, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 32, 0, 1610612790, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 1610612790, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 32, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
         "height":32,
         "id":7,
         "name":"Collision Two",
         "opacity":1,
         "type":"tilelayer",
         "visible":true,
         "width":32,
         "x":0,
         "y":0
        }, 
        {
         "data":[0, 0, 0, 267, 0, 0, 0, 2684354614, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 239, 0, 449, 0, 0, 0, 0, 0, 0, 471, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 475, 0, 175, 343, 344, 0, 0, 267, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 201, 369, 370, 293, 293, 237, 1610612842, 3221225604, 0, 0, 0, 0, 0, 3221225475, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 2147483967, 0, 0, 0, 0, 0, 0, 238, 238, 263, 0, 579, 0, 472, 0, 162, 0, 162, 0, 0, 0, 472, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 264, 264, 0, 0, 605, 0, 267, 0, 188, 239, 188, 0, 0, 0, 237, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 575, 0, 0, 0, 0, 365, 0, 0, 0, 0, 0, 0, 0, 0, 0, 214, 238, 214, 0, 0, 0, 263, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 601, 366, 0, 0, 158, 0, 0, 0, 0, 0, 0, 0, 574, 0, 0, 0, 264, 0, 0, 0, 0, 653, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 473, 0, 0, 0, 0, 0, 0, 600, 0, 0, 0, 0, 0, 0, 0, 0, 653, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 8, 0, 0, 499, 0, 2147483706, 0, 0, 0, 0, 0, 0, 0, 291, 0, 0, 0, 0, 0, 653, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 241, 0, 0, 0, 0, 0, 317, 7, 365, 0, 0, 0, 653, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 653, 473, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 653, 499, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 653, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 58, 653, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            30, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 653, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 653, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 365, 653, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 288, 288, 288, 162, 288, 288, 164, 288, 290, 0, 0, 287, 288, 290, 0, 0, 0, 0, 0, 58, 653, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 239, 0, 188, 0, 239, 190, 0, 316, 0, 0, 3221225788, 0, 316, 0, 0, 0, 0, 0, 0, 653, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 237, 0, 214, 0, 265, 216, 0, 316, 0, 0, 3221225788, 0, 316, 0, 0, 0, 0, 0, 0, 653, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 263, 0, 214, 573, 573, 573, 291, 342, 0, 0, 339, 0, 342, 0, 0, 0, 0, 0, 0, 653, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 599, 0, 0, 317, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 653, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 653, 2147483655, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 344, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 653, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 370, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 653, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 575, 574, 573, 574, 573, 0, 653, 0, 0, 237, 0, 497, 0, 239, 497, 0,
            0, 0, 30, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 601, 600, 599, 600, 599, 0, 653, 0, 0, 263, 0, 0, 0, 574, 0, 573,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 653, 0, 0, 0, 0, 0, 0, 600, 0, 599,
            0, 0, 0, 0, 0, 0, 0, 473, 366, 626, 626, 626, 626, 626, 626, 626, 626, 626, 626, 626, 626, 626, 628, 626, 626, 626, 626, 626, 626, 626, 626, 0,
            0, 0, 0, 30, 0, 365, 0, 499, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 30, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
         "height":32,
         "id":6,
         "name":"Object",
         "opacity":1,
         "type":"tilelayer",
         "visible":true,
         "width":32,
         "x":0,
         "y":0
        }, 
        {
         "data":[0, 0, 0, 0, 0, 495, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 574, 0, 0, 0, 0, 0, 0, 0, 0, 0, 287, 290, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 600, 0, 0, 576, 0, 0, 0, 0, 0, 0, 313, 316, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 602, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 473, 0, 0, 267, 709, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 266, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 499, 0, 0, 0, 735, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 578, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 604, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 575, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 601, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 287, 472, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 472, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 313, 267, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 267, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 313, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 339, 0, 0, 0, 236, 236, 236, 0, 473, 0, 0, 473, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 262, 262, 262, 0, 499, 0, 0, 499, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 343, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 164, 267, 162, 0, 162, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 369, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 190, 0, 188, 0, 188, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 216, 0, 214, 0, 577, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 656, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 656, 603, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 682, 0, 0, 0, 708, 0, 0, 0, 0, 0, 0, 0, 0, 0, 395, 0, 0, 682, 0, 343, 0, 0,
            0, 0, 0, 0, 0, 0, 240, 0, 0, 0, 0, 0, 0, 0, 734, 0, 241, 0, 0, 0, 0, 0, 392, 0, 421, 0, 7, 0, 0, 369, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
         "height":32,
         "id":9,
         "name":"Object Two",
         "opacity":1,
         "type":"tilelayer",
         "visible":true,
         "width":32,
         "x":0,
         "y":0
        }],
 "nextlayerid":10,
 "nextobjectid":1,
 "orientation":"orthogonal",
 "renderorder":"right-down",
 "tiledversion":"1.10.2",
 "tileheight":32,
 "tilesets":[
        {
         "firstgid":1,
         "source":"..\/Mine Tileset 1.tsx"
        }],
 "tilewidth":32,
 "type":"map",
 "version":"1.10",
 "width":32
});