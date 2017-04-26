/*
* @Author: lcm
* @Date:   2017-04-18 21:16:21
* @Last Modified by:   lcm
* @Last Modified time: 2017-04-24 14:24:49
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
7、dom模板实例说明
	 DOM 作为模版时（例如，将 el 选项挂载到一个已存在的元素上）, 你会受到 HTML 的一些限制，因为 Vue 只有在浏览器解析和标准化 HTML 后才能获取模版内容。尤其像这些元素 <ul> ， <ol>， <table> ， <select> 限制了能被它包裹的元素， <option> 只能出现在其它元素内部。
	 如下会报错：
	<table>
	  <my-row>...</my-row>
	</table>

	自定义组件 <my-row> 被认为是无效的内容，因此在渲染的时候会导致错误。变通的方案是使用特殊的 is 属性：
	<table>
	  <tr is="my-row"></tr>
	</table>
	应当注意，如果您使用来自以下来源之一的字符串模板，这些限制将不适用：
		<script type="text/x-template">
		JavaScript内联模版字符串
		.vue 组件
8、在使用组件的时候，即：Vue.components
data 必须是函数


9、使用computed来设置计算属性
10、 props: ['message']中子组件中的接收属性必须以字符串的形式
	Vue.component('child', {
	  // 声明 props
	  props: ['message'],
	  // 就像 data 一样，prop 可以用在模板内
	  // 同样也可以在 vm 实例中像 “this.message” 这样使用
	  template: '<span>{{ message }}</span>'
	})

	然后向它传入一个普通字符串：
		<child message="hello!"></child>

11、驼峰式与短横线隔开式在组件的使用
	<!-- kebab-case in HTML 短横线隔开式 -->
	<child my-message="hello!"></child>

	短横线隔开式属性转问驼峰式
	Vue.component('child', {
	  // camelCase in JavaScript
	  props: ['myMessage'],
	  template: '<span>{{ myMessage }}</span>'
	})
12、简写
	v-bind:==> :
	v-on: ==> &:
13、传递实践的数字
	<!-- 传递了一个字符串"1" -->
	<comp some-prop="1"></comp>

	<!-- 传递实际的数字 -->
	<comp v-bind:some-prop="1"></comp>


14、通常有两种改变 prop 的情况：
	prop 作为初始值传入，子组件之后只是将它的初始值作为本地数据的初始值使用；
	prop 作为需要被转变的原始值传入。
	更确切的说这两种情况是：
	定义一个局部 data 属性，并将 prop 的初始值作为局部数据的初始值。
		props: ['initialCounter'],
		data: function () {
		  return { counter: this.initialCounter }
		}
	反向修改size属性的值
	定义一个 computed 属性，此属性从 prop 的值计算得出。
		props: ['size'],
		computed: {
		  normalizedSize: function () {
		    return this.size.trim().toLowerCase()
		  }
		}



15、使用 $on(eventName) 监听事件和使用 $emit(eventName) 触发事件
父组件可以在使用子组件的地方直接用 v-on 来监听子组件触发的事件。
下面是一个例子：
	<div id="counter-event-example">
	  <p>{{ total }}</p>
	  <button-counter v-on:increment="incrementTotal"></button-counter>
	  <button-counter v-on:increment="incrementTotal"></button-counter>
	</div>
	Vue.component('button-counter', {
	  template: '<button v-on:click="increment">{{ counter }}</button>',
	  data: function () {
	    return {
	      counter: 0
	    }
	  },
	  methods: {
	    increment: function () {
	      this.counter += 1
	      this.$emit('increment')
	    }
	  },
	})
	new Vue({
	  el: '#counter-event-example',
	  data: {
	    total: 0
	  },
	  methods: {
	    incrementTotal: function () {
	      this.total += 1
	    }
	  }
	})
	在本例中，子组件已经和它外部完全解耦了。它所做的只是触发一个父组件关心的内部事件。

看到
https://vuefe.cn/v2/guide/components.html#Customizing-Component-v-model
自定义事件



注意事项
	由于 JavaScript 的限制， Vue 不能检测以下变动的数组：
	当你利用索引直接设置一个项时，例如： 
		vm.items[indexOfItem] = newValue
	当你修改数组的长度时，例如： 
		vm.items.length = newLength
	为了避免第一种情况，以下两种方式将达到像 vm.items[indexOfItem] = newValue 的效果， 同时也将触发状态更新：
	// Vue.set
		Vue.set(example1.items, indexOfItem, newValue)
	// Array.prototype.splice`
		example1.items.splice(indexOfItem, 1, newValue)
	避免第二种情况，使用 splice：
		example1.items.splice(newLength)








































*/