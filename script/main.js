let dotWrapper = document.querySelector('.pagination__dots')
let treeItems = [...document.querySelectorAll('.tree-item')]
let dots = []

let dotClass = 'pagination__dot'
let activeClass = 'active'
let hiddenClass = 'hidden'

let activeBlock
let nextActiveBlock

InitDots()
addEventListener('scroll', CheckBlocks)

function InitDots() {
    treeItems.forEach(block => {
        dots.push(NewDot())
        Check(block)
    })
    SetActive(nextActiveBlock)
}

function NewDot() {
    let dot = document.createElement('div')
    dot.className = dotClass
    dotWrapper.append(dot)
    return dot
}

dots.forEach((dot, index) => dot.addEventListener('click', (e) => {
    SetActive(treeItems[index])
    ScrollToElem(treeItems[index])
}))


function ScrollToElem(block) {
    block.scrollIntoView({ behavior: 'smooth', block: 'center' })
}

function CheckBlocks() {
    treeItems.forEach(Check)
    SetActive(nextActiveBlock)
}

function Check(block) {
    if (IsVisible(block)) {
        Show(block)
        nextActiveBlock = block
    } else {
        Hide(block)
    }
}

function IsVisible(block) {
    let rect = block.getBoundingClientRect()
    let blockCenter = rect.top + .5 * rect.height
    let windowThreshold = 0.8 * window.innerHeight
    return blockCenter - windowThreshold <= 0
}

function Show(block) {
    block.classList.remove(hiddenClass)
}

function Hide(block) {
    block.classList.add(hiddenClass)
}


function SetActive(block) {
    if (activeBlock) {
        dots[treeItems.indexOf(activeBlock)].classList.remove(activeClass)
        activeBlock.classList.remove(activeClass)
    }

    activeBlock = block

    if (activeBlock) {
        dots[treeItems.indexOf(activeBlock)].classList.add(activeClass)
        activeBlock.classList.add(activeClass)
    }
}


let toggler = document.querySelector(".toggler")
let menu = document.querySelector(".header__menu")

toggler.addEventListener('click', () => {
    ToggleToggler()
    ToggleMenu()
})


function ToggleMenu() {
    menu.classList.toggle('header__menu_open')
}

function ToggleToggler() {
    toggler.classList.toggle('toggler_active')
}
