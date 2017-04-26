## 项目介绍		
* dist文件夹是打包后的vue组建代码		
* pages文件夹属于view访问的页面		
* src属于本地开发的时候文件夹		
    * commonJs属于公用js代码		
	* components属于vue页面组建库，根据项目名称命名		
		* 项目文件夹以项目命名，解读项目文件夹		
		* controllers存放该项目vue组建的业务代码		
		* img存放该项目vue组建的图片		
		* scss存放该项目vue组建的css		
		* ui存放该项目公用vue组建		
		* 项目.js文件 就是该项目入口文件		
	* images属于存放公用的图片		
	* jade用于编写静态页面		
	* store为后期增加vux做准备			
	* style存放公用的scss，方便项目复用		
	* tools用于存放封装的根据函数		
*gulpfiles用于编译jada-to-html		
*eslint 用于检查js代码语法和格式		
*webpack 用于编译vue组建和打包vue组建		

### example说明（schoolmap demo）		
### 全局安装		
`npm install -g vue-cli`        

`npm install -g eslint` 

`install dependencies`		      

`npm install`		
### serve with hot reload at localhost:8080		
`npm run dev`		
### build for production with minification			 
`npm run build`			
###直接访问例子			
`http://localhost:8080/pages/schoolMap.html`		