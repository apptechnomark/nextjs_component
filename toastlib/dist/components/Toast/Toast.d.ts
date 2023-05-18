import { FC } from 'react';
import { Toast as ToastType } from '../../types';
export interface IToast extends ToastType {
    onClose: (id: string) => void;
}
declare const Toast: FC<IToast>;
export default Toast;
