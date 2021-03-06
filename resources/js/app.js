
/**
 * First, we will load all of this project's Javascript utilities and other
 * dependencies. Then, we will be ready to develop a robust and powerful
 * application frontend using useful Laravel and JavaScript libraries.
 */

require('./bootstrap');

//feather-icons install
const feather = require('feather-icons');
//ckeditor classic install
window.ClassicEditor = require('@ckeditor/ckeditor5-build-classic');
//select2 install multipal selection
window.select2 = require('select2');
feather.replace();
window.slugify = function(text){
	return text.toString().toLowerCase()
	.replace(/\s+/g, '-')
	.replace(/[^\w\-]+/g, '')
	.replace(/\-\-+/g, '-')
	.replace(/^-+/, '')
	.replace(/-+$/, '');
}


