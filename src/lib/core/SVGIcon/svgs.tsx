import * as React from 'react';

const svgs = {
    wifiHigh: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="16" viewBox="0 0 20 16">
        <g fill="#7F7E85" fill-rule="nonzero" transform="translate(0 .375)">
            <circle cx="10" cy="13.132" r="1.875" />
            <path d="M19.483 3.9a13.253 13.253 0 0 0-9.4-3.893A13.256 13.256 0 0 0 .681 3.9S-.542 4.914.29 5.664c.801.722 1.734-.421 1.734-.421a11.36 11.36 0 0 1 8.059-3.337c3.146 0 5.995 1.275 8.057 3.337 0 0 1.062.995 1.656.164.593-.83-.313-1.507-.313-1.507z" />
            <path d="M16.796 6.586a9.462 9.462 0 0 0-6.713-2.781 9.463 9.463 0 0 0-6.715 2.781s-1.218.977-.427 1.73c.792.75 1.77-.387 1.77-.387a7.575 7.575 0 0 1 5.371-2.225c2.097 0 3.997.85 5.372 2.225 0 0 1.018 1.1 1.71.387.692-.713-.368-1.73-.368-1.73z" />
            <path d="M10.082 7.603a5.68 5.68 0 0 0-4.028 1.669s-1.155.883-.363 1.675c.792.791 1.706-.331 1.706-.331a3.783 3.783 0 0 1 2.685-1.113c1.05 0 1.998.425 2.686 1.113 0 0 .974 1.023 1.607.33.633-.692-.264-1.674-.264-1.674a5.683 5.683 0 0 0-4.029-1.669z" />
        </g>
    </svg>,
    wifiMedium: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="15" viewBox="0 0 20 15">
        <g fill="#7F7E85" fill-rule="nonzero" transform="translate(-.5 -.25)">
            <circle cx="10.5" cy="13.382" r="1.875" />
            <path d="M10.582 7.853a5.68 5.68 0 0 0-4.028 1.669s-1.155.883-.363 1.675c.792.791 1.706-.331 1.706-.331a3.783 3.783 0 0 1 2.685-1.113c1.05 0 1.998.425 2.686 1.113 0 0 .974 1.023 1.607.33.633-.692-.264-1.674-.264-1.674a5.683 5.683 0 0 0-4.029-1.669z" />
            <path d="M17.296 6.836a9.462 9.462 0 0 0-6.713-2.781 9.463 9.463 0 0 0-6.715 2.781s-1.218.977-.427 1.73c.792.75 1.77-.387 1.77-.387a7.575 7.575 0 0 1 5.371-2.225c2.097 0 3.997.85 5.372 2.225 0 0 1.018 1.1 1.71.387.692-.713-.368-1.73-.368-1.73z" />
            <path d="M19.983 4.15a13.253 13.253 0 0 0-9.4-3.893A13.256 13.256 0 0 0 1.181 4.15S-.042 5.164.79 5.914c.801.722 1.734-.421 1.734-.421a11.36 11.36 0 0 1 8.059-3.337c3.146 0 5.995 1.275 8.057 3.336 0 0 1.062.996 1.656.165.593-.83-.313-1.507-.313-1.507z" opacity=".3" />
        </g>
    </svg>,
    wifiLow: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="16" viewBox="0 0 20 16">
        <g fill="#7F7E85" fill-rule="nonzero" transform="translate(-.5 .25)">
            <circle cx="10.5" cy="13.382" r="1.875" />
            <path d="M10.582 7.853a5.68 5.68 0 0 0-4.028 1.669s-1.155.883-.363 1.675c.792.791 1.706-.331 1.706-.331a3.783 3.783 0 0 1 2.685-1.113c1.05 0 1.998.425 2.686 1.113 0 0 .974 1.023 1.607.33.633-.692-.264-1.674-.264-1.674a5.683 5.683 0 0 0-4.029-1.669z" />
            <path d="M17.296 6.836a9.462 9.462 0 0 0-6.713-2.781 9.463 9.463 0 0 0-6.715 2.781s-1.218.977-.427 1.73c.792.75 1.77-.387 1.77-.387a7.575 7.575 0 0 1 5.371-2.225c2.097 0 3.997.85 5.372 2.225 0 0 1.018 1.1 1.71.387.692-.713-.368-1.73-.368-1.73z" opacity=".3" />
            <path d="M19.983 4.15a13.253 13.253 0 0 0-9.4-3.893A13.256 13.256 0 0 0 1.181 4.15S-.042 5.164.79 5.914c.801.722 1.734-.421 1.734-.421a11.36 11.36 0 0 1 8.059-3.337c3.146 0 5.995 1.275 8.057 3.336 0 0 1.062.996 1.656.165.593-.83-.313-1.507-.313-1.507z" opacity=".3" />
        </g>
    </svg>,
    ethernet: <svg xmlns="http://www.w3.org/2000/svg" width="18" height="19" viewBox="0 0 18 19">
        <g fill="none" fill-rule="evenodd">
            <path stroke="#979797" stroke-width="2" d="M5.492 11.757V16.793c0 .51.414.923.924.923h6.75a.91.91 0 0 0 .91-.91V7.043c0-.391.317-.708.708-.708h1.302c.417 0 .755.338.755.754V14.09" />
            <path fill="#DAE2E5" d="M1.767 2.989h7.451V15.02H1.767z" />
            <path fill="#C6CCCE" d="M.829.5h9.484v12.031H.829z" />
            <path fill="#979797" d="M0 2.989h11.143v8.768H0z" />
            <g fill="#979797">
                <path d="M3.592.5h1v1.814h-1zM5.143.5h1v1.814h-1zM6.693.5h1v1.814h-1z" />
            </g>
        </g>
    </svg>,
};

export default svgs;
