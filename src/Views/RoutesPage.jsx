import React from 'react';
import Navbar from '../Components/Navbar';
import RouteCard from '../Components/RouteCard';
import Footer from '../Components/Footer';
import {
	Button,
	Center,
	Heading,
	HStack,
	Menu,
	MenuButton,
	VStack,
	MenuList,
	MenuOptionGroup,
	MenuItemOption,
} from '@chakra-ui/react';
import postService from '../Api/postServices';

const RoutesPage = () => {
	const [posts, setPosts] = React.useState([]);
	// const [limit, setLimit] = React.useState(10);

	React.useEffect(() => {
		async function fetchPosts() {
			const allPosts = await postService.getAllPosts();
			setPosts(allPosts.data);
		}
		fetchPosts();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const postArray =
		posts.length > 1 ? (
			posts.map((post) => <RouteCard key={post._id} post={post} />)
		) : (
			<RouteCard isLoading />
		);

	console.log(posts);

	return (
		<div>
			<Navbar />
			<Heading mx={60} my={1} size="xl">
				Routes
			</Heading>
			<HStack mr={'215px'} justify="right" spacing={5}>
				<Menu closeOnSelect={false}>
					<MenuButton as={Button} colorScheme="blue">
						Sort
					</MenuButton>
					<MenuList minWidth="240px">
						<MenuOptionGroup title="Order" type="radio">
							<MenuItemOption value="asc">Ascending</MenuItemOption>
							<MenuItemOption value="desc">Descending</MenuItemOption>
						</MenuOptionGroup>
					</MenuList>
				</Menu>
				<Menu closeOnSelect={false}>
					<MenuButton as={Button} colorScheme="blue">
						Filter
					</MenuButton>
					<MenuList minWidth="240px">
						<MenuOptionGroup title="Type" type="radio">
							<MenuItemOption value="road">Road</MenuItemOption>
							<MenuItemOption value="gravel">Gravel</MenuItemOption>
							<MenuItemOption value="mount">Mountain</MenuItemOption>
							<MenuItemOption value="urban">Urban</MenuItemOption>
						</MenuOptionGroup>
						<MenuOptionGroup title="Distance" type="radio">
							<MenuItemOption value="under">Under 50km</MenuItemOption>
							<MenuItemOption value="mid">From 50 to 100km</MenuItemOption>
							<MenuItemOption value="over">Over 100km</MenuItemOption>
						</MenuOptionGroup>
					</MenuList>
				</Menu>
			</HStack>
			<VStack spacing={10} my={10}>
				{postArray}
			</VStack>
			<Center my={35}>
				<Button
					variant="outline"
					fontSize="xl"
					size="lg"
					borderRadius={25}
					colorScheme="teal"
					border="2px"
					p="25px"
				>
					Load More
				</Button>
			</Center>
			<Footer />
		</div>
	);
};

export default RoutesPage;
