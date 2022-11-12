;(function () {
  var onLoadCallbacks = []
  var isLoaded = false

  window.addOnloadCallback = function (callback) {
    if (isLoaded) {
      setTimeout(function () {
        callback()
      })
    } else {
      onLoadCallbacks.push(callback)
    }
  }

  var onload = function () {
    isLoaded = true
    setTimeout(function () {
      onLoadCallbacks.forEach(function (fn) { fn() })
      window.removeEventListener('load', onload)
    })
  }
  window.addEventListener('load', onload)
})()
