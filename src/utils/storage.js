/**
 * storage的存在可以隔离存储方式的变化对上层的影响，还可以对存储过程做
 * 统一处理。
 * @return {[type]} [description]
 */
var storage={};

storage.set=function(key,value){
	localStorage.setItem(key,JSON.stringify(value));
};
storage.get=function(key){
	var data=localStorage.getItem(key);
	try{
		return JSON.parse(data);
	}
	catch(e){
		return data;
	}
};
storage.remove=function(key){
	localStorage.removeItem(key);
};
storage.setToken=function(value){
	this.set("token",value);
};
storage.getToken=function(){
	return this.get("token");
};
storage.removeToken=function(){
	this.remove("token");
};

export default storage;