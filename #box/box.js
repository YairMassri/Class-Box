const boxes = document.querySelectorAll('.col');

for (var i = 0; i < boxes.length; i++) {
    boxes[i].textContent = (i + 1).toString();
}

class Squares {
    constructor() {
        this.colors = [
            'rgb(255, 165, 0)',
            'rgb(0, 128, 0)',
            'rgb(255, 255, 255)',
            'rgb(128, 0, 128)',
            'rgb(255, 192, 203)'
        ]

        this.addClickHandler()
    }
    changeNumber(num) {
        for (var i = num; i > 0; i--) {
            let value = parseInt(boxes[i - 1].textContent)
            value = (value >= boxes.length) ? 1 : value + 1
            boxes[i - 1].textContent = value.toString()
        }
    }
    changeColor(num) {
        for (var i = num; i > 0; i--) {
            let style = window.getComputedStyle(boxes[i - 1])
            let index = this.colors.indexOf(style.backgroundColor)
            index = (index >= this.colors.length - 1) ? 0 : index + 1
            // console.log(index)
            boxes[i - 1].style.backgroundColor = this.colors[index]
        }


    }
    addClickHandler() {
        boxes.forEach(box => {
            box.addEventListener('click', e => {
                this.changeNumber(box.dataset.number)
                this.changeColor(box.dataset.number)
            })
        })
    }
}

const squares = new Squares()

