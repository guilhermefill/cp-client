import React from 'react';
import {
	Box,
	Flex,
	Heading,
	useColorModeValue,
	Menu,
	MenuList,
	MenuItem,
	MenuButton,
	Spacer,
	HStack,
	Button,
	useMediaQuery,
	IconButton,
	useColorMode,
	Text,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { HamburgerIcon, SunIcon, MoonIcon } from '@chakra-ui/icons';

const Navbar = () => {
	const [isFullScreen] = useMediaQuery('(min-width: 780px)');
	const { colorMode, toggleColorMode } = useColorMode();
	return (
		<nav>
			<Flex
				bg={useColorModeValue('white', 'gray.800')}
				color={useColorModeValue('gray.600', 'white')}
				minH={'60px'}
				py={{ base: 2 }}
				px={{ base: 4 }}
				border={1}
				borderStyle={'solid'}
				borderColor={useColorModeValue('gray.200', 'gray.900')}
				align={'center'}
			>
				{isFullScreen ? (
					<>
						<HStack spacing="20" justify="space-between" ml="5px">
							<Box>
								<Heading as="h3" size="lg">
									<Link to="/">Cycling Playlists</Link>
								</Heading>
							</Box>
							<HStack spacing="10" justify="space-between">
								<Box>
									<Menu isLazy>
										<MenuButton fontWeight={'600'} fontSize={20}>
											Routes
										</MenuButton>
										<MenuList>
											<MenuItem>
												<Link to="/routes">By City</Link>
											</MenuItem>
											<MenuItem>
												<Link to="/routes">By Distance</Link>
											</MenuItem>
											<MenuItem>
												<Link to="/routes">By Type</Link>
											</MenuItem>
										</MenuList>
									</Menu>
								</Box>

								<Link>
									<Text fontWeight={'600'} fontSize={20}>
										<Link to="/moods">Moods</Link>
									</Text>
								</Link>
								<Menu isLazy>
									<MenuButton fontWeight={'600'} fontSize={20}>
										Create
									</MenuButton>
									<MenuList>
										<MenuItem>
											<Link>Playlist For My Route</Link>
										</MenuItem>
										<MenuItem>
											<Link>Route For My Playlist</Link>
										</MenuItem>
									</MenuList>
								</Menu>
								<Link>
									<Text fontWeight={'600'} fontSize={20}>
										<Link to="/routes/details">Surprise Me</Link>
									</Text>
								</Link>
							</HStack>
						</HStack>
						<Spacer />
						<HStack spacing="1" mr="20px">
							<Button htmlFor="toggle-mode" mb="0" onClick={toggleColorMode}>
								{colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
							</Button>
						</HStack>
						<HStack spacing="3">
							<Button>
								<Link>Sign in</Link>
							</Button>
							<Button>
								<Link>Sign up</Link>
							</Button>
						</HStack>
					</>
				) : (
					<>
						<HStack spacing="10">
							<Box>
								<Heading as="h3" size="lg">
									<Link path="/">Cycling Playlists</Link>
								</Heading>
							</Box>
							<Menu>
								<MenuButton
									as={IconButton}
									aria-label="Options"
									icon={<HamburgerIcon />}
									variant="outline"
								/>
								<MenuList>
									<MenuItem>
										<Link>Routes</Link>
									</MenuItem>
									<MenuItem>
										<Link>Moods</Link>
									</MenuItem>
									<MenuItem>
										<Link>Surprise Me</Link>
									</MenuItem>
									<MenuItem>
										<Link>Create</Link>
									</MenuItem>
									<MenuItem>
										<Link>Sign in</Link>
									</MenuItem>
									<MenuItem>
										<Link>Sign up</Link>
									</MenuItem>
								</MenuList>
							</Menu>
							<HStack spacing="1" mr="20px">
								<Button htmlFor="toggle-mode" mb="0" onClick={toggleColorMode}>
									{colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
								</Button>
							</HStack>
						</HStack>
					</>
				)}
			</Flex>
		</nav>
	);
};

export default Navbar;
