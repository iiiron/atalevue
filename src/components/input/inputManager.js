/**
 * inputManager
 * 	put(vueConponent)	//可将input组件put到inputmanager中
 * 	onChange(funciton)	//当inputManager中的input变化时，onChange会回调传入的方法
 * 						并带出错误信息
 * 	findFail()			//查找出验证失败的input
 */
import lodash from 'lodash'

export default function InputManager(){
	this._onChange=function(){};
	this._inputList=[];
};

InputManager.prototype.put=function(input){
	input.$on("input",(val,v,m)=>{
		var failInput=this.findFail();

		var verify=failInput === undefined;
		var verifyInfo=verify ? "success" : failInput.getVerifyInfo();

		console.log(val,verify,verifyInfo);

		onChange(verify,verifyInfo,failInput);
	});
	this._inputList.unshift(input);
}

InputManager.prototype.onChange=function(fun){
	this._onChange=fun;
}

InputManager.prototype.findFail=function(){
	return lodash.find(this._inputList,function(value,i){
		return !value.getVerify();
	});
}

