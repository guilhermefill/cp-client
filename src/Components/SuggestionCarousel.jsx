import {
	Heading,
	HStack,
	IconButton,
	VStack,
	useMediaQuery,
} from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import React from 'react';
import ItemCard from './ItemCard';

const SuggestionCarousel = (props) => {
	const [isFullScreen] = useMediaQuery('(min-width: 780px)');
	const [isOverSized] = useMediaQuery('(min-width: 1600px)');
	const { sectionTitle } = props;
	return (
		<div>
			<VStack align={'left'} mx={20}>
				<Heading fontSize={{ base: 'lg', md: 'xl', lg: '2xl' }}>
					{sectionTitle}
				</Heading>
				{isFullScreen ? (
					<HStack spacing={10} paddingLeft={10}>
						<ItemCard />
						<ItemCard />
						<ItemCard />
						{isOverSized ? <ItemCard /> : <></>}
						<IconButton
							fontSize={{ base: 'lg', md: 'xl', lg: '2xl' }}
							variant="outline"
							icon={<ArrowForwardIcon />}
							size={'lg'}
							borderRadius={100}
						/>
					</HStack>
				) : (
					<VStack spacing={10} paddingLeft={10}>
						<ItemCard />
						<ItemCard />
						<ItemCard />

						<IconButton
							fontSize={{ base: 'lg', md: 'xl', lg: '2xl' }}
							variant="outline"
							icon={<ArrowForwardIcon />}
							size={'lg'}
							borderRadius={100}
						/>
					</VStack>
				)}
			</VStack>
		</div>
	);
};

export default SuggestionCarousel;
