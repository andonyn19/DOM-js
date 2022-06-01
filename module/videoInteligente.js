const d = document,
  w = window

function videoInteligente() {
  const $videos = d.querySelectorAll("video[data-smart-video]");

  const callback = (entries) => {

    entries.forEach(entry => {

      (entry.isIntersecting) ?
        entry.target.play() :
        entry.target.pause()

      //Visibility change 
      w.addEventListener("visibilitychange", _ => {
        //console.log(d.visibilityState)
        d.visibilityState === "visible" ?
          entry.target.play() :
          entry.target.pause()
      });

    });

  }

  const params = { threshold: .5 }

  const observer = new IntersectionObserver(callback, params)
  $videos.forEach(video => observer.observe(video))
}

export default videoInteligente