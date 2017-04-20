/*
* @Author: lcm
* @Date:   2017-04-18 21:16:21
* @Last Modified by:   lcm
* @Last Modified time: 2017-04-18 22:17:55
*/

'use strict';
/*

new Vue({
	el:'元素的id',
	data:{ // 数据属性名称
		属性1：’val1‘，
		属性2：’val2‘，
	},
	methods:{// 在此处写自定义方法名称
	
	} 
})
也可以
new Vue({}).$mount('元素的id');


1、指令：
v-bind:元素的属性='Vue实例的属性';
  <span v-bind:title="message">   //将span的title属性和new Vue中的message属性绑定在一起

2、条件和循坏
v-if:='Vue中属性' 表示是否显示该元素  //将该元素的显示和隐藏和new Vue对象的属性绑定在一起，还属性的值只可以为布尔值
v-for=’单体 in Vue中的属性（数组）‘
   例如：todos被遍历
    <div id="app-4">
	  <ol>
	    <li v-for="todo in todos">
	      {{ todo.text }}
	    </li>
	  </ol>
	</div>

    var app4 = new Vue({
	  el: '#app-4',
	  data: {
	    todos: [
	      { text: 'Learn JavaScript' },
	      { text: 'Learn Vue' },
	      { text: 'Build something awesome' }
	    ]
	  }
	})

   3、事件：v-on：事件名
	例如：
	<div id="app-5">
	  <p>{{ message }}</p>
	  <button v-on:click="reverseMessage">Reverse Message</button>
	</div>
	
	var app5 = new Vue({
	  el: '#app-5',
	  data: {
	    message: 'Hello Vue.js!'
	  },
	  methods: {
	    reverseMessage: function () {
	      this.message = this.message.split('').reverse().join('')
	    }
	  }
	})

4、v-model 用于表单输入，
使得表单的输入和new Vue中的属性绑定在一起，实现双向绑定
    例如：
 	<div id="app-6">
	  <p>{{ message }}</p>
	  <input v-model="message">
	</div>

	var app6 = new Vue({
	  el: '#app-6',
	  data: {
	    message: 'Hello Vue!'
	  }
	})
5、组件
	Vue.component('组件名称',{
		props:['todo'],//相当于react props即父组件传过来，子组件接收到的props
		template:'<li>实际上就是html元素标签 {{ todo.text }} </li>'
	})
    
    例如：
	Vue.component('todo-item', {
	  props: ['todo'], 
	  template: '<li>{{ todo.text }}</li>'
	})
    
    // v-for循坏groceryList数据同时创建todo-item 
    // v-bind 指令将 todo 传到每一个重复的组件中
	<div id="app-7">
	  <ol>
	    <todo-item v-for="item in groceryList" v-bind:todo="item"></todo-item>
	  </ol>
	</div>


	var app7 = new Vue({
	  el: '#app-7',
	  data: {
	    groceryList: [
	      { text: 'Vegetables' },
	      { text: 'Cheese' },
	      { text: 'Whatever else humans are supposed to eat' }
	    ]
	  }
	})

6、看到实例









































*/