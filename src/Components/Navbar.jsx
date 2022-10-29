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
						<HStack spacing="100" justify="space-between" ml="5px">
							<Box>
								<Heading as="h3" size="lg">
									<Link>Cycling Playlists</Link>
								</Heading>
							</Box>
							<HStack spacing="10" justify="space-between">
								<Box>
									<Menu isLazy>
										<MenuButton>Routes</MenuButton>
										<MenuList>
											<MenuItem>
												<Link>By City</Link>
											</MenuItem>
											<MenuItem>
												<Link>By Distance</Link>
											</MenuItem>
											<MenuItem>
												<Link>By Type</Link>
											</MenuItem>
										</MenuList>
									</Menu>
								</Box>

								<Link>Moods</Link>
								<Link>Surprise Me</Link>
								<Link>Import Your Route</Link>
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
										<Link>Import Your Route</Link>
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
