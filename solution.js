// arr = array of numbers
function major(arr)
{
  var n = arr.length;
  var count = [];
  var max;
  for(var i=0;i<n;i++){
    count[arr[i]]++;
    if(count[arr[i]] > floor(n/2)){
      max = arr[i];
    }
  }
  return max;
}
module.exports=major;
