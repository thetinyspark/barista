/**
 * The CanvasUtils class is a set of utilitaries for canvas elements.
 */
export default class CanvasUtils {
    static create(width?: number, height?: number): HTMLCanvasElement;
    static fillRect(canvas: HTMLCanvasElement, color: string, x: number, y: number, width: number, height: number): void;
    static getCanvasPixels(canvas: HTMLCanvasElement): Uint8ClampedArray;
    static getCanvasPixel(canvas: HTMLCanvasElement, x: number, y: number): number[];
    static canvasPixelToRGBA(pixelData: number[]): {
        r: number;
        g: number;
        b: number;
        a: number;
    };
    static pixelsAreTheSame(pixelsA: number[], pixelsB: number[]): boolean;
}
