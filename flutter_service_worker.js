'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "f60b08c0f401d43bf20b496c46bcfe40",
".git/config": "0ea3fa949ffeb6b2d9befc2fcbcf61b4",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "22c583e5c2da3ee7f59d9644017bf21d",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "6a31892f8b48eb3567e32f716d40d09e",
".git/logs/refs/heads/main": "6a31892f8b48eb3567e32f716d40d09e",
".git/logs/refs/remotes/origin/main": "a32e0f16d8fc1eaf98eb81fe51837bad",
".git/objects/01/f4c0b411a784ab7f4c74026341a5edf8a7e5fd": "94dd5df8308d077e2148f8b1b6c15aae",
".git/objects/02/d379985de129bf1118143f9405993014d84a88": "49a3fd720a605cdff3cce75df2a0f8a8",
".git/objects/03/53fee9cc2dac564cbadde6e30abd630261331b": "26e381eb5e31e630f98e360c584becd9",
".git/objects/03/a6e68515a1a66ad1c82cb849a21f2c4bef0275": "21d3274959134cf0c52079d101b54e57",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/05/a9058f513cce5faf1704e06e3c150688b0a01f": "e8d02f60cf87abd4c1de4b153dd696dc",
".git/objects/0d/61aa74865e74b4f65510215fe230f932b86976": "9630a25b22853b89ffa51f90cb58082c",
".git/objects/0f/f41eb908162c8695833ae906484abfce094dd3": "3d1c34695cf25d3e83f8060dcca8b8e8",
".git/objects/11/e289128876615a496af9b30d6f9cbe40ea337d": "b4f46c19d35dcaaa71040156f421d084",
".git/objects/13/0558453d47a2cff441b8d9c7e8e527439b934c": "40d350cbacf0a10cd5e4c4833c252400",
".git/objects/19/0d9491f39d5b36de854a613f5bf024a6c208fd": "36dae10b45a5117c7075977f6307cd2e",
".git/objects/19/6f506e6199f09feae3b18c1f0362d56145cb5a": "88bf0fe7e439ef1029644d68225a9946",
".git/objects/19/d0e51d7776c16e1069dd186accc1ca5917079b": "913f9ff946409fefb82bae8ebca4dafd",
".git/objects/1a/ed95b1be730a65d912aa846e9f4268dd3ac4e9": "a03ba0117d4e55a21ad849d9cfbf92f4",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/1f/fabefd6197cec47668ccbb1bfd44aaf9ae7a6a": "e2a3644da1a9c6a9ea6d6d1853f5345f",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/27/44f8efb299901b9d716f9858b14ab73fd27f8f": "945ffa9ec3c8bd3f58036ad51637214f",
".git/objects/27/a297abdda86a3cbc2d04f0036af1e62ae008c7": "51d74211c02d96c368704b99da4022d5",
".git/objects/29/3bb14b50b7fcae987d4c0fcdf9124dde2f8728": "9390ec5f621a4f21bfc920de7c33a707",
".git/objects/2c/d3f6e567e3aabce3652d2c4d7bcfc3eaf31a0c": "20d0c5c57ffcaf9c9a9ee0a6bb119b85",
".git/objects/2e/ad810067de35e5c6cbe23f9ecb6bf72563621a": "cd04e77198de642645aee34f2bd81add",
".git/objects/2e/c731ac9eb5bc41de950a4aa903509f8df1d961": "f2121159a0fa01ec5a359102e471d8a3",
".git/objects/30/1ca226d17a10e452885717242b835f52874141": "1b4c004594e49cd94fd9cce50b3cb5bb",
".git/objects/33/4c68fcf0fb9fe8c767d02782ff346c60a268a7": "2e9427a322a126d19a48f56f337439ef",
".git/objects/35/62d4de6af7011e442ccb9a332bfcbeded36e62": "1f06e22674107dbb12795892fc07400f",
".git/objects/42/bf3a540df318d49f352cf4ffa56973941b0c22": "835b6339c919d170d2fae886dcdbcb61",
".git/objects/43/79d2117f5ed9a09ff627923b3c11c377ea424c": "a0fb7b850d5414f0488f702c0d00c372",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4b/626c0cde84c36bdbb28c9c42416a0807b81276": "6de09b81573a680c7d3e86f263f22602",
".git/objects/4e/64f07c706f76984f3fec16c984bcd2c22d7c7e": "2721726e51f6311736774b712533b2ba",
".git/objects/50/7b5369cce4e8bf586f1cc7e28c21d114864483": "967c0a3a3f9fc3b48872561eefb7ed9b",
".git/objects/52/0daab5c64adc8a838fa15816f1d84eef2bf903": "22be580d4b6ec423e919c41fdaeaab18",
".git/objects/52/cb1ae92c9517dcb6a43e71e591de2fc5e59c34": "da7b8377f271cdbb94eea72252f81594",
".git/objects/56/42db4b047b814b204c3a22e1c07d98b9a5cd1f": "797c2604756b7985a7708a48f87dd8f9",
".git/objects/5d/1b58148ed631573f38799382ac753de4443588": "9b0bb5c0c1427afef39300a51670c28c",
".git/objects/5f/2f2f463a27ff73e688fa98adcb27c506e990b4": "b9f399da8aff361bd3a72efe54e40760",
".git/objects/5f/9f34fb047a2c5ae6817f7584facd4af2348794": "176d1f5687bc255de1b5386a8fddfeb4",
".git/objects/63/07daafdf6e0acc0831b71c4cbda73de206a040": "03f440d7bef4d73d7de6c3e2dfd12b76",
".git/objects/63/6931bcaa0ab4c3ff63c22d54be8c048340177b": "8cc9c6021cbd64a862e0e47758619fb7",
".git/objects/69/dd618354fa4dade8a26e0fd18f5e87dd079236": "8cc17911af57a5f6dc0b9ee255bb1a93",
".git/objects/6a/8bf469e1c0b0c0be5eed9ee288727c27477a48": "a35617d7a04f0d2c06d341883978cb79",
".git/objects/6b/7bbc2f9dd360a2e1617a2b399e54d16ec43243": "e917c0349d4a0487f62d3e01d89d7a31",
".git/objects/6d/5f0fdc7ccbdf7d01fc607eb818f81a0165627e": "2b2403c52cb620129b4bbc62f12abd57",
".git/objects/6d/94cfda8552d58c78fad39fbb486fddaed6db11": "a5e9ed2fa23c9fe8fb5277f3dd03c323",
".git/objects/6d/b2da0733043c8928638c9ac4c15e9d7cb9d2a6": "edd93af93cd42d00bb6e58bf92313c35",
".git/objects/6e/034f96389450151843ce828f20ed69c656915b": "b491399595a3a32dd249df309ebf3c5f",
".git/objects/72/faceab1dcf92b0d419dedbcde00d4e68d355cb": "444594f91720e5a4e11bbfde2ed24791",
".git/objects/73/7f149c855c9ccd61a5e24ce64783eaf921c709": "1d813736c393435d016c1bfc46a6a3a6",
".git/objects/76/4ef00b2de22d7251c9352218bde7691b0d0bf7": "13e4270cf9f4efcbecbde3a8a8ea352e",
".git/objects/77/3967fcea107f2beba58f95c9c6f15eba889912": "89ba55ce4d3eea522bebc70e98a347c4",
".git/objects/7a/f1bb13f909f5da93bca1fddca6499499ba5f6d": "47409809c06aaca481f24e96623cea1a",
".git/objects/7e/c6f878b286882102849130aebece44fd4c58b0": "c9b26a25ddc7063951a403cd81370dfe",
".git/objects/84/e4d4f97318314c2102ea3d43fc66bf9c08a214": "ecef871b1ee633ded54e4b14d62f8466",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/85/af188b0a794606d2a82fa9c242b13094cf3ded": "4e057ba60675bf68aa04eb47d9b60cda",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/59773bee8314a8ffb4431593d0fb49f52e34c6": "2eb993d30677573ffd0e58484cc6a514",
".git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "e3695ae5742d7e56a9c696f82745288d",
".git/objects/94/2085d5be5ca7a9d52df2c08ac2553bfba06f46": "a2dbb8565a329d085e4d1e2914249298",
".git/objects/95/9385c9ef203f7957792cfb0d666f4c981c345c": "dca64bb6390a6dddcc1c57f20204efa9",
".git/objects/97/8a4d89de1d1e20408919ec3f54f9bba275d66f": "dbaa9c6711faa6123b43ef2573bc1457",
".git/objects/98/00a7e61cf907d6a0c6c7f8c708979427ad3c32": "67792f42a6a2cccfdf44724cf80c7d0f",
".git/objects/98/9ca6929e04fcbeda612d513882975604847a24": "2551f0ae84f29dbcd8ad18b3b341f454",
".git/objects/9b/57339110dc1199e16691abce872983df9026b5": "a9f63361e17185801c02a45aa20996ca",
".git/objects/a1/56e6b3716a658b7bd9dd279981f6e5276638f8": "f099568f2a9b63af001b13308117b80a",
".git/objects/a1/c0f4405e7d9c9e0093b11ad4835177834cf734": "7935bd1b5e6342bd199ae475e076b0a1",
".git/objects/a5/ecc28f1e10c0a0529f3ff4dd96882bf567481b": "4dbb4ec74dec8bea82e1ecee1d12d7a1",
".git/objects/a7/5ca7461cbd917e2e1a07df7c4b4aeafbfac443": "899759e873bdc60e33650a002bd63be5",
".git/objects/aa/c7013216bc31b12bce7f70ed9c757259678fd2": "81e57a041483225b4b8c87c607017436",
".git/objects/af/31ef4d98c006d9ada76f407195ad20570cc8e1": "a9d4d1360c77d67b4bb052383a3bdfd9",
".git/objects/af/3ea3e54b3c7afdd7cf4e64f8c72dd4802c91cb": "50455f81ccc68b7f0509948ca0e94425",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b1/afd5429fbe3cc7a88b89f454006eb7b018849a": "e4c2e016668208ba57348269fcb46d7b",
".git/objects/b3/a5d7f4b714ce6b05c5ccbde475ec5037f8ed0f": "748eaadb2eda79841a05f01a1e79416a",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/79c28b445929265f8c218524b655753cbe1534": "9625dda46bb9b61fc1bf411819f20382",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/bd/6ab90954791331b915b0f44229f2412ce5bd75": "9e021671e8fe94bff173bbea76cc2514",
".git/objects/bd/c86e048b8185973d58a8b5cba8132b145173a3": "e589efa9047997bda891fd016418b613",
".git/objects/c2/0a11b4daeb1b710330ecac2fd7fe1d286df6d2": "506b47dd7b3963e78a93a79cf73d2769",
".git/objects/c2/1593d7ffba0632806c8c209efbd434ae3d1e57": "4a2f667cf16c798bb4ba8f648f87da4f",
".git/objects/c2/5d25ad30e2c2e8dd851d125a2b27d5ab4db4c7": "a1da18ff89c655e718da1f928b1bd4d1",
".git/objects/c2/82b2be4d3748f26ea2ba0ad796cebf6aa6f874": "c98eb3c0fa6f196d43ac257c8bb5b735",
".git/objects/c3/e81f822689e3b8c05262eec63e4769e0dea74c": "8c6432dca0ea3fdc0d215dcc05d00a66",
".git/objects/c4/f32678ec4e0cd2471c630cbfe806cd82b11e5e": "1f69680734433f64f44bc5ea03efb262",
".git/objects/c6/06caa16378473a4bb9e8807b6f43e69acf30ad": "ed187e1b169337b5fbbce611844136c6",
".git/objects/c8/70b9bcf51f620358c7a5a7f3dec01300fea649": "6b28355260c4bbfc96ebf7ffb2bdfe19",
".git/objects/c8/a431513e5076d7863a569a54ff6c1bcade4a6b": "1a17c50f17c1974f7c76c1c3ebe41bec",
".git/objects/c9/d225db286273a9ba9b892fefe1f9872d8414a7": "388002bbaf693a7ba43b5b8bf1bd0f3b",
".git/objects/cb/294af3c8fbf11524af2e0a7b440cb31aaac414": "9506b06df473a524133078531887eb3e",
".git/objects/cd/b4a84a7620e501305b38286fb653793cd7c4fa": "e50fc6b7e1afd996df8eebe1e656ffad",
".git/objects/d3/9902bdeb735d71d4670a4d34537c1ad84952c5": "f3ebada19532f5a2c9fb8f77229d5de2",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d9/88ff18e7881b66d03221c8e8bbc36e4f0d7cd4": "f2342e8af69379c7ad4372688462b24e",
".git/objects/da/33bd70693d9d46c91ee7c120d1c9859fedd097": "39ded371e9266652c057b71b826f31f4",
".git/objects/db/a77da6b6574443165082b0c4d8e4cf029bdbed": "0a03164430a105667bff04bea60d8d84",
".git/objects/dd/43ebc89955870470af1af0d89c3769dc57ab15": "a95ea6110965b5f2b16c29ce5f795066",
".git/objects/e2/3de77f087ca7272c87325f9351e66532343362": "8f15284253fadc0491aa2e62af68091d",
".git/objects/e3/2ba5ac0adc06e04b5a5c9372154fa3d63f57b6": "719d640684d89c8552a64aa5d48b5e10",
".git/objects/e3/d3f6c0434c52e266dbbf70c1adb8ea68097030": "eafad8a429f033cc688560f174aa1c1b",
".git/objects/e5/801c20be0d7c94e550b48bfbfd9c229c200002": "428c51db1269ca8bffcf99c89b5445cb",
".git/objects/e7/8fc1c29657ecdc7a31ea74f9659f4ce6e41341": "02a933c20a24a075d09384a289ddbd7d",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/361605e9e785c47c62dd46a67f9c352731226b": "d1eafaea77b21719d7c450bcf18236d6",
".git/objects/f0/7ed5e15b7b466f030e82fbb71a492fd3d58871": "d542de7246af9401d0ef55b7f3d82a73",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f6/2a45fbcf548f915f150723ab29d7ab3cd1585c": "0810312b944bd8be3ff9fe1b6cf6c0c7",
".git/objects/f7/0ec9375db698c4c7442cb617d220d9a8bca9e6": "4f76f97c719ffa741227135c80594cea",
".git/objects/f8/3287bc6331cae36eec7f6c203a951623650765": "66a823762b7644c075d1e8cf9e4db296",
".git/objects/fa/40922e9403e3035ec6c262a31b25935a2a47e9": "fe8126f3fd7b26041e34a0301b89634c",
".git/objects/fb/7757817f5464aa0c6aac24d96945542525042f": "20440bf91c2bcce7c2e6cba310dc7dbe",
".git/objects/fe/d946a5d89a573bc4893b20d92ba15dc7f658f4": "56220e70469e7ea7d84eff7daa81a3b3",
".git/objects/ff/b954334194b47fd59af05e5238fd85c9b0ed19": "80ef8b7f9564198245609beb1f9439a6",
".git/refs/heads/main": "0273a188f622e076217f141b157d5f24",
".git/refs/remotes/origin/main": "0273a188f622e076217f141b157d5f24",
"assets/AssetManifest.bin": "bda69b2d94259a62c8374769b8373c49",
"assets/AssetManifest.bin.json": "1f17fcf8fa0f6e563df96725fec3c72e",
"assets/AssetManifest.json": "491f300584ee76691ac1f791d93d4b8e",
"assets/assets/logo.png": "75a0892e649cc84f7f379a40a89f3f2f",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "0086f21648a3a36103fbcd7324d40758",
"assets/NOTICES": "0b68ad64796fb84e514d4d6d5621421a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "1e9465feb36af06ea51e7b5b9a62e7c5",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"flutter_bootstrap.js": "e23bb2836b445396d3086a62887d6ea1",
"icons/Icon-192.png": "523fa724ad7e80fb413bc9dc9dc9c57d",
"icons/Icon-512.png": "4964359fa8e9721ba065a7a24c111703",
"icons/Icon-maskable-192.png": "523fa724ad7e80fb413bc9dc9dc9c57d",
"icons/Icon-maskable-512.png": "4964359fa8e9721ba065a7a24c111703",
"index.html": "9079fe231e34c50a8fc5eaa03becc9fb",
"/": "9079fe231e34c50a8fc5eaa03becc9fb",
"main.dart.js": "d03ebb24b439ebacb3a3cdce1d172765",
"manifest.json": "dfa20c5a2aaf02b6b689e6aa6d4d9361",
"version.json": "3085a7f3feaf396885eb130ccc8be012"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
