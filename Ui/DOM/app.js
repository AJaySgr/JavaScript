const scriptHtml='<script>alert("Allert from InnerHtml")</script>';
const main=document.getElementById('main');
const externalHTML=`<img src='1' onerror='alert("HELLO")'>`;
main.innerHTML=externalHTML;