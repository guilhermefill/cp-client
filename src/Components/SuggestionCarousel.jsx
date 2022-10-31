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
import postService from '../Api/postServices';

const SuggestionCarousel = (props) => {
	const [isFullScreen] = useMediaQuery('(min-width: 780px)');
	const [isOverSized] = useMediaQuery('(min-width: 1600px)');
	const { sectionTitle } = props;
	const limit = isOverSized ? 4 : 3;
	const [offset, setOffset] = React.useState(0);
	const [posts, setPosts] = React.useState([]);

	React.useEffect(() => {
		async function fetchPosts() {
			const carouselPosts = await postService.getCarousel(limit, offset);
			setPosts(carouselPosts.data);
		}
		fetchPosts();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [offset]);

	const handleNext = () => {
		if (offset < 5) {
			setOffset(offset + 1);
		} else {
			setOffset(0);
		}
	};

	const postArray =
		posts.length > 1
			? posts.map((post) => <ItemCard key={post._id} post={post} />)
			: [...Array(limit)].map((post, index) => (
					<ItemCard key={index} isLoading />
			  ));

	return (
		<div>
			<VStack align={'left'} mx={20}>
				<Heading fontSize={{ base: 'lg', md: 'xl', lg: '2xl' }}>
					{sectionTitle}
				</Heading>
				{isFullScreen ? (
					<HStack spacing={10} paddingLeft={10} justify={'space-between'}>
						{postArray}
						<IconButton
							fontSize={{ base: 'lg', md: 'xl', lg: '2xl' }}
							variant="outline"
							icon={<ArrowForwardIcon />}
							size={'lg'}
							borderRadius={100}
							onClick={handleNext}
						/>
					</HStack>
				) : (
					<VStack spacing={10} paddingLeft={10}>
						{postArray}

						<IconButton
							fontSize={{ base: 'lg', md: 'xl', lg: '2xl' }}
							variant="outline"
							icon={<ArrowForwardIcon />}
							size={'lg'}
							borderRadius={100}
							onClick={handleNext}
						/>
					</VStack>
				)}
			</VStack>
		</div>
	);
};

export default SuggestionCarousel;
