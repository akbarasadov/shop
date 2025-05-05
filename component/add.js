export function add(item, place) {
    let block = document.createElement("div")
    let img = document.createElement("img")
    let text = document.createElement("div")
    let h2 = document.createElement("h2")
    let text_p = document.createElement("p")
    let detales = document.createElement("div")
    let btn = document.createElement("button")

    let detale1 = document.createElement("div")
    let detale2 = document.createElement("div")
    let detale3 = document.createElement("div")

    let detale_price = document.createElement("p")
    let detale_star = document.createElement("p")
    let detale_box = document.createElement("p")

    let detale_price_img = document.createElement("img")
    let detale_star_img = document.createElement("img")
    let detale_box_img = document.createElement("img")

    detale_box_img.setAttribute("src", "./img/box.svg")
    detale_star_img.setAttribute("src", "./img/star.svg")
    detale_price_img.setAttribute("src", "./img/dolor.svg")



    block.classList.add("block")
    img.classList.add("img")
    text.classList.add("text")
    text_p.classList.add("text_p")
    detales.classList.add("detales")

    detale_price.textContent = item.price
    detale_star.textContent = item.rating.rate
    detale_box.textContent = item.rating.count

    img.setAttribute("src", item.image)

    btn.classList.add("btn")

    btn.onclick = () => {
        btn.textContent = "Добавлено"
        btn.classList.add("active")
    }

    btn.ondblclick = () => {
        btn.textContent = "В избранное"
        btn.classList.remove("active")
    }

    text_p.textContent = item.description

    h2.textContent = item.title

    btn.textContent = "В избранное"

    detale1.append(detale_price_img, detale_price)
    detale2.append(detale_star_img, detale_star)
    detale3.append(detale_box_img, detale_box)

    detales.append(detale1, detale2, detale3)

    text.append(h2, text_p, detales, btn)
    block.append(img, text)
    place.append(block)

    return block
}