import React from 'react';
import {
	Stack,
	Flex,
	Heading,
	Text,
	useBreakpointValue,
	Button,
	Image,
	useColorModeValue,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Cta = () => {
	return (
		<div>
			<Stack
				minH={'87vh'}
				direction={{ base: 'column', md: 'row' }}
				m={'10px'}
				mb={6}
			>
				<Flex p={8} flex={1} align={'center'} justify={'center'}>
					<Stack spacing={6} w={'full'} maxW={'xl'}>
						<Heading fontSize={{ base: '4xl', md: '5xl', lg: '6xl' }}>
							<Text
								as={'span'}
								position={'relative'}
								_after={{
									content: "''",
									width: 'full',
									height: useBreakpointValue({ base: '20%', md: '30%' }),
									position: 'absolute',
									bottom: 1,
									left: 0,
								}}
							>
								Here We Ride Bikes
							</Text>
							<br />{' '}
							<Text
								color={useColorModeValue('blue.600', 'blue.400')}
								as={'span'}
							>
								And Listen To Good Music.
							</Text>{' '}
						</Heading>
						<Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.400'}>
							Find the right tunes for your ride. With our community curated
							playlists you will find the perfect sound for every ride. Find
							your playlist based on your route or the mood you are going for.
						</Text>
						<Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
							<Button
								rounded={'full'}
								bg={'blue.400'}
								color={'white'}
								_hover={{
									bg: 'blue.500',
								}}
								fontSize={{ base: 'md', md: 'lg', lg: 'xl' }}
								p={'6'}
							>
								<Link to="/routes">Routes</Link>
							</Button>
							<Button
								rounded={'full'}
								fontSize={{ base: 'md', md: 'lg', lg: 'xl' }}
								p={'6'}
							>
								<Link to="/moods">Moods</Link>
							</Button>
						</Stack>
					</Stack>
				</Flex>
				<Flex flex={1}>
					<Image
						alt={'Login Image'}
						objectFit={'cover'}
						src={
							'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/1/music-shst-1517953146.jpg?crop=1xw:0.786xh;center,top&resize=980:*'
						}
						objectPosition={'75%'}
						filter={'brightness(85%)'}
					/>
				</Flex>
			</Stack>
		</div>
	);
};

export default Cta;
