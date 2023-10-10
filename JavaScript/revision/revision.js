// document.querySelector("button").addEventListener
function displayName()
{
    let names= form1.t1.value;
    form1.t2.value = names;
    setTimeout(() => {
      form1.t1.value = " ";  
    }, 100);
}
