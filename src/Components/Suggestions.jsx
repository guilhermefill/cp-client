import { VStack } from '@chakra-ui/react';
import React from 'react';
import SuggestionCarousel from './SuggestionCarousel';

const Suggestions = () => {
	return (
		<div>
			<VStack spacing={10} align={'left'}>
				<SuggestionCarousel sectionTitle="Most Listened" />
				<SuggestionCarousel sectionTitle="Recommended by the Community" />
				<SuggestionCarousel sectionTitle="Hot & Wild" />
			</VStack>
		</div>
	);
};

export default Suggestions;
