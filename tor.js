(function(){
  try{ if(sessionStorage.getItem("aiu-ok")==="1") return; }catch(e){}
  document.documentElement.classList.add("gesperrt");
  document.addEventListener("DOMContentLoaded",function(){
    var f=document.getElementById("tor-form"); if(!f) return;
    f.addEventListener("submit",async function(ev){
      ev.preventDefault();
      var pw=document.getElementById("tor-pw").value;
      var buf=await crypto.subtle.digest("SHA-256",new TextEncoder().encode(pw));
      var hex=Array.from(new Uint8Array(buf)).map(function(b){return b.toString(16).padStart(2,"0")}).join("");
      if(hex==="186b66f8642f32c0afeb56e4184ccc0b5e73667d8e42f1697befe8011895d736"){ try{sessionStorage.setItem("aiu-ok","1")}catch(e){} document.documentElement.classList.remove("gesperrt"); }
      else{ document.getElementById("tor-fehler").textContent=f.dataset.fehler; }
    });
  });
})();
