ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([76.983840, 5.750079, 83.542312, 10.007595]);
var wms_layers = [];


        var lyr_ESRITerrain_0 = new ol.layer.Tile({
            'title': 'ESRI Terrain',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Terrain_Base/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_SL_1 = new ol.format.GeoJSON();
var features_SL_1 = format_SL_1.readFeatures(json_SL_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_SL_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SL_1.addFeatures(features_SL_1);
var lyr_SL_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SL_1, 
                style: style_SL_1,
                popuplayertitle: "SL",
                interactive: false,
                title: '<img src="styles/legend/SL_1.png" /> SL'
            });
var format_Streams_2 = new ol.format.GeoJSON();
var features_Streams_2 = format_Streams_2.readFeatures(json_Streams_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Streams_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Streams_2.addFeatures(features_Streams_2);
var lyr_Streams_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Streams_2, 
                style: style_Streams_2,
                popuplayertitle: "Streams",
                interactive: false,
                title: '<img src="styles/legend/Streams_2.png" /> Streams'
            });

lyr_ESRITerrain_0.setVisible(true);lyr_SL_1.setVisible(true);lyr_Streams_2.setVisible(true);
var layersList = [lyr_ESRITerrain_0,lyr_SL_1,lyr_Streams_2];
lyr_SL_1.set('fieldAliases', {'PROVINCE_N': 'PROVINCE_N', 'DCODE': 'DCODE', 'DIST': 'DIST', 'CODE': 'CODE', 'DIVISEC': 'DIVISEC', 'Surveys': 'Surveys', 'num of col': 'num of col', });
lyr_Streams_2.set('fieldAliases', {'FID_': 'FID_', 'FNODE_': 'FNODE_', 'TNODE_': 'TNODE_', 'LPOLY_': 'LPOLY_', 'RPOLY_': 'RPOLY_', 'LENGTH': 'LENGTH', 'STNET_': 'STNET_', 'STNET_ID': 'STNET_ID', 'ST_NET2_': 'ST_NET2_', 'ST_NET2_ID': 'ST_NET2_ID', 'CODE': 'CODE', 'NAME': 'NAME', });
lyr_SL_1.set('fieldImages', {'PROVINCE_N': 'TextEdit', 'DCODE': 'Range', 'DIST': 'TextEdit', 'CODE': 'TextEdit', 'DIVISEC': 'TextEdit', 'Surveys': 'TextEdit', 'num of col': 'TextEdit', });
lyr_Streams_2.set('fieldImages', {'FID_': 'Range', 'FNODE_': 'TextEdit', 'TNODE_': 'TextEdit', 'LPOLY_': 'TextEdit', 'RPOLY_': 'TextEdit', 'LENGTH': 'TextEdit', 'STNET_': 'TextEdit', 'STNET_ID': 'TextEdit', 'ST_NET2_': 'TextEdit', 'ST_NET2_ID': 'TextEdit', 'CODE': 'Range', 'NAME': 'TextEdit', });
lyr_SL_1.set('fieldLabels', {'PROVINCE_N': 'hidden field', 'DCODE': 'hidden field', 'DIST': 'hidden field', 'CODE': 'hidden field', 'DIVISEC': 'hidden field', 'Surveys': 'hidden field', 'num of col': 'hidden field', });
lyr_Streams_2.set('fieldLabels', {'FID_': 'hidden field', 'FNODE_': 'hidden field', 'TNODE_': 'hidden field', 'LPOLY_': 'hidden field', 'RPOLY_': 'hidden field', 'LENGTH': 'hidden field', 'STNET_': 'hidden field', 'STNET_ID': 'hidden field', 'ST_NET2_': 'hidden field', 'ST_NET2_ID': 'hidden field', 'CODE': 'hidden field', 'NAME': 'hidden field', });
lyr_Streams_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});