const _0x2f7256=_0x59c8;(function(_0x2c99e5,_0x4bbf8c){const _0x1a260b=_0x59c8,_0x1f3dbc=_0x2c99e5();while(!![]){try{const _0x348f61=-parseInt(_0x1a260b(0x1d3))/0x1+-parseInt(_0x1a260b(0x1cd))/0x2+parseInt(_0x1a260b(0x19e))/0x3*(-parseInt(_0x1a260b(0x19f))/0x4)+-parseInt(_0x1a260b(0x1a1))/0x5+parseInt(_0x1a260b(0x1ba))/0x6+-parseInt(_0x1a260b(0x1bf))/0x7*(-parseInt(_0x1a260b(0x1b8))/0x8)+parseInt(_0x1a260b(0x1b7))/0x9;if(_0x348f61===_0x4bbf8c)break;else _0x1f3dbc['push'](_0x1f3dbc['shift']());}catch(_0x1b5229){_0x1f3dbc['push'](_0x1f3dbc['shift']());}}}(_0x4ef4,0x4f7c5));const LOCK_DURATION=0x2*0x3c*0x3c*0x3e8,COUNTDOWN_DURATION=0x3;function getCountdownImage(_0x31a26d){const _0x1734fb=_0x59c8,_0x675f99=_0x1734fb(0x1ae);return _0x675f99+'?'+_0x31a26d;}function checkLockStatus(){const _0x1b8835=_0x59c8,_0x1fc063=document[_0x1b8835(0x1cc)](_0x1b8835(0x1d2)),_0x1d6554=document[_0x1b8835(0x1cc)](_0x1b8835(0x1c4)),_0x3c3df2=document['getElementById'](_0x1b8835(0x1d9)),_0x39c420=localStorage[_0x1b8835(0x1c8)](_0x1b8835(0x1c7)),_0x1ba126=new Date()[_0x1b8835(0x1d4)]();if(_0x39c420){const _0x3668be=_0x1ba126-_0x39c420;if(_0x3668be<LOCK_DURATION)return _0x1d6554[_0x1b8835(0x1b0)][_0x1b8835(0x1b5)]='none',_0x1fc063[_0x1b8835(0x1b0)][_0x1b8835(0x1b5)]=_0x1b8835(0x1cf),_0x3c3df2['style'][_0x1b8835(0x1b5)]='none',!![];else localStorage[_0x1b8835(0x1c0)](_0x1b8835(0x1c7));}return![];}function lockContent(){const _0x5bcfef=_0x59c8,_0x30f986=new Date()[_0x5bcfef(0x1d4)]();localStorage[_0x5bcfef(0x1a9)](_0x5bcfef(0x1c7),_0x30f986['toString']());const _0x579acf=document[_0x5bcfef(0x1cc)](_0x5bcfef(0x1d2)),_0x539965=document['getElementById']('linksContainer'),_0x20bf3b=document[_0x5bcfef(0x1cc)](_0x5bcfef(0x1d9));_0x539965['style'][_0x5bcfef(0x1b5)]=_0x5bcfef(0x1a2),_0x579acf[_0x5bcfef(0x1b0)][_0x5bcfef(0x1b5)]='block',_0x20bf3b[_0x5bcfef(0x1b0)][_0x5bcfef(0x1b5)]='none';}window['addEventListener'](_0x2f7256(0x1c6),()=>{const _0x3b4141=_0x2f7256;if(checkLockStatus())return;const _0x265804=document[_0x3b4141(0x1cc)](_0x3b4141(0x1c4)),_0x259455=document['getElementById'](_0x3b4141(0x1d2));_0x265804[_0x3b4141(0x1b0)]['display']=_0x3b4141(0x1a2),_0x259455[_0x3b4141(0x1b0)][_0x3b4141(0x1b5)]=_0x3b4141(0x1a2);}),document[_0x2f7256(0x1cc)](_0x2f7256(0x1d9))[_0x2f7256(0x1c3)](_0x2f7256(0x1aa),()=>{const _0x33c553=_0x2f7256,_0x80ef76=document[_0x33c553(0x1cc)]('countdownImage'),_0x4fd795=document[_0x33c553(0x1cc)](_0x33c553(0x1a4)),_0x33bda4=document[_0x33c553(0x1cc)]('loadingBar'),_0x339969=document[_0x33c553(0x1cc)](_0x33c553(0x1c4)),_0x4772bd=document[_0x33c553(0x1cc)]('lockedContent');_0x4fd795['style'][_0x33c553(0x1b5)]=_0x33c553(0x1cf),_0x33bda4[_0x33c553(0x1b0)][_0x33c553(0x1bc)]=_0x33c553(0x1ab),_0x4772bd[_0x33c553(0x1b0)]['display']=_0x33c553(0x1a2),_0x339969['style'][_0x33c553(0x1b5)]=_0x33c553(0x1a2);let _0x1e997f=COUNTDOWN_DURATION;_0x80ef76['src']=getCountdownImage(_0x1e997f);const _0x3924e3=setInterval(()=>{const _0x286e9b=_0x33c553;_0x1e997f--;_0x1e997f>=0x0&&(_0x80ef76['src']=getCountdownImage(_0x1e997f));if(_0x1e997f<=0x0){clearInterval(_0x3924e3),_0x80ef76[_0x286e9b(0x1d1)]=_0x286e9b(0x1c9);const _0x489d31=[_0x286e9b(0x1a0)];extractLinksFromMultipleUrls(_0x489d31),setTimeout(()=>{const _0x52dade=_0x286e9b;_0x4fd795[_0x52dade(0x1b0)][_0x52dade(0x1b5)]='none';},0x0),setTimeout(()=>{lockContent();},0x36b0);}},0x5dc);});function _0x4ef4(){const _0x3e5a21=['78796nNtlRg','getTime','https://mply.io/','target','location','querySelectorAll','extractButton','4536kngqja','796ntzEak','https://monopolygo.wiki/latest-reward-links/','2116390MqQJtx','none','span','loading','link-item','message','text/html','div','setItem','click','100%','Link\x20Image','Error:','https://i.imgur.com/UvDgpCs.gif','text','style','_blank','href','startsWith','className','display','Failed\x20to\x20fetch\x20from\x20','5543991SRhkBR','56uohlNl','error','288054YfqIRx','appendChild','width','textContent','forEach','471282pjKAyk','removeItem','Unknown','innerHTML','addEventListener','linksContainer','createElement','load','lockStart','getItem','https://i.imgur.com/92xFbAL.png','length','parseFromString','getElementById','13510Widtxq','img','block','No\x20links\x20found.','src','lockedContent'];_0x4ef4=function(){return _0x3e5a21;};return _0x4ef4();}async function extractLinksFromMultipleUrls(_0x38bd1f){const _0x419104=_0x2f7256,_0x13ea99=[];for(const _0xe3d014 of _0x38bd1f){try{const _0x12a203=await fetch('https://api.allorigins.win/raw?url='+encodeURIComponent(_0xe3d014));if(!_0x12a203['ok'])throw new Error(_0x419104(0x1b6)+_0xe3d014);const _0x18c921=await _0x12a203[_0x419104(0x1af)](),_0x3710c1=new DOMParser(),_0xcbc914=_0x3710c1[_0x419104(0x1cb)](_0x18c921,_0x419104(0x1a7)),_0x504c59=_0xcbc914[_0x419104(0x1d8)]('a');_0x504c59[_0x419104(0x1be)](_0x174718=>{const _0x28e38d=_0x419104;if(_0x174718[_0x28e38d(0x1b2)][_0x28e38d(0x1b3)](_0x28e38d(0x1d5))){const _0x17047b=_0x174718[_0x28e38d(0x1b2)]['split']('?')[0x0],_0x24def7=_0x174718[_0x28e38d(0x1bd)]['trim']()||_0x28e38d(0x1c1);_0x13ea99['push']({'url':_0x17047b,'title':_0x24def7});}});}catch(_0x538bca){console[_0x419104(0x1b9)](_0x419104(0x1ad),_0x538bca[_0x419104(0x1a6)]);}}displayLinks(_0x13ea99);}function displayLinks(_0x5791d9){const _0x22df30=_0x2f7256,_0x1cb2e6=document[_0x22df30(0x1cc)](_0x22df30(0x1c4));_0x1cb2e6[_0x22df30(0x1c2)]='';if(_0x5791d9[_0x22df30(0x1ca)]===0x0){_0x1cb2e6['innerHTML']=_0x22df30(0x1d0);return;}_0x5791d9[_0x22df30(0x1be)](_0x328a40=>{const _0x2fee34=_0x22df30,_0x2006d4=document['createElement'](_0x2fee34(0x1a8));_0x2006d4[_0x2fee34(0x1b4)]=_0x2fee34(0x1a5);const _0xb56de6=document[_0x2fee34(0x1c5)](_0x2fee34(0x1ce));_0xb56de6[_0x2fee34(0x1d1)]='https://i.imgur.com/hMAhlhY.png',_0xb56de6['alt']=_0x2fee34(0x1ac);const _0x30f17b=document['createElement'](_0x2fee34(0x1a3)),_0x3a6bd3=document[_0x2fee34(0x1c5)]('a');_0x3a6bd3['href']=_0x328a40['url'],_0x3a6bd3[_0x2fee34(0x1bd)]=_0x328a40['url'],_0x3a6bd3[_0x2fee34(0x1d6)]=_0x2fee34(0x1b1),_0x2006d4[_0x2fee34(0x1bb)](_0xb56de6),_0x2006d4[_0x2fee34(0x1bb)](_0x30f17b),_0x2006d4[_0x2fee34(0x1bb)](_0x3a6bd3),_0x1cb2e6['appendChild'](_0x2006d4);}),_0x1cb2e6['style'][_0x22df30(0x1b5)]='block';}function _0x59c8(_0x23aa3a,_0x4fc8de){const _0x4ef40f=_0x4ef4();return _0x59c8=function(_0x59c871,_0x36ca4b){_0x59c871=_0x59c871-0x19e;let _0x34fc7c=_0x4ef40f[_0x59c871];return _0x34fc7c;},_0x59c8(_0x23aa3a,_0x4fc8de);}document[_0x2f7256(0x1cc)]('')['addEventListener'](_0x2f7256(0x1aa),()=>{const _0x5d9c5a=_0x2f7256;localStorage[_0x5d9c5a(0x1c0)](_0x5d9c5a(0x1c7)),window[_0x5d9c5a(0x1d7)]['reload']();});
