/* ─────────────────────────────────────────
   simulation.js — Logique du simulateur
───────────────────────────────────────── */

(function () {
    const cards = document.querySelectorAll('.sim-card');
    const lineList = document.getElementById('lineList');
    const emptyState = document.getElementById('emptyState');
    const totalPriceEl = document.getElementById('totalPrice');
    const countBadge = document.getElementById('countBadge');
    let selected = {};

    function formatNum(n) {
        return n.toLocaleString('fr-FR');
    }

    function updatePanel() {
        const keys = Object.keys(selected);
        const count = keys.length;

        // Update count badge
        countBadge.textContent = count;
        countBadge.className = 'sim-count-badge' + (count === 0 ? ' zero' : '');

        // Rebuild lines
        lineList.innerHTML = '';
        if (count === 0) {
            lineList.appendChild(emptyState.cloneNode(true));
        } else {
            keys.forEach(k => {
                const line = document.createElement('div');
                line.className = 'sim-line';
                line.innerHTML = `<span class="sim-line-name">${k}</span><span class="sim-line-val">${formatNum(selected[k])}</span>`;
                lineList.appendChild(line);
            });
        }

        const total = keys.reduce((s, k) => s + selected[k], 0);
        totalPriceEl.textContent = formatNum(total);
    }

    cards.forEach(card => {
        card.addEventListener('click', () => {
            const svc = card.dataset.service;
            const price = parseInt(card.dataset.price);
            if (selected[svc] !== undefined) {
                delete selected[svc];
                card.classList.remove('selected');
            } else {
                selected[svc] = price;
                card.classList.add('selected');
            }
            updatePanel();
            updateMailLink();
        });
    });

    function updateMailLink() {
        const btnSim = document.querySelector('.btn-sim');
        if (!btnSim) return;

        const keys = Object.keys(selected);
        if (keys.length === 0) {
            btnSim.href = "contact.html";
            return;
        }

        let body = "Bonjour l'équipe Morningcom,\n\nJe souhaiterais obtenir un devis précis pour les services suivants :\n\n";
        let total = 0;
        keys.forEach(k => {
            body += `- ${k} (${formatNum(selected[k])} FCFA)\n`;
            total += selected[k];
        });
        body += `\nEstimation totale indicative : ${formatNum(total)} FCFA HT\n\nMerci de me recontacter pour affiner ce projet.\n\nCordialement,`;

        const subject = encodeURIComponent("Demande de devis - Morningcom");
        const encodedBody = encodeURIComponent(body);
        btnSim.href = `mailto:contact@morningcom.agency?subject=${subject}&body=${encodedBody}`;
    }

    // Pré-sélection via URL (ex: ?select=Web)
    const urlParams = new URLSearchParams(window.location.search);
    const preselect = urlParams.get('select');
    if (preselect) {
        cards.forEach(card => {
            // Correspondance souple sur le nom du service
            if (card.dataset.service.toLowerCase().includes(preselect.toLowerCase())) {
                card.click();
            }
        });
    }

    updatePanel();
    updateMailLink();
})();
