declare module 'web-vitals' {
    export const onCLS: (callback: (metric: { name: string; value: number }) => void) => void;
    export const onFID: (callback: (metric: { name: string; value: number }) => void) => void;
    export const onFCP: (callback: (metric: { name: string; value: number }) => void) => void;
    export const onLCP: (callback: (metric: { name: string; value: number }) => void) => void;
    export const onTTFB: (callback: (metric: { name: string; value: number }) => void) => void;
}