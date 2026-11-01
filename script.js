const waNumber = "201280312211";
const waLink = "https://wa.me/" + waNumber + "?text=" + encodeURIComponent("السلام عليكم، شفت موقع Web Craft");
const waBtn = document.getElementById("waBtn");
const waFooter = document.getElementById("waFooter");
if(waBtn) waBtn.href = waLink;
if(waFooter) waFooter.href = waLink;

function addReview(){
 let nameEl = document.getElementById("clientName");
 let reviewEl = document.getElementById("clientReview");
 if(!nameEl || !reviewEl) return;
 let name = nameEl.value.trim();
 let review = reviewEl.value.trim();
 if(!name || !review){ alert("اكتب اسمك ورأيك"); return; }
 let list = document.getElementById("reviewsList");
 if(!list) return;
 let div = document.createElement("div");
 div.className = "review";
 div.innerHTML = `<p>“${review}”</p><span>— ${name}</span>`;
 list.prepend(div);
 nameEl.value = "";
 reviewEl.value = "";
}

let currentLang = "ar";
const langBtn = document.getElementById("langBtn");
if(langBtn){
  langBtn.onclick = function(){
   currentLang = currentLang === "ar" ? "en" : "ar";
   this.textContent = currentLang === "ar" ? "EN" : "AR";
   document.documentElement.dir = currentLang === "ar" ? "rtl" : "ltr";
   document.documentElement.lang = currentLang;
   document.querySelectorAll("[data-ar]").forEach(el=>{
    let txt = el.getAttribute(`data-${currentLang}`);
    if(txt) el.textContent = txt;
   });
  };
}

// AI CHAT - FIXED FOR ALL DEVICES
const chatBtn = document.getElementById("chatBtn");
const chatBox = document.getElementById("chatBox");
const closeChat = document.getElementById("closeChat");
const chatMessages = document.getElementById("chatMessages");
const chatInput = document.getElementById("chatInput");
const sendBtn = document.getElementById("sendBtn");

function openChat(){
  if(chatBox){
    chatBox.classList.add("open");
    chatBox.style.display = "flex";
    if(chatInput) setTimeout(()=> chatInput.focus(), 300);
  }
}
function closeChatBox(){
  if(chatBox){
    chatBox.classList.remove("open");
    setTimeout(()=> { if(!chatBox.classList.contains("open")) chatBox.style.display = "none"; }, 200);
  }
}
if(chatBtn){
  chatBtn.style.display = "flex";
  chatBtn.style.visibility = "visible";
  chatBtn.style.opacity = "1";
  chatBtn.onclick = openChat;
  chatBtn.addEventListener("touchstart", function(e){
    e.preventDefault();
    openChat();
  }, {passive:false});
}
if(closeChat){ closeChat.onclick = closeChatBox; }

function sendMsg(){
 if(!chatInput || !chatMessages) return;
 let text = chatInput.value.trim();
 if(!text) return;
 addMsg(text,"user");
 chatInput.value = "";
 setTimeout(()=> botReply(text), 600);
}
function addMsg(text,type){
 if(!chatMessages) return;
 let div = document.createElement("div");
 div.className = "msg "+type;
 div.textContent = text;
 chatMessages.appendChild(div);
 chatMessages.scrollTop = chatMessages.scrollHeight;
}
function botReply(q){
 q = (q || "").toLowerCase();
 let ans = "تواصل مع محمد على واتساب 01280312211 للسعر والتفاصيل الدقيقة ❤️";
 if(q.includes("خدم") || q.includes("تعمل ايه") || q.includes("service")) ans = "بقدم: 1- تصميم مواقع احترافية 2- متاجر الكترونية 3- تحسين سرعة و SEO 4- صيانة ودعم فني 24/7";
 else if(q.includes("سعر") || q.includes("بكام") || q.includes("price")) ans = "الأسعار بتبدأ من 2500 جنيه للموقع الشخصي و 4000 للمتجر. ابعت تفاصيل مشروعك على الواتساب وهبعتلك عرض.";
 else if(q.includes("وقت") || q.includes("مدة") || q.includes("time")) ans = "الموقع الشخصي من 1 لـ 2 أيام، والمتجر من 2 لـ 3 أيام.";
 else if(q.includes("اعمال") || q.includes("شغلك") || q.includes("work")) ans = "شوف قسم أعمالي فوق - فيه 3 مواقع لايف معمولة بالكامل.";
 else if(q.includes("شهاد") || q.includes("cert")) ans = "حاصل على شهادات معتمدة في PHP و JavaScript و CSS من منصة معارف.";
 else if(q.includes("سلام") || q.includes("اهلا") || q.includes("hello") || q.includes("hi")) ans = "أهلا بيك! 👋 تحب تعرف ايه عن شغل محمد؟";
 addMsg(ans,"bot");
}
if(chatInput){
  chatInput.addEventListener("keypress", e=>{ if(e.key==="Enter") { e.preventDefault(); sendMsg(); } });
  chatInput.addEventListener("keydown", e=>{ if(e.key==="Enter") { e.preventDefault(); sendMsg(); } });
}
if(sendBtn){ sendBtn.onclick = sendMsg; }
window.addEventListener("load", ()=>{
  if(chatBtn){
    chatBtn.style.display = "flex";
    chatBtn.style.visibility = "visible";
  }
});
