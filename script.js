const waNumber = "201280312211";
const waLink = "https://wa.me/" + 01280312211 + "?text=" + encodeURIComponent("السلام عليكم، شفت موقع Web Craft");
document.getElementById("waBtn").href = waLink;
document.getElementById("waFooter").href = waLink;

function addReview(){
 let name = document.getElementById("clientName").value.trim();
 let review = document.getElementById("clientReview").value.trim();
 if(!name || !review){ alert("اكتب اسمك ورأيك"); return; }
 let list = document.getElementById("reviewsList");
 let div = document.createElement("div");
 div.className = "review";
 div.innerHTML = `<p>“${review}”</p><span>— ${name}</span>`;
 list.prepend(div);
 document.getElementById("clientName").value = "";
 document.getElementById("clientReview").value = "";
}

let currentLang = "ar";
document.getElementById("langBtn").onclick = function(){
 currentLang = currentLang === "ar" ? "en" : "ar";
 this.textContent = currentLang === "ar" ? "EN" : "AR";
 document.documentElement.dir = currentLang === "ar" ? "rtl" : "ltr";
 document.documentElement.lang = currentLang;
 document.querySelectorAll("[data-ar]").forEach(el=>{
  el.textContent = el.getAttribute(`data-${currentLang}`);
 });
};
// AI CHAT LOGIC
const chatBtn = document.getElementById("chatBtn");
const chatBox = document.getElementById("chatBox");
const closeChat = document.getElementById("closeChat");
const chatMessages = document.getElementById("chatMessages");
const chatInput = document.getElementById("chatInput");

chatBtn.onclick = ()=> chatBox.classList.add("open");
closeChat.onclick = ()=> chatBox.classList.remove("open");

function sendMsg(){
 let text = chatInput.value.trim();
 if(!text) return;
 addMsg(text,"user");
 chatInput.value = "";
 setTimeout(()=> botReply(text), 600);
}

function addMsg(text,type){
 let div = document.createElement("div");
 div.className = "msg "+type;
 div.textContent = text;
 chatMessages.appendChild(div);
 chatMessages.scrollTop = chatMessages.scrollHeight;
}

function botReply(q){
 q = q.toLowerCase();
 let ans = "تواصل مع محمد على واتساب 01280312211 للسعر والتفاصيل الدقيقة ❤️";
 if(q.includes("خدم") || q.includes("تعمل ايه")) ans = "بقدم: 1- تصميم مواقع احترافية 2- متاجر الكترونية 3- تحسين سرعة و SEO 4- صيانة ودعم فني 24/7";
 else if(q.includes("سعر") || q.includes("بكام")) ans = "الأسعار بتبدأ من 2500 جنيه للموقع الشخصي و 4000 للمتجر. ابعت تفاصيل مشروعك على الواتساب وهبعتلك عرض.";
 else if(q.includes("وقت") || q.includes("مدة")) ans = "الموقع الشخصي من 1 لـ 2 أيام، والمتجر من 2 لـ 3 أيام.";
 else if(q.includes("اعمال") || q.includes("شغلك")) ans = "شوف قسم أعمالي فوق - فيه 3 مواقع لايف معمولة بالكامل.";
 else if(q.includes("شهاد") ) ans = "حاصل على شهادات معتمدة في PHP و JavaScript و CSS من منصة معارف.";
 else if(q.includes("سلام") || q.includes("اهلا")) ans = "أهلا بيك! 👋 تحب تعرف ايه عن شغل محمد؟";
 addMsg(ans,"bot");
}

chatInput.addEventListener("keypress", e=>{ if(e.key==="Enter") sendMsg(); });