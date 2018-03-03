const menu = chrome.contextMenus.create({
  "title": '快速上传到七牛云',
  "contexts":['image'],
  "onclick": (info) => {
    console.log('sss')
    console.log(info)
  }
})