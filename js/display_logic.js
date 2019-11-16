const canvas = document.getElementById('game-area');
const context = canvas.getContext('2d');
const dpi = window.devicePixelRatio;

function fixdpi() {
    let style_height = 
    +getComputedStyle(canvas).getPropertyValue("height").slice(0, -2);
    let style_width = +getComputedStyle(canvas).getPropertyValue("width").slice(0, -2);
    canvas.setAttribute('height', style_height * dpi);
    canvas.setAttribute('width', style_width * dpi);
    context.moveTo(0, 0);
    context.lineTo(canvas.width, canvas.height);
    context.stroke();
    context.moveTo(canvas.width, 0);
    context.lineTo(0, canvas.height);
    context.stroke();
}

fixdpi()