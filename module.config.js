/*
* @Author: lcm
* @Date:   2017-04-17 18:01:21
* @Last Modified by:   lcm
* @Last Modified time: 2017-04-20 17:58:50
*/

'use strict';
var path = require('path');
var srcDir = path.resolve(process.cwd(), 'src');

module.exports = {
	// lib
	'jquery': srcDir+'/commonJs/jquery-3.0.0.min',
	'base': srcDir+'/commonJs/base',
	'base64': srcDir+'/commonJs/base64',
	'common': srcDir+'/commonJs/common',
	'jqueryEncrypt': srcDir+'/commonJs/jquery.encrypt',
	'jqueryUtil': srcDir+'/commonJs/jquery.util',
	'jqueryPlaceholder': srcDir+'/commonJs/jquery.placeholder.min',
	'message': srcDir+'/commonJs/message',
	'remote': srcDir+'/commonJs/remote',
	'storage': srcDir+'/commonJs/storage',
	'url': srcDir+'/commonJs/url',
	'user': srcDir+'/commonJs/user',

	'vue$': 'vue/dist/vue.esm.js',
	// schoolMap components
	'schoolMapMainVue': srcDir+'/components/schoolMap/ui/schoolMapMain',
	'schoolMapMainJs': srcDir+'/components/schoolMap/schoolMapMain',
	'schoolMapScss': srcDir+'/components/schoolMap/scss/schoolMap',
	'schoolMapJs': srcDir+'/components/schoolMap/controllers/schoolMap'
}
