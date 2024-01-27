import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { deleteUserPending } from '../../redux/user/user.slide';
import { Spinner } from 'react-bootstrap';
import { useEffect } from 'react';

const UserDeleteModal = (props: any) => {
    const { dataUser, isOpenDeleteModal, setIsOpenDeleteModal } = props;

    const dispatch = useAppDispatch()
    const isDeleting = useAppSelector(state => state.user.isDeleting)
    const isDeleteSuccess = useAppSelector(state => state.user.isDeleteSuccess)

    useEffect(() => {
        if (isDeleteSuccess) {
            setIsOpenDeleteModal(false)
        }
    }, [isDeleteSuccess])

    const handleSubmit = () => {
        dispatch(deleteUserPending({ id: dataUser?.id }))
        console.log({ id: dataUser?.id });
    }

    return (
        <Modal
            show={isOpenDeleteModal}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            backdrop={false}
            onHide={() => setIsOpenDeleteModal(false)}
        >
            <Modal.Header closeButton>
                <Modal.Title>
                    Delete A User
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                Delete the user: {dataUser?.email ?? ""}
            </Modal.Body>
            <Modal.Footer>
                {isDeleting === true ?
                    <Button variant="primary" disabled>
                        <Spinner
                            as="span"
                            animation="border"
                            size="sm"
                            role="status"
                            aria-hidden="true"
                        />
                        &nbsp;Saving ...
                    </Button>
                    :
                    <>
                        <Button
                            variant='warning'
                            onClick={() => setIsOpenDeleteModal(false)} className='mr-2'>Cancel</Button>
                        <Button onClick={() => handleSubmit()}>Confirm</Button>
                    </>
                }
            </Modal.Footer>
        </Modal>
    )
}

export default UserDeleteModal;