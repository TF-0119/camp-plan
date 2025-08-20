
(function(){
  function includeFragments(){
    document.querySelectorAll('[data-include]').forEach(async function(el){
      var src = el.getAttribute('data-include');
      try{
        const res = await fetch(src, {cache: 'no-store'});
        const html = await res.text();
        el.outerHTML = html;
      }catch(e){
        console.error('include failed:', src, e);
      }
    });
  }
  if (document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', includeFragments);
  } else {
    includeFragments();
  }
})();
