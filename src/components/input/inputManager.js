/**
 * inputManager
 * 	put(vueConponent)	//可将input组件put到inputmanager中
 * 	onChange(funciton)	//当inputManager中的input变化时，onChange会回调传入的方法
 * 						并带出错误信息
 * 	findFail()			//查找出验证失败的input
 */

import lodash from 'lodash'

var inputManager={
	createNew:function(){
		var inputManager={};

		var onChange=function(verify,verifyInfo){};

		var inputList=[];

		inputManager.put=function(input){
			input.$on("input",(val,v,m)=>{
				var failInput=this.findFail();

				var verify=failInput === null;
				var verifyInfo=verify ? "success" : failInput.getVerifyInfo();

				console.log(val,verify,verifyInfo);
				onChange(verify,verifyInfo,failInput);
			});
			inputList.unshift(input);
		};

		inputManager.onChange=function(fun){
			onChange=fun;
		};

		//查找出校验失败的“第一个”input
		inputManager.findFail=function(){
			var input=null;
			lodash.forEach(inputList,function(value,i){
				if(!value.getVerify()){
					input=value;
				}
			});
			return input;		
		}


		return inputManager;
	}
}

export default inputManager;

export function InputManager(){
	this._inputManager=inputManager.createNew();
};

InputManager.prototype.put=function(input){
	this._inputManager.put(input);
}

InputManager.prototype.onChange=function(fun){
	this._inputManager.onChange(fun);
}

InputManager.prototype.findFail=function(){
	this._inputManager.findFail();
}

