  const channels = {
        zortv: "Zo'r tv",
        milliy: "Milliy tv",
        perviy: "Первый канал",
        sport: "Sport tv",
        sts: "СТС",
        tnt_music: "TNT Music",
        kinopremyera: "Кинопремьера",
        pyatnitsa: "Пятница!",
        kinoxit: "Кинохит",
        tv3: "ТВ3",
        uzreport: "Uzreport",
        tv1000: "TV1000",
        music_box: "Music Box",
        karusel: "Карусель",
        match_planeta: "Матч! Планета",
        my5: "My5",
        sevimli: "Sevimli Tv",
        uzbekistan24: "Uzbekistan 24",
        dunyoboylab: "Dunyo Bo'ylab",
        futboltv: "Futbol Tv",
        dasturxontv: "Dasturxon Tv",
        biztv: "Biz Tv",
        renessans: "Renessans Tv",
        yoshlar: "Yoshlar",
        bolajon: "Bolajon",
        navo: "Navo",
        uzbekistan: "Uzbekistan",
        rentv: "Ren Tv",
        russia_k: "Россия К",
        oxota_i_rybalka: "Охота и Рыбалка",
        viasat_explore: "Viasat Explorer",
        viasat_history: "Viasat History",
        viasat_sport: "Viasat Sport",
        dom_kino: "Дом кино",
        kinoujas: "Киноужас",
        dom_kino_premium: "Дом кино премиум",
        evrokino: "Еврокино",
        kuxnya_tv: "Кухня Тв",
        domashniy: "Домашний",
        box_tv: "Бокс Тв",
        mma_tv: "MMA-TV",
        muzika_pervogo: "Музыка Первого",
        stereoplus: "Stereoplus",
        tnt: "TNT",
        tnt_4: "TNT4",
        setanta_s1: "Setanta Sports 1",
        setanta_s2: "Setanta Sports 2"
      };

var app = new Vue({
  el: '.main',
  data: {
    showChannelsBlock: true,
    showPlayerBlock: false,
    tg: window.Telegram.WebApp,
    channel: '',
    videoSources: {
      zortv: 'https://s04.watcher.uz/6/video.m3u8?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjb250cmFjdF9pZCI6MjcwMTc3LCJsb2dpbiI6InR2LTI3MDE3NyIsInRlbXBvcmFyeSI6ZmFsc2UsImlzX29hdXRoIjpmYWxzZSwiY3JlYXRlZF90aW1lIjoxNjUwMjgzMDI3fQ.LadLj4b6plIxTGCWntQQqsQGZ3R9EsvwhaXQd1sur2g%3A15',
      milliy: 'https://s05.watcher.uz/70/video.m3u8?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjb250cmFjdF9pZCI6MjcwMTc3LCJsb2dpbiI6InR2LTI3MDE3NyIsInRlbXBvcmFyeSI6ZmFsc2UsImlzX29hdXRoIjpmYWxzZSwiY3JlYXRlZF90aW1lIjoxNjUwMjgzMDI3fQ.LadLj4b6plIxTGCWntQQqsQGZ3R9EsvwhaXQd1sur2g%3A15',
      uzreport: 'https://s03.watcher.uz/75/video.m3u8?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjb250cmFjdF9pZCI6MjcwMTc3LCJsb2dpbiI6InR2LTI3MDE3NyIsInRlbXBvcmFyeSI6ZmFsc2UsImlzX29hdXRoIjpmYWxzZSwiY3JlYXRlZF90aW1lIjoxNjUwMjgzMDI3fQ.LadLj4b6plIxTGCWntQQqsQGZ3R9EsvwhaXQd1sur2g%3A15',
      sport: 'https://s04.watcher.uz/59/video.m3u8?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjb250cmFjdF9pZCI6MjcwMTc3LCJsb2dpbiI6InR2LTI3MDE3NyIsInRlbXBvcmFyeSI6ZmFsc2UsImlzX29hdXRoIjpmYWxzZSwiY3JlYXRlZF90aW1lIjoxNjUwMjgzMDI3fQ.LadLj4b6plIxTGCWntQQqsQGZ3R9EsvwhaXQd1sur2g%3A15',
      perviy:"https://tbs01-edge11.itdc.ge/ort/tracks-v1a1/mono.m3u8",
      sts:"https://tbs01-edge11.itdc.ge/ctctv/tracks-v1a1/mono.m3u8",
      tnt_music:"https://tbs01-edge11.itdc.ge/rutv/tracks-v1a1/mono.m3u8",
      kinopremyera:"https://tbs01-edge11.itdc.ge/kinopremyerahd/tracks-v1a1/mono.m3u8",
      pyatnitsa:"https://tbs01-edge11.itdc.ge/friday/tracks-v1a1/mono.m3u8",
      kinoxit:"https://tbs01-edge11.itdc.ge/kinohit/tracks-v1a1/mono.m3u8",
      tv1000:"https://tbs01-edge11.itdc.ge/tv1000rukino/tracks-v1a1/mono.m3u8",
      music_box:'https://tbs01-edge11.itdc.ge/musicbox/tracks-v1a1/mono.m3u8',
      karusel:'https://ucdn.beetv.kz/btv/live/hls/000000781.m3u8',
      match_planeta:'https://tbs01-edge11.itdc.ge/matchplaneta/tracks-v1a1/mono.m3u8',
      my5:'https://s05.watcher.uz/69/video.m3u8?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjb250cmFjdF9pZCI6MjcwMTc3LCJsb2dpbiI6InR2LTI3MDE3NyIsInRlbXBvcmFyeSI6ZmFsc2UsImlzX29hdXRoIjpmYWxzZSwiY3JlYXRlZF90aW1lIjoxNjUwMjgzMDI3fQ.LadLj4b6plIxTGCWntQQqsQGZ3R9EsvwhaXQd1sur2g%3A15',
      sevimli:'https://s04.watcher.uz/72/video.m3u8?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjb250cmFjdF9pZCI6MjcwMTc3LCJsb2dpbiI6InR2LTI3MDE3NyIsInRlbXBvcmFyeSI6ZmFsc2UsImlzX29hdXRoIjpmYWxzZSwiY3JlYXRlZF90aW1lIjoxNjUwMjgzMDI3fQ.LadLj4b6plIxTGCWntQQqsQGZ3R9EsvwhaXQd1sur2g%3A15',
      uzbekistan24:'https://s04.watcher.uz/8/video.m3u8?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjb250cmFjdF9pZCI6MjcwMTc3LCJsb2dpbiI6InR2LTI3MDE3NyIsInRlbXBvcmFyeSI6ZmFsc2UsImlzX29hdXRoIjpmYWxzZSwiY3JlYXRlZF90aW1lIjoxNjUwMjgzMDI3fQ.LadLj4b6plIxTGCWntQQqsQGZ3R9EsvwhaXQd1sur2g%3A15',
      dunyoboylab:'https://s05.watcher.uz/63/video.m3u8?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjb250cmFjdF9pZCI6MjcwMTc3LCJsb2dpbiI6InR2LTI3MDE3NyIsInRlbXBvcmFyeSI6ZmFsc2UsImlzX29hdXRoIjpmYWxzZSwiY3JlYXRlZF90aW1lIjoxNjUwMjgzMDI3fQ.LadLj4b6plIxTGCWntQQqsQGZ3R9EsvwhaXQd1sur2g%3A15',
      futboltv:'https://s03.watcher.uz/74/video.m3u8?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjb250cmFjdF9pZCI6MjcwMTc3LCJsb2dpbiI6InR2LTI3MDE3NyIsInRlbXBvcmFyeSI6ZmFsc2UsImlzX29hdXRoIjpmYWxzZSwiY3JlYXRlZF90aW1lIjoxNjUwMjgzMDI3fQ.LadLj4b6plIxTGCWntQQqsQGZ3R9EsvwhaXQd1sur2g%3A15',
      dasturxontv:'https://s03.watcher.uz/85/video.m3u8?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjb250cmFjdF9pZCI6MjcwMTc3LCJsb2dpbiI6InR2LTI3MDE3NyIsInRlbXBvcmFyeSI6ZmFsc2UsImlzX29hdXRoIjpmYWxzZSwiY3JlYXRlZF90aW1lIjoxNjUwMjgzMDI3fQ.LadLj4b6plIxTGCWntQQqsQGZ3R9EsvwhaXQd1sur2g%3A15',
      biztv:'https://st.biztv.uz/hls/stream_mid/index.m3u8',
      renessans:'https://s04.watcher.uz/83/video.m3u8?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjb250cmFjdF9pZCI6MjcwMTc3LCJsb2dpbiI6InR2LTI3MDE3NyIsInRlbXBvcmFyeSI6ZmFsc2UsImlzX29hdXRoIjpmYWxzZSwiY3JlYXRlZF90aW1lIjoxNjUwMjgzMDI3fQ.LadLj4b6plIxTGCWntQQqsQGZ3R9EsvwhaXQd1sur2g%3A15',
      yoshlar:'https://s03.watcher.uz/57/video.m3u8?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjb250cmFjdF9pZCI6MjcwMTc3LCJsb2dpbiI6InR2LTI3MDE3NyIsInRlbXBvcmFyeSI6ZmFsc2UsImlzX29hdXRoIjpmYWxzZSwiY3JlYXRlZF90aW1lIjoxNjUwMjgzMDI3fQ.LadLj4b6plIxTGCWntQQqsQGZ3R9EsvwhaXQd1sur2g%3A15',
      bolajon:'https://s05.watcher.uz/64/video.m3u8?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjb250cmFjdF9pZCI6MjcwMTc3LCJsb2dpbiI6InR2LTI3MDE3NyIsInRlbXBvcmFyeSI6ZmFsc2UsImlzX29hdXRoIjpmYWxzZSwiY3JlYXRlZF90aW1lIjoxNjUwMjgzMDI3fQ.LadLj4b6plIxTGCWntQQqsQGZ3R9EsvwhaXQd1sur2g%3A15',
      navo:'https://s05.watcher.uz/65/video.m3u8?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjb250cmFjdF9pZCI6MjcwMTc3LCJsb2dpbiI6InR2LTI3MDE3NyIsInRlbXBvcmFyeSI6ZmFsc2UsImlzX29hdXRoIjpmYWxzZSwiY3JlYXRlZF90aW1lIjoxNjUwMjgzMDI3fQ.LadLj4b6plIxTGCWntQQqsQGZ3R9EsvwhaXQd1sur2g%3A15',
      uzbekistan:'https://s03.watcher.uz/56/video.m3u8?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjb250cmFjdF9pZCI6MjcwMTc3LCJsb2dpbiI6InR2LTI3MDE3NyIsInRlbXBvcmFyeSI6ZmFsc2UsImlzX29hdXRoIjpmYWxzZSwiY3JlYXRlZF90aW1lIjoxNjUwMjgzMDI3fQ.LadLj4b6plIxTGCWntQQqsQGZ3R9EsvwhaXQd1sur2g%3A15',
      rentv:'https://tbs01-edge11.itdc.ge/rentv/tracks-v1a1/mono.m3u8',
      russia_k:'https://ucdn.beetv.kz/btv/live/hls/000000066.m3u8',
      oxota_i_rybalka:'https://ucdn.beetv.kz/btv/live/hls/000002510.m3u8',
      viasat_explore:'https://tbs01-edge11.itdc.ge/viasatexp/tracks-v1a1/mono.m3u8',
      viasat_history:'https://tbs01-edge11.itdc.ge/viasathist/tracks-v1a1/mono.m3u8',
      viasat_sport:'https://tbs01-edge11.itdc.ge/viasatsport/tracks-v1a1/mono.m3u8',
      dom_kino:'https://ucdn.beetv.kz/btv/live/hls/000000050.m3u8',
      dom_kino_premium:'https://ucdn.beetv.kz/btv/live/hls/000002943.m3u8',
      kinoujas:'https://tbs01-edge11.itdc.ge/kinoujas/tracks-v1a1/mono.m3u8',
      evrokino:'https://tbs01-edge11.itdc.ge/eurokino/tracks-v1a1/mono.m3u8',
      kuxnya_tv:'https://tbs01-edge11.itdc.ge/kuxnia/tracks-v1a1/mono.m3u8',
      domashniy:'https://tbs01-edge11.itdc.ge/domashni/tracks-v1a1/mono.m3u8',
      box_tv:'https://tbs01-edge11.itdc.ge/boxtv/tracks-v1a1/mono.m3u8',
      mma_tv:'https://tbs01-edge11.itdc.ge/m1/tracks-v1a1/mono.m3u8',
      muzika_pervogo:'https://ucdn.beetv.kz/btv/live/hls/000000204.m3u8',
      stereoplus:'https://tbs01-edge11.itdc.ge/stereoplus/tracks-v1a1/mono.m3u8',
      tnt:'https://ucdn.beetv.kz/btv/live/hls/000001480.m3u8',
      tnt_4:'https://ucdn.beetv.kz/btv/live/hls/000002926.m3u8',
      setanta_s1:'https://ucdn.beetv.kz/btv/live/hls/000004498.m3u8',
      setanta_s2:'https://ucdn.beetv.kz/btv/live/hls/000004499.m3u8',
    }
  },
  mounted:function(){
    if (this.tg.isExpanded == false){
      this.tg.expand()
    }
  },
  methods: {

    onImageClick(channel_name) {
      this.showPlayerBlock = true;
      this.showChannelsBlock = false;
      this.channel = channels[channel_name] || "Tv";
      
      this.$nextTick(function () {
        this.autoplay(channel_name);
      });
    },

    autoplay(channel_name) {
    
      if (channel_name){
        streamUrl = this.videoSources[channel_name]
      }

      if (streamUrl){

        if (Hls.isSupported()) {
          var hls = new Hls();
          hls.loadSource(streamUrl);
          hls.attachMedia(this.$refs.video);
          this.$refs.video.play();
            // this.$refs.video.requestFullscreen();
        } else if (this.$refs.video.canPlayType('application/vnd.apple.mpegurl')) {
          this.$refs.video.src = streamUrl;
          this.$refs.video.addEventListener('loadedmetadata', function () {
            this.$refs.video.play();
          }.bind(this));
        }
      }


    }, 

    close_webapp() {
      // var context = {
      //   status: "success"
      // }
      // this.tg.sendData(JSON.stringify(context));

      this.tg.close();
    },
    back(){
      this.showPlayerBlock = false;
      this.showChannelsBlock = true;
    }

  },
});
