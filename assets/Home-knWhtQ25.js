import{t as o,i as c,c as m,o as H,a as M,u as k,b,d as C,F as y,s as f}from"./index-vrEO5fEt.js";var T=o('<div class=blob-container><svg class=blob viewBox="0 0 200 200"xmlns=http://www.w3.org/2000/svg><path fill=#FFA500 d=M49.2,-42.5C60.5,-25.2,64,-4.9,61.6,17.4C59.2,39.6,50.8,63.8,33.8,73C16.9,82.1,-8.5,76.4,-30.4,65.1C-52.3,53.8,-70.6,37.1,-73.7,18.3C-76.8,-0.4,-64.6,-21.1,-49.7,-39.3C-34.9,-57.5,-17.5,-73.2,0.8,-73.8C19,-74.4,38,-59.9,49.2,-42.5Z transform="translate(100 100)">');const A=t=>T();var B=o(`<header class="min-h--80vh flex al-items--center pl--2 pr--2"id=about><section></section><section class=w--50%><h1 class=color--orange>Hello!</h1><h4>I'm Victor, a passionate <a href=#work class=color--orange>Full Stack Developer</a> based in Limuru <i class="fa fa-heart color--red-ltn-20"></i> </h4><h4><em>Don't believe me</em>, <a href=/#work>check some of my work</a> </h4><section class="flex ju-content--flex-start"><nav class="flex col gap--0.45"><ul class="scale--1.45 ml--1"><li><a href=https://github.com/iamvictormwangi target=_blank><i class="fa fa-github"></i></a></li><li><a href="https://wa.me/+254769045900?text=Hello%20Victor"target=_blank><i class="fa fa-whatsapp"></i></a></li><li><a href=https://www.linkedin.com/in/victor-mwangi-ab6a86218/ target=_blank><i class="fa fa-linkedin"></i></a></li></ul><span class="color--complement(orange) fnt-size--4">+254769045900`);const L=t=>(()=>{var s=B(),i=s.firstChild;return c(i,m(A,{})),s})();var j=o('<footer class=p--2 id=contact><h3>Contact</h3><nav><ul><li><a href="https://wa.me/+254769045900?text=Hello%20Victor"target=_blank>Whatsapp</a></li><li><a href=https://www.linkedin.com/in/johndoe target=_blank>Linkedin</a></li><li><a href=mailto:mkoloni550@gmail.com target=_blank>Email Me</a></li><li>Resume');const D=t=>j(),x=(t,s)=>{const i=new IntersectionObserver(d=>{d.forEach(h=>{h.isIntersecting&&(s()(),i.unobserve(t))})},{threshold:.1});i.observe(t),H(()=>i.disconnect())};var V=o("<h3 class=text-al--center!>Technologies and Languages"),z=o("<div class=timeline-container id=technologies><div class=timeline>"),S=o("<div><div class=content><h2>");const E=()=>{const[t,s]=M({}),i=[{name:"HTML"},{name:"CSS/SCSS"},{name:"JavaScript"},{name:"PHP"},{name:"Python"},{name:"Rust"},{name:"Bash"}],d=[{name:"Next JS"},{name:"Rustic Flow"},{name:"Flask"},{name:"React"},{name:"SolidJs"}],h=l=>()=>{s(r=>({...r,[l]:!0}))};return[V(),(()=>{var l=z(),r=l.firstChild;return c(r,m(y,{each:i,children:(g,a)=>(()=>{var e=S(),u=e.firstChild,p=u.firstChild;return k(x,e,()=>h(a())),c(p,()=>g.name),b(()=>C(e,`timeline-item right ${t()[a()]?"visible":""}`)),e})()}),null),c(r,m(y,{each:d,children:(g,a)=>(()=>{var e=S(),u=e.firstChild,p=u.firstChild;return k(x,e,()=>h(a())),c(p,()=>g.name),b(()=>C(e,`timeline-item left ${t()[a()]?"visible":""}`)),e})()}),null),l})()]};var J=o('<section id=work class=p--2><h3>Work</h3><section class="flex col gap--1">'),P=o('<div class="box w--100%"><div class="box__content pt--2 pb--2 pl--2 flex col gap--1"><a target=_blank><h4></h4></a><section></section><section><img alt="Rustic Flow"class="h--auto w--90%"></section><section><a target=_blank><button class="flex gap--1 al-items--center bd--none">Check out <i class="fa fa-arrow-right">');const W=t=>{const s=[{title:"Rustic Flow",description:`
        <p>Rustic Flow is a minimal fast fully featured css/sass command line tool that
        can generate highly optimized css output for use in your projects
        </p>
        <p>When I say fully featured, I really mean fully featured. It comes with :-</p>
          <ul>
            <li>a SASS compiler</li>
            <li>
              A CSS Generator based on HTML, JSX or any other templating you might
              be using in the frontend (ejs, pug, tsx)
            </li>
            <li>
              A CSS Minifier and Bundler
            </li>
          </ul>
      <p>One of the greatest principles of Rustic Flow is that it is intended for speed.</p>
      <p>Its written in Rust and its blazingly fast and with zero overheads - this means
       once you install it there are no dependencies - it just runs. Everything in it
   is written in Rust.
      </p>
      `,image:"rusticflow.png",link:"https://github.com/iamvictormwangi/rusticflow-ui"},{title:"Melbite.com",description:`
        <p>Social Media app I built with my best friend</p>
        <p>Its for people who love writting and it features all features a social media platform should have</p>
        <ul>
          <li>Authentication</li>
          <li>Crud Operations
            <ul>
              <li>Create</li>
              <li>Read</li>
              <li>Update</li>
              <li>Delete</li>
            </ul>
          </li>
          <li>Commenting</li>
          <li>Posting</li>
        </ul>
      `,image:"melbite.png",link:"https://melbite.com/"},{title:"Tubeloo",description:`
        <p>Download high quality youtube videos from the terminal</p>
        <p>I really loved youtubedl but the maintainers of it stopped maintaining it</p>
        <p>Tubeloo is super lightweight minimal and allows for download of entire playlists</p>
        <p>The landing page is made ugly intentionally to make it seem like a website straight from the 90s</p>
      `,image:"tubeloo.png",link:"https://github.com/iamvictormwangi/tubeloo"},{title:"Dark Bruvbox",description:`
        <p>I love gruvbox colorscheme</p>
        <p>But lately I find it too bright and it leads to eye strains</p>
        <p>So I made this colorscheme, that emulates gruvbox but is way dark thus allowing anyone to code on hours on end with getting eye strains</p>
      `,image:"dark-gruvbox.png",link:"https://github.com/iamvictormwangi/dark-gruvbox"}];return(()=>{var i=J(),d=i.firstChild,h=d.nextSibling;return c(h,()=>s.map(l=>(()=>{var r=P(),g=r.firstChild,a=g.firstChild,e=a.firstChild,u=a.nextSibling,p=u.nextSibling,I=p.firstChild,R=p.nextSibling,F=R.firstChild;return c(e,()=>l.title),b(n=>{var v=`${l.link}`,w=l.description,_=`/${l.image}`,$=`${l.link}`;return v!==n.e&&f(a,"href",n.e=v),w!==n.t&&(u.innerHTML=n.t=w),_!==n.a&&f(I,"src",n.a=_),$!==n.o&&f(F,"href",n.o=$),n},{e:void 0,t:void 0,a:void 0,o:void 0}),r})())),i})()},N=t=>[m(L,{}),m(E,{}),m(W,{}),m(D,{})];export{N as default};
