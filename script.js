import frameSeq from "./rickroll.js";

const LINES_PER_FRAME = 36;
const FRAME_RATE = 15;

const lines = frameSeq.split('\n').map(line => line.trim());
const frames = [];

for (let i = 0; i < lines.length; i += LINES_PER_FRAME) {
    frames.push(lines.slice(i, i + LINES_PER_FRAME).join('\n'));
}

const totalFrames = frames.length;
let currentFrame = 0;

function renderFrame() {
    animation.textContent = frames[currentFrame];
}

function animate() {
    setInterval(() => {
        renderFrame();
        currentFrame = (currentFrame + 1) % totalFrames;
    }, 1000 / FRAME_RATE);
}

animate();
