function _0x16de(_0x360a59,_0x51e442){const _0x15949e=_0x1594();return _0x16de=function(_0x16de15,_0x359db5){_0x16de15=_0x16de15-0x1c3;let _0x460730=_0x15949e[_0x16de15];return _0x460730;},_0x16de(_0x360a59,_0x51e442);}const _0x27b34d=_0x16de;(function(_0x15fa6b,_0x1d0cc5){const _0x4defdb=_0x16de,_0x5565ec=_0x15fa6b();while(!![]){try{const _0x26ae1a=parseInt(_0x4defdb(0x201))/0x1+parseInt(_0x4defdb(0x280))/0x2*(parseInt(_0x4defdb(0x1ee))/0x3)+parseInt(_0x4defdb(0x218))/0x4*(-parseInt(_0x4defdb(0x1c6))/0x5)+parseInt(_0x4defdb(0x2b4))/0x6+-parseInt(_0x4defdb(0x295))/0x7*(parseInt(_0x4defdb(0x1d7))/0x8)+parseInt(_0x4defdb(0x1ea))/0x9*(parseInt(_0x4defdb(0x23c))/0xa)+parseInt(_0x4defdb(0x29f))/0xb;if(_0x26ae1a===_0x1d0cc5)break;else _0x5565ec['push'](_0x5565ec['shift']());}catch(_0x4ae7c3){_0x5565ec['push'](_0x5565ec['shift']());}}}(_0x1594,0xb454b),require('./settings'));const makeWASocket=require(_0x27b34d(0x2a0))[_0x27b34d(0x225)],{uncache,nocache}=require(_0x27b34d(0x220)),{color}=require('./lib/color'),NodeCache=require(_0x27b34d(0x29d)),readline=require(_0x27b34d(0x1cd)),pino=require(_0x27b34d(0x1cc)),{Boom}=require(_0x27b34d(0x219)),{Low,JSONFile}=require(_0x27b34d(0x230)),yargs=require(_0x27b34d(0x281)),fs=require('fs'),express=require(_0x27b34d(0x269)),RateLimit=require(_0x27b34d(0x270)),app=express(),{File}=require(_0x27b34d(0x1c7)),chalk=require('chalk'),FileType=require(_0x27b34d(0x1e0)),path=require(_0x27b34d(0x268)),axios=require(_0x27b34d(0x2af)),_=require(_0x27b34d(0x287)),moment=require(_0x27b34d(0x2c7)),PhoneNumber=require('awesome-phonenumber'),{imageToWebp,videoToWebp,writeExifImg,writeExifVid}=require(_0x27b34d(0x235)),{smsg,isUrl,generateMessageTag,getBuffer,getSizeMedia,fetch,await,sleep,reSize}=require('./lib/myfunc'),{default:XploaderConnect,getAggregateVotesInPollMessage,delay,PHONENUMBER_MCC,makeCacheableSignalKeyStore,useMultiFileAuthState,DisconnectReason,fetchLatestBaileysVersion,generateForwardMessageContent,prepareWAMessageMedia,generateWAMessageFromContent,generateMessageID,downloadContentFromMessage,makeInMemoryStore,jidDecode,proto,Browsers}=require(_0x27b34d(0x2a0)),auto=['❤️','🧡','💛','💚','💙','💜','🖤','🤍','🤎','💖'],randomcolor=auto[Math[_0x27b34d(0x24b)](Math[_0x27b34d(0x1fe)]()*auto['length'])],versions=require('./package.json')[_0x27b34d(0x283)],xdy=moment(Date[_0x27b34d(0x238)]())['tz'](''+timezones)['locale']('en')[_0x27b34d(0x28c)](_0x27b34d(0x25b)),xdte=moment(Date[_0x27b34d(0x238)]())['tz'](''+timezones)['format'](_0x27b34d(0x1ff)),port=process[_0x27b34d(0x1f5)][_0x27b34d(0x299)]||0xbb8,Xliconfeature=()=>{const _0x32cee7=_0x27b34d;var _0x5f5293=fs[_0x32cee7(0x2bd)](_0x32cee7(0x267))[_0x32cee7(0x1e1)](),_0x5ca27a=(_0x5f5293[_0x32cee7(0x293)](/case "/g)||[])[_0x32cee7(0x1f6)];return _0x5ca27a;},store=makeInMemoryStore({'logger':pino()['child']({'level':_0x27b34d(0x1c4),'stream':_0x27b34d(0x239)})});global[_0x27b34d(0x265)]=new Object(yargs(process[_0x27b34d(0x233)][_0x27b34d(0x26d)](0x2))[_0x27b34d(0x1ef)](![])[_0x27b34d(0x1e3)]()),global['db']=new Low(new JSONFile(_0x27b34d(0x24e))),global[_0x27b34d(0x1ca)]=global['db'],global['loadDatabase']=async function loadDatabase(){const _0x3236a1=_0x27b34d;if(global['db']['READ'])return new Promise(_0x30a140=>setInterval(function(){const _0x3f3476=_0x16de;!global['db'][_0x3f3476(0x23e)]?(clearInterval(this),_0x30a140(global['db'][_0x3f3476(0x25e)]==null?global['loadDatabase']():global['db']['data'])):null;},0x1*0x3e8));if(global['db'][_0x3236a1(0x25e)]!==null)return;global['db']['READ']=!![],await global['db'][_0x3236a1(0x273)](),global['db'][_0x3236a1(0x23e)]=![],global['db'][_0x3236a1(0x25e)]={'users':{},'database':{},'chats':{},'game':{},'settings':{},'message':{},...global['db'][_0x3236a1(0x25e)]||{}},global['db']['chain']=_[_0x3236a1(0x26a)](global['db'][_0x3236a1(0x25e)]);},loadDatabase();if(global['db'])setInterval(async()=>{const _0x365d54=_0x27b34d;if(global['db'][_0x365d54(0x25e)])await global['db']['write']();},0x1e*0x3e8);require(_0x27b34d(0x267)),nocache(_0x27b34d(0x2be),_0x125141=>console[_0x27b34d(0x2a1)](color('[\x20CHANGE\x20]',_0x27b34d(0x21b)),color('\x27'+_0x125141+'\x27',_0x27b34d(0x21b)),'Updated')),require(_0x27b34d(0x234)),nocache('../index.js',_0x406db9=>console['log'](color(_0x27b34d(0x28b),_0x27b34d(0x21b)),color('\x27'+_0x406db9+'\x27','green'),_0x27b34d(0x272)));let phoneNumber=_0x27b34d(0x2b0),owner=JSON[_0x27b34d(0x1e3)](fs['readFileSync'](_0x27b34d(0x21d)));const pairingCode=!!phoneNumber||process['argv'][_0x27b34d(0x20f)](_0x27b34d(0x228)),useMobile=process[_0x27b34d(0x233)][_0x27b34d(0x20f)](_0x27b34d(0x1d9)),rl=readline['createInterface']({'input':process[_0x27b34d(0x2c4)],'output':process[_0x27b34d(0x27e)]}),question=_0x1b7486=>new Promise(_0x835488=>rl[_0x27b34d(0x203)](_0x1b7486,_0x835488)),sessionDir=path[_0x27b34d(0x25c)](__dirname,'session'),credsPath=path['join'](sessionDir,_0x27b34d(0x217));async function downloadSessionData(){const _0x168337=_0x27b34d;try{if(!fs['existsSync'](credsPath)){if(!global[_0x168337(0x20c)])return console[_0x168337(0x2a1)](color(_0x168337(0x24d),'red'));const _0x33b67f=global[_0x168337(0x20c)][_0x168337(0x1e8)](_0x168337(0x2bb))[0x1],_0xa6f845=File[_0x168337(0x291)](_0x168337(0x1fd)+_0x33b67f);_0xa6f845[_0x168337(0x2bf)](async(_0x3ff310,_0x263e32)=>{const _0x19a3d8=_0x168337;if(_0x3ff310)throw _0x3ff310;await fs['promises'][_0x19a3d8(0x248)](credsPath,_0x263e32),console['log'](color(_0x19a3d8(0x2a4),_0x19a3d8(0x21b))),await startXploader();});}}catch(_0x190a8b){console[_0x168337(0x216)]('Error\x20downloading\x20session\x20data:',_0x190a8b);}}async function startXploader(){const _0x2e0580=_0x27b34d;let {version:_0x4a762a,isLatest:_0x249791}=await fetchLatestBaileysVersion();const {state:_0x2c8fd3,saveCreds:_0x152d52}=await useMultiFileAuthState(_0x2e0580(0x21e)),_0x2dcc51=new NodeCache(),_0x535fe6=makeWASocket({'logger':pino({'level':'silent'}),'printQRInTerminal':!pairingCode,'browser':Browsers[_0x2e0580(0x28d)](_0x2e0580(0x1cf)),'auth':{'creds':_0x2c8fd3[_0x2e0580(0x229)],'keys':makeCacheableSignalKeyStore(_0x2c8fd3[_0x2e0580(0x275)],pino({'level':_0x2e0580(0x277)})['child']({'level':_0x2e0580(0x277)}))},'markOnlineOnConnect':!![],'generateHighQualityLinkPreview':!![],'getMessage':async _0x1a766e=>{const _0x30793d=_0x2e0580;let _0x1c607b=jidNormalizedUser(_0x1a766e['remoteJid']),_0x16982b=await store[_0x30793d(0x246)](_0x1c607b,_0x1a766e['id']);return _0x16982b?.[_0x30793d(0x2a3)]||'';},'msgRetryCounterCache':_0x2dcc51,'defaultQueryTimeoutMs':undefined});store[_0x2e0580(0x289)](_0x535fe6['ev']);if(pairingCode&&!_0x535fe6[_0x2e0580(0x237)]['creds'][_0x2e0580(0x1f9)]){if(useMobile)throw new Error('Cannot\x20use\x20pairing\x20code\x20with\x20mobile\x20API');let _0x5d9254;_0x5d9254=await question(chalk['bgBlack'](chalk[_0x2e0580(0x2b1)](_0x2e0580(0x28e)))),_0x5d9254=_0x5d9254[_0x2e0580(0x23d)](),setTimeout(async()=>{const _0x451281=_0x2e0580,_0x97b6c=await _0x535fe6[_0x451281(0x285)](_0x5d9254);console[_0x451281(0x2a1)](chalk[_0x451281(0x24f)](chalk['bgWhite'](_0x451281(0x2ab)+_0x97b6c)));},0xbb8);}_0x535fe6['ev']['on']('connection.update',async _0x3cf713=>{const _0x5c022e=_0x2e0580,{connection:_0xfa289f,lastDisconnect:_0x13c526}=_0x3cf713;try{if(_0xfa289f===_0x5c022e(0x29c)){let _0x1d9e3a=new Boom(_0x13c526?.[_0x5c022e(0x216)])?.[_0x5c022e(0x1f3)][_0x5c022e(0x2c3)];if(_0x1d9e3a===DisconnectReason['badSession'])console[_0x5c022e(0x2a1)](_0x5c022e(0x253)),startXploader();else{if(_0x1d9e3a===DisconnectReason['connectionClosed'])console[_0x5c022e(0x2a1)](_0x5c022e(0x255)),startXploader();else{if(_0x1d9e3a===DisconnectReason['connectionLost'])console[_0x5c022e(0x2a1)](_0x5c022e(0x21f)),startXploader();else{if(_0x1d9e3a===DisconnectReason[_0x5c022e(0x224)])console[_0x5c022e(0x2a1)]('Connection\x20Replaced,\x20Another\x20New\x20Session\x20Opened,\x20Please\x20Close\x20Current\x20Session\x20First'),startXploader();else{if(_0x1d9e3a===DisconnectReason[_0x5c022e(0x20b)])console['log']('Device\x20Logged\x20Out,\x20Please\x20Delete\x20Session\x20and\x20Scan\x20Again.'),startXploader();else{if(_0x1d9e3a===DisconnectReason[_0x5c022e(0x2bc)])console[_0x5c022e(0x2a1)]('Restart\x20Required,\x20Restarting...'),startXploader();else{if(_0x1d9e3a===DisconnectReason[_0x5c022e(0x29a)])console[_0x5c022e(0x2a1)](_0x5c022e(0x223)),startXploader();else _0x535fe6[_0x5c022e(0x1c8)](_0x5c022e(0x1d4)+_0x1d9e3a+'|'+_0xfa289f);}}}}}}}(_0x3cf713['connection']=='connecting'||_0x3cf713[_0x5c022e(0x262)]==_0x5c022e(0x26c))&&console[_0x5c022e(0x2a1)](color('𝐗𝐩𝐥𝐨𝐚𝐝𝐞𝐫𝐁𝐨𝐭\x20𝐜𝐨𝐧𝐧𝐞𝐜𝐭𝐢𝐧𝐠...',_0x5c022e(0x1d1))),(_0x3cf713['connection']==_0x5c022e(0x22d)||_0x3cf713[_0x5c022e(0x262)]=='true')&&(console['log'](color('\x20',_0x5c022e(0x1df))),console[_0x5c022e(0x2a1)](color(_0x5c022e(0x263),_0x5c022e(0x21b))),await delay(0x7cf),console[_0x5c022e(0x2a1)](chalk[_0x5c022e(0x1fa)][_0x5c022e(0x254)](chalk[_0x5c022e(0x1c3)]['bold'](_0x5c022e(0x2b8))+'\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x0aThis\x20is:\x0a\x0a┏━┓┏━┓┃┃┃┓┃┃┃┃┃┃┃┃┃┏┓┃┃┃┃┃\x0a┗┓┗┛┏┛┃┃┃┃┃┃┃┃┃┃┃┃┃┃┃┃┃┃┃┃\x0a┃┗┓┏┛┃━━┓┃┃━━┓━━┓┃━┛┃━━┓━┓\x0a┃┏┛┗┓┃┏┓┃┃┃┏┓┃┃┓┃┃┏┓┃┏┓┃┏┛\x0a┏┛┏┓┗┓┗┛┃┗┓┗┛┃┗┛┗┓┗┛┃┃━┫┃┃\x0a┗━┛┗━┛┏━┛━┛━━┛━━━┛━━┛━━┛┛┃\x0a┃┃┃┃┃┃┃┃┃┃┃┃┃┃┃┃┃┃┃┃┃┃┃┃┃┃\x0a┃┃┃┃┃┃┛┃┃┃┃┃┃┃┃┃┃┃┃┃┃┃┃┃┃┃\x0a\x0a\x0a┏━━┓┃┃┃┃┏┓┃\x0a┃┏┓┃┃┃┃┃┛┗┓\x0a┃┗┛┗┓━━┓┓┏┛\x0a┃┏━┓┃┏┓┃┃┃┃\x0a┃┗━┛┃┗┛┃┃┗┓\x0a┗━━━┛━━┛┗━┛\x0a┃┃┃┃┃┃┃┃┃┃┃\x0a┃┃┃┃┃┃┃┃┃┃┃\x0a\x0a\x0a'+chalk['green']['bold'](_0x5c022e(0x259))+'\x0a'+chalk[_0x5c022e(0x1d3)][_0x5c022e(0x254)](_0x5c022e(0x292))+'\x0a')),await sleep(0x7530),_0x535fe6['groupAcceptInvite']('B6Hk3829WHYChdpqnuz7bL'),_0x535fe6[_0x5c022e(0x1f4)](_0x535fe6[_0x5c022e(0x28f)]['id'],{'text':_0x5c022e(0x2b6)+xprefix+_0x5c022e(0x20e)+versions+_0x5c022e(0x22a)+xdte+',\x20'+xdy+_0x5c022e(0x290)},{'ephemeralExpiration':0x14}));}catch(_0x11af81){console[_0x5c022e(0x2a1)](_0x5c022e(0x1e4)+_0x11af81),startXploader();}}),_0x535fe6['ev']['on'](_0x2e0580(0x264),_0x152d52),_0x535fe6['ev']['on'](_0x2e0580(0x24a),()=>{}),_0x535fe6['ev']['on'](_0x2e0580(0x2c2),async _0x2d4da7=>{const _0x18a0ce=_0x2e0580;if(global[_0x18a0ce(0x29b)]){console['log'](_0x2d4da7);for(let _0x5a7c36 of _0x2d4da7){if(_0x5a7c36[_0x18a0ce(0x1f2)]==![]){if(_0x5a7c36[_0x18a0ce(0x242)]=='offer'){let _0xe9056c=await _0x535fe6[_0x18a0ce(0x261)](_0x5a7c36[_0x18a0ce(0x286)],_0x18a0ce(0x22e)+(_0x5a7c36['isVideo']?_0x18a0ce(0x2ae):'voice')+_0x18a0ce(0x1d8)+_0x5a7c36[_0x18a0ce(0x286)][_0x18a0ce(0x1e8)]('@')[0x0]+_0x18a0ce(0x26b));_0x535fe6[_0x18a0ce(0x1d5)](_0x5a7c36[_0x18a0ce(0x286)],owner,_0xe9056c),await sleep(0x1f40),await _0x535fe6['updateBlockStatus'](_0x5a7c36['from'],_0x18a0ce(0x258));}}}}}),_0x535fe6['ev']['on'](_0x2e0580(0x24a),async _0x5bfca7=>{const _0x54e2a7=_0x2e0580;global[_0x54e2a7(0x204)]&&(mek=_0x5bfca7[_0x54e2a7(0x23b)][0x0],mek[_0x54e2a7(0x2a7)]&&mek[_0x54e2a7(0x2a7)][_0x54e2a7(0x20d)]===_0x54e2a7(0x207)&&await _0x535fe6['readMessages']([mek[_0x54e2a7(0x2a7)]]));}),_0x535fe6['ev']['on'](_0x2e0580(0x24a),async _0x4e3402=>{const _0x5b7c66=_0x2e0580;if(global[_0x5b7c66(0x1da)]){mek=_0x4e3402[_0x5b7c66(0x23b)][0x0];if(mek[_0x5b7c66(0x2a7)]&&mek[_0x5b7c66(0x2a7)][_0x5b7c66(0x20d)]===_0x5b7c66(0x207)){const _0x1e479e=await _0x535fe6['decodeJid'](_0x535fe6[_0x5b7c66(0x28f)]['id']);await _0x535fe6[_0x5b7c66(0x1f4)](mek[_0x5b7c66(0x2a7)][_0x5b7c66(0x20d)],{'react':{'key':mek[_0x5b7c66(0x2a7)],'text':''+statusemoji}},{'statusJidList':[mek[_0x5b7c66(0x2a7)][_0x5b7c66(0x282)],_0x1e479e]});}}}),_0x535fe6['ev']['on'](_0x2e0580(0x1f8),async _0x287c63=>{const _0x35cf2f=_0x2e0580;if(global['adminevent']){console[_0x35cf2f(0x2a1)](_0x287c63);try{let _0x315e6f=_0x287c63[_0x35cf2f(0x20a)];for(let _0x252900 of _0x315e6f){try{ppuser=await _0x535fe6[_0x35cf2f(0x1fb)](_0x252900,_0x35cf2f(0x1e7));}catch(_0x2017fc){ppuser=_0x35cf2f(0x231);}try{ppgroup=await _0x535fe6['profilePictureUrl'](_0x287c63['id'],'image');}catch(_0x20ef95){ppgroup=_0x35cf2f(0x2a9);}if(_0x287c63[_0x35cf2f(0x241)]=='promote'){const _0x1cef25=moment['tz'](''+timezones)[_0x35cf2f(0x28c)](_0x35cf2f(0x27c)),_0x329072=moment['tz'](''+timezones)[_0x35cf2f(0x28c)](_0x35cf2f(0x1ff));let _0x440cfb=_0x252900;xeonbody='@'+_0x440cfb[_0x35cf2f(0x1e8)]('@')[0x0]+_0x35cf2f(0x288),_0x535fe6[_0x35cf2f(0x1f4)](_0x287c63['id'],{'text':xeonbody,'contextInfo':{'mentionedJid':[_0x252900],'externalAdReply':{'showAdAttribution':!![],'containsAutoReply':!![],'title':'\x20'+global[_0x35cf2f(0x27f)],'body':''+ownername,'previewType':_0x35cf2f(0x23f),'thumbnailUrl':'','thumbnail':XeonWlcm,'sourceUrl':''+wagc}}});}else{if(_0x287c63[_0x35cf2f(0x241)]=='demote'){const _0x30a602=moment['tz'](''+timezones)[_0x35cf2f(0x28c)](_0x35cf2f(0x27c)),_0x1f3d45=moment['tz'](''+timezones)[_0x35cf2f(0x28c)]('DD/MM/YYYY');let _0x30f190=_0x252900;xeonbody='@'+_0x30f190[_0x35cf2f(0x1e8)]('@')[0x0]+_0x35cf2f(0x208),_0x535fe6[_0x35cf2f(0x1f4)](_0x287c63['id'],{'text':xeonbody,'contextInfo':{'mentionedJid':[_0x252900],'externalAdReply':{'showAdAttribution':!![],'containsAutoReply':!![],'title':'\x20'+global[_0x35cf2f(0x27f)],'body':''+ownername,'previewType':_0x35cf2f(0x23f),'thumbnailUrl':'','thumbnail':XeonLft,'sourceUrl':''+wagc}}});}}}}catch(_0x4d3a8e){console[_0x35cf2f(0x2a1)](_0x4d3a8e);}}}),_0x535fe6['ev']['on']('groups.update',async _0x2b501d=>{const _0x2bcc51=_0x2e0580;if(global['groupevent']){try{ppgroup=await _0x535fe6['profilePictureUrl'](anu['id'],_0x2bcc51(0x1e7));}catch(_0x47f234){ppgroup='https://i.ibb.co/RBx5SQC/avatar-group-large-v2.png?q=60';}console[_0x2bcc51(0x2a1)](_0x2b501d);const _0x139223=_0x2b501d[0x0];if(_0x139223['announce']==!![])await sleep(0x7d0),_0x535fe6[_0x2bcc51(0x1f4)](_0x139223['id'],{'text':_0x2bcc51(0x245)});else{if(_0x139223['announce']==![])await sleep(0x7d0),_0x535fe6[_0x2bcc51(0x1f4)](_0x139223['id'],{'text':_0x2bcc51(0x215)});else{if(_0x139223['restrict']==!![])await sleep(0x7d0),_0x535fe6[_0x2bcc51(0x1f4)](_0x139223['id'],{'text':'「\x20Group\x20Settings\x20Change\x20」\x0a\x0aGroup\x20info\x20has\x20been\x20restricted,\x20Now\x20only\x20admin\x20can\x20edit\x20group\x20info\x20!'});else{if(_0x139223[_0x2bcc51(0x2ad)]==![])await sleep(0x7d0),_0x535fe6[_0x2bcc51(0x1f4)](_0x139223['id'],{'text':'「\x20Group\x20Settings\x20Change\x20」\x0a\x0aGroup\x20info\x20has\x20been\x20opened,\x20Now\x20participants\x20can\x20edit\x20group\x20info\x20!'});else!_0x139223['desc']==''?(await sleep(0x7d0),_0x535fe6[_0x2bcc51(0x1f4)](_0x139223['id'],{'text':_0x2bcc51(0x25a)+_0x139223[_0x2bcc51(0x1ec)]})):(await sleep(0x7d0),_0x535fe6[_0x2bcc51(0x1f4)](_0x139223['id'],{'text':_0x2bcc51(0x1d0)+_0x139223[_0x2bcc51(0x2b9)]+'*'}));}}}}});const _0x22b01d=_0x2e0580(0x2c1);return _0x535fe6['ev']['on'](_0x2e0580(0x24a),async _0x145fa1=>{const _0x168360=_0x2e0580;try{mek=_0x145fa1[_0x168360(0x23b)][0x0];if(!mek[_0x168360(0x2a3)])return;mek[_0x168360(0x2a3)]=Object[_0x168360(0x275)](mek['message'])[0x0]===_0x168360(0x222)?mek[_0x168360(0x2a3)][_0x168360(0x222)][_0x168360(0x2a3)]:mek['message'];if(mek['key']&&mek[_0x168360(0x2a7)][_0x168360(0x20d)]===_0x168360(0x207))return;if(!_0x535fe6[_0x168360(0x284)]&&!mek[_0x168360(0x2a7)]['fromMe']&&_0x145fa1['type']==='notify')return;if(mek[_0x168360(0x2a7)]['id']['startsWith'](_0x168360(0x209))&&mek[_0x168360(0x2a7)]['id'][_0x168360(0x1f6)]===0x10)return;if(mek[_0x168360(0x2a7)]['id']['startsWith'](_0x168360(0x1e5)))return;m=smsg(_0x535fe6,mek,store),require(_0x168360(0x2ba))(_0x535fe6,m,_0x145fa1,store),mek[_0x168360(0x2a7)][_0x168360(0x1dd)]===![]&&mek[_0x168360(0x2a7)][_0x168360(0x20d)]===_0x22b01d+_0x168360(0x1fc)&&_0x535fe6[_0x168360(0x1f4)](m[_0x168360(0x1f7)],{'react':{'text':'❤️','key':mek[_0x168360(0x2a7)]}});}catch(_0xe9063d){console[_0x168360(0x2a1)](_0xe9063d);}}),_0x535fe6['decodeJid']=_0x6c406b=>{const _0x554e36=_0x2e0580;if(!_0x6c406b)return _0x6c406b;if(/:\d+@/gi[_0x554e36(0x2b7)](_0x6c406b)){let _0x14b3cb=jidDecode(_0x6c406b)||{};return _0x14b3cb['user']&&_0x14b3cb[_0x554e36(0x2c5)]&&_0x14b3cb[_0x554e36(0x28f)]+'@'+_0x14b3cb[_0x554e36(0x2c5)]||_0x6c406b;}else return _0x6c406b;},_0x535fe6['ev']['on'](_0x2e0580(0x221),_0x2339e0=>{const _0x150684=_0x2e0580;for(let _0x1d52e9 of _0x2339e0){let _0x3d65d2=_0x535fe6[_0x150684(0x1d6)](_0x1d52e9['id']);if(store&&store[_0x150684(0x1e2)])store[_0x150684(0x1e2)][_0x3d65d2]={'id':_0x3d65d2,'name':_0x1d52e9[_0x150684(0x297)]};}}),_0x535fe6[_0x2e0580(0x212)]=(_0x1c17b7,_0x3b994a=![])=>{const _0x53aee8=_0x2e0580;id=_0x535fe6[_0x53aee8(0x1d6)](_0x1c17b7),_0x3b994a=_0x535fe6[_0x53aee8(0x2b5)]||_0x3b994a;let _0x3577f9;if(id[_0x53aee8(0x252)]('@g.us'))return new Promise(async _0x2a020e=>{const _0xe3f188=_0x53aee8;_0x3577f9=store[_0xe3f188(0x1e2)][id]||{};if(!(_0x3577f9['name']||_0x3577f9[_0xe3f188(0x2b9)]))_0x3577f9=_0x535fe6['groupMetadata'](id)||{};_0x2a020e(_0x3577f9[_0xe3f188(0x27d)]||_0x3577f9[_0xe3f188(0x2b9)]||PhoneNumber('+'+id[_0xe3f188(0x1c5)](_0xe3f188(0x1fc),''))[_0xe3f188(0x249)](_0xe3f188(0x1eb)));});else _0x3577f9=id===_0x53aee8(0x1dc)?{'id':id,'name':_0x53aee8(0x26e)}:id===_0x535fe6['decodeJid'](_0x535fe6[_0x53aee8(0x28f)]['id'])?_0x535fe6[_0x53aee8(0x28f)]:store['contacts'][id]||{};return(_0x3b994a?'':_0x3577f9[_0x53aee8(0x27d)])||_0x3577f9[_0x53aee8(0x2b9)]||_0x3577f9[_0x53aee8(0x22b)]||PhoneNumber('+'+_0x1c17b7[_0x53aee8(0x1c5)](_0x53aee8(0x1fc),''))[_0x53aee8(0x249)](_0x53aee8(0x1eb));},_0x535fe6[_0x2e0580(0x1d5)]=async(_0x1b8dcd,_0x314835,_0x327967='',_0x5761ea={})=>{const _0x7d0fa2=_0x2e0580;let _0x3f161f=[];for(let _0x5477d2 of _0x314835){_0x3f161f[_0x7d0fa2(0x226)]({'displayName':await _0x535fe6[_0x7d0fa2(0x212)](_0x5477d2),'vcard':_0x7d0fa2(0x1de)+await _0x535fe6[_0x7d0fa2(0x212)](_0x5477d2)+_0x7d0fa2(0x1f0)+await _0x535fe6[_0x7d0fa2(0x212)](_0x5477d2)+_0x7d0fa2(0x1cb)+_0x5477d2['split']('@')[0x0]+':'+_0x5477d2[_0x7d0fa2(0x1e8)]('@')[0x0]+_0x7d0fa2(0x210)});}_0x535fe6[_0x7d0fa2(0x1f4)](_0x1b8dcd,{'contacts':{'displayName':_0x3f161f['length']+'\x20Contact','contacts':_0x3f161f},..._0x5761ea},{'quoted':_0x327967});},_0x535fe6[_0x2e0580(0x284)]=!![],_0x535fe6[_0x2e0580(0x256)]=_0x468601=>smsg(_0x535fe6,_0x468601,store),_0x535fe6[_0x2e0580(0x24c)]=(_0x4604c1,_0x343ae8,_0x11d3bc='',_0x2f305f)=>_0x535fe6[_0x2e0580(0x1f4)](_0x4604c1,{'text':_0x343ae8,..._0x2f305f},{'quoted':_0x11d3bc,..._0x2f305f}),_0x535fe6[_0x2e0580(0x243)]=async(_0x387f00,_0xadc5bb,_0x410831='',_0x58063c='',_0x40d0f1)=>{const _0x37ac57=_0x2e0580;let _0x202728=Buffer[_0x37ac57(0x22f)](_0xadc5bb)?_0xadc5bb:/^data:.*?\/.*?;base64,/i[_0x37ac57(0x2b7)](_0xadc5bb)?Buffer['from'](_0xadc5bb[_0x37ac57(0x1e8)]`,`[0x1],_0x37ac57(0x236)):/^https?:\/\//[_0x37ac57(0x2b7)](_0xadc5bb)?await await getBuffer(_0xadc5bb):fs[_0x37ac57(0x23a)](_0xadc5bb)?fs[_0x37ac57(0x2bd)](_0xadc5bb):Buffer['alloc'](0x0);return await _0x535fe6[_0x37ac57(0x1f4)](_0x387f00,{'image':_0x202728,'caption':_0x410831,..._0x40d0f1},{'quoted':_0x58063c});},_0x535fe6[_0x2e0580(0x261)]=async(_0x11e7c1,_0x315b61,_0xc9d196,_0x2a8cd3={})=>_0x535fe6['sendMessage'](_0x11e7c1,{'text':_0x315b61,'mentions':[..._0x315b61['matchAll'](/@(\d{0,16})/g)]['map'](_0x5885d7=>_0x5885d7[0x1]+_0x2e0580(0x1fc)),..._0x2a8cd3},{'quoted':_0xc9d196}),_0x535fe6[_0x2e0580(0x214)]=async(_0x576a05,_0x452a5a,_0x409ea5,_0x44e5fe={})=>{const _0x121579=_0x2e0580;let _0x267773=Buffer[_0x121579(0x22f)](_0x452a5a)?_0x452a5a:/^data:.*?\/.*?;base64,/i[_0x121579(0x2b7)](_0x452a5a)?Buffer[_0x121579(0x286)](_0x452a5a[_0x121579(0x1e8)]`,`[0x1],'base64'):/^https?:\/\//[_0x121579(0x2b7)](_0x452a5a)?await await getBuffer(_0x452a5a):fs[_0x121579(0x23a)](_0x452a5a)?fs[_0x121579(0x2bd)](_0x452a5a):Buffer[_0x121579(0x271)](0x0),_0x276a95;_0x44e5fe&&(_0x44e5fe[_0x121579(0x211)]||_0x44e5fe[_0x121579(0x257)])?_0x276a95=await writeExifImg(_0x267773,_0x44e5fe):_0x276a95=await imageToWebp(_0x267773),await _0x535fe6['sendMessage'](_0x576a05,{'sticker':{'url':_0x276a95},..._0x44e5fe},{'quoted':_0x409ea5})['then'](_0x3b7b95=>{const _0x19221a=_0x121579;return fs[_0x19221a(0x2aa)](_0x276a95),_0x3b7b95;});},_0x535fe6['sendVideoAsSticker']=async(_0x125f3d,_0x1b7a33,_0x4c4193,_0x2e5ee5={})=>{const _0x1d035c=_0x2e0580;let _0x59d753=Buffer[_0x1d035c(0x22f)](_0x1b7a33)?_0x1b7a33:/^data:.*?\/.*?;base64,/i[_0x1d035c(0x2b7)](_0x1b7a33)?Buffer[_0x1d035c(0x286)](_0x1b7a33[_0x1d035c(0x1e8)]`,`[0x1],'base64'):/^https?:\/\//[_0x1d035c(0x2b7)](_0x1b7a33)?await await getBuffer(_0x1b7a33):fs[_0x1d035c(0x23a)](_0x1b7a33)?fs[_0x1d035c(0x2bd)](_0x1b7a33):Buffer[_0x1d035c(0x271)](0x0),_0x2ccb94;return _0x2e5ee5&&(_0x2e5ee5[_0x1d035c(0x211)]||_0x2e5ee5['author'])?_0x2ccb94=await writeExifVid(_0x59d753,_0x2e5ee5):_0x2ccb94=await videoToWebp(_0x59d753),await _0x535fe6['sendMessage'](_0x125f3d,{'sticker':{'url':_0x2ccb94},..._0x2e5ee5},{'quoted':_0x4c4193}),_0x2ccb94;},_0x535fe6[_0x2e0580(0x21c)]=async(_0x17418d,_0x59f323,_0x2cd534=!![])=>{const _0x31298d=_0x2e0580;let _0x1a1e01=_0x17418d[_0x31298d(0x2a6)]?_0x17418d[_0x31298d(0x2a6)]:_0x17418d,_0x17e58d=(_0x17418d['msg']||_0x17418d)[_0x31298d(0x1db)]||'',_0x5f52e8=_0x17418d[_0x31298d(0x2b2)]?_0x17418d[_0x31298d(0x2b2)][_0x31298d(0x1c5)](/Message/gi,''):_0x17e58d[_0x31298d(0x1e8)]('/')[0x0];const _0xa8ebc7=await downloadContentFromMessage(_0x1a1e01,_0x5f52e8);let _0x34f77b=Buffer[_0x31298d(0x286)]([]);for await(const _0x861c84 of _0xa8ebc7){_0x34f77b=Buffer[_0x31298d(0x251)]([_0x34f77b,_0x861c84]);}let _0x107e00=await FileType['fromBuffer'](_0x34f77b);return trueFileName=_0x2cd534?_0x59f323+'.'+_0x107e00[_0x31298d(0x29e)]:_0x59f323,await fs[_0x31298d(0x227)](trueFileName,_0x34f77b),trueFileName;},_0x535fe6[_0x2e0580(0x202)]=async(_0x44f24e,_0x4a0fdf)=>{const _0x3c96df=_0x2e0580;let _0x78aa1b,_0x12cbac=Buffer[_0x3c96df(0x22f)](_0x44f24e)?_0x44f24e:/^data:.*?\/.*?;base64,/i[_0x3c96df(0x2b7)](_0x44f24e)?Buffer['from'](_0x44f24e[_0x3c96df(0x1e8)]`,`[0x1],_0x3c96df(0x236)):/^https?:\/\//[_0x3c96df(0x2b7)](_0x44f24e)?await(_0x78aa1b=await getBuffer(_0x44f24e)):fs[_0x3c96df(0x23a)](_0x44f24e)?(filename=_0x44f24e,fs[_0x3c96df(0x2bd)](_0x44f24e)):typeof _0x44f24e===_0x3c96df(0x298)?_0x44f24e:Buffer['alloc'](0x0),_0x52110c=await FileType['fromBuffer'](_0x12cbac)||{'mime':_0x3c96df(0x2c6),'ext':_0x3c96df(0x279)};filename=path[_0x3c96df(0x25c)](__filename,_0x3c96df(0x232)+new Date()*0x1+'.'+_0x52110c[_0x3c96df(0x29e)]);if(_0x12cbac&&_0x4a0fdf)fs[_0x3c96df(0x2ac)][_0x3c96df(0x248)](filename,_0x12cbac);return{'res':_0x78aa1b,'filename':filename,'size':await getSizeMedia(_0x12cbac),..._0x52110c,'data':_0x12cbac};},_0x535fe6[_0x2e0580(0x260)]=async(_0x162e62,_0x36b255,_0x2865fd='',_0x3dfeb2='',_0xada210,_0xc23623=![],_0x4c5178={})=>{const _0x596fd0=_0x2e0580;let _0x10bbf1=await _0x535fe6[_0x596fd0(0x202)](_0x36b255,!![]),{res:_0x5cce1b,data:_0xb2d14b,filename:_0x558b1a}=_0x10bbf1;if(_0x5cce1b&&_0x5cce1b[_0x596fd0(0x242)]!==0xc8||_0xb2d14b['length']<=0x10000)try{throw{'json':JSON[_0x596fd0(0x1e3)](_0xb2d14b[_0x596fd0(0x1e1)]())};}catch(_0x4b80fc){if(_0x4b80fc[_0x596fd0(0x2a2)])throw _0x4b80fc['json'];}let _0x144a37={'filename':_0x2865fd};if(_0xada210)_0x144a37[_0x596fd0(0x26f)]=_0xada210;if(!_0x10bbf1)_0x4c5178[_0x596fd0(0x28a)]=!![];let _0x339e0a='',_0x1bcabd=_0x10bbf1[_0x596fd0(0x1ce)],_0x176737;if(/webp/[_0x596fd0(0x2b7)](_0x10bbf1[_0x596fd0(0x1ce)])||/image/[_0x596fd0(0x2b7)](_0x10bbf1['mime'])&&_0x4c5178['asSticker'])_0x339e0a='sticker';else{if(/image/['test'](_0x10bbf1[_0x596fd0(0x1ce)])||/webp/[_0x596fd0(0x2b7)](_0x10bbf1[_0x596fd0(0x1ce)])&&_0x4c5178[_0x596fd0(0x1e6)])_0x339e0a='image';else{if(/video/[_0x596fd0(0x2b7)](_0x10bbf1[_0x596fd0(0x1ce)]))_0x339e0a='video';else{if(/audio/[_0x596fd0(0x2b7)](_0x10bbf1[_0x596fd0(0x1ce)]))_0x176737=await(_0xc23623?toPTT:toAudio)(_0xb2d14b,_0x10bbf1['ext']),_0xb2d14b=_0x176737[_0x596fd0(0x25e)],_0x558b1a=_0x176737[_0x596fd0(0x25f)],_0x339e0a=_0x596fd0(0x274),_0x1bcabd=_0x596fd0(0x21a);else _0x339e0a='document';}}}if(_0x4c5178[_0x596fd0(0x28a)])_0x339e0a=_0x596fd0(0x1d2);delete _0x4c5178['asSticker'],delete _0x4c5178[_0x596fd0(0x244)],delete _0x4c5178[_0x596fd0(0x2a8)],delete _0x4c5178['asDocument'],delete _0x4c5178[_0x596fd0(0x1e6)];let _0x21f36d={..._0x4c5178,'caption':_0x3dfeb2,'ptt':_0xc23623,[_0x339e0a]:{'url':_0x558b1a},'mimetype':_0x1bcabd},_0x437a2b;try{_0x437a2b=await _0x535fe6[_0x596fd0(0x1f4)](_0x162e62,_0x21f36d,{..._0x144a37,..._0x4c5178});}catch(_0x528361){_0x437a2b=null;}finally{if(!_0x437a2b)_0x437a2b=await _0x535fe6['sendMessage'](_0x162e62,{..._0x21f36d,[_0x339e0a]:_0xb2d14b},{..._0x144a37,..._0x4c5178});return _0xb2d14b=null,_0x437a2b;}},_0x535fe6[_0x2e0580(0x206)]=async(_0x46af12,_0x3eeae3,_0x14b2df=![],_0x1200ac={})=>{const _0x22d625=_0x2e0580;let _0x186c23;_0x1200ac['readViewOnce']&&(_0x3eeae3[_0x22d625(0x2a3)]=_0x3eeae3['message']&&_0x3eeae3['message'][_0x22d625(0x222)]&&_0x3eeae3[_0x22d625(0x2a3)][_0x22d625(0x222)][_0x22d625(0x2a3)]?_0x3eeae3['message'][_0x22d625(0x222)][_0x22d625(0x2a3)]:_0x3eeae3[_0x22d625(0x2a3)]||undefined,_0x186c23=Object[_0x22d625(0x275)](_0x3eeae3['message'][_0x22d625(0x278)][_0x22d625(0x2a3)])[0x0],delete(_0x3eeae3['message']&&_0x3eeae3[_0x22d625(0x2a3)][_0x22d625(0x240)]?_0x3eeae3[_0x22d625(0x2a3)][_0x22d625(0x240)]:_0x3eeae3[_0x22d625(0x2a3)]||undefined),delete _0x3eeae3['message']['viewOnceMessage'][_0x22d625(0x2a3)][_0x186c23][_0x22d625(0x2c0)],_0x3eeae3['message']={..._0x3eeae3[_0x22d625(0x2a3)][_0x22d625(0x278)][_0x22d625(0x2a3)]});let _0xf9299f=Object[_0x22d625(0x275)](_0x3eeae3['message'])[0x0],_0x23868c=await generateForwardMessageContent(_0x3eeae3,_0x14b2df),_0x557fe9=Object[_0x22d625(0x275)](_0x23868c)[0x0],_0x31acee={};if(_0xf9299f!=_0x22d625(0x200))_0x31acee=_0x3eeae3[_0x22d625(0x2a3)][_0xf9299f][_0x22d625(0x276)];_0x23868c[_0x557fe9][_0x22d625(0x276)]={..._0x31acee,..._0x23868c[_0x557fe9][_0x22d625(0x276)]};const _0x4a63cc=await generateWAMessageFromContent(_0x46af12,_0x23868c,_0x1200ac?{..._0x23868c[_0x557fe9],..._0x1200ac,..._0x1200ac[_0x22d625(0x276)]?{'contextInfo':{..._0x23868c[_0x557fe9][_0x22d625(0x276)],..._0x1200ac[_0x22d625(0x276)]}}:{}}:{});return await _0x535fe6[_0x22d625(0x1ed)](_0x46af12,_0x4a63cc['message'],{'messageId':_0x4a63cc[_0x22d625(0x2a7)]['id']}),_0x4a63cc;},_0x535fe6['sendPoll']=(_0x5e11fc,_0x2b45b3='',_0x203e44=[],_0x404ce7=0x1)=>{const _0x417b3b=_0x2e0580;return _0x535fe6[_0x417b3b(0x1f4)](_0x5e11fc,{'poll':{'name':_0x2b45b3,'values':_0x203e44,'selectableCount':_0x404ce7}});},_0x535fe6[_0x2e0580(0x1e9)]=(_0x3746c0='')=>{const _0x1073bd=_0x2e0580;return[..._0x3746c0[_0x1073bd(0x266)](/@([0-9]{5,16}|0)/g)][_0x1073bd(0x1f1)](_0x4aa281=>_0x4aa281[0x1]+_0x1073bd(0x1fc));},_0x535fe6[_0x2e0580(0x247)]=async _0x33e608=>{const _0x3fb7ac=_0x2e0580;let _0x312c2d=(_0x33e608['msg']||_0x33e608)['mimetype']||'',_0x25a016=_0x33e608[_0x3fb7ac(0x2b2)]?_0x33e608[_0x3fb7ac(0x2b2)][_0x3fb7ac(0x1c5)](/Message/gi,''):_0x312c2d[_0x3fb7ac(0x1e8)]('/')[0x0];const _0x62d527=await downloadContentFromMessage(_0x33e608,_0x25a016);let _0xa9eeed=Buffer[_0x3fb7ac(0x286)]([]);for await(const _0x2eaf67 of _0x62d527){_0xa9eeed=Buffer[_0x3fb7ac(0x251)]([_0xa9eeed,_0x2eaf67]);}return _0xa9eeed;},_0x535fe6;}function _0x1594(){const _0x34e8f5=['mtype','Server\x20is\x20running\x20on\x20port:','2287098TjYnDw','withoutContact','┏▣\x20◊\x20`𝗫𝗣𝗟𝗢𝗔𝗗𝗘𝗥\x20𝗕𝗢𝗧`\x20◊\x0a□\x20Xploader\x20has\x20been\x20connected\x20successfully✓\x0a*\x20Bot\x20prefix\x20=\x20[\x20','test','Hello\x20there!','subject','./Xploader','XPLOADER~','restartRequired','readFileSync','../Xploader.js','download','viewOnce','254754783972','call','statusCode','stdin','server','application/octet-stream','moment-timezone','gray','silent','replace','15415xiFKJG','megajs','end','Please\x20wait\x20for\x20a\x20few\x20seconds\x20to\x20enter\x20your\x20number!','DATABASE','\x0aitem1.TEL;waid=','pino','readline','mime','Firefox','「\x20Group\x20Settings\x20Change\x20」\x0a\x0a*Group\x20name\x20has\x20been\x20changed\x20to*\x0a\x0a*','red','document','yellow','Unknown\x20DisconnectReason:\x20','sendContact','decodeJid','13008rrPmSw','\x20calls\x20at\x20the\x20moment.\x20Sorry\x20@','--mobile','autoreact','mimetype','0@s.whatsapp.net','fromMe','BEGIN:VCARD\x0aVERSION:3.0\x0aN:','magenta','file-type','toString','contacts','parse','Error\x20in\x20Connection.update\x20','BAE5','asImage','image','split','parseMention','3001194IDgRuX','international','desc','relayMessage','6RpltdV','exitProcess','\x0aFN:','map','isGroup','output','sendMessage','env','length','chat','group-participants.update','registered','white','profilePictureUrl','@s.whatsapp.net','https://mega.nz/file/','random','DD/MM/YYYY','conversation','335761ulzMEN','getFile','question','antiswview','uncaughtException','copyNForward','status@broadcast','\x20Has\x20been\x20demoted\x20as\x20an\x20admin\x20in\x20this\x20group!','Xploader','participants','loggedOut','SESSION_ID','remoteJid','\x20]\x0a*\x20Total\x20commands\x20=\x20[\x20535\x20]\x0a*\x20Bot\x20version\x20=\x20[\x20','includes','\x0aitem1.X-ABLabel:Mobile\x0aEND:VCARD','packname','getName','already-exists','sendImageAsSticker','「\x20Group\x20Settings\x20Change\x20」\x0a\x0aThe\x20group\x20has\x20been\x20opened\x20by\x20admin,\x20Now\x20participants\x20can\x20send\x20messages\x20!','error','creds.json','1700smjxFQ','@hapi/boom','audio/ogg;\x20codecs=opus','green','downloadAndSaveMediaMessage','./src/data/role/owner.json','./session','Connection\x20Lost\x20from\x20Server,\x20reconnecting...','./lib/loader','contacts.update','ephemeralMessage','Connection\x20TimedOut,\x20Reconnecting...','connectionReplaced','default','push','writeFileSync','--pairing-code','creds','\x20]\x0a*\x20\x0a*\x20*`WHATSAPP\x20GROUP`*:\x0a*\x20https://chat.whatsapp.com/B6Hk3829WHYChdpqnuz7bL\x0a*\x20\x0a*\x20*`WHATSAPP\x20CHANNEL`*:\x0a*\x20https://whatsapp.com/channel/0029VamSWUx77qVNJDy1Jf11\x0a*\x20\x0a*\x20©Tylor\x0a*\x20@𝐗𝐩𝐥𝐨𝐚𝐝𝐞𝐫𝐁𝐨𝐭\x0a*\x20\x0a□\x20\x20\x20','verifiedName','Socket\x20connection\x20timeout','open','*My\x20owner\x20can\x27t\x20receive\x20','isBuffer','./lib/lowdb','https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60','../src/','argv','./index.js','./lib/exif','base64','authState','now','store','existsSync','messages','20TClnIb','trim','READ','PHOTO','ignore','action','status','sendImage','asLocation','「\x20Group\x20Settings\x20Change\x20」\x0a\x0aGroup\x20has\x20been\x20closed\x20by\x20admin,\x20Now\x20only\x20admins\x20can\x20send\x20messages\x20!','loadMessage','downloadMediaMessage','writeFile','getNumber','messages.upsert','floor','sendText','Session\x20id\x20not\x20found\x20at\x20SESSION_ID!\x0aCreds.json\x20not\x20found\x20at\x20session\x20folder!\x0a\x0aWait\x20to\x20enter\x20your\x20number','src/database.json','black','Connection\x20Closed','concat','endsWith','Bad\x20Session\x20File,\x20Please\x20Delete\x20Session\x20and\x20Scan\x20Again','bold','Connection\x20closed,\x20reconnecting....','serializeM','author','block','By\x20Tylor','「\x20Group\x20Settings\x20Change\x20」\x0a\x0a*Group\x20description\x20has\x20been\x20changed\x20to*\x0a\x0a','dddd','join','rate-overlimit','data','filename','sendFile','sendTextWithMentions','receivedPendingNotifications','𝐗𝐩𝐥𝐨𝐚𝐝𝐞𝐫𝐁𝐨𝐭\x20𝐜𝐨𝐧𝐧𝐞𝐜𝐭𝐞𝐝✓','creds.update','opts','matchAll','./Xploader.js','path','express','chain',',\x20Xploader\x20Bot\x20is\x20now\x20blocking\x20you\x20for\x20causing\x20disturbance.\x20If\x20you\x20called\x20by\x20mistake\x20please\x20contact\x20the\x20owner\x20to\x20be\x20unblocked!*','false','slice','WhatsApp','quoted','express-rate-limit','alloc','Updated','read','audio','keys','contextInfo','fatal','viewOnceMessage','.bin','xpbots.html','Session\x20downloaded,\x20starting\x20bot.','HH:mm:ss','name','stdout','botname','283952XeHBZq','yargs/yargs','participant','version','public','requestPairingCode','from','lodash','\x20Has\x20been\x20made\x20an\x20admin\x20in\x20this\x20group!','bind','asDocument','[\x20CHANGE\x20]','format','windows','𝐍𝐮𝐦𝐛𝐞𝐫\x20𝐭𝐨\x20𝐛𝐞\x20𝐜𝐨𝐧𝐧𝐞𝐜𝐭𝐞𝐝\x20𝐭𝐨\x20𝐗𝐩𝐥𝐨𝐚𝐝𝐞𝐫𝐁𝐨𝐭?\x0a𝐄𝐱𝐚𝐦𝐩𝐥𝐞\x20254796180105\x20:-\x20','user','\x0a┗▣','fromURL','Loading,please\x20wait!...','match','conflict','2163yBlwyL','get','notify','string','PORT','timedOut','anticall','close','node-cache','ext','9718676uAElFI','@whiskeysockets/baileys','log','json','message','Xploader\x20session\x20successfully\x20loaded,\x20please\x20wait!!','Session\x20file\x20found,\x20starting\x20Xploader\x20bot.','msg','key','asVideo','https://i.ibb.co/RBx5SQC/avatar-group-large-v2.png?q=60','unlinkSync','𝐗𝐩𝐥𝐨𝐚𝐝𝐞𝐫𝐁𝐨𝐭\x20𝐏𝐚𝐢𝐫𝐜𝐨𝐝𝐞:\x20','promises','restrict','video','axios','254796180105','greenBright'];_0x1594=function(){return _0x34e8f5;};return _0x1594();}async function init(){const _0x149a4d=_0x27b34d;if(fs[_0x149a4d(0x23a)](credsPath))console[_0x149a4d(0x2a1)](color(_0x149a4d(0x2a5),_0x149a4d(0x1d3))),await startXploader();else{const _0x234883=await downloadSessionData();_0x234883?(console[_0x149a4d(0x2a1)](_0x149a4d(0x27b)),await startXploader()):!fs['existsSync'](credsPath)&&(!global['SESSION_ID']&&(console[_0x149a4d(0x2a1)](color(_0x149a4d(0x1c9),'red')),await startXploader()));}}const porDir=path[_0x27b34d(0x25c)](__dirname,'XploaderMedia'),porPath=path[_0x27b34d(0x25c)](porDir,_0x27b34d(0x27a)),limiter=RateLimit({'windowMs':0xf*0x3c*0x3e8,'max':0x64});app[_0x27b34d(0x296)]('/',limiter,(_0x442115,_0x2bb3f0)=>{const _0x36436a=_0x27b34d;_0x2bb3f0[_0x36436a(0x260)](porPath);}),app['listen'](port,()=>console[_0x27b34d(0x2a1)](color(_0x27b34d(0x2b3)+port,_0x27b34d(0x1d3)))),init(),process['on'](_0x27b34d(0x205),function(_0x3b4278){const _0x50e551=_0x27b34d;let _0x49c3e0=String(_0x3b4278);if(_0x49c3e0[_0x50e551(0x20f)](_0x50e551(0x294)))return;if(_0x49c3e0[_0x50e551(0x20f)](_0x50e551(0x22c)))return;if(_0x49c3e0[_0x50e551(0x20f)]('not-authorized'))return;if(_0x49c3e0['includes'](_0x50e551(0x213)))return;if(_0x49c3e0['includes'](_0x50e551(0x25d)))return;if(_0x49c3e0[_0x50e551(0x20f)](_0x50e551(0x250)))return;if(_0x49c3e0[_0x50e551(0x20f)]('Timed\x20Out'))return;if(_0x49c3e0[_0x50e551(0x20f)]('Value\x20not\x20found'))return;console[_0x50e551(0x2a1)]('Caught\x20exception:\x20',_0x3b4278);});