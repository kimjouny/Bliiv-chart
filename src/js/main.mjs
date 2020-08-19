const OVERLAY=document.getElementsByClassName('overlay_container')[0];
OVERLAY.addEventListener('transitionend',()=>{
    OVERLAY.classList.add('overlay_none');
});
window.onload=()=>{
    setTimeout(()=>OVERLAY.classList.add('overlay_hide'),1500);
};