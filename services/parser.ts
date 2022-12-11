import BeautifulDom from "beautiful-dom";

export default function ParseHTML(){
  const document = `
<p class="paragraph highlighted-text" >
  My name is <b> Ajah, C.S. </b> and I am a <span class="work"> software developer </span>
</p>
<div class = "container" id="container" >
 <b> What is the name of this module </b>
 <p> What is the name of this libray </p>
 <a class="myWebsite" href="https://www.ajah.xyz" > My website </a>
</div>
<form>
  <label for="name"> What's your name? </label>
  <input type="text" id="name" name="name" />
</form>
`;
  const dom = new BeautifulDom(document);
  const text =  dom.getElementsByTagName("b")[0].textContent
  console.log("HTML parser says: ", text);
  return text
}