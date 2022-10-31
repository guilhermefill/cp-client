import React from 'react';
import {
	Box,
	Center,
	Heading,
	Text,
	Stack,
	Avatar,
	useColorModeValue,
	Image,
	Skeleton,
	SkeletonText,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const ItemCard = (props) => {
	const { post, isLoading } = props;
	const postUrl = isLoading ? '/' : `/routes/details/${post._id}`;
	return (
		<div>
			<Center py={6}>
				<Link to={postUrl}>
					<Box
						maxW={'350px'}
						maxH={'450px'}
						w={'full'}
						bg={useColorModeValue('white', 'gray.900')}
						boxShadow={'2xl'}
						rounded={'md'}
						overflow={'hidden'}
						_hover={{ transform: 'scale(1.05)' }}
					>
						{isLoading ? (
							<Skeleton h={'200px'} w={'400px'} />
						) : (
							<Image
								h={'200px'}
								w={'450px'}
								bg={'gray.100'}
								mb={6}
								objectFit={'cover'}
								src={post.imageUrl}
							/>
						)}
						{/* </Box> */}
						<Stack m={6}>
							{isLoading ? (
								<Skeleton h={'20px'} w={'200px'} />
							) : (
								<Heading fontSize={'2xl'} fontFamily={'body'}>
									{post.title}
								</Heading>
							)}
							{isLoading ? (
								<SkeletonText noOfLines={4} width="300px" spacing="2" />
							) : (
								<Text color={'gray.500'} h="100px" overflow="hidden">
									{post.description}
								</Text>
							)}
						</Stack>
						<Stack m={6} direction={'row'} spacing={4} align={'center'}>
							{isLoading ? (
								<Skeleton h={'20px'} w={'20px'} />
							) : (
								<Avatar src={post.creator.avatar} alt={'Author'} />
							)}
							<Stack direction={'column'} spacing={0} fontSize={'sm'}>
								{isLoading ? (
									<SkeletonText noOfLines={1} width="250px" />
								) : (
									<Text fontWeight={600} fontSize="md">
										{post.creator.firstName} {post.creator.lastName}
									</Text>
								)}
							</Stack>
						</Stack>
					</Box>
				</Link>
			</Center>
		</div>
	);
};

export default ItemCard;
