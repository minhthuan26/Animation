const activeAnimationOnScroll = (selector, activeName, unobserve, rootMargin) => {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            entry.target.classList.toggle(activeName, entry.isIntersecting)
            if (unobserve && entry.isIntersecting) {
                observer.unobserve(entry.target)
            }
        });
    },
        {
            rootMargin: rootMargin,
        }
    );

    // Get multiple elements instead of a single one using "querySelectorAll"
    const elements = document.querySelectorAll(selector);

    // Loop over the elements and add each one to the observer
    elements.forEach((element) => observer.observe(element));
}


const generateId = (prefix) => {
    return prefix + Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
}

/*--- backdrop ---*/
/* 
<div class="backdrop">
    <div class="backdrop-container">
        <div class="backdrop-content">
            <p>This is backdrop content</p>
        </div>
    </div>
</div> 
*/
const activeBackdrop = (unobserve, rootMargin) => {
    activeAnimationOnScroll(".backdrop", "active-backdrop", unobserve, rootMargin)
}

const activeBackdropOnHover = () => {
    const backdrops = document.querySelectorAll('.backdrop')
    backdrops.forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.classList.add('active-backdrop')
        })
    })
    backdrops.forEach(item => {
        item.addEventListener('mouseleave', () => {
            item.classList.remove('active-backdrop')
        })
    })
}
/*--- end backdrop ---*/

/*--- move-from-left ---*/
const activeMoveFromLeft = (unobserve, rootMargin) => {
    var element = document.querySelector(".move-from-left")
    element.style.transform = `translateX(${-element.offsetLeft}px)`
    activeAnimationOnScroll(".move-from-left", "active-move-from-left", unobserve, rootMargin)
}
/*--- end move-from-left ---*/

/*--- move-from-right ---*/
const activeMoveFromRight = (unobserve, rootMargin) => {
    var element = document.querySelector(".move-from-right")
    element.style.transform = `translateX(${element.offsetLeft}px)`
    activeAnimationOnScroll(".move-from-right", "active-move-from-right", unobserve, rootMargin)
}
/*--- end move-from-right ---*/

/*--- custom colors for cloud class ---*/
/* 
<div class="cloud-sun">
    <div class="cloud-container-front">
        <div class="circle-1"></div>
        <div class="circle-2"></div>
        <div class="circle-3"></div>
        <div class="rect-1"></div>
    </div>
    <div class="cloud-container-front-shadow">
        <div class="circle-1"></div>
        <div class="circle-2"></div>
        <div class="circle-3"></div>
        <div class="rect-1"></div>
    </div>
    <div class="sun">

    </div>
    <div class="cloud-container-back">
        <div class="circle-1"></div>
        <div class="circle-2"></div>
        <div class="circle-3"></div>
        <div class="rect-1"></div>
    </div>
    <div class="cloud-container-back-shadow">
        <div class="circle-1"></div>
        <div class="circle-2"></div>
        <div class="circle-3"></div>
        <div class="rect-1"></div>
    </div>
</div> 
*/

const create_cloud_sun = (placeAt, isCreateSun = false, frontColor = 'orange', frontShadowColor = 'white', backColor = 'purple', backShadowColor = 'darkgrey', sunColor = 'red') => {
    const parent = document.querySelector(placeAt)
    const root = document.createElement('div')
    root.classList.add(isCreateSun ? 'cloud-sun' : 'cloud')

    const circle_1 = document.createElement('div')
    circle_1.classList.add('circle-1')

    const circle_2 = document.createElement('div')
    circle_2.classList.add('circle-2')

    const circle_3 = document.createElement('div')
    circle_3.classList.add('circle-3')

    const rect_1 = document.createElement('div')
    rect_1.classList.add('rect-1')

    const cloud_container_front = document.createElement('div')
    cloud_container_front.classList.add('cloud-container-front')
    if (frontColor) {
        circle_1.style.background = frontColor
        circle_2.style.background = frontColor
        circle_3.style.background = frontColor
        rect_1.style.background = frontColor
    }
    cloud_container_front.appendChild(circle_1.cloneNode(true))
    cloud_container_front.appendChild(circle_2.cloneNode(true))
    cloud_container_front.appendChild(circle_3.cloneNode(true))
    cloud_container_front.appendChild(rect_1.cloneNode(true))
    root.appendChild(cloud_container_front)

    const cloud_container_front_shadow = document.createElement('div')
    cloud_container_front_shadow.classList.add('cloud-container-front-shadow')
    if (frontShadowColor) {
        circle_1.style.background = frontShadowColor
        circle_2.style.background = frontShadowColor
        circle_3.style.background = frontShadowColor
        rect_1.style.background = frontShadowColor
    }
    cloud_container_front_shadow.appendChild(circle_1.cloneNode(true))
    cloud_container_front_shadow.appendChild(circle_2.cloneNode(true))
    cloud_container_front_shadow.appendChild(circle_3.cloneNode(true))
    cloud_container_front_shadow.appendChild(rect_1.cloneNode(true))
    root.appendChild(cloud_container_front_shadow)

    if (isCreateSun) {
        const sun = document.createElement('div')
        sun.classList.add('sun')
        if (sunColor) {
            sun.style.background = sunColor
        }
        root.appendChild(sun)
    }

    const cloud_container_back = document.createElement('div')
    cloud_container_back.classList.add('cloud-container-back')
    if (backColor) {
        circle_1.style.background = backColor
        circle_2.style.background = backColor
        circle_3.style.background = backColor
        rect_1.style.background = backColor
    }
    cloud_container_back.appendChild(circle_1.cloneNode(true))
    cloud_container_back.appendChild(circle_2.cloneNode(true))
    cloud_container_back.appendChild(circle_3.cloneNode(true))
    cloud_container_back.appendChild(rect_1.cloneNode(true))
    root.appendChild(cloud_container_back)

    const cloud_container_back_shadow = document.createElement('div')
    cloud_container_back_shadow.classList.add('cloud-container-back-shadow')
    if (backShadowColor) {
        circle_1.style.background = backShadowColor
        circle_2.style.background = backShadowColor
        circle_3.style.background = backShadowColor
        rect_1.style.background = backShadowColor
    }
    cloud_container_back_shadow.appendChild(circle_1.cloneNode(true))
    cloud_container_back_shadow.appendChild(circle_2.cloneNode(true))
    cloud_container_back_shadow.appendChild(circle_3.cloneNode(true))
    cloud_container_back_shadow.appendChild(rect_1.cloneNode(true))
    root.appendChild(cloud_container_back_shadow)

    parent.appendChild(root)

}
/*--- end custom colors for cloud class ---*/

/*--- door animation ---*/
/* 
<div class="door-animation">
    <div class="door-left">
    </div>
    <div class="door-right">
    </div>
</div> 
*/
const create_door_animation = (placeAt, doorImage) => {
    const parent = document.querySelector(placeAt)
    const door_animation = document.createElement('div')
    door_animation.classList.add('door-animation')
    const door_left = document.createElement('div')
    door_left.classList.add('door-left')
    door_left.style.backgroundImage = `url(${doorImage})`
    const door_right = document.createElement('div')
    door_right.classList.add('door-right')
    door_right.style.backgroundImage = `url(${doorImage})`
    door_animation.appendChild(door_left.cloneNode(true))
    door_animation.appendChild(door_right.cloneNode(true))
    parent.appendChild(door_animation)
}
/*--- end door animation ---*/

/*--- flip animation ---*/
/* 
<div class="flip-container">
    <div class="flip-front-side">This ia front side</div>
    <div class="flip-back-side">This is back side</div>
</div>
*/
const activeFlip = () => {
    const flip_containers = document.querySelectorAll('.flip-container')
    flip_containers.forEach((item, index) => {
        const front = item.querySelector('.flip-front-side')
        const back = item.querySelector('.flip-back-side')
        if (front && back) {
            item.addEventListener('mouseenter', () => {
                front.classList.remove('flip-up')
                back.classList.remove('flip-down')
                front.classList.add('flip-down')
                back.classList.add('flip-up')
            })

            item.addEventListener('mouseleave', () => {
                front.classList.remove('flip-down')
                back.classList.remove('flip-up')
                front.classList.add('flip-up')
                back.classList.add('flip-down')
            })
        }
    })
}
/*--- end flip animation ---*/