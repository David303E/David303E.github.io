var wms_layers = [];

var lyr_BsorahARfullmap_0 = new ol.layer.Image({
                            opacity: 1,
                            title: "Bsorah AR full map",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/BsorahARfullmap_0.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [3086267.274835, -2986333.643317, 3095050.354861, -2978430.014844]
                            })
                        });
var format_OosrandSkolliesRedAntsRumbleroutes_1 = new ol.format.GeoJSON();
var features_OosrandSkolliesRedAntsRumbleroutes_1 = format_OosrandSkolliesRedAntsRumbleroutes_1.readFeatures(json_OosrandSkolliesRedAntsRumbleroutes_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_OosrandSkolliesRedAntsRumbleroutes_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_OosrandSkolliesRedAntsRumbleroutes_1.addFeatures(features_OosrandSkolliesRedAntsRumbleroutes_1);
var lyr_OosrandSkolliesRedAntsRumbleroutes_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_OosrandSkolliesRedAntsRumbleroutes_1, 
                style: style_OosrandSkolliesRedAntsRumbleroutes_1,
                interactive: false,
                title: '<img src="styles/legend/OosrandSkolliesRedAntsRumbleroutes_1.png" /> Oosrand Skollies Red Ants Rumble routes'
            });
var format_Balega_2 = new ol.format.GeoJSON();
var features_Balega_2 = format_Balega_2.readFeatures(json_Balega_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Balega_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Balega_2.addFeatures(features_Balega_2);
var lyr_Balega_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Balega_2, 
                style: style_Balega_2,
                interactive: false,
                title: '<img src="styles/legend/Balega_2.png" /> Balega'
            });
var format_Truffle_Hunters_3 = new ol.format.GeoJSON();
var features_Truffle_Hunters_3 = format_Truffle_Hunters_3.readFeatures(json_Truffle_Hunters_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Truffle_Hunters_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Truffle_Hunters_3.addFeatures(features_Truffle_Hunters_3);
var lyr_Truffle_Hunters_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Truffle_Hunters_3, 
                style: style_Truffle_Hunters_3,
                interactive: false,
                title: '<img src="styles/legend/Truffle_Hunters_3.png" /> Truffle_Hunters'
            });
var format_Adventure_Life_4 = new ol.format.GeoJSON();
var features_Adventure_Life_4 = format_Adventure_Life_4.readFeatures(json_Adventure_Life_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Adventure_Life_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Adventure_Life_4.addFeatures(features_Adventure_Life_4);
var lyr_Adventure_Life_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Adventure_Life_4, 
                style: style_Adventure_Life_4,
                interactive: false,
                title: '<img src="styles/legend/Adventure_Life_4.png" /> Adventure_Life'
            });
var format_Fury_Ford_5 = new ol.format.GeoJSON();
var features_Fury_Ford_5 = format_Fury_Ford_5.readFeatures(json_Fury_Ford_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Fury_Ford_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Fury_Ford_5.addFeatures(features_Fury_Ford_5);
var lyr_Fury_Ford_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Fury_Ford_5, 
                style: style_Fury_Ford_5,
                interactive: false,
                title: '<img src="styles/legend/Fury_Ford_5.png" /> Fury_Ford'
            });

lyr_BsorahARfullmap_0.setVisible(true);lyr_OosrandSkolliesRedAntsRumbleroutes_1.setVisible(true);lyr_Balega_2.setVisible(true);lyr_Truffle_Hunters_3.setVisible(true);lyr_Adventure_Life_4.setVisible(true);lyr_Fury_Ford_5.setVisible(true);
var layersList = [lyr_BsorahARfullmap_0,lyr_OosrandSkolliesRedAntsRumbleroutes_1,lyr_Balega_2,lyr_Truffle_Hunters_3,lyr_Adventure_Life_4,lyr_Fury_Ford_5];
lyr_OosrandSkolliesRedAntsRumbleroutes_1.set('fieldAliases', {'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', });
lyr_Balega_2.set('fieldAliases', {'name': 'name', 'cmt': 'cmt', 'desc_': 'desc_', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', });
lyr_Truffle_Hunters_3.set('fieldAliases', {'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', });
lyr_Adventure_Life_4.set('fieldAliases', {'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', });
lyr_Fury_Ford_5.set('fieldAliases', {'name': 'name', 'cmt': 'cmt', 'desc_': 'desc_', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', });
lyr_OosrandSkolliesRedAntsRumbleroutes_1.set('fieldImages', {'name': 'TextEdit', 'cmt': 'TextEdit', 'desc': 'TextEdit', 'src': 'TextEdit', 'link1_href': 'TextEdit', 'link1_text': 'TextEdit', 'link1_type': 'TextEdit', 'link2_href': 'TextEdit', 'link2_text': 'TextEdit', 'link2_type': 'TextEdit', 'number': 'Range', 'type': 'TextEdit', });
lyr_Balega_2.set('fieldImages', {'name': 'TextEdit', 'cmt': 'TextEdit', 'desc_': 'TextEdit', 'src': 'TextEdit', 'link1_href': 'TextEdit', 'link1_text': 'TextEdit', 'link1_type': 'TextEdit', 'link2_href': 'TextEdit', 'link2_text': 'TextEdit', 'link2_type': 'TextEdit', 'number': 'TextEdit', 'type': 'TextEdit', });
lyr_Truffle_Hunters_3.set('fieldImages', {'name': 'TextEdit', 'cmt': 'TextEdit', 'desc': 'TextEdit', 'src': 'TextEdit', 'link1_href': 'TextEdit', 'link1_text': 'TextEdit', 'link1_type': 'TextEdit', 'link2_href': 'TextEdit', 'link2_text': 'TextEdit', 'link2_type': 'TextEdit', 'number': 'TextEdit', 'type': 'TextEdit', });
lyr_Adventure_Life_4.set('fieldImages', {'name': 'TextEdit', 'cmt': 'TextEdit', 'desc': 'TextEdit', 'src': 'TextEdit', 'link1_href': 'TextEdit', 'link1_text': 'TextEdit', 'link1_type': 'TextEdit', 'link2_href': 'TextEdit', 'link2_text': 'TextEdit', 'link2_type': 'TextEdit', 'number': 'TextEdit', 'type': 'TextEdit', });
lyr_Fury_Ford_5.set('fieldImages', {'name': 'TextEdit', 'cmt': 'TextEdit', 'desc_': 'TextEdit', 'src': 'TextEdit', 'link1_href': 'TextEdit', 'link1_text': 'TextEdit', 'link1_type': 'TextEdit', 'link2_href': 'TextEdit', 'link2_text': 'TextEdit', 'link2_type': 'TextEdit', 'number': 'TextEdit', 'type': 'TextEdit', });
lyr_OosrandSkolliesRedAntsRumbleroutes_1.set('fieldLabels', {'name': 'no label', 'cmt': 'no label', 'desc': 'no label', 'src': 'no label', 'link1_href': 'no label', 'link1_text': 'no label', 'link1_type': 'no label', 'link2_href': 'no label', 'link2_text': 'no label', 'link2_type': 'no label', 'number': 'no label', 'type': 'no label', });
lyr_Balega_2.set('fieldLabels', {'name': 'no label', 'cmt': 'no label', 'desc_': 'no label', 'src': 'no label', 'link1_href': 'no label', 'link1_text': 'no label', 'link1_type': 'no label', 'link2_href': 'no label', 'link2_text': 'no label', 'link2_type': 'no label', 'number': 'no label', 'type': 'no label', });
lyr_Truffle_Hunters_3.set('fieldLabels', {'name': 'no label', 'cmt': 'no label', 'desc': 'no label', 'src': 'no label', 'link1_href': 'no label', 'link1_text': 'no label', 'link1_type': 'no label', 'link2_href': 'no label', 'link2_text': 'no label', 'link2_type': 'no label', 'number': 'no label', 'type': 'no label', });
lyr_Adventure_Life_4.set('fieldLabels', {'name': 'no label', 'cmt': 'no label', 'desc': 'no label', 'src': 'no label', 'link1_href': 'no label', 'link1_text': 'no label', 'link1_type': 'no label', 'link2_href': 'no label', 'link2_text': 'no label', 'link2_type': 'no label', 'number': 'no label', 'type': 'no label', });
lyr_Fury_Ford_5.set('fieldLabels', {'name': 'no label', 'cmt': 'no label', 'desc_': 'no label', 'src': 'no label', 'link1_href': 'no label', 'link1_text': 'no label', 'link1_type': 'no label', 'link2_href': 'no label', 'link2_text': 'no label', 'link2_type': 'no label', 'number': 'no label', 'type': 'no label', });
lyr_Fury_Ford_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});