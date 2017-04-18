/*
* @Author: lcm
* @Date:   2017-04-17 18:01:21
* @Last Modified by:   lcm
* @Last Modified time: 2017-04-18 17:21:45
*/

'use strict';
var path = require('path');
var srcDir = path.resolve(process.cwd(), 'src');

module.exports = {
	'vue$': 'vue/dist/vue.esm.js',
	// schoolMap components
	'schoolMapMainVue': srcDir+'/components/schoolMap/ui/schoolMapMain.vue',
	'schoolMapMainJs': srcDir+'/components/schoolMap/schoolMapMain.js',
	'schoolMapScss': srcDir+'/components/schoolMap/scss/schoolMap.scss',
	'schoolMapJs': srcDir+'/components/schoolMap/controllers/schoolMap.js'
}
