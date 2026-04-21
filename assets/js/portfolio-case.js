/* ─────────────────────────────────────────
   portfolio-case.js — Curseur des galeries
───────────────────────────────────────── */

function expandCursor() {
    const cur = document.getElementById('cursor');
    const ring = document.getElementById('cursor-ring');
    if (cur && ring) {
        cur.style.transform = 'translate(-50%,-50%) scale(0)';
        ring.style.opacity = '1';
        ring.style.width = '70px';
        ring.style.height = '70px';
        ring.style.background = 'rgba(255,255,255,.05)';
        ring.style.border = '1px dashed rgba(255,255,255,.8)';
    }
}

function shrinkCursor() {
    const cur = document.getElementById('cursor');
    const ring = document.getElementById('cursor-ring');
    if (cur && ring) {
        cur.style.transform = 'translate(-50%,-50%) scale(1)';
        ring.style.opacity = '.5';
        ring.style.width = '36px';
        ring.style.height = '36px';
        ring.style.background = 'transparent';
        ring.style.border = '1px solid rgba(255,255,255,1)';
    }
}
