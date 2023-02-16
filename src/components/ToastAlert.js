import { toast } from 'wc-toast'

export const handleErrorToast = (msg) => {
    toast.error(msg);
};

export const handleSuccessToast = (msg) => {
    toast.success(msg);
};

export const handleLoadingToast = () => {
    toast.loading('Loading...', { duration: 4000 });
};

export const handleBlankToast = () => {
    toast('Hello World!');
};

export const handlePromiseToast = () => {
    toast.promise(
        new Promise((resolve, reject) => {
            setTimeout(() => {
                if ((Math.random(10) * 10) % 2 === 0) {
                    resolve('foo');
                } else {
                    reject('bar');
                }
            }, 2500);
        }),
        {
            loading: 'Authenticating...',
            success: 'Authentication success!',
            error: 'Authentication failed!',
        }
    );
};

export const handleSVGToast = () => {
    toast('Custom SVG', {
        icon: {
            type: 'svg',
            content: `<svg
                    slot="svg"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    width="20"
                    height="20"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                    />
                  </svg>`,
        },
    });
};

export const handleEmojiToast = () => {
    toast('Hallooo', { icon: { type: 'custom', content: '👋🏻' } });
};

export const handleDarkToast = () => {
    toast('❤ Dark mode', { theme: { type: 'dark' } });
};

export const handleCustomToast = () => {
    toast('Wohooo', {
        icon: { type: 'custom', content: '🎉' },
        theme: {
            type: 'custom',
            style: { background: 'royalblue', color: 'white' },
        },
    });
};