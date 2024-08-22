const btnDevTools = document.getElementById("btnDevTools");
const spanMsg = document.getElementById("spanMsg");
 
btnDevTools.addEventListener("click",async function(){
  let resp = await devTools();
  let respStatus = resp.status;
  if (respStatus == "200") {
    spanMsg.innerText = "CTRL-SHIFT-I keys sent successfully";
  }
});

async function devTools() {
  try
  {
    let url = "http://localhost:9229";
    const resp = await fetch(url);
    return resp;
  }
  catch (error) {
    console.error(error);
  }
}
