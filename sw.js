const CACHE='ide-konten-v6';
const RELEASE='170';
const INDEX_URL=`./index.html?v=${RELEASE}`;
const IDEAS_URL=`./ideas.js?v=${RELEASE}`;
const CORE=['./',INDEX_URL,'./manifest.json',IDEAS_URL,'./assets/icon-192.png','./assets/icon-512.png','./assets/idea-food.jpg','./assets/idea-learning.jpg','./assets/idea-travel.jpg'];

self.addEventListener('install',event=>{
  event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(CORE)).then(()=>self.skipWaiting()));
});

self.addEventListener('activate',event=>{
  event.waitUntil(
    caches.keys()
      .then(keys=>Promise.all(keys.filter(key=>key.startsWith('ide-konten-')&&key!==CACHE).map(key=>caches.delete(key))))
      .then(()=>self.clients.claim())
  );
});

self.addEventListener('fetch',event=>{
  const request=event.request;
  if(request.method!=='GET') return;
  const url=new URL(request.url);
  if(url.origin!==self.location.origin) return;

  const isDocument=request.mode==='navigate'||url.pathname.endsWith('/index.html');
  const isIdeas=url.pathname.endsWith('/ideas.js');
  if(isDocument||isIdeas){
    event.respondWith(
      fetch(request,{cache:'no-store'})
        .then(response=>{
          if(response.ok){
            const copy=response.clone();
            void caches.open(CACHE).then(cache=>cache.put(request,copy));
          }
          return response;
        })
        .catch(async()=>{
          const cached=await caches.match(request);
          if(cached) return cached;
          if(isDocument) return (await caches.match(INDEX_URL))||(await caches.match('./'));
          if(isIdeas) return await caches.match(IDEAS_URL);
          return Response.error();
        })
    );
    return;
  }

  event.respondWith(
    caches.match(request).then(cached=>cached||fetch(request).then(response=>{
      if(response.ok){
        const copy=response.clone();
        void caches.open(CACHE).then(cache=>cache.put(request,copy));
      }
      return response;
    }))
  );
});
