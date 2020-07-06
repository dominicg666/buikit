import React from 'react';
import { useModalDefault } from '@baaz/adapter/lib/ModalDefault/useModalDefault';
import Modal from '../Modal';
import './modal.scss';

const ModalDefault = props => {
    const { children } = props;

    const talonProps = useModalDefault({

    });
    const {
        isOpen,
    } = talonProps;
    const modalClass = isOpen ? `modal_root_open` : 'modal_root';

    return (
        <Modal>
            <aside className={modalClass}>
                {children}
            </aside>
        </Modal>
    );
};

export default ModalDefault;
