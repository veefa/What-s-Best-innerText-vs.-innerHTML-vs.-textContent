  
(<div id='blog-test'>
  <p>This element is <strong>strong</strong> and     has some super fun <code>code</code>!</p>
</div>);
 
const getValue = document.getElementById("blog-test");
console.log("textContent:",getValue.textContent);
console.log("innerText:", getValue.innerText);
console.log("innerHTML:", getValue.innerHTML);
//retutn : 
/* textContent: 
          This element is strong and     has some super fun code!
innerText: 
          This element is strong and has some super fun code!
innerHTML:
          <p>This element is <strong>strong</strong> and     has some super fun <code>code</code>!</p>
        */
