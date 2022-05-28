import {Heading, Box, Text, Link} from '@chakra-ui/react'

export const Pricing = () => {
    return (
        <Box py={20} id='pricing' textAlign='center' maxW='650px' mx='auto'>
            <Heading fontSize='5xl' color='gray.800' textAlign='center' fontWeight='extrabold'>Pricing</Heading>
            <Text color='gray.800'>To request a demo of Red Herring&apos;s Enterprise features and prices, please email <br/> <Link bg='red.100' rounded='md' px={2} py={1} _hover={{bg: 'red.200'}} href='mailto:info@red-herring.com' transition='all .2s'>info@red-herring.com</Link>. Someone from our team will be in contact with you within two business days.</Text>
        </Box>
    )
}