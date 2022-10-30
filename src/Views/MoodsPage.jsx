import {
	SimpleGrid,
	GridItem,
	Text,
	Stack,
	Heading,
	useColorModeValue,
} from '@chakra-ui/react';
import React from 'react';
import Navbar from '../Components/Navbar';

const MOODS = [
	'Happy',
	'Gloomy',
	'Chill',
	'Focus',
	'Trending',
	'Nature',
	'Hype',
	'Wellness',
	'Life Sucks',
	'Cozy',
	'Training',
	'Need For Speed',
];

const MoodsPage = () => {
	const color = useColorModeValue(
		'linear(to-br, white, gray.200)',
		'linear(to-br, gray.800, gray.700)'
	);
	const moodList = MOODS.map((mood) => (
		<GridItem
			w="200px"
			h="200px"
			border="2px"
			borderColor="gray.200"
			borderRadius={10}
			key={mood}
			p={5}
			bgGradient={color}
			_hover={{ transform: 'scale(1.05)' }}
			boxShadow={'2xl'}
		>
			<Text fontSize="xl" fontWeight={600}>
				{mood}
			</Text>
		</GridItem>
	));

	return (
		<div>
			<Navbar />
			<Heading mx={60} my={10} size="xl">
				Moods
			</Heading>
			<Stack m={50}>
				<SimpleGrid minChildWidth="200px" gap={6} justify="center">
					{moodList}
				</SimpleGrid>
			</Stack>
		</div>
	);
};

export default MoodsPage;
