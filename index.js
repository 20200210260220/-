search = document.querySelectorAll('.pilot li')
for (let i = 0; i < search.length; i++) {

  search[i].addEventListener('mouseenter', function () {
    search[i].style.backgroundColor = 'pink'
  })
  search[i].addEventListener('mouseleave', function () {
    search[i].style.backgroundColor = 'transparent'
  })

}
const input = document.querySelector('.search input')
const ul = document.querySelector('.result-list')
input.addEventListener('focus', function () {
  ul.style.display = 'block'
})
input.addEventListener('blur', function () {
  ul.style.display = 'none'
})
// 导航栏渲染


const bannerList = [
  { url: './uploads/1.jpg' },
  { url: './uploads/2.jpg' },
  { url: './uploads/3.jpg' },
  { url: './uploads/4.jpg' },
  { url: './uploads/5.jpg' }
]

let a = setInterval(function () {
  let radom = Math.floor(Math.random() * bannerList.length)
  // 随机取数组中图片下标
  const img = document.querySelector('.banner img')
  // 获取轮播图元素
  const lef = document.querySelector('.banner .lef img')
  lef.addEventListener('mouseover', function () {
    lef.src = './images/lefthover.png'
  })
  lef.addEventListener('mouseout', function () {
    lef.src = './images/left.png'
  })

  // 获取左侧按钮图片并进行鼠标进过图片的更换
  const bottonleft = document.querySelector('.banner .lef')
  // 获取左侧按钮
  bottonleft.addEventListener('click', function () {
    radom--


    img.src = bannerList[radom].url
    const removeradius = document.querySelector('.banner .active')
    removeradius.classList.remove('active')
    const radius = document.querySelector(`.banner ul li:nth-child(${radom + 1})`)
    radius.classList.add('active')
    // 左侧按钮点击轮播图变化

    if (radom === 0) {
      radom = bannerList.length
    }

  })
  const rgt = document.querySelector('.banner .rgt img')
  rgt.addEventListener('mouseover', function () {
    rgt.src = './images/righthover.png'
  })
  rgt.addEventListener('mouseout', function () {
    rgt.src = './images/right.png'

  })
  const bottonrgt = document.querySelector('.banner .rgt')
  // 获取右侧按钮
  bottonrgt.addEventListener('click', function () {
    radom++


    img.src = bannerList[radom].url
    const removeradius = document.querySelector('.banner .active')
    removeradius.classList.remove('active')
    const radius = document.querySelector(`.banner ul li:nth-child(${radom + 1})`)
    radius.classList.add('active')
    // 右侧按钮点击轮播图变化

    if (radom === bannerList.length - 1) {
      radom = -1
    }

  })
  img.src = bannerList[radom].url
  //小圆点渲染 
  const removeradius = document.querySelector('.banner .active')
  removeradius.classList.remove('active')
  const radius = document.querySelector(`.banner ul li:nth-child(${radom + 1})`)
  radius.classList.add('active')



  // const lef = document.querySelector('.banner .lef img')
  // lef.addEventListener('mouseover', function () {
  //   lef.src = './images/lefthover.png'
  // })
  // lef.addEventListener('mouseout', function () {
  //   lef.src = './images/left.png'
  // })
  // const rgt = document.querySelector('.banner .rgt img')
  // rgt.addEventListener('mouseover', function () {
  //   rgt.src = './images/righthover.png'
  // })
  // rgt.addEventListener('mouseout', function () {
  //   rgt.src = './images/right.png'
}, 1500)
const banner = document.querySelector('.banner')
banner.addEventListener('mouseenter', function () {
  clearInterval(a)
})

banner.addEventListener('mouseleave', function () {
  a = setInterval(function () {
    let radom = Math.floor(Math.random() * bannerList.length)
    // 随机取数组中图片下标
    const img = document.querySelector('.banner img')
    // 获取轮播图元素
    const lef = document.querySelector('.banner .lef img')
    lef.addEventListener('mouseover', function () {
      lef.src = './images/lefthover.png'
    })
    lef.addEventListener('mouseout', function () {
      lef.src = './images/left.png'
    })

    // 获取左侧按钮图片并进行鼠标进过图片的更换
    const bottonleft = document.querySelector('.banner .lef')
    // 获取左侧按钮
    bottonleft.addEventListener('click', function () {
      radom--


      img.src = bannerList[radom].url
      const removeradius = document.querySelector('.banner .active')
      removeradius.classList.remove('active')
      const radius = document.querySelector(`.banner ul li:nth-child(${radom + 1})`)
      radius.classList.add('active')
      // 左侧按钮点击轮播图变化

      if (radom === 0) {
        radom = bannerList.length
      }

    })
    const rgt = document.querySelector('.banner .rgt img')
    rgt.addEventListener('mouseover', function () {
      rgt.src = './images/righthover.png'
    })
    rgt.addEventListener('mouseout', function () {
      rgt.src = './images/right.png'

    })
    const bottonrgt = document.querySelector('.banner .rgt')
    // 获取右侧按钮
    bottonrgt.addEventListener('click', function () {
      radom++


      img.src = bannerList[radom].url
      const removeradius = document.querySelector('.banner .active')
      removeradius.classList.remove('active')
      const radius = document.querySelector(`.banner ul li:nth-child(${radom + 1})`)
      radius.classList.add('active')
      // 右侧按钮点击轮播图变化

      if (radom === bannerList.length - 1) {
        radom = -1
      }

    })
    img.src = bannerList[radom].url
    //小圆点渲染 
    const removeradius = document.querySelector('.banner .active')
    removeradius.classList.remove('active')
    const radius = document.querySelector(`.banner ul li:nth-child(${radom + 1})`)
    radius.classList.add('active')



    // const lef = document.querySelector('.banner .lef img')
    // lef.addEventListener('mouseover', function () {
    //   lef.src = './images/lefthover.png'
    // })
    // lef.addEventListener('mouseout', function () {
    //   lef.src = './images/left.png'
    // })
    // const rgt = document.querySelector('.banner .rgt img')
    // rgt.addEventListener('mouseover', function () {
    //   rgt.src = './images/righthover.png'
    // })
    // rgt.addEventListener('mouseout', function () {
    //   rgt.src = './images/right.png'
  }, 1500)
})

const goodList = [
  { url: './uploads/6.jpg', sp: '《羊脂球》', wr: '莫泊桑', p: ' 是中短篇小说集，包括《羊脂球》、《等待》、《米隆老爹》等72篇小说，充分体现了莫泊桑中短篇小说取材的广泛性，涵盖了当时法国社会生活的方方面面，能让读者一睹大师高超的艺术技巧。', btn: '加入书单', num: 1 },
  { url: './uploads/7.jpg', sp: '《格林童话》', wr: '雅各布格林', p: '是由德国语言学家雅各布·格林和 威廉·格林 兄弟收集、整理、加工完成的德国民间文学。 《格林童话》里面约有200多个故事，大部分源自民间的口头传说', btn: '加入书单', num: 1 },
  { url: './uploads/8.jpg', sp: '《资治通鉴》', wr: '司马光', p: '的书名是宋神宗钦定的，其书以“鉴前世之兴衰，考当今之得失”为宗旨，其中“兴邦之远略，善俗之良规，匡君之格言，立朝之大节，叩函发帙，靡不具焉”，自古被视为学习历史，吸取经验，学习治国理政、修身齐家之道的经典之作。', btn: '加入书单', num: 1 },
  { url: './uploads/9.jpg', sp: '《百年孤独》', wr: '马尔克斯', p: '以布恩地亚被捆在树上为开端，以他被蚂蚁吃掉为结束，通过细腻丰富的笔触、大胆自由的想象、魔幻的叙事艺术，讲述布恩地亚家族命运与历史，刻画人物孤独的灵魂与自我救赎，进而体现出个人、家族及全人类的悲悯与孤独情怀，让人们重新思考时代发展与人性变化。', btn: '加入书单', num: 1 },
  { url: './uploads/10.jpg', sp: '《诗词格律》', wr: '王力', p: '所讲的诗词格律，大部分是前人研究的成果，也有一些地方是著者自己的意见。', btn: '加入书单', num: 1 },
  { url: './uploads/11.jpg', sp: '《儒林外史》', wr: '吴敬梓', p: '是清代 吴敬梓 所作的长篇讽刺小说，描写了一些深受八股科举制度毒害的儒生，反映了当时世俗风气的败坏。', btn: '加入书单', num: 1 },
  { url: './uploads/12.jpg', sp: '《朝花夕拾》', wr: '鲁迅', p: '原名《旧事重提》，是现代文学家 鲁迅 的 散文 集，收录鲁迅于1926年创作的10篇回忆性 散文 ， 1928年由北京未名社出版，现编入《 鲁迅全集 》第2卷。', btn: '加入书单', num: 1 },
  { url: './uploads/13.jpg', sp: '《C语言程序设计', wr: '谭浩强', p: ' (第2版) 本书以C语言为平台，介绍程序设计的思想和方法。 通过学习，使学生不但掌握高级编程语言的知识、编程技术和基本算法', btn: '加入书单', num: 1 },
]
document.querySelector('.recommend ul').innerHTML = goodList.map(ele => {
  return `
  <li>
  <img src="${ele.url}" alt="">
  <span ">${ele.sp}</span>
  <span class='wr' >${ele.wr}</span>
  <p>${ele.p}</p>
  
  <div class="cover"><p class="p1">书名：${ele.sp}</p>  <p class="p2">作者:${ele.wr}</p>
  <button>${ele.btn}</button>
  </div>
  </li>
  
  `

  // // 1. 根据数据渲染页面
  // document.querySelector('.list').innerHTML = goodsList.map(ele => {
  //   // console.log(item)  // 每一条对象
  //   // 对象解构  item.price item.count
  //   const { picture, name, count, price, spec, gift } = item
  //   // 规格文字模块处理
  //   const text = Object.values(spec).join('/')
  //   // 计算小计模块 单价 * 数量  保留两位小数 
  //   // 注意精度问题，因为保留两位小数，所以乘以 100  最后除以100
  //   const subTotal = ((price * 100 * count) / 100).toFixed(2)
  //   // 处理赠品模块 '50g茶叶,清洗球'
  //   const str = gift ? gift.split(',').map(item => `<span class="tag">【赠品】${item}</span> `).join('') : ''
  //   return `
  //     <div class="item">
  //       <img src=${picture} alt="">
  //       <p class="name">${name} ${str} </p>
  //       <p class="spec">${text} </p>
  //       <p class="price">${price.toFixed(2)}</p>
  //       <p class="count">x${count}</p>
  //       <p class="sub-total">${subTotal}</p>
  //     </div>
  //   `
  // }).join('')

  // // 3. 合计模块
  // const total = goodsList.reduce((prev, item) => prev + (item.price * 100 * item.count) / 100, 0)
  // // console.log(total)
  // document.querySelector('.amount').innerHTML = total.toFixed(2)
}).join('')
const newList = []

const sub = document.querySelectorAll('.recommend ul li button')
const wr = document.querySelectorAll('.recommend ul li .wr')
const sp = document.querySelectorAll('.recommend ul li span')


for (let i = 0; i < sub.length; i++) {

  sub[i].addEventListener('click', function () {
    sub[i].innerHTML = '已加入'
    sub[i].classList.add('submit')


    newList.push({
      numb: newList.length + 1,

      sp: sp[i].innerText,
      wr: wr[i].innerText

    })

    document.querySelector('.my .add').innerHTML = newList.map(ele => {
      return `
      <tr>
        <td>${ele.numb}</td>
        <td>${ele.sp}</td>
        <td>${ele.wr}</td>
        <td>1</td>
      </tr>
    
    `



    })

  })

}
const elevator = document.querySelector('.elevator')
window.addEventListener('scroll', function () {
  const n = document.documentElement.scrollTop
  if (n >= 200) {
    elevator.style.opacity = 1
  }
  else {
    elevator.style.opacity = 0
  }
  if (n < 500) {
    rbook.style.backgroundColor = '#b8daff'
  }
  else {
    rbook.style.backgroundColor = '#ffffff'
  }
  if (n > 500 && n < 1400) {
    tbook.style.backgroundColor = '#b8daff'

  }
  else {
    tbook.style.backgroundColor = '#ffffff'
  }
  if (n > 1400) {
    mbook.style.backgroundColor = '#b8daff'
  }
  else {
    mbook.style.backgroundColor = '#ffffff'
  }
})

const backtop = document.querySelector('.elevator li:last-child')
backtop.addEventListener('click', function () {
  document.documentElement.scrollTop = 0
})
const rbook = document.querySelector('.elevator li:nth-child(1)')
const tbook = document.querySelector('.elevator li:nth-child(2)')
const mbook = document.querySelector('.elevator li:nth-child(3)')
