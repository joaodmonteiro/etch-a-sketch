let boardContainer = document.querySelector(".boardContainer");
let optionsContainer = document.querySelector(".optionsContainer");
let painting = false;
let button16x16 = document.createElement('button');
let button32x32 = document.createElement('button');

button16x16.textContent = "16X16";
button32x32.textContent = "32X32";

optionsContainer.appendChild(button16x16);
optionsContainer.appendChild(button32x32);

for(let i=0; i<256; i++)
{
    let square = document.createElement('div');
    square.classList.add('square');
    boardContainer.appendChild(square);
}

button16x16.addEventListener("click", function() {
    document.querySelectorAll('.square').forEach(item => {
        item.remove();
    })
    for(let j=0; j<256; j++)
    {
        let square = document.createElement('div');
        square.classList.add('square');
        square.style.width = '20px';
        square.style.height = '20px';
        boardContainer.style.cssText = "grid-template-columns: repeat(16, auto);"
        boardContainer.appendChild(square);
    }

    document.querySelectorAll('.square').forEach(item => {
        item.addEventListener("mouseover", event => {
            if(painting)
                item.classList.add('hovered');
        })
    });
    
    document.querySelectorAll('.square').forEach(item => {
        item.addEventListener("mousedown", event => {
            item.classList.add('hovered');
        })
    });
});

button32x32.addEventListener("click", function() {
    document.querySelectorAll('.square').forEach(item => {
        item.remove();
    })
    for(let j=0; j<1024; j++)
    {
        let square = document.createElement('div');
        square.classList.add('square');
        square.style.width = '10px';
        square.style.height = '10px';
        boardContainer.style.cssText = "grid-template-columns: repeat(32, auto);"
        boardContainer.appendChild(square);
    }



    document.querySelectorAll('.square').forEach(item => {
        item.addEventListener("mouseover", event => {
            if(painting)
                item.classList.add('hovered');
        })
    });
    
    document.querySelectorAll('.square').forEach(item => {
        item.addEventListener("mousedown", event => {
            item.classList.add('hovered');
        })
    });
});
    
console.log(document.querySelectorAll('.square'));

document.addEventListener("mousedown", function() {
    painting = true;
});

document.addEventListener("mouseup", function() {
    painting = false;
});

document.querySelectorAll('.square').forEach(item => {
    item.addEventListener("mouseover", event => {
        if(painting)
            item.classList.add('hovered');
    })
});

document.querySelectorAll('.square').forEach(item => {
    item.addEventListener("mousedown", event => {
        item.classList.add('hovered');
    })
});

document.querySelector('.clearButton').addEventListener("click", function() {
    document.querySelectorAll('.square').forEach(item => {
        item.classList.remove('hovered');
    })
});





console.log('ola');
console.log(Math.sqrt(256));