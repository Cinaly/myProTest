export default {
  getUrlKey: function (name) {
    return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.href) || [, ''])[1].replace(/\+/g, '%20')) || null;
  },
  
  getLang: function (lang) {
    if (lang == 1) {
      return 'en'
    } else if (lang == 2) {
      return 'tr'
    } else if (lang == 3) {
      return 'tw'
    }
  },
  
  loadSonRouters: function (requireContext) {
    const routerUrl = requireContext.keys();
    const routersArr = routerUrl.map(requireContext);
    const routersList = [];
    routersArr.forEach((v, index)=>{
      routersList.push(v)
    })
  
    return routersList;
  }
}

