"use client"

import React, { useState } from 'react';
import BaseLayout from "../../components/BaseLayout";
import { Modal, ModalTitle, ModalContent, ModalAction, Close, Button } from "next-ts-lib";
import "next-ts-lib/dist/index.css";

const ModalComponent: React.FC = () => {
    const [smOpen, setSmOpen] = useState(false);
    const [mdOpen, setMdOpen] = useState(false);
    const [lgOpen, setLgOpen] = useState(false);
    const [exlgOpen, setExLgOpen] = useState(false);

    const smOpenModal = () => {
        setSmOpen(true);
    };

    const smCloseModal = () => {
        setSmOpen(false);
    };

    const mdOpenModal = () => {
        setMdOpen(true);
    };

    const mdCloseModal = () => {
        setMdOpen(false);
    };
    const lgOpenModal = () => {
        setLgOpen(true);
    };

    const lgCloseModal = () => {
        setLgOpen(false);
    };

    const ExLgOpenModal = () => {
        setExLgOpen(true)
    }

    const ExLgCloseModal = () => {
        setExLgOpen(false);
    };


    return (
        <BaseLayout>
            <h5 className="m-5 pt-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Modal</h5>
            <div className="p-2 m-3 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <h2 className="m-7 text-xl tracking-tight text-gray-900 dark:text-white">Basic Small Variant</h2>
                <div className="pb-4 pl-8">
                    <button onClick={smOpenModal} className="bg-blue-500 text-white px-4 py-2 rounded">
                        Small Modal
                    </button>
                    {smOpen && (
                        <Modal isOpen={smOpen} onClose={smCloseModal} size='sm'>
                            <ModalTitle>
                                <div className='p-5'>
                                    Modal Title</div>
                                <div onClick={smCloseModal}>
                                    <div className='p-3'>
                                        <Close variant='medium' />
                                    </div>
                                </div>
                            </ModalTitle>
                            <ModalContent>
                                <div className='px-5 py-[10px] h-20'>
                                    This is Modal Content
                                </div>
                            </ModalContent>
                            <ModalAction>
                                <Button onClick={smCloseModal} className="!ml-[20px] rounded-md mx-2" variant="btn-outline-primary">
                                    Cancel
                                </Button>
                                <div className='px-5 py-5'>
                                    <Button className="rounded-md !border-2  " variant="btn-primary">
                                        Save Changes
                                    </Button>
                                </div>
                            </ModalAction>
                        </Modal>
                    )}
                </div>
            </div>

            <div className="p-2 m-3 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <h2 className="m-7 text-xl tracking-tight text-gray-900 dark:text-white">Basic Medium Variant</h2>
                <div className="pb-4 pl-8">
                    <button onClick={mdOpenModal} className="bg-blue-500 text-white px-4 py-2 rounded">
                        Medium Modal
                    </button>
                    {mdOpen && (
                        <Modal isOpen={mdOpen} onClose={mdCloseModal} size='md'>
                            <ModalTitle>
                                <div className='p-5'>
                                    Modal Title</div>
                                <div onClick={mdCloseModal}>
                                    <div className='p-3'>
                                        <Close variant='medium' />
                                    </div>
                                </div>
                            </ModalTitle>
                            <ModalContent>
                                <div className='px-5 py-[10px] h-20'>
                                    This is Modal Content
                                </div>
                            </ModalContent>
                            <ModalAction>
                                <Button onClick={mdCloseModal} className="!ml-[20px] rounded-md mx-2" variant="btn-outline-primary">
                                    Cancel
                                </Button>
                                <div className='px-5 py-5'>
                                    <Button className="rounded-md !border-2  " variant="btn-primary">
                                        Save Changes
                                    </Button>
                                </div>
                            </ModalAction>
                        </Modal>
                    )}
                </div>
            </div>

            <div className="p-2 m-3 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <h2 className="m-7 text-xl tracking-tight text-gray-900 dark:text-white">Basic Large Variant</h2>
                <div className="pb-4 pl-8">
                    <button onClick={lgOpenModal} className="bg-blue-500 text-white px-4 py-2 rounded">
                        Large Modal
                    </button>
                    {lgOpen && (
                        <Modal isOpen={lgOpen} onClose={lgCloseModal} size='lg'>
                            <ModalTitle>
                                <div className='p-5'>
                                    Modal Title</div>
                                <div onClick={lgCloseModal}>
                                    <div className='p-3'>
                                        <Close variant='large' />
                                    </div>
                                </div>
                            </ModalTitle>
                            <ModalContent>
                                <div className='px-5 py-[10px] h-20'>
                                    This is Modal Content
                                </div>
                            </ModalContent>
                            <ModalAction>
                                <Button onClick={lgCloseModal} className="!ml-[20px] rounded-lg mx-2" variant="btn-outline-primary">
                                    Cancel
                                </Button>
                                <div className='px-5 py-5'>
                                    <Button className="rounded-lg !border-2  " variant="btn-primary">
                                        Save Changes
                                    </Button>
                                </div>
                            </ModalAction>
                        </Modal>
                    )}
                </div>
            </div>

            <div className="p-2 m-3 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <h2 className="m-7 text-xl tracking-tight text-gray-900 dark:text-white">Basic Extra Large Variant</h2>
                <div className="pb-4 pl-8">
                    <button onClick={ExLgOpenModal} className="bg-blue-500 text-white px-4 py-2 rounded">
                       Extra Large Modal
                    </button>
                    {exlgOpen && (
                        <Modal isOpen={exlgOpen} onClose={ExLgCloseModal} size='extra-lg'>
                            <ModalTitle>
                                <div className='p-5'>
                                    Modal Title</div>
                                <div onClick={ExLgCloseModal}>
                                    <div className='p-3'>
                                        <Close variant='large' />
                                    </div>
                                </div>
                            </ModalTitle>
                            <ModalContent>
                                <div className='px-5 py-[10px] h-20'>
                                    This is Modal Content
                                </div>
                            </ModalContent>
                            <ModalAction>
                                <Button onClick={ExLgCloseModal} className="!ml-[20px] rounded-lg mx-2" variant="btn-outline-primary">
                                    Cancel
                                </Button>
                                <div className='px-5 py-5'>
                                    <Button className="rounded-lg !border-2  " variant="btn-primary">
                                        Save Changes
                                    </Button>
                                </div>
                            </ModalAction>
                        </Modal>
                    )}
                </div>
            </div>
        </BaseLayout>
    );
};

export default ModalComponent;