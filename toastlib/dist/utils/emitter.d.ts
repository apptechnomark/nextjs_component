import { Events } from '../types';
export declare type Handler<T = any> = (event: T) => void;
interface Emitter {
    on<T = any>(event: Events, handler: Handler<T>): void;
    emit<T = any>(event: Events, args?: T): void;
    off(): void;
}
export declare const emitter: Emitter;
export {};
