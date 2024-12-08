var arr = [
  {
    dp: 'https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    story:
      'https://plus.unsplash.com/premium_photo-1688891564708-9b2247085923?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    dp: 'https://plus.unsplash.com/premium_photo-1664541336896-b3d5f7dec9a3?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    story:
      'https://plus.unsplash.com/premium_photo-1669688174637-92ff26cc0a9b?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    dp: 'https://plus.unsplash.com/premium_photo-1707932500366-c0b1951ed1b8?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    story:
      'https://plus.unsplash.com/premium_photo-1708274146336-eabb9a167a7f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    dp: 'https://plus.unsplash.com/premium_photo-1727942418676-56c4c4614b00?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExMnx8fGVufDB8fHx8fA%3D%3D',
    story:
      'https://plus.unsplash.com/premium_photo-1727942421317-382428c9ac44?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D',
  },
  {
    dp: 'https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    story:
      'https://plus.unsplash.com/premium_photo-1688891564708-9b2247085923?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    dp: 'https://plus.unsplash.com/premium_photo-1664541336896-b3d5f7dec9a3?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    story:
      'https://plus.unsplash.com/premium_photo-1669688174637-92ff26cc0a9b?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
]
var storia = document.querySelector('#storia')
var cultter = ''
arr.forEach(function (elem, idx) {
  cultter += `<div class="story">
          <img id="${idx}" src="${elem.dp}" alt="">
        </div>`
})
storia.innerHTML = cultter
storia.addEventListener('click', function (dets) {
  document.querySelector('#fullscreen').style.display = 'block'
  document.querySelector('#fullscreen').style.backgroundImage = `url(${
    arr[dets.target.id].story
  })`

  setTimeout(function () {
    document.querySelector('#fullscreen').style.display = 'none'
  }, 3000)
})
