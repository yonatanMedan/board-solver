function helperService(){
  return{
    formatTime:function(totalTime){
      var seconds = parseInt(totalTime/1000);
      var minuts = parseInt(seconds/60);
      var remainingSeconds = seconds%60;
      var hours = parseInt(minuts/60);
      var milisecs = totalTime%1000;
      var centsecs = parseInt(milisecs/10);
      if(hours<10){
        hours ="0"+hours;
      }
      if(minuts<10){
        minuts ="0"+minuts;
      }
      if(seconds<10){
        seconds ="0"+seconds;
      }if(centsecs<10){
        centsecs ="0"+centsecs;
      }
      return hours+":"+minuts+":"+seconds+":"+centsecs;
    }
  };
}
