import './App.css';

      import { Flex, Box,Heading,Spacer,ButtonGroup,Button,Breadcrumb,BreadcrumbItem,BreadcrumbLink} from '@chakra-ui/react'

function App() {
  return (

      <div className='App'>
    

      
       <Flex minWidth='max-content' alignItems='center' gap='2'>
  <Box p='2'>
    <Heading size='md'><Breadcrumb spacing='8px' >
    <BreadcrumbItem>
    <BreadcrumbLink href='#'>Logo</BreadcrumbLink>
  </BreadcrumbItem>
  <BreadcrumbItem>
    <BreadcrumbLink href='#'>Inspiration</BreadcrumbLink>
  </BreadcrumbItem>

  <BreadcrumbItem>
    <BreadcrumbLink href='#'>Find Work</BreadcrumbLink>
  </BreadcrumbItem>

  <BreadcrumbItem isCurrentPage>
    <BreadcrumbLink href='#'>Learn Design</BreadcrumbLink>
  </BreadcrumbItem>
  <BreadcrumbItem isCurrentPage>
    <BreadcrumbLink href='#'>Hire Designer</BreadcrumbLink>
  </BreadcrumbItem>
</Breadcrumb></Heading>


  </Box>
  <Spacer />
  <ButtonGroup gap='2'>
    <Button colorScheme='teal'>Sign Up</Button>
    <Button colorScheme='pink'>Log in</Button>
  </ButtonGroup>
</Flex> 

      </div>
 
  );
}

export default App;
