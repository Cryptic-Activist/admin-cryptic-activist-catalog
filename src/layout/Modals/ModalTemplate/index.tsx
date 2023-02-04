import React, { FC, useCallback } from 'react';
import { FaSpinner } from 'react-icons/fa';

import {
	Background,
	Container,
	Heading,
	Loading,
	Message,
} from '@styles/components/Modals/ModalTemplate';

import { IModalTemplate } from 'types/components/Modals/ModalTemplate';

import { resetNavigationBar } from 'store/reducers/navigationBar';
// import { navigationBarSelector } from "oldStore/selectors";

import { useAppDispatch, useAppSelector } from 'store';

const ModalTemplate: FC<IModalTemplate> = ({
	children,
	heading,
	type,
	success,
	successMessage,
	allowClose,
}) => {
	const dispatch = useAppDispatch();
	const { drawers, modals, status, tooltips } = useAppSelector(
		(state) => state.navigationBar
	);

	const handleCloseAllModals = useCallback(() => {
		if (allowClose) {
			dispatch(resetNavigationBar('modals'));
			dispatch(resetNavigationBar('tooltips'));
			dispatch(resetNavigationBar('drawers'));
		}
	}, [dispatch, allowClose]);

	return (
		<>
			<Background onClick={handleCloseAllModals} />
			<Container id={type} privateKeys={modals.privateKeys}>
				<Heading>{heading}</Heading>
				{status === 'loading' ? (
					<Loading>
						<FaSpinner />
					</Loading>
				) : (
					<>
						{success && successMessage ? (
							<Message>{successMessage}</Message>
						) : (
							children
						)}
					</>
				)}
			</Container>
		</>
	);
};

export default ModalTemplate;
