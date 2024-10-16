ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([-4.606351, 7.443330, -4.471643, 7.547102]);
var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_SousPrfecture_1 = new ol.format.GeoJSON();
var features_SousPrfecture_1 = format_SousPrfecture_1.readFeatures(json_SousPrfecture_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_SousPrfecture_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SousPrfecture_1.addFeatures(features_SousPrfecture_1);
var lyr_SousPrfecture_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SousPrfecture_1, 
                style: style_SousPrfecture_1,
                popuplayertitle: "Sous-Préfecture",
                interactive: true,
                title: '<img src="styles/legend/SousPrfecture_1.png" /> Sous-Préfecture'
            });
var format_ContourMBahiakro_2 = new ol.format.GeoJSON();
var features_ContourMBahiakro_2 = format_ContourMBahiakro_2.readFeatures(json_ContourMBahiakro_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_ContourMBahiakro_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ContourMBahiakro_2.addFeatures(features_ContourMBahiakro_2);
var lyr_ContourMBahiakro_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ContourMBahiakro_2, 
                style: style_ContourMBahiakro_2,
                popuplayertitle: "Contour M'Bahiakro",
                interactive: true,
                title: '<img src="styles/legend/ContourMBahiakro_2.png" /> Contour M\'Bahiakro'
            });
var format_Coursdeau_3 = new ol.format.GeoJSON();
var features_Coursdeau_3 = format_Coursdeau_3.readFeatures(json_Coursdeau_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Coursdeau_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Coursdeau_3.addFeatures(features_Coursdeau_3);
var lyr_Coursdeau_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Coursdeau_3, 
                style: style_Coursdeau_3,
                popuplayertitle: "Cours d'eau",
                interactive: true,
                title: '<img src="styles/legend/Coursdeau_3.png" /> Cours d\'eau'
            });
var format_RESEAUROUTIER_4 = new ol.format.GeoJSON();
var features_RESEAUROUTIER_4 = format_RESEAUROUTIER_4.readFeatures(json_RESEAUROUTIER_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_RESEAUROUTIER_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RESEAUROUTIER_4.addFeatures(features_RESEAUROUTIER_4);
var lyr_RESEAUROUTIER_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RESEAUROUTIER_4, 
                style: style_RESEAUROUTIER_4,
                popuplayertitle: "RESEAU ROUTIER",
                interactive: true,
    title: 'RESEAU ROUTIER<br />\
    <img src="styles/legend/RESEAUROUTIER_4_0.png" /> voie Principale<br />\
    <img src="styles/legend/RESEAUROUTIER_4_1.png" /> Piste<br />\
    <img src="styles/legend/RESEAUROUTIER_4_2.png" /> 2<br />'
        });
var format_LimiteSousPrfectureMBahiakro_5 = new ol.format.GeoJSON();
var features_LimiteSousPrfectureMBahiakro_5 = format_LimiteSousPrfectureMBahiakro_5.readFeatures(json_LimiteSousPrfectureMBahiakro_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_LimiteSousPrfectureMBahiakro_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LimiteSousPrfectureMBahiakro_5.addFeatures(features_LimiteSousPrfectureMBahiakro_5);
var lyr_LimiteSousPrfectureMBahiakro_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LimiteSousPrfectureMBahiakro_5, 
                style: style_LimiteSousPrfectureMBahiakro_5,
                popuplayertitle: "Limite Sous-Préfecture M'Bahiakro",
                interactive: true,
                title: '<img src="styles/legend/LimiteSousPrfectureMBahiakro_5.png" /> Limite Sous-Préfecture M\'Bahiakro'
            });
var format_VILLAGE_6 = new ol.format.GeoJSON();
var features_VILLAGE_6 = format_VILLAGE_6.readFeatures(json_VILLAGE_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_VILLAGE_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VILLAGE_6.addFeatures(features_VILLAGE_6);
var lyr_VILLAGE_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VILLAGE_6, 
                style: style_VILLAGE_6,
                popuplayertitle: "VILLAGE",
                interactive: true,
                title: '<img src="styles/legend/VILLAGE_6.png" /> VILLAGE'
            });
var format_Villagesconcerns_7 = new ol.format.GeoJSON();
var features_Villagesconcerns_7 = format_Villagesconcerns_7.readFeatures(json_Villagesconcerns_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Villagesconcerns_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Villagesconcerns_7.addFeatures(features_Villagesconcerns_7);
var lyr_Villagesconcerns_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Villagesconcerns_7, 
                style: style_Villagesconcerns_7,
                popuplayertitle: "Villages concernés",
                interactive: true,
                title: '<img src="styles/legend/Villagesconcerns_7.png" /> Villages concernés'
            });
var group_group1 = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "group1"});
var group_VillagesTrouvs = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "Villages Trouvés"});

lyr_OpenStreetMap_0.setVisible(true);lyr_SousPrfecture_1.setVisible(true);lyr_ContourMBahiakro_2.setVisible(true);lyr_Coursdeau_3.setVisible(false);lyr_RESEAUROUTIER_4.setVisible(false);lyr_LimiteSousPrfectureMBahiakro_5.setVisible(false);lyr_VILLAGE_6.setVisible(true);lyr_Villagesconcerns_7.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_SousPrfecture_1,lyr_ContourMBahiakro_2,lyr_Coursdeau_3,lyr_RESEAUROUTIER_4,lyr_LimiteSousPrfectureMBahiakro_5,lyr_VILLAGE_6,lyr_Villagesconcerns_7];
lyr_SousPrfecture_1.set('fieldAliases', {'NOM': 'NOM', 'DEPT': 'DEPT', 'REGION': 'REGION', 'DISTRICT': 'DISTRICT', 'Superficie': 'Superficie', 'ID': 'ID', 'auxiliary_storage_labeling_positionx': 'auxiliary_storage_labeling_positionx', 'auxiliary_storage_labeling_positiony': 'auxiliary_storage_labeling_positiony', 'auxiliary_storage_labeling_show': 'auxiliary_storage_labeling_show', 'auxiliary_storage_labeling_labelrotation': 'auxiliary_storage_labeling_labelrotation', 'auxiliary_storage_labeling_family': 'auxiliary_storage_labeling_family', 'auxiliary_storage_labeling_fontstyle': 'auxiliary_storage_labeling_fontstyle', 'auxiliary_storage_labeling_size': 'auxiliary_storage_labeling_size', 'auxiliary_storage_labeling_bold': 'auxiliary_storage_labeling_bold', 'auxiliary_storage_labeling_italic': 'auxiliary_storage_labeling_italic', 'auxiliary_storage_labeling_underline': 'auxiliary_storage_labeling_underline', 'auxiliary_storage_labeling_color': 'auxiliary_storage_labeling_color', 'auxiliary_storage_labeling_strikeout': 'auxiliary_storage_labeling_strikeout', 'auxiliary_storage_labeling_multilinealignment': 'auxiliary_storage_labeling_multilinealignment', 'auxiliary_storage_labeling_buffersize': 'auxiliary_storage_labeling_buffersize', 'auxiliary_storage_labeling_buffercolor': 'auxiliary_storage_labeling_buffercolor', 'auxiliary_storage_labeling_bufferdraw': 'auxiliary_storage_labeling_bufferdraw', 'auxiliary_storage_labeling_labeldistance': 'auxiliary_storage_labeling_labeldistance', 'auxiliary_storage_labeling_hali': 'auxiliary_storage_labeling_hali', 'auxiliary_storage_labeling_vali': 'auxiliary_storage_labeling_vali', 'auxiliary_storage_labeling_scalevisibility': 'auxiliary_storage_labeling_scalevisibility', 'auxiliary_storage_labeling_minscale': 'auxiliary_storage_labeling_minscale', 'auxiliary_storage_labeling_maxscale': 'auxiliary_storage_labeling_maxscale', 'auxiliary_storage_labeling_alwaysshow': 'auxiliary_storage_labeling_alwaysshow', 'auxiliary_storage_labeling_calloutdraw': 'auxiliary_storage_labeling_calloutdraw', 'auxiliary_storage_labeling_labelallparts': 'auxiliary_storage_labeling_labelallparts', });
lyr_ContourMBahiakro_2.set('fieldAliases', {'NOM': 'NOM', 'DEPT': 'DEPT', 'REGION': 'REGION', 'DISTRICT': 'DISTRICT', 'Superficie': 'Superficie', 'ID': 'ID', });
lyr_Coursdeau_3.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'waterway': 'waterway', 'name': 'name', 'name_ar': 'name_ar', 'destinatio': 'destinatio', 'wikipedia': 'wikipedia', 'name_bm': 'name_bm', 'name_en': 'name_en', 'destinat_1': 'destinat_1', 'boat': 'boat', 'is_in_coun': 'is_in_coun', 'is_in_co_1': 'is_in_co_1', 'alt_name': 'alt_name', 'admin_leve': 'admin_leve', 'alt_name_e': 'alt_name_e', 'alt_name_d': 'alt_name_d', 'name_dyu': 'name_dyu', 'alt_name_a': 'alt_name_a', 'name_mos': 'name_mos', 'name_fr': 'name_fr', 'name_de': 'name_de', 'name_fa': 'name_fa', 'border_typ': 'border_typ', 'wikipedia_': 'wikipedia_', 'alt_name_f': 'alt_name_f', 'boundary': 'boundary', 'intermitte': 'intermitte', 'wikidata': 'wikidata', 'source_nam': 'source_nam', 'ford': 'ford', 'canoe': 'canoe', 'motorboat': 'motorboat', 'ship': 'ship', 'GNS_dsg_st': 'GNS_dsg_st', 'alt_name_2': 'alt_name_2', 'alt_name_1': 'alt_name_1', 'alt_name_3': 'alt_name_3', 'GNS_id': 'GNS_id', 'GNS_dsg_co': 'GNS_dsg_co', 'short_name': 'short_name', 'nat_name': 'nat_name', 'loc_name': 'loc_name', 'seasonal': 'seasonal', 'tunnel': 'tunnel', 'name_ru': 'name_ru', 'ref_geonam': 'ref_geonam', 'layer': 'layer', 'width': 'width', 'source_alt': 'source_alt', 'right_coun': 'right_coun', 'left_count': 'left_count', 'type': 'type', 'attributio': 'attributio', 'source_dat': 'source_dat', 'tidal': 'tidal', 'highway': 'highway', 'name_sourc': 'name_sourc', 'substance': 'substance', 'man_made': 'man_made', 'level': 'level', });
lyr_RESEAUROUTIER_4.set('fieldAliases', {'LENGTH': 'LENGTH', 'FNODE_': 'FNODE_', 'TNODE_': 'TNODE_', 'ROUTE_': 'ROUTE_', 'ROUTE_ID': 'ROUTE_ID', 'ID': 'ID', });
lyr_LimiteSousPrfectureMBahiakro_5.set('fieldAliases', {'NOM': 'NOM', 'DEPT': 'DEPT', 'REGION': 'REGION', 'DISTRICT': 'DISTRICT', 'Superficie': 'Superficie', 'ID': 'ID', });
lyr_VILLAGE_6.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'auxiliary_': 'auxiliary_', 'auxiliar_1': 'auxiliar_1', 'auxiliar_2': 'auxiliar_2', 'auxiliar_3': 'auxiliar_3', 'auxiliar_4': 'auxiliar_4', 'auxiliar_5': 'auxiliar_5', 'auxiliar_6': 'auxiliar_6', 'auxiliar_7': 'auxiliar_7', 'auxiliar_8': 'auxiliar_8', 'auxiliar_9': 'auxiliar_9', 'auxiliar10': 'auxiliar10', 'auxiliar11': 'auxiliar11', 'auxiliar12': 'auxiliar12', 'auxiliar13': 'auxiliar13', 'auxiliar14': 'auxiliar14', 'auxiliar15': 'auxiliar15', 'auxiliar16': 'auxiliar16', 'auxiliar17': 'auxiliar17', 'auxiliar18': 'auxiliar18', 'auxiliar19': 'auxiliar19', 'auxiliar20': 'auxiliar20', 'auxiliar21': 'auxiliar21', 'auxiliar22': 'auxiliar22', 'auxiliar23': 'auxiliar23', 'auxiliar24': 'auxiliar24', 'DISTRICT': 'DISTRICT', 'NOM_REGION': 'NOM_REGION', 'NOM_DEPART': 'NOM_DEPART', 'NOM_SSPREF': 'NOM_SSPREF', 'NOM_VILLAG': 'NOM_VILLAG', 'STATUT_ADM': 'STATUT_ADM', 'ID': 'ID', 'auxiliar25': 'auxiliar25', 'auxiliar26': 'auxiliar26', 'auxiliar27': 'auxiliar27', 'auxiliar28': 'auxiliar28', 'auxiliar29': 'auxiliar29', 'auxiliar30': 'auxiliar30', 'auxiliar31': 'auxiliar31', 'auxiliar32': 'auxiliar32', 'auxiliar33': 'auxiliar33', 'auxiliar34': 'auxiliar34', 'auxiliar35': 'auxiliar35', 'auxiliar36': 'auxiliar36', 'auxiliar37': 'auxiliar37', 'auxiliar38': 'auxiliar38', 'auxiliar39': 'auxiliar39', 'auxiliar40': 'auxiliar40', 'auxiliar41': 'auxiliar41', 'auxiliar42': 'auxiliar42', 'auxiliar43': 'auxiliar43', 'auxiliar44': 'auxiliar44', 'auxiliar45': 'auxiliar45', 'auxiliar46': 'auxiliar46', 'auxiliar47': 'auxiliar47', 'auxiliar48': 'auxiliar48', 'auxiliar49': 'auxiliar49', 'population': 'population', 'REGION': 'REGION', 'SOUS_PREF': 'SOUS_PREF', 'DEPART': 'DEPART', 'STATUT': 'STATUT', 'layer': 'layer', 'path': 'path', 'auxiliary_storage_labeling_positionx': 'auxiliary_storage_labeling_positionx', 'auxiliary_storage_labeling_positiony': 'auxiliary_storage_labeling_positiony', 'auxiliary_storage_labeling_show': 'auxiliary_storage_labeling_show', 'auxiliary_storage_labeling_labelrotation': 'auxiliary_storage_labeling_labelrotation', 'auxiliary_storage_labeling_family': 'auxiliary_storage_labeling_family', 'auxiliary_storage_labeling_fontstyle': 'auxiliary_storage_labeling_fontstyle', 'auxiliary_storage_labeling_size': 'auxiliary_storage_labeling_size', 'auxiliary_storage_labeling_bold': 'auxiliary_storage_labeling_bold', 'auxiliary_storage_labeling_italic': 'auxiliary_storage_labeling_italic', 'auxiliary_storage_labeling_underline': 'auxiliary_storage_labeling_underline', 'auxiliary_storage_labeling_color': 'auxiliary_storage_labeling_color', 'auxiliary_storage_labeling_strikeout': 'auxiliary_storage_labeling_strikeout', 'auxiliary_storage_labeling_multilinealignment': 'auxiliary_storage_labeling_multilinealignment', 'auxiliary_storage_labeling_buffersize': 'auxiliary_storage_labeling_buffersize', 'auxiliary_storage_labeling_buffercolor': 'auxiliary_storage_labeling_buffercolor', 'auxiliary_storage_labeling_bufferdraw': 'auxiliary_storage_labeling_bufferdraw', 'auxiliary_storage_labeling_labeldistance': 'auxiliary_storage_labeling_labeldistance', 'auxiliary_storage_labeling_hali': 'auxiliary_storage_labeling_hali', 'auxiliary_storage_labeling_vali': 'auxiliary_storage_labeling_vali', 'auxiliary_storage_labeling_scalevisibility': 'auxiliary_storage_labeling_scalevisibility', 'auxiliary_storage_labeling_minscale': 'auxiliary_storage_labeling_minscale', 'auxiliary_storage_labeling_maxscale': 'auxiliary_storage_labeling_maxscale', 'auxiliary_storage_labeling_alwaysshow': 'auxiliary_storage_labeling_alwaysshow', 'auxiliary_storage_labeling_calloutdraw': 'auxiliary_storage_labeling_calloutdraw', 'auxiliary_storage_labeling_labelallparts': 'auxiliary_storage_labeling_labelallparts', });
lyr_Villagesconcerns_7.set('fieldAliases', {'DISTRICT': 'DISTRICT', 'NOM_REGION': 'NOM_REGION', 'NOM_DEPART': 'NOM_DEPART', 'NOM_SSPREF': 'NOM_SSPREF', 'NOM_VILLAG': 'NOM_VILLAG', 'STATUT_ADM': 'STATUT_ADM', 'ID': 'ID', 'auxiliary_': 'auxiliary_', 'auxiliar_1': 'auxiliar_1', 'auxiliar_2': 'auxiliar_2', 'auxiliar_3': 'auxiliar_3', 'auxiliar_4': 'auxiliar_4', 'auxiliar_5': 'auxiliar_5', 'auxiliar_6': 'auxiliar_6', 'auxiliar_7': 'auxiliar_7', 'auxiliar_8': 'auxiliar_8', 'auxiliar_9': 'auxiliar_9', 'auxiliar10': 'auxiliar10', 'auxiliar11': 'auxiliar11', 'auxiliar12': 'auxiliar12', 'auxiliar13': 'auxiliar13', 'auxiliar14': 'auxiliar14', 'auxiliar15': 'auxiliar15', 'auxiliar16': 'auxiliar16', 'auxiliar17': 'auxiliar17', 'auxiliar18': 'auxiliar18', 'auxiliar19': 'auxiliar19', 'auxiliar20': 'auxiliar20', 'auxiliar21': 'auxiliar21', 'auxiliar22': 'auxiliar22', 'auxiliar23': 'auxiliar23', 'auxiliar24': 'auxiliar24', });
lyr_SousPrfecture_1.set('fieldImages', {'NOM': 'TextEdit', 'DEPT': 'TextEdit', 'REGION': 'TextEdit', 'DISTRICT': 'TextEdit', 'Superficie': 'TextEdit', 'ID': 'TextEdit', 'auxiliary_storage_labeling_positionx': 'Hidden', 'auxiliary_storage_labeling_positiony': 'Hidden', 'auxiliary_storage_labeling_show': 'Hidden', 'auxiliary_storage_labeling_labelrotation': 'Hidden', 'auxiliary_storage_labeling_family': 'Hidden', 'auxiliary_storage_labeling_fontstyle': 'Hidden', 'auxiliary_storage_labeling_size': 'Hidden', 'auxiliary_storage_labeling_bold': 'Hidden', 'auxiliary_storage_labeling_italic': 'Hidden', 'auxiliary_storage_labeling_underline': 'Hidden', 'auxiliary_storage_labeling_color': 'Hidden', 'auxiliary_storage_labeling_strikeout': 'Hidden', 'auxiliary_storage_labeling_multilinealignment': 'Hidden', 'auxiliary_storage_labeling_buffersize': 'Hidden', 'auxiliary_storage_labeling_buffercolor': 'Hidden', 'auxiliary_storage_labeling_bufferdraw': 'Hidden', 'auxiliary_storage_labeling_labeldistance': 'Hidden', 'auxiliary_storage_labeling_hali': 'Hidden', 'auxiliary_storage_labeling_vali': 'Hidden', 'auxiliary_storage_labeling_scalevisibility': 'Hidden', 'auxiliary_storage_labeling_minscale': 'Hidden', 'auxiliary_storage_labeling_maxscale': 'Hidden', 'auxiliary_storage_labeling_alwaysshow': 'Hidden', 'auxiliary_storage_labeling_calloutdraw': 'Hidden', 'auxiliary_storage_labeling_labelallparts': 'Hidden', });
lyr_ContourMBahiakro_2.set('fieldImages', {'NOM': 'TextEdit', 'DEPT': 'TextEdit', 'REGION': 'TextEdit', 'DISTRICT': 'TextEdit', 'Superficie': 'TextEdit', 'ID': 'TextEdit', });
lyr_Coursdeau_3.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'waterway': 'TextEdit', 'name': 'TextEdit', 'name_ar': 'TextEdit', 'destinatio': 'TextEdit', 'wikipedia': 'TextEdit', 'name_bm': 'TextEdit', 'name_en': 'TextEdit', 'destinat_1': 'TextEdit', 'boat': 'TextEdit', 'is_in_coun': 'TextEdit', 'is_in_co_1': 'TextEdit', 'alt_name': 'TextEdit', 'admin_leve': 'TextEdit', 'alt_name_e': 'TextEdit', 'alt_name_d': 'TextEdit', 'name_dyu': 'TextEdit', 'alt_name_a': 'TextEdit', 'name_mos': 'TextEdit', 'name_fr': 'TextEdit', 'name_de': 'TextEdit', 'name_fa': 'TextEdit', 'border_typ': 'TextEdit', 'wikipedia_': 'TextEdit', 'alt_name_f': 'TextEdit', 'boundary': 'TextEdit', 'intermitte': 'TextEdit', 'wikidata': 'TextEdit', 'source_nam': 'TextEdit', 'ford': 'TextEdit', 'canoe': 'TextEdit', 'motorboat': 'TextEdit', 'ship': 'TextEdit', 'GNS_dsg_st': 'TextEdit', 'alt_name_2': 'TextEdit', 'alt_name_1': 'TextEdit', 'alt_name_3': 'TextEdit', 'GNS_id': 'TextEdit', 'GNS_dsg_co': 'TextEdit', 'short_name': 'TextEdit', 'nat_name': 'TextEdit', 'loc_name': 'TextEdit', 'seasonal': 'TextEdit', 'tunnel': 'TextEdit', 'name_ru': 'TextEdit', 'ref_geonam': 'TextEdit', 'layer': 'TextEdit', 'width': 'TextEdit', 'source_alt': 'TextEdit', 'right_coun': 'TextEdit', 'left_count': 'TextEdit', 'type': 'TextEdit', 'attributio': 'TextEdit', 'source_dat': 'TextEdit', 'tidal': 'TextEdit', 'highway': 'TextEdit', 'name_sourc': 'TextEdit', 'substance': 'TextEdit', 'man_made': 'TextEdit', 'level': 'TextEdit', });
lyr_RESEAUROUTIER_4.set('fieldImages', {'LENGTH': 'TextEdit', 'FNODE_': 'TextEdit', 'TNODE_': 'TextEdit', 'ROUTE_': 'TextEdit', 'ROUTE_ID': 'TextEdit', 'ID': 'Range', });
lyr_LimiteSousPrfectureMBahiakro_5.set('fieldImages', {'NOM': '', 'DEPT': '', 'REGION': '', 'DISTRICT': '', 'Superficie': '', 'ID': '', });
lyr_VILLAGE_6.set('fieldImages', {'Name': '', 'descriptio': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMo': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', 'auxiliary_': '', 'auxiliar_1': '', 'auxiliar_2': '', 'auxiliar_3': '', 'auxiliar_4': '', 'auxiliar_5': '', 'auxiliar_6': '', 'auxiliar_7': '', 'auxiliar_8': '', 'auxiliar_9': '', 'auxiliar10': '', 'auxiliar11': '', 'auxiliar12': '', 'auxiliar13': '', 'auxiliar14': '', 'auxiliar15': '', 'auxiliar16': '', 'auxiliar17': '', 'auxiliar18': '', 'auxiliar19': '', 'auxiliar20': '', 'auxiliar21': '', 'auxiliar22': '', 'auxiliar23': '', 'auxiliar24': '', 'DISTRICT': '', 'NOM_REGION': '', 'NOM_DEPART': '', 'NOM_SSPREF': '', 'NOM_VILLAG': '', 'STATUT_ADM': '', 'ID': '', 'auxiliar25': '', 'auxiliar26': '', 'auxiliar27': '', 'auxiliar28': '', 'auxiliar29': '', 'auxiliar30': '', 'auxiliar31': '', 'auxiliar32': '', 'auxiliar33': '', 'auxiliar34': '', 'auxiliar35': '', 'auxiliar36': '', 'auxiliar37': '', 'auxiliar38': '', 'auxiliar39': '', 'auxiliar40': '', 'auxiliar41': '', 'auxiliar42': '', 'auxiliar43': '', 'auxiliar44': '', 'auxiliar45': '', 'auxiliar46': '', 'auxiliar47': '', 'auxiliar48': '', 'auxiliar49': '', 'population': '', 'REGION': '', 'SOUS_PREF': '', 'DEPART': '', 'STATUT': '', 'layer': '', 'path': '', 'auxiliary_storage_labeling_positionx': 'Hidden', 'auxiliary_storage_labeling_positiony': 'Hidden', 'auxiliary_storage_labeling_show': 'Hidden', 'auxiliary_storage_labeling_labelrotation': 'Hidden', 'auxiliary_storage_labeling_family': 'Hidden', 'auxiliary_storage_labeling_fontstyle': 'Hidden', 'auxiliary_storage_labeling_size': 'Hidden', 'auxiliary_storage_labeling_bold': 'Hidden', 'auxiliary_storage_labeling_italic': 'Hidden', 'auxiliary_storage_labeling_underline': 'Hidden', 'auxiliary_storage_labeling_color': 'Hidden', 'auxiliary_storage_labeling_strikeout': 'Hidden', 'auxiliary_storage_labeling_multilinealignment': 'Hidden', 'auxiliary_storage_labeling_buffersize': 'Hidden', 'auxiliary_storage_labeling_buffercolor': 'Hidden', 'auxiliary_storage_labeling_bufferdraw': 'Hidden', 'auxiliary_storage_labeling_labeldistance': 'Hidden', 'auxiliary_storage_labeling_hali': 'Hidden', 'auxiliary_storage_labeling_vali': 'Hidden', 'auxiliary_storage_labeling_scalevisibility': 'Hidden', 'auxiliary_storage_labeling_minscale': 'Hidden', 'auxiliary_storage_labeling_maxscale': 'Hidden', 'auxiliary_storage_labeling_alwaysshow': 'Hidden', 'auxiliary_storage_labeling_calloutdraw': 'Hidden', 'auxiliary_storage_labeling_labelallparts': 'Hidden', });
lyr_Villagesconcerns_7.set('fieldImages', {'DISTRICT': '', 'NOM_REGION': '', 'NOM_DEPART': '', 'NOM_SSPREF': '', 'NOM_VILLAG': '', 'STATUT_ADM': '', 'ID': '', 'auxiliary_': '', 'auxiliar_1': '', 'auxiliar_2': '', 'auxiliar_3': '', 'auxiliar_4': '', 'auxiliar_5': '', 'auxiliar_6': '', 'auxiliar_7': '', 'auxiliar_8': '', 'auxiliar_9': '', 'auxiliar10': '', 'auxiliar11': '', 'auxiliar12': '', 'auxiliar13': '', 'auxiliar14': '', 'auxiliar15': '', 'auxiliar16': '', 'auxiliar17': '', 'auxiliar18': '', 'auxiliar19': '', 'auxiliar20': '', 'auxiliar21': '', 'auxiliar22': '', 'auxiliar23': '', 'auxiliar24': '', });
lyr_SousPrfecture_1.set('fieldLabels', {'NOM': 'inline label - always visible', 'DEPT': 'inline label - always visible', 'REGION': 'inline label - always visible', 'DISTRICT': 'inline label - always visible', 'Superficie': 'inline label - always visible', 'ID': 'no label', });
lyr_ContourMBahiakro_2.set('fieldLabels', {'NOM': 'inline label - always visible', 'DEPT': 'inline label - always visible', 'REGION': 'no label', 'DISTRICT': 'no label', 'Superficie': 'inline label - always visible', 'ID': 'no label', });
lyr_Coursdeau_3.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'waterway': 'no label', 'name': 'no label', 'name_ar': 'no label', 'destinatio': 'no label', 'wikipedia': 'no label', 'name_bm': 'no label', 'name_en': 'no label', 'destinat_1': 'no label', 'boat': 'no label', 'is_in_coun': 'no label', 'is_in_co_1': 'no label', 'alt_name': 'no label', 'admin_leve': 'no label', 'alt_name_e': 'no label', 'alt_name_d': 'no label', 'name_dyu': 'no label', 'alt_name_a': 'no label', 'name_mos': 'no label', 'name_fr': 'no label', 'name_de': 'no label', 'name_fa': 'no label', 'border_typ': 'no label', 'wikipedia_': 'no label', 'alt_name_f': 'no label', 'boundary': 'no label', 'intermitte': 'no label', 'wikidata': 'no label', 'source_nam': 'no label', 'ford': 'no label', 'canoe': 'no label', 'motorboat': 'no label', 'ship': 'no label', 'GNS_dsg_st': 'no label', 'alt_name_2': 'no label', 'alt_name_1': 'no label', 'alt_name_3': 'no label', 'GNS_id': 'no label', 'GNS_dsg_co': 'no label', 'short_name': 'no label', 'nat_name': 'no label', 'loc_name': 'no label', 'seasonal': 'no label', 'tunnel': 'no label', 'name_ru': 'no label', 'ref_geonam': 'no label', 'layer': 'no label', 'width': 'no label', 'source_alt': 'no label', 'right_coun': 'no label', 'left_count': 'no label', 'type': 'no label', 'attributio': 'no label', 'source_dat': 'no label', 'tidal': 'no label', 'highway': 'no label', 'name_sourc': 'no label', 'substance': 'no label', 'man_made': 'no label', 'level': 'no label', });
lyr_RESEAUROUTIER_4.set('fieldLabels', {'LENGTH': 'no label', 'FNODE_': 'no label', 'TNODE_': 'no label', 'ROUTE_': 'no label', 'ROUTE_ID': 'no label', 'ID': 'no label', });
lyr_LimiteSousPrfectureMBahiakro_5.set('fieldLabels', {'NOM': 'no label', 'DEPT': 'no label', 'REGION': 'no label', 'DISTRICT': 'no label', 'Superficie': 'no label', 'ID': 'no label', });
lyr_VILLAGE_6.set('fieldLabels', {'Name': 'inline label - always visible', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'auxiliary_': 'no label', 'auxiliar_1': 'no label', 'auxiliar_2': 'no label', 'auxiliar_3': 'no label', 'auxiliar_4': 'no label', 'auxiliar_5': 'no label', 'auxiliar_6': 'no label', 'auxiliar_7': 'no label', 'auxiliar_8': 'no label', 'auxiliar_9': 'no label', 'auxiliar10': 'no label', 'auxiliar11': 'no label', 'auxiliar12': 'no label', 'auxiliar13': 'no label', 'auxiliar14': 'no label', 'auxiliar15': 'no label', 'auxiliar16': 'no label', 'auxiliar17': 'no label', 'auxiliar18': 'no label', 'auxiliar19': 'no label', 'auxiliar20': 'no label', 'auxiliar21': 'no label', 'auxiliar22': 'no label', 'auxiliar23': 'no label', 'auxiliar24': 'no label', 'DISTRICT': 'no label', 'NOM_REGION': 'inline label - always visible', 'NOM_DEPART': 'inline label - always visible', 'NOM_SSPREF': 'inline label - always visible', 'NOM_VILLAG': 'inline label - always visible', 'STATUT_ADM': 'no label', 'ID': 'no label', 'auxiliar25': 'no label', 'auxiliar26': 'no label', 'auxiliar27': 'no label', 'auxiliar28': 'no label', 'auxiliar29': 'no label', 'auxiliar30': 'no label', 'auxiliar31': 'no label', 'auxiliar32': 'no label', 'auxiliar33': 'no label', 'auxiliar34': 'no label', 'auxiliar35': 'no label', 'auxiliar36': 'no label', 'auxiliar37': 'no label', 'auxiliar38': 'no label', 'auxiliar39': 'no label', 'auxiliar40': 'no label', 'auxiliar41': 'no label', 'auxiliar42': 'no label', 'auxiliar43': 'no label', 'auxiliar44': 'no label', 'auxiliar45': 'no label', 'auxiliar46': 'no label', 'auxiliar47': 'no label', 'auxiliar48': 'no label', 'auxiliar49': 'no label', 'population': 'no label', 'REGION': 'no label', 'SOUS_PREF': 'no label', 'DEPART': 'no label', 'STATUT': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_Villagesconcerns_7.set('fieldLabels', {'DISTRICT': 'no label', 'NOM_REGION': 'inline label - always visible', 'NOM_DEPART': 'inline label - always visible', 'NOM_SSPREF': 'inline label - always visible', 'NOM_VILLAG': 'inline label - always visible', 'STATUT_ADM': 'no label', 'ID': 'no label', 'auxiliary_': 'no label', 'auxiliar_1': 'no label', 'auxiliar_2': 'no label', 'auxiliar_3': 'no label', 'auxiliar_4': 'no label', 'auxiliar_5': 'no label', 'auxiliar_6': 'no label', 'auxiliar_7': 'no label', 'auxiliar_8': 'no label', 'auxiliar_9': 'no label', 'auxiliar10': 'no label', 'auxiliar11': 'no label', 'auxiliar12': 'no label', 'auxiliar13': 'no label', 'auxiliar14': 'no label', 'auxiliar15': 'no label', 'auxiliar16': 'no label', 'auxiliar17': 'no label', 'auxiliar18': 'no label', 'auxiliar19': 'no label', 'auxiliar20': 'no label', 'auxiliar21': 'no label', 'auxiliar22': 'no label', 'auxiliar23': 'no label', 'auxiliar24': 'no label', });
lyr_Villagesconcerns_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});