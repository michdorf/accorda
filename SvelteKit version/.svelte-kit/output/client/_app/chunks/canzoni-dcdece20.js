import{U as n,D as c}from"./vendor-37dada03.js";const o="chords-canzoni";let e=c([]);class s{constructor(){this.carica(),e.subscribe(a=>this.salva(a))}agg(a){e.update(t=>[...t,a])}trova(a){const t=n(e);if(!(a>=t.length))return t[a]}carica(){const a=localStorage.getItem(o),t=JSON.parse(a||"[]").map(r=>(r.creato=new Date(r.creato*1e3),r));e.set(t)}salva(a){const t=a.map(r=>(typeof r.creato!="number"&&(r.creato=Math.round(r.creato.getTime()/1e3)),r));localStorage.setItem(o,JSON.stringify(t))}}var g=new s;export{g as C,e as c};