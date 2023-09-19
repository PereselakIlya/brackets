module.exports = function check(str, bracketsConfig) {
  var counter=0;
  bracketsConfig=bracketsConfig.flat();
  for(var i=0;i<bracketsConfig.length;++i)
  {
    if(bracketsConfig.length==2){
      if(str.includes(bracketsConfig[i]))
      {
        counter+=1;
      }  
    }
    else{
      if(str.includes(bracketsConfig[i]+bracketsConfig[i+1])){
        counter+=1;
      }
      else{
        counter-=1;
      }
    }
  }
  if(counter>0){
    return true;
  }
  else{
    return false;
  }
}
