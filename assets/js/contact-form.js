document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contact-form');

    if (!form) {
        return;
    }

    form.addEventListener('submit', async function (event) {
        event.preventDefault();

        const submitButton = form.querySelector('button[type="submit"]');
        const messageElement = document.getElementById('form-message');

        if (!submitButton || !messageElement) {
            return;
        }

        const originalButtonText = submitButton.innerHTML;

        submitButton.innerHTML = 'Sending...';
        submitButton.disabled = true;

        messageElement.className = 'text-sm font-bold text-slate-500';
        messageElement.textContent = messageElement.dataset.sending || 'Sending...';

        const formData = new FormData(form);
        const email = formData.get('email') || '';

        const payload = {
            site: 'kaiseilearntravel',
            form: 'contact',
            replyTo: email,
            data: {
                'お名前': formData.get('name') || '',
                '会社名': formData.get('company') || '',
                'メール': email,
                '国': formData.get('country') || '',
                'カテゴリー': formData.get('category') || '',
                'お問い合わせ内容': formData.get('message') || ''
            }
        };

        try {
            const response = await fetch(
                'https://api.yasashiikaikei.com/api/v1/contact',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(payload)
                }
            );

            let result = {};

            try {
                result = await response.json();
            } catch (error) {
                // API response is not JSON
            }

            if (!response.ok) {
                throw new Error(
                    result.message || `API request failed (${response.status})`
                );
            }

            messageElement.className =
                'text-sm font-bold text-emerald-600';

            messageElement.textContent =
                messageElement.dataset.success || 'Message sent successfully.';

            form.reset();

        } catch (error) {
            console.error('Contact form error:', error);

            messageElement.className =
                'text-sm font-bold text-red-600';

            messageElement.textContent =
                messageElement.dataset.error ||
                'Failed to send your message. Please try again later.';

        } finally {
            submitButton.innerHTML = originalButtonText;
            submitButton.disabled = false;
        }
    });
});