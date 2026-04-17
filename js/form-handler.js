const WORKER_URL = 'https://dermocean-forms.afggadb.workers.dev';

const FORM_CONFIG = {
    'contact-form': {
        type: 'contact',
        fields: ['name', 'email', 'phone', 'message'],
        successMsg: { en: 'Message sent successfully!', ar: 'تم إرسال الرسالة بنجاح!', fr: 'Message envoyé avec succès!', tr: 'Mesaj başarıyla gönderildi!' },
        errorMsg: { en: 'Failed to send message. Please try again.', ar: 'فشل في إرسال الرسالة. يرجى المحاولة مرة أخرى.', fr: 'Échec de l\'envoi. Veuillez réessayer.', tr: 'Mesaj gönderilemedi. Lütfen tekrar deneyin.' }
    },
    'register-form': {
        type: 'register',
        fields: ['center_name', 'owner_name', 'license', 'phone', 'email'],
        successMsg: { en: 'Application submitted successfully!', ar: 'تم تقديم الطلب بنجاح!', fr: 'Candidature soumise avec succès!', tr: 'Başvuru başarıyla gönderildi!' },
        errorMsg: { en: 'Failed to submit application. Please try again.', ar: 'فشل في تقديم الطلب. يرجى المحاولة مرة أخرى.', fr: 'Échec de la soumission. Veuillez réessayer.', tr: 'Başvuru gönderilemedi. Lütfen tekrar deneyin.' }
    },
    'training-form': {
        type: 'training',
        fields: ['name', 'email', 'phone', 'country', 'business', 'experience', 'message'],
        successMsg: { en: 'Training request submitted!', ar: 'تم تقديم طلب التدريب!', fr: 'Demande de formation soumise!', tr: 'Eğitim talebi gönderildi!' },
        errorMsg: { en: 'Failed to submit request. Please try again.', ar: 'فشل في تقديم الطلب. يرجى المحاولة مرة أخرى.', fr: 'Échec de la soumission. Veuillez réessayer.', tr: 'Talep gönderilemedi. Lütfen tekrar deneyin.' }
    }
};

function getLang() {
    return localStorage.getItem('dermocean_lang') || 'en';
}

function addHoneypot(form) {
    if (form.querySelector('[name="honeypot"]')) return;
    const hp = document.createElement('input');
    hp.type = 'text';
    hp.name = 'honeypot';
    hp.style.cssText = 'position:absolute;left:-9999px;top:-9999px;opacity:0;height:0;width:0;';
    hp.setAttribute('autocomplete', 'off');
    hp.setAttribute('tabindex', '-1');
    form.appendChild(hp);
}

function getFormData(form, fieldNames) {
    const data = {};
    for (const name of fieldNames) {
        const el = form.querySelector(`[name="${name}"]`);
        if (el) data[name] = el.value.trim();
    }
    const hp = form.querySelector('[name="honeypot"]');
    if (hp) data.honeypot = hp.value;
    return data;
}

function showFormStatus(form, type, message) {
    let statusEl = form.querySelector('.form-status');
    if (!statusEl) {
        statusEl = document.createElement('div');
        statusEl.className = 'form-status';
        statusEl.style.cssText = 'padding:1rem;border-radius:8px;margin-top:1rem;font-weight:600;text-align:center;';
        form.appendChild(statusEl);
    }
    statusEl.style.background = type === 'success' ? '#d1fae5' : '#fee2e2';
    statusEl.style.color = type === 'success' ? '#065f46' : '#991b1b';
    statusEl.textContent = message;
    statusEl.style.display = 'block';

    setTimeout(() => { statusEl.style.display = 'none'; }, 5000);
}

function setLoading(btn, loading) {
    if (loading) {
        btn.dataset.originalText = btn.innerHTML;
        btn.disabled = true;
        btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i>';
    } else {
        btn.disabled = false;
        btn.innerHTML = btn.dataset.originalText || btn.textContent;
    }
}

async function handleFormSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const formId = form.id;
    const config = FORM_CONFIG[formId];
    if (!config) return;

    const submitBtn = form.querySelector('button[type="submit"], .submit-btn');
    if (submitBtn) setLoading(submitBtn, true);

    const data = getFormData(form, config.fields);
    const lang = getLang();

    try {
        const res = await fetch(`${WORKER_URL}/api/form`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ form_type: config.type, ...data }),
        });

        const result = await res.json();

        if (res.ok && result.success) {
            showFormStatus(form, 'success', config.successMsg[lang] || config.successMsg.en);
            form.reset();

            if (formId === 'register-form') {
                const modal = document.querySelector('.modal');
                if (modal) modal.style.display = 'flex';
            }
        } else if (res.status === 429) {
            showFormStatus(form, 'error', { en: 'Too many requests. Please wait a minute.', ar: 'طلبات كثيرة. يرجى الانتظار.', fr: 'Trop de requêtes. Veuillez patienter.', tr: 'Çok fazla istek. Lütfen bekleyin.' }[lang]);
        } else {
            showFormStatus(form, 'error', config.errorMsg[lang] || config.errorMsg.en);
        }
    } catch {
        showFormStatus(form, 'error', config.errorMsg[lang] || config.errorMsg.en);
    } finally {
        if (submitBtn) setLoading(submitBtn, false);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    Object.keys(FORM_CONFIG).forEach(formId => {
        const form = document.getElementById(formId);
        if (form) {
            addHoneypot(form);
            form.addEventListener('submit', handleFormSubmit);
        }
    });
});
