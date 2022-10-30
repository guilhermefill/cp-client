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

const RoutesPage = () => {
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
						<MenuOptionGroup defaultValue="asc" title="Order" type="radio">
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
						<MenuOptionGroup defaultValue="asc" title="Type" type="radio">
							<MenuItemOption value="asc">Road</MenuItemOption>
							<MenuItemOption value="desc">Gravel</MenuItemOption>
							<MenuItemOption value="desc">Mountain</MenuItemOption>
							<MenuItemOption value="desc">Urban</MenuItemOption>
						</MenuOptionGroup>
						<MenuOptionGroup defaultValue="asc" title="Distance" type="radio">
							<MenuItemOption value="asc">Under 50km</MenuItemOption>
							<MenuItemOption value="desc">From 50 to 100km</MenuItemOption>
							<MenuItemOption value="desc">Over 100km</MenuItemOption>
						</MenuOptionGroup>
					</MenuList>
				</Menu>
			</HStack>
			<VStack spacing={10} my={10}>
				<RouteCard />
				<RouteCard />
				<RouteCard />
				<RouteCard />
				<RouteCard />
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
