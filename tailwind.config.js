import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.vue',
    ],

    theme: {
        extend: {
            transitionProperty: {
                'top': 'top',
                'padding': 'padding',
            },
            transitionDuration: {
                '400': '400ms',
                '500': '500ms',
                '1000': '1000ms',
            },
            transitionTimingFunction: {
                'custom-top-animate': 'cubic-bezier(0.89, 0.58, 0, 1.28)',
            },
            borderRadius: {
                'sm': '4px',
                'md': '6px',
                'lg': '8px'
            },
            boxShadow: {
                'md': '2px 2px 8px 0px rgba(51, 51, 51, 0.20);',
            },
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                d_white: {
                    20: '#EFEFEF',
                    30: '#F0F9FF',
                    40: '#FCFCFC',
                    50: '#FEFEFE',
                    80: '#E6E6E633',
                },
                d_primary: {
                    30: '#BAE5FD',
                    50: '#082E49',
                    60: '#0387D1',
                    70: '#0FA1E8',
                    80: '#0466A0',
                    90: '#085784',
                },
                d_warning: {
                    10: '#FED7AA',
                    20: '#FFF7ED',
                    50: '#FDBA74',
                    90: '#FF8200',
                },
                d_info: {
                    30: '#E0F1FE',
                    40: '#39B9F7',
                    50: '#4270ED',
                    55: '#4270ED1A'
                },
                d_secondary: {
                    50: '#431407',
                    60: '#F97316',
                    70: '#FB923C',
                    100: '#7C2D12',
                },
                d_gray: {
                    5: '#B3B3B3',
                    8: '#E6E6E633',
                    10: '#F5F5F5',
                    12: '#F8F8F8',
                    20: '#E6E6E6',
                    30: '#666666',
                    31: '#6666661a',
                    40: '#CCC',
                    50: '#808080',
                    60: '#999',
                    90: '#070E2133',
                },
                d_blue: {
                    10: '#0b70a8',
                    20: '#0C486E'
                },
                d_background: {
                    50: '#070E21'
                },
                d_success: {
                    5: '#22BA4F1A',
                    10: '#22BA4F33',
                    50: '#22BA4F'
                },
                d_danger: {
                    5: '#E5233A0D',
                    6: '#E5233A33',
                    10: '#FFEDD5',
                    40: '#C2410C',
                    50: '#E5233A',
                    60: '#9A3412'
                }
            },
            screens: {
                'xs': '375px',
                'sm': '576px',
                'max-sm': { max: '576px' },
                'md': '768px',
                'lg': '1280px',
                '2xl': '1536px',
                'hover-hover': { raw: '(hover: hover)' }
            },
            variants: {
                transitionProperty: ['responsive'],
                transitionTimingFunction: ['responsive'],
                transitionDuration: ['responsive'],
            },
        },
    },

    plugins: [forms],
};
