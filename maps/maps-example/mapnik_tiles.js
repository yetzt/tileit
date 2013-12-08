var buildMap = function (maps, name, format, mapnikformat) {
	maps[name] = {
		"format": format,
		"source": {
			"mapnik": {
				"format": mapnikformat,
				"xml": "./data/mapnik/demo1/demo.xml",
				"bufferSize": 128,
				"tileSize": 256,
				"metatile": 8, // metatile row=col count
				"scale": 1,  //cairo
				"scale_denominator": 0.0, //cairo
				"tilespath": "./data/xyz.meta/" + name   //must define if metatile >8 or cairo fileformat
			}
		}
	};
};

var maps = {};
buildMap(maps, 'demo_jpeg40', 'jpeg', 'jpeg40');
buildMap(maps, 'demo_jpeg60', 'jpeg', 'jpeg60');
buildMap(maps, 'demo_jpeg80', 'jpeg', 'jpeg80');
buildMap(maps, 'demo_jpeg100', 'jpeg', 'jpeg100');
buildMap(maps, 'demo_jpeg', 'jpeg', 'jpeg');
buildMap(maps, 'demo_png8', 'png', 'png8');
buildMap(maps, 'demo_png32', 'png', 'png32');
buildMap(maps, 'demo_png', 'png', 'png');
buildMap(maps, 'demo_png8c2', '', 'png8:c=2');
buildMap(maps, 'demo_png8c4', '', 'png8:c=4');
buildMap(maps, 'demo_png8c8', '', 'png8:c=8');
buildMap(maps, 'demo_svg', 'svg', 'svg');

exports.maps = maps;