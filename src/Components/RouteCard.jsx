import {
	Avatar,
	Center,
	Heading,
	HStack,
	Image,
	Stack,
	Text,
	useColorModeValue,
	VStack,
	useMediaQuery,
	Skeleton,
	SkeletonText,
} from '@chakra-ui/react';
import React from 'react';

const RouteCard = (props) => {
	const [isFullScreen] = useMediaQuery('(min-width: 780px)');
	const { post, isLoading } = props;

	return (
		<div>
			<Center>
				<Stack
					boxShadow={'2xl'}
					rounded={'md'}
					overflow={'hidden'}
					_hover={{ transform: 'scale(1.05)' }}
					bg={useColorModeValue('white', 'gray.900')}
				>
					<Center>
						{isFullScreen ? (
							<HStack
								spacing={8}
								w={'full'}
								p={6}
								maxW={'1000px'}
								maxH={'300px'}
							>
								{isLoading ? (
									<Skeleton height="200px" width="300px"></Skeleton>
								) : (
									<Image
										src={post.imageUrl}
										maxW="300px"
										objectFit={'contain'}
									></Image>
								)}

								<VStack align="left" spacing={3}>
									{isLoading ? (
										<Skeleton height="30px" width="300px" />
									) : (
										<Heading size="lg" justify="left">
											{post.title} - {post.location}
										</Heading>
									)}
									{isLoading ? (
										<SkeletonText
											mt="4"
											noOfLines={3}
											width="600px"
											spacing="4"
										/>
									) : (
										<Text align={'justify'} overflow={'hidden'} maxH={100}>
											{post.description}
										</Text>
									)}

									<HStack>
										{isLoading ? (
											<Avatar size="xs" />
										) : (
											<Avatar size="sm" src={post.creator.avatar}></Avatar>
										)}

										<Stack direction={'column'} spacing={0} fontSize={'sm'}>
											{isLoading ? (
												<SkeletonText noOfLines={1} />
											) : (
												<Text fontWeight={600}>
													{post.creator.firstName} {post.creator.lastName}
												</Text>
											)}
											{isLoading ? (
												<SkeletonText noOfLines={1} />
											) : (
												<Text color={'gray.500'}>Created At</Text>
											)}
										</Stack>
									</HStack>
								</VStack>
							</HStack>
						) : (
							<VStack
								spacing={8}
								p={6}
								w={'full'}
								maxW={'800px'}
								maxH={'800px'}
							>
								{isLoading ? (
									<Skeleton>
										<Image src=""></Image>
									</Skeleton>
								) : (
									<Image
										src={post.imageUrl}
										maxW="300px"
										objectFit={'contain'}
									></Image>
								)}

								<VStack align="left" spacing={3}>
									{isLoading ? (
										<Skeleton size="10" />
									) : (
										<Heading size="lg" justify="left">
											{post.title} - {post.location}
										</Heading>
									)}
									{isLoading ? (
										<SkeletonText mt="4" noOfLines={2} spacing="4" />
									) : (
										<Text align={'justify'} overflow={'hidden'} maxH={100}>
											{post.description}
										</Text>
									)}

									<HStack>
										{isLoading ? (
											<Avatar size="xs" />
										) : (
											<Avatar size="sm" src={post.creator.avatar}></Avatar>
										)}

										<Stack direction={'column'} spacing={0} fontSize={'sm'}>
											{isLoading ? (
												<SkeletonText noOfLines={1} />
											) : (
												<Text fontWeight={600}>
													{post.creator.firstName} {post.creator.lastName}
												</Text>
											)}
											{isLoading ? (
												<SkeletonText noOfLines={1} />
											) : (
												<Text color={'gray.500'}>Created At</Text>
											)}
										</Stack>
									</HStack>
								</VStack>
							</VStack>
						)}
					</Center>
				</Stack>
			</Center>
		</div>
	);
};

export default RouteCard;
